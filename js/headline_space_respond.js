document.write('<div id="headline_img_box_left">');
document.write('<img id="headline_img_1" class="headline_img_filter" src="img/headline_pic_001.jpg"/>');
document.write('<div id="headline_textbox_1" class="headline_textbox headline_text_filter">');
document.write('<p class="headline_text_date">2023年4月28號</p>');
document.write('<p class="headline_text_title">出差過後的台南散策</p>');
document.write('<p class="headline_text_excerpt headline_text_cut">月底因為工作的關係，連續排了三天的「台中－高雄－台南」的行程，剛好隔天適逢周五，我的特休也不少，就請了假在台南玩一天</p>');
document.write('</div>');
document.write('</div>');

document.write('<div id="headline_img_box_center">');
document.write('<img id="headline_img_2" class="headline_img_filter" src="img/headline_pic_002.jpg"/>');
document.write('<div id="headline_textbox_2" class="headline_textbox headline_text_filter">');
document.write('<p class="headline_text_date">2023年4月28號</p>');
document.write('<p class="headline_text_title">出差過後的台南散策</p>');
document.write('<p class="headline_text_excerpt headline_text_cut">月底因為工作的關係，連續排了三天的「台中－高雄－台南」的行程，剛好隔天適逢周五，我的特休也不少，就請了假在台南玩一天</p>');
document.write('</div>');
document.write('</div>');

document.write('<div id="headline_img_box_right">');
document.write('<img id="headline_img_3" class="headline_img_filter" src="img/headline_pic_003.jpg"/>');
document.write('<div id="headline_textbox_3" class="headline_textbox headline_text_filter">');
document.write('<p class="headline_text_date">2023年4月28號</p>');
document.write('<p class="headline_text_title">出差過後的台南散策</p>');
document.write('<p class="headline_text_excerpt headline_text_cut">月底因為工作的關係，連續排了三天的「台中－高雄－台南」的行程，剛好隔天適逢周五，我的特休也不少，就請了假在台南玩一天</p>');
document.write('</div>');
document.write('</div>');



var headline_img_1 = document.getElementById("headline_img_1");
var headline_img_2 = document.getElementById("headline_img_2");
var headline_img_3 = document.getElementById("headline_img_3");


// 當滑鼠滑在img_1上面時
headline_img_1.addEventListener("mouseover", function(){
    // img_1要變暗
    headline_img_1.classList.remove("headline_img_filter");
    headline_img_1.classList.add("headline_img_filter2");
    //img_1的文字要浮現出來
    headline_textbox_1.classList.remove("headline_text_filter")
    headline_textbox_1.classList.add("headline_text_filter2")
    // img_2要變亮
    headline_img_2.classList.remove("headline_img_filter2");
    headline_img_2.classList.add("headline_img_filter");
    //img_2的文字要消失
    headline_textbox_2.classList.remove("headline_text_filter2")
    headline_textbox_2.classList.add("headline_text_filter")    
    // img_3要變亮
    headline_img_3.classList.remove("headline_img_filter2");
    headline_img_3.classList.add("headline_img_filter");
    //img_3的文字要消失
    headline_textbox_3.classList.remove("headline_text_filter2")
    headline_textbox_3.classList.add("headline_text_filter")   
})
//搭滑鼠移開img_1時
headline_img_1.addEventListener("mouseout", function(){
    //img_1要變亮
    headline_img_1.classList.remove("headline_img_filter2");
    headline_img_1.classList.add("headline_img_filter");
    //img_1的文字要消失
    headline_textbox_1.classList.remove("headline_text_filter2")
    headline_textbox_1.classList.add("headline_text_filter")
})

// 當滑鼠滑在img_2上面時
headline_img_2.addEventListener("mouseover", function(){
    // img_2要變暗
    headline_img_2.classList.remove("headline_img_filter");
    headline_img_2.classList.add("headline_img_filter2");
    //img_2的文字要浮現出來
    headline_textbox_2.classList.remove("headline_text_filter")
    headline_textbox_2.classList.add("headline_text_filter2")
    // img_1要變亮
    headline_img_1.classList.remove("headline_img_filter2");
    headline_img_1.classList.add("headline_img_filter");
    //img_1的文字要消失
    headline_textbox_1.classList.remove("headline_text_filter2")
    headline_textbox_1.classList.add("headline_text_filter")    
    // img_3要變亮
    headline_img_3.classList.remove("headline_img_filter2");
    headline_img_3.classList.add("headline_img_filter");
    //img_3的文字要消失
    headline_textbox_3.classList.remove("headline_text_filter2")
    headline_textbox_3.classList.add("headline_text_filter")   
})
//搭滑鼠移開img_2時
headline_img_2.addEventListener("mouseout", function(){
    //img_2要變亮
    headline_img_2.classList.remove("headline_img_filter2");
    headline_img_2.classList.add("headline_img_filter");
    //img_1的文字要消失
    headline_textbox_2.classList.remove("headline_text_filter2")
    headline_textbox_2.classList.add("headline_text_filter")
})

// 當滑鼠滑在img_3上面時
headline_img_3.addEventListener("mouseover", function(){
    // img_3要變暗
    headline_img_3.classList.remove("headline_img_filter");
    headline_img_3.classList.add("headline_img_filter2");
    //img_3的文字要浮現出來
    headline_textbox_3.classList.remove("headline_text_filter")
    headline_textbox_3.classList.add("headline_text_filter2")
    // img_1要變亮
    headline_img_1.classList.remove("headline_img_filter2");
    headline_img_1.classList.add("headline_img_filter");
    //img_1的文字要消失
    headline_textbox_1.classList.remove("headline_text_filter2")
    headline_textbox_1.classList.add("headline_text_filter")    
    // img_2要變亮
    headline_img_2.classList.remove("headline_img_filter2");
    headline_img_2.classList.add("headline_img_filter");
    //img_2的文字要消失
    headline_textbox_2.classList.remove("headline_text_filter2")
    headline_textbox_2.classList.add("headline_text_filter")   
})
//搭滑鼠移開img_3時
headline_img_3.addEventListener("mouseout", function(){
    //img_3要變亮
    headline_img_3.classList.remove("headline_img_filter2");
    headline_img_3.classList.add("headline_img_filter");
    //img_1的文字要消失
    headline_textbox_3.classList.remove("headline_text_filter2")
    headline_textbox_3.classList.add("headline_text_filter")
})




var headline_textbox_1 = document.getElementById("headline_textbox_1");
var headline_textbox_2 = document.getElementById("headline_textbox_2");
var headline_textbox_3 = document.getElementById("headline_textbox_3");


//當滑鼠滑在textbox_1上面時
headline_textbox_1.addEventListener("mouseover", function(){
    //img_1保持變暗
    headline_img_1.classList.remove("headline_img_filter");
    headline_img_1.classList.add("headline_img_filter2");
    //textbox_1浮現出來
    headline_textbox_1.classList.remove("headline_text_filter");
    headline_textbox_1.classList.add("headline_text_filter2");
    //img_2要變亮
    headline_img_2.classList.remove("headline_img_filter2");
    headline_img_2.classList.add("headline_img_filter");
    //textbox_2要消失
    headline_textbox_2.classList.remove("headline_text_filter2");
    headline_textbox_2.classList.add("headline_text_filter");
    //img_3要變亮
    headline_img_3.classList.remove("headline_img_filter2");
    headline_img_3.classList.add("headline_img_filter");
    //textbox_2要消失
    headline_textbox_3.classList.remove("headline_text_filter2");
    headline_textbox_3.classList.add("headline_text_filter");     
})

//當滑鼠滑在textbox_2上面時
headline_textbox_2.addEventListener("mouseover", function(){
    //img_2保持變暗
    headline_img_2.classList.remove("headline_img_filter");
    headline_img_2.classList.add("headline_img_filter2");
    //textbox_2浮現出來
    headline_textbox_2.classList.remove("headline_text_filter");
    headline_textbox_2.classList.add("headline_text_filter2");
    //img_1要變亮
    headline_img_1.classList.remove("headline_img_filter2");
    headline_img_1.classList.add("headline_img_filter");
    //textbox_1要消失
    headline_textbox_1.classList.remove("headline_text_filter2");
    headline_textbox_1.classList.add("headline_text_filter");
    //img_3要變亮
    headline_img_3.classList.remove("headline_img_filter2");
    headline_img_3.classList.add("headline_img_filter");
    //textbox_3要消失
    headline_textbox_3.classList.remove("headline_text_filter2");
    headline_textbox_3.classList.add("headline_text_filter");     
})

//當滑鼠滑在textbox_1上面時
headline_textbox_3.addEventListener("mouseover", function(){
    //img_3保持變暗
    headline_img_3.classList.remove("headline_img_filter");
    headline_img_3.classList.add("headline_img_filter2");
    //textbox_3浮現出來
    headline_textbox_3.classList.remove("headline_text_filter");
    headline_textbox_3.classList.add("headline_text_filter2");
    //img_1要變亮
    headline_img_1.classList.remove("headline_img_filter2");
    headline_img_1.classList.add("headline_img_filter");
    //textbox_1要消失
    headline_textbox_1.classList.remove("headline_text_filter2");
    headline_textbox_1.classList.add("headline_text_filter");
    //img_2要變亮
    headline_img_2.classList.remove("headline_img_filter2");
    headline_img_2.classList.add("headline_img_filter");
    //textbox_2要消失
    headline_textbox_2.classList.remove("headline_text_filter2");
    headline_textbox_2.classList.add("headline_text_filter");     
})


var maxTextLength = 45; // 指定最大文字長度

var truncateElements = document.getElementsByClassName('headline_text_cut');
for (var i = 0; i < truncateElements.length; i++) {
  var element = truncateElements[i];
  var text = element.textContent;
  
  if (text.length > maxTextLength) {
    element.textContent = text.slice(0, maxTextLength) + '...';
  }
}



var headline_img_box_left = document.getElementById("headline_img_box_left");
var headline_img_box_center = document.getElementById("headline_img_box_center");
var headline_img_box_right = document.getElementById("headline_img_box_right");

let headline_img_boxes = [headline_img_box_left, headline_img_box_center, headline_img_box_right]
let links = ["http://www.google.com", "http://www.facebook.com", "http://www.instagram.com"]

for(let i = 0; i < 3; i++){
    headline_img_boxes[i].addEventListener("click", (function(index) {
        return function() {
            window.location.href = links[index];
        };
    })(i));
}






