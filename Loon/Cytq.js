#!name=彩云天气VIP
#!desc=解锁永久vip
#!icon= https://raw.githubusercontent.com/Keze7/Kaze/main/icon/CE9A0776-AB17-4174-8604-BD2454F6C319.jpeg

[Rewrite]

^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get - reject-200

[Script]

http-response ^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js, requires-body=true, timeout=60 ,tag=caiyuntianqi_8

[MITM]

hostname = *.cyapi.cn,adx.sogaha.cn
