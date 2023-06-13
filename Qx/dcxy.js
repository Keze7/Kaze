[rewrite_local]
^http:\/\/dcxy-customer-app\.dcrym\.com\/account url script-response-body https://github.com/Keze7/Kaze/raw/main/Qx/dcxy.js
[mitm]
hostname = dcxy-customer-app.dcrym.com


/*
‼️规则完全免费，仅供学习交流，🈲️商业用途
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const Kaze = '/current';
if (url.indexOf(Kaze) != -1) {

    obj.data.money = 100;

    body = JSON.stringify(obj);
}
$done({body});

