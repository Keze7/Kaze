#作者：Kaze
#软件wink
#版本1.5.00


[rewrite_local]
^https?:\/\/api-sub\.meitu\.com\/v2\/user url script-response-body https://raw.githubusercontent.com/Keze7/Kaze/main/Qx/win.js

[mitm]
hostname = api-sub.meitu.com

/*
‼️规则完全免费，仅供学习交流，🈲️商业用途
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip_info_by_group.json';
if (url.indexOf(vip) != -1) {
    obj.data.is_vip = true;
    obj.data.use_vip = true;


    body = JSON.stringify(obj);
}
$done({body});
