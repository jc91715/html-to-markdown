
var bg = chrome.extension.getBackgroundPage();
var html_str=bg.get_html_str();
var domain=bg.get_domain();

window.onload=function(){
    exportHtmlToMarkdown()

}


document.querySelector('.chaxun').addEventListener('click', function () {
    if(document.querySelector('#selector').value){
        localStorage.setItem(domain,document.querySelector('#selector').value)
        exportHtmlToMarkdown()
    }

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

    if(document.querySelector('#selector').value){
        localStorage.setItem(domain,document.querySelector('#selector').value)
        handle()

    }else{
        if(localStorage.getItem(domain)){
            document.querySelector('#selector').value=localStorage.getItem(domain)
            handle()
        }

    }



}

function handle() {
    var blog = doc.querySelector(document.querySelector('#selector').value)
    const turndownService = new TurndownService()
    markdownText = turndownService.turndown(blog)
    document.querySelector('#source').value = markdownText;
}