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
^https:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/vip\/getVipStatus\? url script-response-body https://raw.githubusercontent.com/Keze7/Kaze/main/Qx/ky.js
[MITM]
hostname = api.kmovie.gifshow.com
*******************************/

let obj = JSON.parse($response.body);
   
    obj = {
  "result" : 1,
  "validThrough" : 20231223,
  "uid" : 695806143947746728,
  "host" : "public-bjxy-kcs-node889.idcyz.hb1.kwaidc.com",
  "subscription" : true,
  "vipValid" : true
}

$done({body : JSON.stringify(obj)});
