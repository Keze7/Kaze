[rewrite_local]

^http[s]?:\/\/awvp\.aoscdn\.com\/base\/vip\/v2  url script-response-body https://github.com/Keze7/Kaze/raw/main/QX/jj.js 

[mitm]

hostname = gw.aoscdn.com

 /*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/

var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const vip = '/vips';

if (url.indexOf(vip) != -1) {

    obj.data.candy = 1;

obj.data.candy_expired_at = 9999999;

obj.data.pending = 1;

obj.data. status = 1;

obj.data.quota = 1;

obj.data. remained_seconds = 1;

obj.data.is_tried = 1;

    body = JSON.stringify(obj);

}

$done({body});
