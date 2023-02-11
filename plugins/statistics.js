var stat = function () {
    var _hmt = _hmt || [];
    if (process.client) {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?96ab5c4cd236e8e96687d2dab55e7034";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    }
};

stat()
export default stat


