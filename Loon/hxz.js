let body = JSON.parse($response.body);

body.data.page_conf.lazy_load_components = body.data.page_conf.lazy_load_components.filter(component => component === "resource_position_list");

body.data.disorder_components = body.data.disorder_components.filter(component => component.name === "resource_position_list");

$done({ body: JSON.stringify(body) });





let body = JSON.parse($response.body);

if (body.data && Array.isArray(body.data.components)) {
  body.data.components.forEach(component => {
    if (component.data && Array.isArray(component.data.king_kong_position_list)) {
      // Filter and update king_kong_position_list in a single loop
      component.data.king_kong_position_list = component.data.king_kong_position_list.reduce((result, item) => {
        if (!["得5折券", "赚现金", "花花会员", "学生福利", "花花学生惠", "邀人享免单", "88元券包", "省钱中心", "借钱"].includes(item.title)) {
          item.bubble_text = ''; // Set bubble_text to empty string
          result.push(item); // Add item to result list
        }
        return result;
      }, []);
    }

    // Check if template name needs to be removed
    if (component.template && component.template.name) {
      const namesToRemove = {
        "weather": true,
        "diversion_tab_list_template": true,
        "running_order": true,
        "destination_recommend_dest-normal_template": true,
        "activity_cover_layer": true,
        "register_driver-normal": true,
        "new_marketing_bubble-normal_template": true,
        "new_user_skin_v2": true,
        "emotion_card_king_flower_sfc": true,
        "homepage_pop_window": true
      };
      if (namesToRemove[component.template.name]) {
        delete component.template.name;
      }
    }
  });
}

$done({ body: JSON.stringify(body) });





let body = JSON.parse($response.body);

if (body.data) {
  // Clear the goods_list entry
  if (body.data.goods_list) {
    body.data.goods_list = [];
  }

  if (body.data.bill_detail && Array.isArray(body.data.bill_detail.external_channel_list)) {
    
   //body.data.bill_detail.external_channel_list = body.data.bill_detail.external_channel_list.filter(channel => channel.name !== "花小猪付");// 删除花小猪付
    body.data.bill_detail.external_channel_list.forEach(channel => {
      if (channel.sign_guide) {
        delete channel.sign_guide.tips;
      }
    });
  }
}

$done({ body: JSON.stringify(body) });