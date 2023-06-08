[rewrite_local]

^http[s]?:\/\/gdongapi\.wo-ish\.com\/MsgBoard url script-response-body https://github.com/Keze7/Kaze/raw/main/Qx/GD.js 

[mitm]

hostname = gdongapi.wo-ish.com

/*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/

var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const Kaze = '/ShupUpV5';

if (url.indexOf(Kaze) != -1) {

    obj.data.isPayVip = 1;

obj.data.vipGrowthName = "V6";

    body = JSON.stringify(obj);

}

$done({body});
