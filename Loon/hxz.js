let body = JSON.parse($response.body);

body.data.page_conf.lazy_load_components = body.data.page_conf.lazy_load_components.filter(component => component === "resource_position_list");

body.data.disorder_components = body.data.disorder_components.filter(component => component.name === "resource_position_list");

$done({ body: JSON.stringify(body) });
