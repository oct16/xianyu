(function() {
  var a = document.createElement("div");
  a.className = "idle-search";
  a.innerHTML = '<form method="get" action="//s.2.taobao.com/list/list.htm" name="search" target="_top">' +
  '<input class="input-search" id="J_HeaderSearchQuery" name="q" type="text" value="" placeholder="搜闲鱼" />' +
  '<input type="hidden" name="search_type" value="item" autocomplete="off" />' +
  '<input type="hidden" name="app" value="shopsearch" autocomplete="off" />' +
  '<button class="btn-search" type="submit"><i class="iconfont">&#xe602;</i>' +
  '<span class="search-img"></span></button></form>';
  document.getElementById("J_IdleHeader").appendChild(a);
  var b = document.getElementsByClassName("guide-img");
  b[0].parentNode.innerHTML = ""
})();
