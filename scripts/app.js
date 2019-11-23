window.onload = function () {

    exportHtmlToMarkdown()
}

function exportHtmlToMarkdown() {
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {

        const activeTab = arrayOfTabs[0]
        const url = activeTab.url
        fetch(url)
            .then(function (res) {
                if (res.ok) {
                    return res.text()
                } else {
                    console.error('The fetch fails, and the response code is ' + res.status)
                }
            })
            .then(function (res) {
                let markdownText = ''
                const parser = new DOMParser()
                const doc = parser.parseFromString(res, 'text/html')
                if(localStorage.getItem(document.domain)){
                    document.querySelector('#selector').value=localStorage.getItem(document.domain)
                }

                if(document.querySelector('#selector').value){
                    var blog = doc.querySelector(document.querySelector('#selector').value)
                    const turndownService = new TurndownService()
                    markdownText = turndownService.turndown(blog)
                    document.querySelector('#source').value = markdownText;
                }
            })
            .catch(function (err) {
                console.error(err)

            })
    })

}

document.querySelector('.chaxun').addEventListener('click', function () {
    localStorage.setItem(document.domain,document.querySelector('#selector').value)
    exportHtmlToMarkdown()
})
document.querySelector('.copy').addEventListener('click', function () {
  const el = document.querySelector('#source')
  el.select()
  document.execCommand('copy', true);

})