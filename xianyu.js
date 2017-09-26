(function () {

    const TARGET_HOST = '2.taobao.com'
    const TARGET_PATH = '/'

    const {
        host,
        pathname
    } = location;

    const searchBox = document.createElement("div")
    searchBox.className = "idle-search"
    searchBox.innerHTML = '<form method="get" action="//s.2.taobao.com/list/list.htm" name="search" target="_top">' +
        '<input class="input-search" id="J_HeaderSearchQuery" name="q" type="text" value="" placeholder="搜闲鱼" />' +
        '<input type="hidden" name="search_type" value="item" autocomplete="off" />' +
        '<input type="hidden" name="app" value="shopsearch" autocomplete="off" />' +
        '<button class="btn-search" type="submit"><i class="iconfont">&#xe602;</i>' +
        '<span class="search-img"></span></button></form>'
    const searchBoxStyle = `
    .idle-search {
        position: absolute;
        left: 234px;
        top: -8px;
        width: 222px;
        height: 36px;
        background-color: #333
    }

    .tab-wrap {
        position: relative;
    }

    .input-search {
        width: 164px;
        height: 32px;
        padding: 0 10px;
        margin: 0;
        border: 0;
        outline: 0;
        position: absolute;
        left: 2px;
        top: 2px;
        font-size: 13px
    }
    
    .btn-search {
        display: block;
        width: 36px;
        height: 36px;
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
        background-color: #333;
        border: 0;
        margin: 0;
        padding: 0;
        cursor: pointer;
        outline: 0
    }
    
    .btn-search .iconfont {
        font-size: 18px
    }
    
    .btn-search .search-img {
        position: absolute;
        right: -65px;
        top: -13px;
        display: block;
        width: 79px;
        height: 60px;
        background: url(//gtms02.alicdn.com/tps/i2/TB1VqSxHVXXXXb.XVXXqw4SJXXX-79-60.png) no-repeat 0 0;
        _background: 0 0;
        _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/', sizingMethod='scale');
        zoom:1
    }

    .iconfont {
        font-family: xy-iconfont;
        font-size: 14px;
        font-style: normal
    }    
    
    @font-face {
        font-family: xy-iconfont;
        src: url(//at.alicdn.com/t/font_1432608908_2844584.eot);
        src: url(//at.alicdn.com/t/font_1432608908_2844584.eot?#iefix) format('embedded-opentype'),url(//at.alicdn.com/t/font_1432608908_2844584.woff) format('woff'),url(//at.alicdn.com/t/font_1432608908_2844584.ttf) format('truetype'),url(//at.alicdn.com/t/font_1432608908_2844584.svg#iconfont) format('svg')
    }
    `

    if (host === TARGET_HOST && pathname === TARGET_PATH) {
        const domTarget = document.querySelector('.tab-wrap')
        domTarget.appendChild(searchBox)
        inserCss(searchBoxStyle)
    } else {
        const J_IdleHeader = document.getElementById("J_IdleHeader")
        J_IdleHeader.appendChild(searchBox)
        const keyWords = document.querySelector("#J_SearchFilterInput").value
        const searchInput = document.getElementById("J_HeaderSearchQuery")
        searchInput.value = keyWords
        const style = `
            .download-layer {
                display: none;
            }
        `
        inserCss(style)
    }

    function inserCss(style) {
        const css = document.createElement('style')
        css.type = 'text/css'
        css.appendChild(document.createTextNode(style));
        document.getElementsByTagName("head")[0].appendChild(css);
    }
})();