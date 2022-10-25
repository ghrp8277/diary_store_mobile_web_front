export function saveSearchKeywordToCookie(keyword: string) {
  document.cookie = `searchKeyword=${keyword}; path=/;`;
}

export function saveIsSaveKeywordToCookie(isSaveKeyword: boolean) {
  document.cookie = `isSaveKeyword=${isSaveKeyword}; path=/;`;
}

export function saveUserToCookie(username: string) {
  document.cookie = `til_user=${username}; path=/;`;
}

export function savePaymentToCookie(payment_info: string) {
  document.cookie = `payment_info=${payment_info}; path=/;`;
}

export function getSearchKeywordFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)searchKeyword\s*=([^;]*).*$)|^.*$/,
    '$1'
  );
}

export function getIsSaveKeywordFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)isSaveKeyword\s*=([^;]*).*$)|^.*$/,
    '$1'
  );
}

export function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_user\s*=([^;]*).*$)|^.*$/,
    '$1'
  );
}

export function getPaymentFromCookie(): {
  tid: string;
  partner_order_id: string;
  quantity: number;
  total_amount: number;
} {
  const cookie = document.cookie.replace(
    /(?:(?:^|.*;\s*)payment_info\s*=([^;]*).*$)|^.*$/,
    '$1'
  );

  return JSON.parse(cookie);
}

export function deleteCookie(value: string) {
  document.cookie = `${value}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
