
export const saveJwtTokenInCookies = (token, options = {}) => {
    const { expires = 7, path = '/', secure = false, sameSite = 'Lax' } = options;
    const date = new Date();
    date.setDate(date.getDate() + expires);
    document.cookie = `jwt=${token}; expires=${date.toUTCString()}; path=${path}; ${secure ? 'secure;' : ''} sameSite=${sameSite}`;
}

export const retrieveJwtTokenFromCookies = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'jwt') {
            return value;
        }
    }
    return null;
}

export const deleteJwtTokenInCookies = () => {
    document.cookie = `jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
