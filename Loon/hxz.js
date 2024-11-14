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
