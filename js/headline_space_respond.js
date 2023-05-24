document.write('<img id="headline_img_1" class="haedline_img_scale headline_img_filter" src="img/headline_pic_001.jpg"/>');
document.write('<img id="headline_img_2" class="haedline_img_scale headline_img_filter" src="img/headline_pic_002.jpg"/>');
document.write('<img id="headline_img_3" class="haedline_img_scale headline_img_filter" src="img/headline_pic_003.jpg"/>');

var headline_img_1 = document.getElementById("headline_img_1");
var headline_img_2 = document.getElementById("headline_img_2");
var headline_img_3 = document.getElementById("headline_img_3");

headline_img_1.addEventListener("mouseover", function(){
    headline_img_1.classList.remove("headline_img_filter");
    headline_img_1.classList.add("headline_img_filter2");
})
headline_img_1.addEventListener("mouseout", function(){
    headline_img_1.classList.remove("headline_img_filter2");
    headline_img_1.classList.add("headline_img_filter");
})
headline_img_2.addEventListener("mouseover", function(){
    headline_img_2.classList.remove("headline_img_filter");
    headline_img_2.classList.add("headline_img_filter2");
})
headline_img_2.addEventListener("mouseout", function(){
    headline_img_2.classList.remove("headline_img_filter2");
    headline_img_2.classList.add("headline_img_filter");
})
headline_img_3.addEventListener("mouseover", function(){
    headline_img_3.classList.remove("headline_img_filter");
    headline_img_3.classList.add("headline_img_filter2");
})
headline_img_3.addEventListener("mouseout", function(){
    headline_img_3.classList.remove("headline_img_filter2");
    headline_img_3.classList.add("headline_img_filter");
})