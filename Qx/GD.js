[rewrite_local]

^http[s]?:\/\/gdongapi\.wo-ish\.com\/user script-response-body https://github.com/Keze7/Kaze/raw/main/Qx/GD.js

[mitm]

hostname = gdongapi.wo-ish.com

/*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/

var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const Kaze = '/getUInfo';

if (url.indexOf(Kaze) != -1) {

    obj.data.validdate= "2099-06-10";

obj.data. = "V6";

    body = JSON.stringify(obj);

}

$done({body});

