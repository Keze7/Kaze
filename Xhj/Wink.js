#!name=wink02
#!desc=wink02

[Script]
wink02 = type=http-response, pattern=^https:\/\/api-sub\.meitu\.com\/v2\/user, script-path=https://github.com/Keze7/Kaze/new/main/Qx/wink02.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% api-sub.meitu.com
