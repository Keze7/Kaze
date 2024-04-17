#!name=Wink
#!desc=Wink

[Script]
Wink = type=http-response, pattern=^https:\/\/api-.*\.meitu\.com\/(.+\/user\/vip_info|user\/show), script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Wink.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% api-*.meitu.com
