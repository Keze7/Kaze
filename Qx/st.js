[rewrite_local]

^http[s]:\/\/awvp\.aoscdn\.com\/base\/vip\/v2\/vips$ url script-response-body https://github.com/Keze7/Kaze/raw/main/Qx/st.js

[mitm]

hostname = *.aoscdn.*

let bodyJson = JSON.parse($response.body);

bodyJson.data = {

{

  "status" : 200,

  "message" : "success",

  "data" : {

    "group_expired_at" : 99999,

    "is_tried" : 1,

    "max_devices" : 1,

    "period_type" : "trial",

    "candy_expired_at" : 1,

   pending" : 1,

    "remained_seconds" : 1,

    "limit" : 1,

    "expired_at" : 1,

    "candy" : 1,

    "license_type" : "vip",

    "quota" : 1,

    "status" : 1,

    "coin" : 1

};

$done({body: JSON.stringify(bodyJson)});
