document.write('<p id="title" class="top_logo_border">spinach.</p>')
document.write('<div id="top_list_btn_1" class="top_list_border">')
document.write('<p class="list_text_EN">blog</p>')
document.write('<p class="list_text_CH">寫點什麼</p>')
document.write('</div>')
document.write('<div id="top_list_btn_2" class="top_list_border">')
document.write('<p class="list_text_EN">profolio</p>')
document.write('<p class="list_text_CH">作品集</p>')
document.write('</div>')
document.write('<div id="top_list_btn_3" class="top_list_border">')
document.write('<p class="list_text_EN">project</p>')
document.write('<p class="list_text_CH">一些企畫</p>')
document.write('</div>')
document.write('<div id="top_list_btn_4" class="top_list_border">')
document.write('<p class="list_text_EN">sharong sth.</p>')
document.write('<p class="list_text_CH">單純想分享</p>')
document.write('</div>')

var title = document.getElementById("title")

title.addEventListener("dblclick", function(){
    window.open("https://www.google.com/search?q=spinach&rlz=1C1ONGR_zh-TWTW971TW972&oq=sp&aqs=chrome.0.35i39i650j46i67i650j69i57j35i19i39i512i650j69i60l4.2180j0j7&sourceid=chrome&ie=UTF-8")
})



var top_list_btn_1 = document.getElementById("top_list_btn_1")
var top_list_btn_2 = document.getElementById("top_list_btn_2")
var top_list_btn_3 = document.getElementById("top_list_btn_3")
var top_list_btn_4 = document.getElementById("top_list_btn_4")

let top_list_btns = [top_list_btn_1, top_list_btn_2, top_list_btn_3, top_list_btn_4]
let top_list_btns_links = ["http://www.google.com", "http://www.facebook.com", "http://www.instagram.com", "http://www.amazon.com"]

for(i = 0; i < 4; i++){
    top_list_btns[i].addEventListener("click", (function(index){
        return function(){
            window.location.href = top_list_btns_links[index]
        }
    })(i))
}