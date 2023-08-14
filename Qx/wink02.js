/*******************************
应用名称：wink
脚本功能：解锁会员
应用版本：1.5.30
应用下载：App Store
脚本作者：Kaze
更新时间：2023-06-28
脚本发布：暂无
使用声明：‼️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api-sub\.meitu\.com\/v2\/user url script-response-body https://github.com/Keze7/Kaze/new/main/Qx/wink02.js
[mitm] 
hostname = api-sub.meitu.com
group.json
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip_info_by_group';
if (url.indexOf(vip) != -1) {
        obj.data.is_vip = true;
    obj.data.use_vip = true;
    obj.data.have_valid_contract = true;
    obj.data.valid_time = 1883610549000;
    obj.data.invalid_time = 1883610549000;
    obj.data.account_type = 1;
    obj.data.current_order_invalid_time = 1883610549000;
    obj.data.trial_period_invalid_time = 1883610549000;

    body = JSON.stringify(obj);
}
$done({body});
}
