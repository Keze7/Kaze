#!name = Wink

#!desc = 解锁永久会员

#!author = Keze7

#!homepage = https://github.com/Keze7/Kaze/tree/main/Loon

#!icon =https://github.com/Keze7/Kaze/raw/main/icon/035247C1-2F94-4BED-8C78-D4A619FC66F2.png

[Script]

http-response ^https:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json\? script-path=https://raw.githubusercontent.com/Keze7/Kaze/main/Qx/WINK.JS, requires-body=true, timeout=60 ,tag=WINK_11

[MITM]

hostname = api-sub.meitu.com
