
var bg = chrome.extension.getBackgroundPage();
var html_str=bg.get_html_str();
var domain=bg.get_domain();

window.onload=function(){
    exportHtmlToMarkdown()

}


document.querySelector('.chaxun').addEventListener('click', function () {
    localStorage.setItem(domain,document.querySelector('#selector').value)
    exportHtmlToMarkdown()
})
document.querySelector('.copy').addEventListener('click', function () {
    const el = document.querySelector('#source')
    el.select()
    document.execCommand('copy', true);

})


function exportHtmlToMarkdown() {
    let markdownText = ''
    const parser = new DOMParser()
    const doc = parser.parseFromString(html_str, 'text/html')
    if(localStorage.getItem(domain)){
        document.querySelector('#selector').value=localStorage.getItem(domain)
    }
    if(document.querySelector('#selector').value){
        var blog = doc.querySelector(document.querySelector('#selector').value)
        const turndownService = new TurndownService()
        markdownText = turndownService.turndown(blog)
        document.querySelector('#source').value = markdownText;
    }


}