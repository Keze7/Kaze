
#作者Kaze   软件wink   版本1.5.00

[rewrite_local]
^https?:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json\? url script-response-body https://raw.githubusercontent.com/Keze7/Kaze/main/Qx/WINK.JS
[MITM]
hostname = api-sub.meitu.com

*******************************/


let obj = JSON.parse($response.body);
   
    obj = {
  "code" : 0,
  "message" : "success",
  "data" : {
    "account_id" : "1932334474",
    "is_vip" : true,
    "limit_type" : 0,
    "have_valid_contract" : false,
    "use_vip" : true,
    "show_renew_flag" : false,
    "in_trial_period" : false,
    "account_type" : 1
  },
  "request_id" : "acf4cef7953e4a358b1ab838642e2050",
  "success" : true,
  "error_code" : "00000"
}


$done({body : JSON.stringify(obj)});
