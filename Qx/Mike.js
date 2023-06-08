/******************************

脚本功能：Wink 解锁永久会员

应用版本：1.3.81

应用下载：http://t.cn/A6pbyxv0

脚本作者：Kaze

更新时间：2023-06-08

使用声明：‼️脚本仅供学习交流, 🈲️商业用途

*******************************

[rewrite_local]

^http[s]?:\/\/api-sub\.meitu\.com\/v2\/user url script-response-body https://raw.githubusercontent.com/Keze7/Kaze/main/Qx/Mike.js

[mitm]

hostname = api-sub.meitu.com

/*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/

var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const Kaze = '/vip_info_by_group.json';

if (url.indexOf(Kaze) != -1) {

    obj.data.is_vip = true;

obj.data.have_valid_contract = true;

obj.data.use_vip = true;

obj.data.show_renew_flag = true;

obj.data.in_trial_period = true;

    body = JSON.stringify(obj);

}

$done({body});
