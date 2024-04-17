#!name=dmx
#!desc=dmx

[URL Rewrite]
# > 开屏广告
^https://ad\.rhinox\.cn/client/sdk/getData - reject

[Script]
# > 呆萌熊番茄钟-学霸必备提高学习效率神器 vip 
dmx = type=http-response, pattern=^https?:\/\/appss.rhinox.cn\/app\/account\/getAccountInfo, script-path=https://raw.githubusercontent.com/WeiGiegie/666/main/dmx.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% ad.rhinox.cn, standard.rhinoxlab.com.appss.rhinoxlab.com, appss.rhinox.cn
