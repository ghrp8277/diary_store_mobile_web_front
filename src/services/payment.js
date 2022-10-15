/**
 * Define the version of the Google Pay API referenced when creating your
 * configuration
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#PaymentDataRequest|apiVersion in PaymentDataRequest}
 */
// 1단계 google pay api 버전 정의
export const baseRequest = {
  // 주요 API 버전. 값은 2이 사양에 대한 것입니다.
  apiVersion: 2,
  // 마이너 API 버전. 값은 0이 사양에 대한 것입니다.
  apiVersionMinor: 0,
};

/**
 * Card networks supported by your site and your gateway
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
 * @todo confirm card networks supported by your site and gateway
 */
// 3단계 지원되는 결제 카드 네트워크 정의
export const allowedCardNetworks = [
  'AMEX',
  'DISCOVER',
  'INTERAC',
  'JCB',
  'MASTERCARD',
  'VISA',
];

/**
 * Card authentication methods supported by your site and your gateway
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
 * @todo confirm your processor supports Android device tokens for your
 * supported card networks
 */
// 3D Secure 암호, 선택적 전자 상거래 표시기(ECI)
export const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];

/**
 * Identify your gateway and your site's gateway merchant identifier
 *
 * The Google Pay API response will return an encrypted payment method capable
 * of being charged by a supported gateway after payer authorization
 *
 * @todo check with your gateway on the parameters to pass
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#gateway|PaymentMethodTokenizationSpecification}
 */
export const tokenizationSpecification = {
  // 지원되는 결제 수단의 짧은 식별자입니다. CARD이 매개변수에 대해 지원되는 유일한 값입니다.
  type: 'PAYMENT_GATEWAY',
  // 제공된 결제 수단 유형을 구성하는 데 필요한 매개변수입니다.
  parameters: {
    gateway: 'example',
    gatewayMerchantId: 'exampleGatewayMerchantId',
  },
};

/**
 * Describe your site's support for the CARD payment method and its required
 * fields
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
 */
// 4단계 사용할 수 있는 결제 수단 설명
// 1 - 지원되는 인증 수단과 지원되는 카드 네트워크를 결합하여 사이트에서 지원하는 CARD 결제 수단을 설명합니다.
const baseCardPaymentMethod = {
  type: 'CARD',
  parameters: {
    allowedAuthMethods: allowedCardAuthMethods,
    allowedCardNetworks: allowedCardNetworks,
  },
};

/**
 * Describe your site's support for the CARD payment method including optional
 * fields
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#CardParameters|CardParameters}
 */
// 2 - 기본 카드 결제 수단 객체를 확장하여 애플리케이션에 반환될 정보를 설명합니다. 토큰화된 결제 데이터에 대한 설명을 포함합니다.
const cardPaymentMethod = Object.assign({}, baseCardPaymentMethod, {
  tokenizationSpecification: tokenizationSpecification,
});

/**
 * An initialized google.payments.api.PaymentsClient object or null if not yet set
 *
 * @see {@link getGooglePaymentsClient}
 */
let paymentsClient = null;

/**
 * Configure your site's support for payment methods supported by the Google Pay
 * API.
 *
 * Each member of allowedPaymentMethods should contain only the required fields,
 * allowing reuse of this base request when determining a viewer's ability
 * to pay and later requesting a supported payment method
 *
 * @returns {object} Google Pay API version, payment methods supported by the site
 */
function getGoogleIsReadyToPayRequest() {
  return Object.assign({}, baseRequest, {
    allowedPaymentMethods: [baseCardPaymentMethod],
  });
}

/**
 * Configure support for the Google Pay API
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#PaymentDataRequest|PaymentDataRequest}
 * @returns {object} PaymentDataRequest fields
 */
function getGooglePaymentDataRequest() {
  const paymentDataRequest = Object.assign({}, baseRequest);
  paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];
  paymentDataRequest.transactionInfo = getGoogleTransactionInfo();
  paymentDataRequest.merchantInfo = {
    // @todo a merchant ID is available for a production environment after approval by Google
    // See {@link https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist|Integration checklist}
    // Google 판매자 ID
    // merchantId: '923398754258',
    // merchantName: '이제현',
    // merchantId: '12345678901234567890',
    merchantName: 'Example Merchant',
  };

  paymentDataRequest.callbackIntents = ['PAYMENT_AUTHORIZATION'];

  return paymentDataRequest;
}

/**
 * Return an active PaymentsClient or initialize
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/client#PaymentsClient|PaymentsClient constructor}
 * @returns {google.payments.api.PaymentsClient} Google Pay API client
 */
function getGooglePaymentsClient() {
  if (paymentsClient === null) {
    paymentsClient = new google.payments.api.PaymentsClient({
      environment: 'TEST',
      paymentDataCallbacks: {
        onPaymentAuthorized: onPaymentAuthorized,
      },
    });
  }
  return paymentsClient;
}

/**
 * Handles authorize payments callback intents.
 *
 * @param {object} paymentData response from Google Pay API after a payer approves payment through user gesture.
 * @see {@link https://developers.google.com/pay/api/web/reference/response-objects#PaymentData object reference}
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/response-objects#PaymentAuthorizationResult}
 * @returns Promise<{object}> Promise of PaymentAuthorizationResult object to acknowledge the payment authorization status.
 */
function onPaymentAuthorized(paymentData) {
  return new Promise(function (resolve, reject) {
    // handle the response
    processPayment(paymentData)
      .then(function () {
        resolve({ transactionState: 'SUCCESS' });
      })
      .catch(function () {
        resolve({
          transactionState: 'ERROR',
          error: {
            intent: 'PAYMENT_AUTHORIZATION',
            message: 'Insufficient funds, try again. Next attempt should work.',
            reason: 'PAYMENT_DATA_INVALID',
          },
        });
      });
  });
}

/**
 * Initialize Google PaymentsClient after Google-hosted JavaScript has loaded
 *
 * Display a Google Pay payment button after confirmation of the viewer's
 * ability to pay.
 */
export function onGooglePayLoaded(googlePay) {
  const paymentsClient = getGooglePaymentsClient();
  paymentsClient
    .isReadyToPay(getGoogleIsReadyToPayRequest())
    .then(function (response) {
      if (response.result) {
        addGooglePayButton(googlePay);
      }
    })
    .catch(function (err) {
      // show error in developer console for debugging
      console.error(err);
    });
}

/**
 * Add a Google Pay purchase button alongside an existing checkout button
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#ButtonOptions|Button options}
 * @see {@link https://developers.google.com/pay/api/web/guides/brand-guidelines|Google Pay brand guidelines}
 */
export function addGooglePayButton(googlePay) {
  const paymentsClient = getGooglePaymentsClient();
  const button = paymentsClient.createButton({
    onClick: onGooglePaymentButtonClicked,
    // allowedPaymentMethods: [baseCardPaymentMethod],
    buttonSizeMode: 'fill',
    buttonColor: 'default',
    buttonType: 'long',
    buttonLocale: 'ko',
  });
  googlePay.appendChild(button);
}

/**
 * Provide Google Pay API with a payment amount, currency, and amount status
 *
 * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#TransactionInfo|TransactionInfo}
 * @returns {object} transaction info, suitable for use as transactionInfo property of PaymentDataRequest
 */
export function getGoogleTransactionInfo() {
  return {
    displayItems: [
      {
        label: '상품 총 금액',
        type: 'SUBTOTAL',
        price: '11000',
      },
      {
        label: '세금',
        type: 'TAX',
        price: '1000',
      },
    ],
    countryCode: 'KR',
    currencyCode: 'KRW',
    // FINAL: 총 가격은 구매자에게 제시되는 금액에서 변경되지 않습니다.
    totalPriceStatus: 'FINAL',
    // 문자열 형식은 정규식 형식을 따라야 합니다. ^[0-9]+(\.[0-9][0-9])?$
    totalPrice: '12000',
    // 표시 항목 내 총 가격에 대한 사용자 정의 레이블입니다.
    totalPriceLabel: '총 가격',
  };
}

/**
 * Show Google Pay payment sheet when Google Pay payment button is clicked
 */
export function onGooglePaymentButtonClicked() {
  const paymentDataRequest = getGooglePaymentDataRequest();
  paymentDataRequest.transactionInfo = getGoogleTransactionInfo();

  const paymentsClient = getGooglePaymentsClient();
  paymentsClient.loadPaymentData(paymentDataRequest);
}

/**
 * Process payment data returned by the Google Pay API
 *
 * @param {object} paymentData response from Google Pay API after user approves payment
 * @see {@link https://developers.google.com/pay/api/web/reference/response-objects#PaymentData|PaymentData object reference}
 */

let attempts = 0;

export function processPayment(paymentData) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(paymentData);
      // @todo pass payment token to your gateway to process payment
      const paymentToken = paymentData.paymentMethodData.tokenizationData.token;

      if (attempts++ % 2 == 0) {
        reject(new Error('Every other attempt fails, next one should succeed'));
      } else {
        resolve({});
      }
    }, 500);
  });
}
