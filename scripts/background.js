var html_str,domain
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    if(request.html_str){
        html_str=request.html_str
    }
    if(request.domain){
        domain=request.domain
    }

    // console.log('收到来自content-script的消息：');
    // console.log(request, sender, sendResponse);
    sendResponse({code:0,msg:'ok',data:{domain:domain}});
});


function get_html_str() {
    return html_str;
}

function get_domain() {
    return domain;
}