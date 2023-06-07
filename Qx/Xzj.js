^https:\/\/gw\.aoscdn\.com\/base\/vip\/client url script-response-body https://raw.githubusercontent.com/Keze7/Kaze/main/Qx/Xzj.js

[mitm]

hostname = gw.aoscdn.com

/*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/

var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const Kaze = '/authorizations';

if (url.indexOf(Kaze) != -1) {

    obj.data.candy_expired_at = 99999999;

obj.data.candy = 8888;

obj.data.device_id = 123456789;

obj.data.vip_special = 1;

obj.data.limit = 1;

obj.data.remain_days = 356;

obj.data.expire_time = "2099-12-31 23:59:59"

obj.data.is_lifetime = 1;

obj.data.expired_at = 0;

obj.data.has_buy_extend = 1;

obj.data.allowed_device_count = 3;

obj.data.has_present = 1;

obj.data.durations = 10;

obj.data.is_activated = 1;

obj.data.is_tried = 1;

    body = JSON.stringify(obj);

}

$done({body});
