export function saveSearchKeywordToCookie(keyword: string) {
  document.cookie = `searchKeyword=${keyword}; path=/;`;
}

export function saveRefreshTokenToCookie(token: string) {
  document.cookie = `til_refresh=${token}`;
}

export function saveUserToCookie(username: string) {
  document.cookie = `til_user=${username}`;
}

export function getSearchKeywordFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)searchKeyword\s*=([^;]*).*$)|^.*$/,
    '$1'
  );
}

export function getRefreshFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_refresh\s*=([^;]*).*$)|^.*$/,
    '$1'
  );
}

export function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_user\s*=([^;]*).*$)|^.*$/,
    '$1'
  );
}

export function deleteCookie(value: string) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
