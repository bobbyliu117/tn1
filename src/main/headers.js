const xray = require('x-ray')();
const makeDriver = require('request-x-ray');
const options = {
    method: 'GET',
    jar: true,
    headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36',
        // 'accept': '*/*',
        // 'accept-encoding': 'gzip, deflate, br',
        // 'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
        'cache-control': 'no-cache',
        // cookie: DSID=AAO-7r4X7QW-vCQFmZeJ_UcXjRnv7ajza9FUlex70Nal-vE5Pi5qyX97CgwCulSMRZVNVc0lXewyndemSc4lqokGCHO2RXz6eMJEhvqRb_5XWPvYe-UUdaA; IDE=AHWqTUl_Gh6tSoAUlEUq6DcAgNF5fJH2O4GGM-IQB76QfVwjR-wvf9sVB9L3TS0y
        'pragma': 'no-cache',
        // 'referer': 'https://tpc.googlesyndication.com/safeframe/1-0-37/html/container.html',
        // 'sec-fetch-dest': 'empty',
        // 'sec-fetch-mode': 'no-cors',
        // 'sec-fetch-site': 'cross-site',
        'x-client-data': 'CJe2yQEIpbbJAQjEtskBCKmdygEI0K/KAQi8sMoBCIa1ygEIl7XKAQjttcoBCI66ygEI7bvKARiQpsoBGLy6ygE='+Math.floor(Math.random()*99)
    }
}
xray.driver(makeDriver(options));

module.exports = xray;