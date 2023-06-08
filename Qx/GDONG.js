[rewrite_local]

^http[s]?:\/\/gdongapi\.wo-ish.com\/MsgBoard\/ShupUpV5 url script-response-body https://github.com/Keze7/Kaze/raw/main/Qx/GDONG.js

[mitm]

gdongapi.wo-ish.com

let obj = JSON.parse($response.body);

    obj ={

  "errcode" : 0,

  "data" : {

    "endTime" : "2029-06-10",

    "isPayVip" : 1,

    "isStop" : 0,

    "vipGrowthName" : "V1",

    "isVip" : 1

  },

  "errmsg" : "请求成功"

}

$done({body : JSON.stringify(obj)});
