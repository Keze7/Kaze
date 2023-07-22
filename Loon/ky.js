#!name=快影
#!desc=解锁模板
#!icon=https://github.com/Keze7/Kaze/raw/main/icon/4B2AFA28-5A8D-48A6-9639-D11259AA6F62.png

[Script]

http-response ^https:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/app\/template\/draft script-path=https://raw.githubusercontent.com/Keze7/Kaze/main/Qx/ky.js, requires-body=true, timeout=60 ,tag=ky_11

[MITM]

hostname = api.kmovie.gifshow.com
