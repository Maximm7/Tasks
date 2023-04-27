function isValidUrl(url) {
    const regex = /^(http:\/\/|https:\/\/)([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?(.php|.html)$/i
    return regex.test(url)
}

console.log(isValidUrl("http://site.ru/index.php"))
console.log(isValidUrl("http://site.com"))
console.log(isValidUrl("site.it/index.php"))