
var html_str =document.getElementsByTagName('html')[0].innerHTML
var domain =document.domain



document.querySelector('html').addEventListener('click', function () {
    setTimeout(function () {
        html_str =document.getElementsByTagName('html')[0].innerHTML
        domain =document.domain
        chrome.runtime.sendMessage({html_str:html_str,domain:document.domain}, function(response) {
            console.log('收到来自后台的回复：' + JSON.stringify(response));
        });
    },1000)

})
chrome.runtime.sendMessage({html_str:html_str,domain:document.domain}, function(response) {
    console.log('收到来自后台的回复：' + JSON.stringify(response));
});
