function setCookie(name, value, expiryDate) {
    let expires = "";
    if (expiryDate) {
        expires = ";expires=" + expiryDate.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires;
}

function getCookie(name) {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

function getAllCookies() {
    let cookies = document.cookie.split(";");
    let cookiesList = [];
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        let cookieParts = cookie.split("=");
        cookiesList.push([cookieParts[0], cookieParts[1]]);
    }
    return cookiesList;
}

function hasCookie(name) {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return true;
        }
    }
    return false;
}
