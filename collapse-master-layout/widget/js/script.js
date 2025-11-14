function verify_subitens(objt) {
    return objt instanceof Element
        && objt.id !== undefined
        && objt.id !== ''
        && objt.children.length > 0;
}

function fctn_tabsgroup_action(tabs_menu, tab_obj, tabs_prefix) {
    const class_tabs_list = tabs_prefix + "__link-active";
    const class_tabs_item = tabs_prefix + "__link";
    var tab_selected = "";
    var content_selected = "";
    if (verify_subitens(tabs_menu)) {
        var tabs_list = tabs_menu.querySelectorAll("." + class_tabs_item);
        tabs_list.forEach(function (tabs_item) {
            if (tabs_item.classList.contains(class_tabs_list)) {
                tabs_item.classList.remove(class_tabs_list);
            }
        });
        if (!tab_obj.classList.contains(class_tabs_list)) {
            tab_obj.classList.add(class_tabs_list);
            tab_selected = tab_obj.getAttribute("data-sp-tabs");
        }
    }
    var body_list = document.querySelectorAll("[data-sp-parent]");
    body_list.forEach(function (body_item) {
        if (body_item.getAttribute("data-sp-parent") == tabs_menu.getAttribute("id")) {
            var content_list = body_item.querySelectorAll("." + tabs_prefix + "__content");
            content_list.forEach(function (content_item) {
                if (content_item.classList.contains(tabs_prefix + "__content-active")) {
                    content_item.classList.remove(tabs_prefix + "__content-active");
                }
                if (content_item.getAttribute("id") == tab_selected) {
                    if (!content_item.classList.contains(tabs_prefix + "__content-active")) {
                        content_item.classList.add(tabs_prefix + "__content-active");
                        content_selected = content_item.getAttribute("id");
                    }
                }

            });
        }
    });

}

function fctn_tabs_general(class_tabs_bridge) {
    if (class_tabs_bridge == null && class_tabs_bridge == "") {
        return null;
    }
    document.addEventListener("DOMContentLoaded", function () {
        var data_tabs_bridge = "data-sp-tabs";
        var tabs_bridge = document.querySelectorAll('.' + class_tabs_bridge);
        tabs_bridge.forEach(function (tabs_menu) {

            var tabs_list = tabs_menu.querySelectorAll("." + class_tabs_bridge + "__link");
            var counter2 = 1;
            tabs_list.forEach(function (tabs_item) {
                tabs_item.addEventListener("click", function () {
                    var tabs_name = this.getAttribute(data_tabs_bridge);
                    fctn_tabsgroup_action(tabs_menu, this, class_tabs_bridge);
                });
                counter2++;
            });
        });
    });

}


fctn_tabs_general("sp-collapse-tower");