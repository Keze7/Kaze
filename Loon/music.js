#!name = 网易云

#!desc = 解锁部分黑胶会员权限，去除全局广告，阻止日志上传，解锁会员歌曲，解锁会员音质，解锁会员下载，更多自行探索

#!openUrl = 

#!author = Keze7

#!homepage = https://github.com/Keze7/Kaze/tree/main/Loon

#!icon =https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netease_Music.png
Script

> 网易云解锁VIP
http-request ^https?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ script-path=https://raw.githubusercontent.com/WeiRen0/Scripts/main/wyun.js, timeout=60 ,tag=wyun_15

MITM

hostname = *.music.163.com
