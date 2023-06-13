[rewrite_local]
^http:\/\/dcxy-customer-app\.dcrym\.com\/account

^http:\/\/dcxy-customer-app\.dcrym\.com\/customerAccount
[mitm]
hostname = dcxy-customer-app.dcrym.com

/*
‼️规则完全免费，仅供学习交流，🈲️商业用途
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/current';
if (url.indexOf(vip) != -1) {

    obj.data.money = 100;

    body = JSON.stringify(obj);
}
$done({body});

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/queryAccount';
if (url.indexOf(vip) != -1) {
    obj.data.money = 100;
    body = JSON.stringify(obj);
}
$done({body});

