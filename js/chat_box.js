/// <reference path="./typings/globals/jquery/index.d.ts" />



$(document).ready(function(){

$("div.div_ref_c_5787433").on('click',function(){
$(this).closest('.div_ref_css_543488742').toggleClass('div_ref_css_56876432267TT_toggeld')

const find_img_titel=$(this).closest('.div_ref_css_543488742').find('.div_ref_c_5787433>div.div_b_css_ref_653216>div.div_css_787540976>img.img_ref_5665322579_up')
.attr('title')
if(find_img_titel=='up'){
$(this).closest('.div_ref_css_543488742').find('.div_ref_c_5787433>div.div_b_css_ref_653216>div.div_css_787540976>img.img_ref_5665322579_up')
.attr('src','./web-img/img_578754337893_down.svg').attr('title','down')

// $(this).closest('.div_ref_css_543488742').find('.div_ref_c_5787433>div.div_b_css_ref_653216>div.div_css_787540976').addClass('div_css_787540976_TT_T')



}else{
$(this).closest('.div_ref_css_543488742').find('.div_ref_c_5787433>div.div_b_css_ref_653216>div.div_css_787540976>img.img_ref_5665322579_up')
.attr('src','./web-img/img_578754337893_up.svg').attr('title','up')
// $(this).closest('.div_ref_css_543488742').find('.div_ref_c_5787433>div.div_b_css_ref_653216>div.div_css_787540976').removeClass('div_css_787540976_TT_T')
}

console.log(find_img_titel)


})



})




