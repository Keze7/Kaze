[Script] *.wps.cn
http-response ^https?:\/\/(account|drive|vas|userinfo.docer)\.wps\.cn\/(.*api\/(v3\/(mine\/vips|spaces)|users\/\d+\/overview|v1\/list_purchase_info)|user\/v1\/vip_dl_times) script-path=https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSuperVIPuserCrack.js, requires-body=true, tag=WPS 解锁超级会员 Pro
http-request ^https?:\/\/(mobile|client|vas|download)(\.docer)?\.wps.cn\/(android\/mb\/buy_info|api\/v1\/mobile\/mb\/detail|query\/api\/v1\/list_privilege_info|download\/adapter\/v1\/mb) script-path=https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSuperVIPowerCrack.js, requires-body=false, tag=WPS 解锁超级会员 Pro
[MITM]
hostname = *.wps.cn
