#完美解锁版本v1.3.2
#!name = Nicegram
#!desc = 解锁vip功能，去除广告显示，解锁禁止转发下载
#!openUrl = 
#!author = Keze7
#!homepage = https://github.com/Keze7/Kaze/tree/main/Loon
#!icon =https://github.com/Keze7/Kaze/raw/main/icon/NG.PNG





[Script]
http-request ^https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\w+$ script-path=https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/Nicegram/Script/Nicegram.js, requires-body=false, tag=Nicegram

[MITM]
hostname = restore-access.indream.app
