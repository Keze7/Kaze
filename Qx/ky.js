/*******************************
应用名称：快影
脚本功能：解锁会员
应用版本：5.99.01140
应用下载：App Store
脚本作者：Kaze
更新时间：2023-06-28
脚本发布：暂无
使用声明：‼️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/app\/template\/draft url script-response-body https://raw.githubusercontent.com/Keze7/Kaze/main/Qx/ky.js
[MITM]
hostname = api.kmovie.gifshow.com
*******************************/

let obj = JSON.parse($response.body);
   
    obj = {
  "result" : 1,
  "data" : {
    "vipStatus" : true,
    "vipTimes" : 300,
    "amount" : 100,
    "firstPurchase" : true,
    "vipRemainTimes" : 100,
    "productId" : "kuaiyingTemplateDraftPriceLevelOne"
  },
  "host" : "public-bjxy-kcs-node302.idcyz.hb1.kwaidc.com"
}

$done({body : JSON.stringify(obj)});
