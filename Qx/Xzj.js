/**
[rewrite_local]

^https:\/\/gw\.aoscdn\.com\/base\/vip\/client url script-response-body https://github.com/Keze7/Kaze/raw/main/Qx/Xzj.js

[mitm]

hostname = gw.aoscdn.com

/*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/

let bodyJson = JSON.parse($response.body);
bodyJson.data = {
  "candy": 8888,
  "candy_expired_at": 9999999999,
  "pending": 0,
  "license_type": "free",
  "period_type": "trial",
  "expired_at": 0,
  "coin": 0,
  "limit": 1,
  "group_expired_at": 0,
  "is_tried": 1,
  "is_activated": 1,
  "allowed_device_count": 3,
  "durations": 10,
  "device_id": 123456789,
  "product_id": 428,
  "is_lifetime": 1,
  "has_present": 1,
  "vip_special": 1,
  "begin_activated_time": 1680624579,
  "remain_days": 365,
  "will_expire": 0,
  "has_buy_extend": 1,
  "expire_time": "2099-12-31 23:59:59"
};
$done({body: JSON.stringify(bodyJson)});
