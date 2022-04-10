





$(document.body).ready(function(){

const __event='contextmenu'

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👋"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0 ){
return false;
}else{
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="👋" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f44b.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="👋🏻" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f44b-1f3fb.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="👋🏼" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f44b-1f3fc.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="👋🏽" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f44b-1f3fd.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="👋🏾" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f44b-1f3fe.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="👋🏿" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f44b-1f3ff.png">
</div> 
</div>
`)

}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')
const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')



const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()




GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();
});


$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤚"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0 ){
return false;
}else{
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🤚" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f91a.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🤚🏻" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f91a-1f3fb.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🤚🏼" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f91a-1f3fc.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🤚🏽" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f91a-1f3fd.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🤚🏾" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f91a-1f3fe.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🤚🏾" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f91a-1f3ff.png">
</div> 
</div>
`)
}




$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')
const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()



GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();
});


$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🖐️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖐️" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f590.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖐🏻" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f590-1f3fb.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖐🏼" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f590-1f3fc.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖐🏽" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f590-1f3fd.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖐🏾" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f590-1f3fe.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖐🏾" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f590-1f3ff.png">

</div> 
</div>
`)
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});

$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="✋"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()

if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="✋" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/270b.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="✋🏻" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/270b-1f3fb.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="✋🏼" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/270b-1f3fc.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="✋🏽" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/270b-1f3fd.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="✋🏾" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/270b-1f3fe.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="✋🏾" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/270b-1f3ff.png">
</div> 
</div>
`)
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});



$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});






$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🖖"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖖" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f596.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖖🏻" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f596-1f3fb.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖖🏼" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f596-1f3fc.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖖🏽" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f596-1f3fd.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖖🏾" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f596-1f3fe.png">
<img draggable="false" class="emoji img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f" alt="🖖🏿" src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f596-1f3ff.png">
</div> 
</div>
`)
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()
GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();


});


$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});






$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👌"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👌-👌🏻-👌🏼-👌🏽-👌🏾-👌🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}





$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;




});






$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤏"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()

$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤏-🤏🏻-🤏🏼-🤏🏽-🤏🏾-🤏🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;





});





$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="✌️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()


if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0 ){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='✌️-✌🏻-✌🏼-✌🏽-✌🏾-✌🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();


});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});









$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤞"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')


$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>
</div> 
</div>
`)
const ArraySM='🤞-🤞🏻-🤞🏼-🤞🏽-🤞🏾-🤞🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')


const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();


});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤟"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()


if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0 ){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)

const ArraySM='🤟-🤟🏻-🤟🏼-🤟🏽-🤟🏾-🤟🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')


const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;




});







$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤘"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0 ){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>
</div> 
</div>
`)
const ArraySM='🤘-🤘🏻-🤘🏼-🤘🏽-🤘🏾-🤘🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;




});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤙"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()

if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>
</div> 
</div>
`)
const ArraySM='🤙-🤙🏻-🤙🏼-🤙🏽-🤙🏾-🤙🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')


const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});








$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👈"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>
</div> 
</div>
`)
const ArraySM='👈-👈🏻-👈🏼-👈🏽-👈🏾-👈🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;




});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👉"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>
</div> 
</div>
`)



const ArraySM='👉-👉🏻-👉🏼-👉🏽-👉🏾-👉🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});





$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👆"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')


$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)
const ArraySM='👆-👆🏻-👆🏼-👆🏽-👆🏾-👆🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')

const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});





$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🖕"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)
const ArraySM='🖕-🖕🏻-🖕🏼-🖕🏽-🖕🏾-🖕🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')


const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;




});





$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👇"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👇-👇🏻-👇🏼-👇🏽-👇🏾-👇🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')


const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});






$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="☝️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='☝️-☝🏻-☝🏼-☝🏽-☝🏾-☝🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👍"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()


if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)
const ArraySM='👍-👍🏻-👍🏼-👍🏽-👍🏾-👍🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👎"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👎-👎🏻-👎🏼-👎🏽-👎🏾-👎🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="✊"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)
const ArraySM='✊-✊🏻-✊🏼-✊🏽-✊🏾-✊🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👊"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👊-👊🏻-👊🏼-👊🏽-👊🏾-👊🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;





});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤛"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤛-🤛🏻-🤛🏼-🤛🏽-🤛🏾-🤛🏿-'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;




});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤜"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)
const ArraySM='🤜-🤜🏻-🤜🏼-🤜🏽-🤜🏾-🤜🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👏"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👏-👏🏻-👏🏼-👏🏽-👏🏾-👏🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙌"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)
const ArraySM='🙌-🙌🏻-🙌🏼-🙌🏽-🙌🏾-🙌🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;




});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👐"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👐-👐🏻-👐🏼-👐🏽-👐🏾-👐🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;




});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤲"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤲-🤲🏻-🤲🏼-🤲🏽-🤲🏾-🤲🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙏"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙏-🙏🏻-🙏🏼-🙏🏽-🙏🏾-🙏🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="✍️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='✍️-✍🏻-✍🏼-✍🏽-✍🏾-✍🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💅"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💅-💅🏻-💅🏼-💅🏽-💅🏾-💅🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤳"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤳-🤳🏻-🤳🏼-🤳🏽-🤳🏾-🤳🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💪"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)

const ArraySM='💪-💪🏻-💪🏼-💪🏽-💪🏾-💪🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🦵"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)

const ArraySM='🦵-🦵🏻-🦵🏼-🦵🏽-🦵🏾-🦵🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🦶"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false

}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='🦶-🦶🏻-🦶🏼-🦶🏽-🦶🏾-🦶🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👂"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👂-👂🏻-👂🏼-👂🏽-👂🏾-👂🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🦻"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')


$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🦻-🦻🏻-🦻🏼-🦻🏽-🦻🏾-🦻🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});





$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👃"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👃-👃🏻-👃🏼-👃🏽-👃🏾-👃🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});






//FIXME:Pepole


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👶"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)
const ArraySM='👶-👶🏻-👶🏼-👶🏽-👶🏾-👶🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧒"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧒-🧒🏻-🧒🏼-🧒🏽-🧒🏾-🧒🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👦"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👦-👦🏻-👦🏼-👦🏽-👦🏾-👦🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👧"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👧-👧🏻-👧🏼-👧🏽-👧🏾-👧🏿-'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑-🧑🏻-🧑🏼-🧑🏽-🧑🏾-🧑🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👱"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👱-👱🏻-👱🏼-👱🏽-👱🏾-👱🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨-👨🏻-👨🏼-👨🏽-👨🏾-👨🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧔"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧔-🧔🏻-🧔🏼-🧔🏽-🧔🏾-🧔🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🦰"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🦰-👨🏻‍🦰-👨🏼‍🦰-👨🏽‍🦰-👨🏾‍🦰-👨🏿‍🦰'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🦱"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;

}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')


$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🦱-👨🏻‍🦱-👨🏼‍🦱-👨🏽‍🦱-👨🏾‍🦱-👨🏿‍🦱'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🦳"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🦳-👨🏻‍🦳-👨🏼‍🦳-👨🏽‍🦳-👨🏾‍🦳-👨🏿‍🦳'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🦲"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🦲-👨🏻‍🦲-👨🏼‍🦲-👨🏽‍🦲-👨🏾‍🦲-👨🏿‍🦲'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩-👩🏻-👩🏼-👩🏽-👩🏾-👩🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🦰"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')


$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🦰-👩🏻‍🦰-👩🏼‍🦰-👩🏽‍🦰-👩🏾‍🦰-👩🏿‍🦰'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🦰"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🦰-🧑🏻‍🦰-🧑🏼‍🦰-🧑🏽‍🦰-🧑🏾‍🦰-🧑🏿‍🦰-'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🦱"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;

}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🦱-👩🏻‍🦱-👩🏼‍🦱-👩🏽‍🦱-👩🏾‍🦱-👩🏿‍🦱'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')


const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🦱"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🦱-🧑🏻‍🦱-🧑🏼‍🦱-🧑🏽‍🦱-🧑🏾‍🦱-🧑🏿‍🦱'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🦳"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)
const ArraySM='👩‍🦳-👩🏻‍🦳-👩🏼‍🦳-👩🏽‍🦳-👩🏾‍🦳-👩🏿‍🦳'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🦳"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🦳-🧑🏻‍🦳-🧑🏼‍🦳-🧑🏽‍🦳-🧑🏾‍🦳-🧑🏿‍🦳'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🦲"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🦲-👩🏻‍🦲-👩🏼‍🦲-👩🏽‍🦲-👩🏾‍🦲-👩🏿‍🦲'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🦲"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='🧑‍🦲-🧑🏻‍🦲-🧑🏼‍🦲-🧑🏽‍🦲-🧑🏾‍🦲-🧑🏿‍🦲'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👱‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👱‍♀️-👱🏻‍♀️-👱🏼‍♀️-👱🏽‍♀️-👱🏾‍♀️-👱🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👱‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👱‍♂️-👱🏻‍♂️-👱🏼‍♂️-👱🏽‍♂️-👱🏾‍♂️-👱🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')


const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();


});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧓"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧓-🧓🏻-🧓🏼-🧓🏽-🧓🏾-🧓🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👴"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👴-👴🏻-👴🏼-👴🏽-👴🏾-👴🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')

}
$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👵"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👵-👵🏻-👵🏼-👵🏽-👵🏾-👵🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')


const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();

});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙍‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙍‍♂️-🙍🏼‍♂️-🙍🏻‍♂️-🙍🏽‍♂️-🙍🏾‍♂️-🙍🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙍‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙍‍♀️-🙍🏻‍♀️-🙍🏼‍♀️-🙍🏽‍♀️-🙍🏾‍♀️-🙍🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙍"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙍-🙍🏼-🙍🏻-🙍🏽-🙍🏾-🙍🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙎‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙎‍♂️-🙎🏼‍♂️-🙎🏻‍♂️-🙎🏽‍♂️-🙎🏾‍♂️-🙎🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')


const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙎‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙎‍♀️-🙎🏻‍♀️-🙎🏼‍♀️-🙎🏽‍♀️-🙎🏾‍♀️-🙎🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙎"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙎-🙎🏼-🙎🏻-🙎🏽-🙎🏾-🙎🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙅‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙅‍♂️-🙅🏼‍♂️-🙅🏻‍♂️-🙅🏽‍♂️-🙅🏾‍♂️-🙅🏿‍♂️'.split('-')
ArraySM.map(emoji =>$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();

});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙅‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')

$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙅‍♀️-🙅🏻‍♀️-🙅🏼‍♀️-🙅🏽‍♀️-🙅🏾‍♀️-🙅🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙅"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙅-🙅🏻-🙅🏼-🙅🏽-🙅🏾-🙅🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙆‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
$(this).parent().append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙆‍♂️-🙆🏼‍♂️-🙆🏻‍♂️-🙆🏽‍♂️-🙆🏾‍♂️-🙆🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙆‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;



}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>

</div> 
</div>
`)
const ArraySM='🙆‍♀️-🙆🏻‍♀️-🙆🏼‍♀️-🙆🏽‍♀️-🙆🏾‍♀️-🙆🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙆"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;



}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙆-🙆🏻-🙆🏼-🙆🏽-🙆🏾-🙆🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💁‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;



}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💁‍♂️-💁🏼‍♂️-💁🏻‍♂️-💁🏽‍♂️-💁🏾‍♂️-💁🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💁‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💁‍♀️-💁🏻‍♀️-💁🏼‍♀️-💁🏽‍♀️-💁🏾‍♀️-💁🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💁"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💁-💁🏼-💁🏻-💁🏽-💁🏾-💁🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙋‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙋‍♂️-🙋🏼‍♂️-🙋🏻‍♂️-🙋🏽‍♂️-🙋🏾‍♂️-🙋🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙋‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙋‍♀️-🙋🏻‍♀️-🙋🏼‍♀️-🙋🏽‍♀️-🙋🏾‍♀️-🙋🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙋"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙋-🙋🏼-🙋🏻-🙋🏽-🙋🏾-🙋🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧏‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧏‍♂️-🧏🏼‍♂️-🧏🏻‍♂️-🧏🏽‍♂️-🧏🏾‍♂️-🧏🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧏‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧏‍♀️-🧏🏻‍♀️-🧏🏼‍♀️-🧏🏽‍♀️-🧏🏾‍♀️-🧏🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧏"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧏-🧏🏼-🧏🏻-🧏🏽-🧏🏾-🧏🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙇‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙇‍♂️-🙇🏻‍♂️-🙇🏼‍♂️-🙇🏽‍♂️-🙇🏾‍♂️-🙇🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙇‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙇‍♀️-🙇🏼‍♀️-🙇🏻‍♀️-🙇🏽‍♀️-🙇🏾‍♀️-🙇🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🙇"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🙇-🙇🏻-🙇🏼-🙇🏽-🙇🏾-🙇🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤦‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤦‍♂️-🤦🏼‍♂️-🤦🏻‍♂️-🤦🏽‍♂️-🤦🏾‍♂️-🤦🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤦‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='🤦‍♀️-🤦🏼‍♀️-🤦🏻‍♀️-🤦🏽‍♀️-🤦🏾‍♀️-🤦🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤦"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤦-🤦🏻-🤦🏼-🤦🏽-🤦🏾-🤦🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤷‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤷‍♂️-🤷🏼‍♂️-🤷🏻‍♂️-🤷🏽‍♂️-🤷🏾‍♂️-🤷🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤷‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤷‍♀️-🤷🏻‍♀️-🤷🏼‍♀️-🤷🏽‍♀️-🤷🏾‍♀️-🤷🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤷"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤷-🤷🏼-🤷🏻-🤷🏽-🤷🏾-🤷🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤴"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='🤴-🤴🏻-🤴🏼-🤴🏽-🤴🏾-🤴🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👸"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👸-👸🏻-👸🏼-👸🏽-👸🏾-👸🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👳‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='👳‍♂️-👳🏻‍♂️-👳🏼‍♂️-👳🏽‍♂️-👳🏾‍♂️-👳🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👳‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='👳‍♀️-👳🏻‍♀️-👳🏼‍♀️-👳🏽‍♀️-👳🏾‍♀️-👳🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👳"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👳-👳🏻-👳🏼-👳🏽-👳🏾-👳🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👲"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👲-👲🏻-👲🏼-👲🏽-👲🏾-👲🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧕"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧕-🧕🏻-🧕🏼-🧕🏽-🧕🏾-🧕🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤵"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤵-🤵🏻-🤵🏼-🤵🏽-🤵🏾-🤵🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👰"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👰-👰🏻-👰🏼-👰🏽-👰🏾-👰🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤰"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤰-🤰🏻-🤰🏼-🤰🏽-🤰🏾-🤰🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤱"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤱-🤱🏻-🤱🏼-🤱🏽-🤱🏾-🤱🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👼"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👼-👼🏻-👼🏼-👼🏽-👼🏾-👼🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🎓"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🎓-👨🏻‍🎓-👨🏼‍🎓-👨🏽‍🎓-👨🏾‍🎓-👨🏿‍🎓'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🎓"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🎓-👩🏼‍🎓-👩🏻‍🎓-👩🏽‍🎓-👩🏾‍🎓-👩🏿‍🎓'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🎓"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🎓-🧑🏼‍🎓-🧑🏻‍🎓-🧑🏽‍🎓-🧑🏾‍🎓-🧑🏿‍🎓'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍⚕️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍⚕️-👨🏼‍⚕️-👨🏻‍⚕️-👨🏽‍⚕️-👨🏾‍⚕️-👨🏿‍⚕️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍⚕️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍⚕️-👩🏼‍⚕️-👩🏻‍⚕️-👩🏽‍⚕️-👩🏾‍⚕️-👩🏿‍⚕️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍⚕️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍⚕️-🧑🏼‍⚕️-🧑🏻‍⚕️-🧑🏽‍⚕️-🧑🏾‍⚕️-🧑🏿‍⚕️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🏫"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🏫-👨🏼‍🏫-👨🏻‍🏫-👨🏽‍🏫-👨🏾‍🏫-👨🏿‍🏫'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🏫"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🏫-👩🏼‍🏫-👩🏻‍🏫-👩🏽‍🏫-👩🏽‍🏫-👩🏾‍🏫-👩🏿‍🏫'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🏫"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🏫-🧑🏼‍🏫-🧑🏻‍🏫-🧑🏽‍🏫-🧑🏾‍🏫-🧑🏿‍🏫'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍⚖️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='👨‍⚖️-👨🏼‍⚖️-👨🏻‍⚖️-👨🏽‍⚖️-👨🏾‍⚖️-👨🏿‍⚖️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍⚖️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍⚖️-👩🏼‍⚖️-👩🏻‍⚖️-👩🏽‍⚖️-👩🏾‍⚖️-👩🏿‍⚖️'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍⚖️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍⚖️-🧑🏼‍⚖️-🧑🏻‍⚖️-🧑🏽‍⚖️-🧑🏾‍⚖️-🧑🏿‍⚖️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🌾"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='👨‍🌾-👨🏻‍🌾-👨🏼‍🌾-👨🏽‍🌾-👨🏾‍🌾-👨🏿‍🌾'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🌾"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🌾-👩🏻‍🌾-👩🏼‍🌾-👩🏽‍🌾-👩🏾‍🌾-👩🏿‍🌾'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🌾"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='🧑‍🌾-🧑🏼‍🌾-🧑🏻‍🌾-🧑🏽‍🌾-🧑🏾‍🌾-🧑🏿‍🌾'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🍳"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)


const ArraySM='👨‍🍳-👨🏼‍🍳-👨🏻‍🍳-👨🏽‍🍳-👨🏾‍🍳-👨🏿‍🍳'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🍳"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🍳-👩🏼‍🍳-👩🏻‍🍳-👩🏽‍🍳-👩🏾‍🍳-👩🏿‍🍳'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🍳"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🍳-🧑🏼‍🍳-🧑🏻‍🍳-🧑🏽‍🍳-🧑🏾‍🍳-🧑🏿‍🍳'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🔧"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🔧-👨🏼‍🔧-👨🏻‍🔧-👨🏽‍🔧-👨🏾‍🔧-👨🏿‍🔧'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🔧"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🔧-👩🏼‍🔧-👩🏻‍🔧-👩🏽‍🔧-👩🏾‍🔧-👩🏿‍🔧'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🔧"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🔧-🧑🏼‍🔧-🧑🏻‍🔧-🧑🏽‍🔧-🧑🏾‍🔧-🧑🏿‍🔧'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🏭"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🏭-👨🏼‍🏭-👨🏻‍🏭-👨🏽‍🏭-👨🏾‍🏭-👨🏿‍🏭'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🏭"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🏭-👩🏼‍🏭-👩🏻‍🏭-👩🏽‍🏭-👩🏾‍🏭-👩🏿‍🏭'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🏭"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🏭-🧑🏼‍🏭-🧑🏻‍🏭-🧑🏽‍🏭-🧑🏾‍🏭-🧑🏿‍🏭'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍💼"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍💼-👨🏻‍💼-👨🏼‍💼-👨🏽‍💼-👨🏾‍💼-👨🏿‍💼'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍💼"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍💼-👩🏻‍💼-👩🏼‍💼-👩🏽‍💼-👩🏾‍💼-👩🏿‍💼'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍💼"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='🧑‍💼-🧑🏻‍💼-🧑🏼‍💼-🧑🏽‍💼-🧑🏾‍💼-🧑🏿‍💼'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🔬"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🔬-👨🏻‍🔬-👨🏼‍🔬-👨🏽‍🔬-👨🏾‍🔬-👨🏿‍🔬'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🔬"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🔬-👩🏻‍🔬-👩🏼‍🔬-👩🏽‍🔬-👩🏾‍🔬-👩🏿‍🔬'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🔬"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🔬-🧑🏻‍🔬-🧑🏼‍🔬-🧑🏽‍🔬-🧑🏾‍🔬-🧑🏿‍🔬'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍💻"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='👨‍💻-👨🏻‍💻-👨🏼‍💻-👨🏽‍💻-👨🏾‍💻-👨🏿‍💻'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍💻"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍💻-👩🏻‍💻-👩🏼‍💻-👩🏽‍💻-👩🏾‍💻-👩🏿‍💻'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍💻"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍💻-🧑🏻‍💻-🧑🏼‍💻-🧑🏽‍💻-🧑🏾‍💻-🧑🏿‍💻'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🎤"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='👨‍🎤-👨🏻‍🎤-👨🏼‍🎤-👨🏽‍🎤-👨🏾‍🎤-👨🏿‍🎤'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🎤"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🎤-👩🏻‍🎤-👩🏼‍🎤-👩🏽‍🎤-👩🏾‍🎤-👩🏿‍🎤'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🎤"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🎤-🧑🏻‍🎤-🧑🏼‍🎤-🧑🏽‍🎤-🧑🏾‍🎤-🧑🏿‍🎤'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🎨"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='👨‍🎨-👨🏻‍🎨-👨🏼‍🎨-👨🏽‍🎨-👨🏾‍🎨-👨🏿‍🎨'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🎨"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🎨-👩🏻‍🎨-👩🏼‍🎨-👩🏽‍🎨-👩🏾‍🎨-👩🏿‍🎨'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🎨"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🎨-🧑🏻‍🎨-🧑🏼‍🎨-🧑🏽‍🎨-🧑🏾‍🎨-🧑🏿‍🎨'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍✈️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍✈️-👨🏻‍✈️-👨🏼‍✈️-👨🏽‍✈️-👨🏾‍✈️-👨🏿‍✈️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍✈️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='👩‍✈️-👩🏻‍✈️-👩🏼‍✈️-👩🏽‍✈️-👩🏾‍✈️-👩🏿‍✈️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍✈️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍✈️-🧑🏻‍✈️-🧑🏼‍✈️-🧑🏽‍✈️-🧑🏾‍✈️-🧑🏿‍✈️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🚀"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🚀-👨🏻‍🚀-👨🏼‍🚀-👨🏽‍🚀-👨🏾‍🚀-👨🏿‍🚀'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🚀"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🚀-👩🏻‍🚀-👩🏼‍🚀-👩🏽‍🚀-👩🏾‍🚀-👩🏿‍🚀'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🚀"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🚀-🧑🏻‍🚀-🧑🏼‍🚀-🧑🏽‍🚀-🧑🏾‍🚀-🧑🏿‍🚀'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}




$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🚒"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🚒-👨🏻‍🚒-👨🏼‍🚒-👨🏽‍🚒-👨🏾‍🚒-👨🏿‍🚒'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🚒"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🚒-👩🏻‍🚒-👩🏼‍🚒-👩🏽‍🚒-👩🏾‍🚒-👩🏿‍🚒'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🚒"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🚒-🧑🏻‍🚒-🧑🏼‍🚒-🧑🏽‍🚒-🧑🏾‍🚒-🧑🏿‍🚒'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👷‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='👷‍♂️-👷🏻‍♂️-👷🏼‍♂️-👷🏽‍♂️-👷🏾‍♂️-👷🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👷‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👷‍♀️-👷🏻‍♀️-👷🏼‍♀️-👷🏽‍♀️-👷🏾‍♀️-👷🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👷"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👷-👷🏻-👷🏼-👷🏽-👷🏾-👷🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🕵️‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🕵️‍♂️-🕵🏻‍♂️-🕵🏼‍♂️-🕵🏽‍♂️-🕵🏾‍♂️-🕵🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🕵️‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🕵️‍♀️-🕵🏻‍♀️-🕵🏼‍♀️-🕵🏽‍♀️-🕵🏾‍♀️-🕵🏿‍♀️'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).parent().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🕵️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🕵️-🕵🏻-🕵🏼-🕵🏽-🕵🏾-🕵🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👮‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👮‍♂️-👮🏻‍♂️-👮🏼‍♂️-👮🏽‍♂️-👮🏾‍♂️-👮🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👮‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👮‍♀️-👮🏻‍♀️-👮🏼‍♀️-👮🏽‍♀️-👮🏾‍♀️-👮🏿‍♀️'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👮"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👮-👮🏻-👮🏼-👮🏽-👮🏾-👮🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💂‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💂‍♂️-💂🏻-💂🏼-💂🏽-💂🏾-💂🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💂‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💂‍♀️-💂🏻‍♀️-💂🏼‍♀️-💂🏽‍♀️-💂🏾‍♀️-💂🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💂"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💂-💂🏻-💂🏼-💂🏽-💂🏾-💂🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🎅"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🎅-🎅🏻-🎅🏼-🎅🏽-🎅🏾-🎅🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤶"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤶-🤶🏻-🤶🏼-🤶🏽-🤶🏾-🤶🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🦸‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🦸‍♂️-🦸🏻‍♂️-🦸🏼‍♂️-🦸🏽‍♂️-🦸🏾‍♂️-🦸🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🦸‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🦸‍♀️-🦸🏻‍♀️-🦸🏼‍♀️-🦸🏽‍♀️-🦸🏾‍♀️-🦸🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🦸"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🦸-🦸🏻-🦸🏼-🦸🏽-🦸🏾-🦸🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🦹‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🦹‍♂️-🦹🏻‍♂️-🦹🏼‍♂️-🦹🏽‍♂️-🦹🏾‍♂️-🦹🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🦹‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🦹‍♀️-🦹🏻‍♀️-🦹🏼‍♀️-🦹🏽‍♀️-🦹🏾‍♀️-🦹🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🦹"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🦹-🦹🏻-🦹🏼-🦹🏽-🦹🏾-🦹🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧙‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧙‍♂️-🧙🏻‍♂️-🧙🏼‍♂️-🧙🏽‍♂️-🧙🏾‍♂️-🧙🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧙‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧙‍♀️-🧙🏻‍♀️-🧙🏼‍♀️-🧙🏽‍♀️-🧙🏾‍♀️-🧙🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧙"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧙-🧙🏻-🧙🏼-🧙🏽-🧙🏾-🧙🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧚‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧚‍♂️-🧚🏻‍♂️-🧚🏼‍♂️-🧚🏽‍♂️-🧚🏾‍♂️-🧚🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();



});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧚"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧚-🧚🏻‍♀️-🧚🏼‍♀️-🧚🏽‍♀️-🧚🏾‍♀️-🧚🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧚"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧚-🧚🏻-🧚🏼-🧚🏽-🧚🏾-🧚🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}




$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧛‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧛‍♂️-🧛🏻‍♂️-🧛🏼‍♂️-🧛🏽‍♂️-🧛🏾‍♂️-🧛🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧛‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧛‍♀️-🧛🏻‍♀️-🧛🏼‍♀️-🧛🏽‍♀️-🧛🏾‍♀️-🧛🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧛"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧛-🧛🏻-🧛🏼-🧛🏽-🧛🏾-🧛🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧜‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧜‍♂️-🧜🏻‍♂️-🧜🏼‍♂️-🧜🏽‍♂️-🧜🏾‍♂️-🧜🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧜"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧜-🧜🏻-🧜🏼-🧜🏽-🧜🏾-🧜🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧜‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧜‍♀️-🧜🏻‍♀️-🧜🏼‍♀️-🧜🏽‍♀️-🧜🏾‍♀️-🧜🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧝‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)


const ArraySM='🧝‍♂️-🧝🏻‍♂️-🧝🏼‍♂️-🧝🏽‍♂️-🧝🏾‍♂️-🧝🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧝‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧝‍♀️-🧝🏻‍♀️-🧝🏼‍♀️-🧝🏽‍♀️-🧝🏾‍♀️-🧝🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧝"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧝-🧝🏻-🧝🏼-🧝🏽-🧝🏾-🧝🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💆‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💆‍♂️-💆🏻‍♂️-💆🏼‍♂️-💆🏽‍♂️-💆🏾‍♂️-💆🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💆‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💆‍♀️-💆🏻‍♀️-💆🏼‍♀️-💆🏽‍♀️-💆🏾‍♀️-💆🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💆"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💆-💆🏻-💆🏼-💆🏽-💆🏾-💆🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;




});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💇‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💇‍♂️-💇🏻‍♂️-💇🏼‍♂️-💇🏽‍♂️-💇🏾‍♂️-💇🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💇‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💇‍♀️-💇🏻‍♀️-💇🏼‍♀️-💇🏽‍♀️-💇🏾‍♀️-💇🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💇"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💇-💇🏻-💇🏼-💇🏽-💇🏾-💇🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🚶‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🚶‍♂️-🚶🏻‍♂️-🚶🏼‍♂️-🚶🏽‍♂️-🚶🏾‍♂️-🚶🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🚶‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🚶‍♀️-🚶🏻‍♀️-🚶🏼‍♀️-🚶🏽‍♀️-🚶🏾‍♀️-🚶🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🚶‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🚶‍♂️-🚶🏻-🚶🏼-🚶🏽-🚶🏾-🚶🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧍‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='🧍‍♂️-🧍🏻‍♂️-🧍🏼‍♂️-🧍🏽‍♂️-🧍🏾‍♂️-🧍🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}




$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧍‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧍‍♀️-🧍🏻‍♀️-🧍🏼‍♀️-🧍🏽‍♀️-🧍🏾‍♀️-🧍🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧍"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='🧍-🧍🏻-🧍🏼-🧍🏽-🧍🏾-🧍🏿'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧎‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧎‍♂️-🧎🏻‍♂️-🧎🏼‍♂️-🧎🏽‍♂️-🧎🏾‍♂️-🧎🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧎‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧎‍♀️-🧎🏻‍♀️-🧎🏼‍♀️-🧎🏽‍♀️-🧎🏾‍♀️-🧎🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧎"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧎-🧎🏻-🧎🏼-🧎🏽-🧎🏾-🧎🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🦯"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🦯-👨🏻‍🦯-👨🏼‍🦯-👨🏽‍🦯-👨🏾‍🦯-👨🏿‍🦯'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🦯"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🦯-👩🏻‍🦯-👩🏼‍🦯-👩🏽‍🦯-👩🏾‍🦯-👩🏿‍🦯'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🦯"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🦯-🧑🏻‍🦯-🧑🏼‍🦯-🧑🏽‍🦯-🧑🏾‍🦯-🧑🏿‍🦯'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}




$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🦼"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🦼-👨🏻‍🦼-👨🏼‍🦼-👨🏽‍🦼-👨🏾‍🦼-👨🏿‍🦼'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🦼"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🦼-👩🏻‍🦼-👩🏼‍🦼-👩🏽‍🦼-👩🏾‍🦼-👩🏿‍🦼'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🦼"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🦼-🧑🏻‍🦼-🧑🏼‍🦼-🧑🏽‍🦼-🧑🏾‍🦼-🧑🏿‍🦼'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});

$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👨‍🦽"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👨‍🦽-👨🏻‍🦽-👨🏼‍🦽-👨🏽‍🦽-👨🏾‍🦽-👨🏿‍🦽'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="👩‍🦽"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='👩‍🦽-👩🏻‍🦽-👩🏼‍🦽-👩🏽‍🦽-👩🏾‍🦽-👩🏿‍🦽'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧑‍🦽"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧑‍🦽-🧑🏻‍🦽-🧑🏼‍🦽-🧑🏽‍🦽-🧑🏾‍🦽-🧑🏿‍🦽'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏃‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏃‍♂️-🏃🏻‍♂️-🏃🏼‍♂️-🏃🏽‍♂️-🏃🏾‍♂️-🏃🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏃‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏃‍♀️-🏃🏻‍♀️-🏃🏼‍♀️-🏃🏽‍♀️-🏃🏾‍♀️-🏃🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏃"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏃-🏃🏻-🏃🏼-🏃🏽-🏃🏾-🏃🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🕺"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🕺-🕺🏻-🕺🏼-🕺🏽-🕺🏾-🕺🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="💃"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='💃-💃🏻-💃🏼-💃🏽-💃🏾-💃🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🕴"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🕴-🕴🏻-🕴🏼-🕴🏽-🕴🏾-🕴🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧖‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧖‍♂️-🧖🏻‍♂️-🧖🏼‍♂️-🧖🏽‍♂️-🧖🏾‍♂️-🧖🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧖‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧖‍♀️-🧖🏻‍♀️-🧖🏼‍♀️-🧖🏽‍♀️-🧖🏾‍♀️-🧖🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧖"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧖-🧖🏻-🧖🏼-🧖🏽-🧖🏾-🧖🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧗‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='🧗‍♂️-🧗🏻‍♂️-🧗🏼‍♂️-🧗🏼‍♂️-🧗🏾‍♂️-🧗🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧗‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧗‍♀️-🧗🏻‍♀️-🧗🏼‍♀️-🧗🏽‍♀️-🧗🏾‍♀️-🧗🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧗"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧗-🧗🏻-🧗🏼-🧗🏽-🧗🏾-🧗🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏇"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏇-🏇🏻-🏇🏼-🏇🏽-🏇🏾-🏇🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏌️‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏌️‍♂️-🏌🏻‍♂️-🏌🏼‍♂️-🏌🏽‍♂️-🏌🏾‍♂️-🏌🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏌️‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏌️‍♀️-🏌️‍♀️-🏌🏼‍♀️-🏌🏽‍♀️-🏌🏾‍♀️-🏌🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏌️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏌️-🏌🏻-🏌🏼-🏌🏽-🏌🏾-🏌🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏄‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏄‍♂️-🏄🏻‍♂️-🏄🏼‍♂️-🏄🏽‍♂️-🏄🏾‍♂️-🏄🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏄‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏄‍♀️-🏄🏻‍♀️-🏄🏼‍♀️-🏄🏽‍♀️-🏄🏾‍♀️-🏄🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏄"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏄-🏄🏻-🏄🏼-🏄🏽-🏄🏾-🏄🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🚣‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🚣‍♂️-🚣🏻‍♂️-🚣🏼‍♂️-🚣🏽‍♂️-🚣🏾‍♂️-🚣🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🚣‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🚣‍♀️-🚣🏻‍♀️-🚣🏼‍♀️-🚣🏽‍♀️-🚣🏾‍♀️-🚣🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🚣"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🚣-🚣🏻-🚣🏼-🚣🏽-🚣🏾-🚣🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏊‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏊‍♂️-🏊🏻‍♂️-🏊🏼‍♂️-🏊🏽‍♂️-🏊🏾‍♂️-🏊🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏊‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏊‍♀️-🏊🏻‍♀️-🏊🏼‍♀️-🏊🏽‍♀️-🏊🏾‍♀️-🏊🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏊"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏊-🏊🏻-🏊🏼-🏊🏽-🏊🏾-🏊🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="⛹️‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='⛹️‍♂️-⛹🏻‍♂️-⛹🏼‍♂️-⛹🏽‍♂️-⛹🏾‍♂️-⛹🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}




$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="⛹️‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='⛹️‍♀️-⛹🏻‍♀️-⛹🏼‍♀️-⛹🏽‍♀️-⛹🏾‍♀️-⛹🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="⛹️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='⛹️-⛹🏻-⛹🏼-⛹🏽-⛹🏾-⛹🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏋️‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏋️‍♂️-🏋🏻‍♂️-🏋🏼‍♂️-🏋🏽‍♂️-🏋🏾‍♂️-🏋🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏋️‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏋️‍♀️-🏋🏻‍♀️-🏋🏼‍♀️-🏋🏽‍♀️-🏋🏾‍♀️-🏋🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🏋️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🏋️-🏋🏻-🏋🏼-🏋🏽-🏋🏾-🏋🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🚴‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🚴‍♂️-🚴🏻‍♂️-🚴🏼‍♂️-🚴🏽‍♂️-🚴🏾‍♂️-🚴🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🚴‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🚴‍♀️-🚴🏻‍♀️-🚴🏼‍♀️-🚴🏽‍♀️-🚴🏾‍♀️-🚴🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;

});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🚴"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🚴-🚴🏻-🚴🏼-🚴🏽-🚴🏾-🚴🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤸‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤸‍♂️-🤸🏻‍♂️-🤸🏼‍♂️-🤸🏽‍♂️-🤸🏾‍♂️-🤸🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤸‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤸‍♀️-🤸🏻‍♀️-🤸🏼‍♀️-🤸🏽‍♀️-🤸🏾‍♀️-🤸🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}




$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤸"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤸-🤸🏻-🤸🏼-🤸🏽-🤸🏾-🤸🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤾‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤾‍♂️-🤾🏻‍♂️-🤾🏼‍♂️-🤾🏽‍♂️-🤾🏾‍♂️-🤾🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤾‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤾‍♀️-🤾🏻‍♀️-🤾🏼‍♀️-🤾🏽‍♀️-🤾🏾‍♀️-🤾🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤾"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤾-🤾🏻-🤾🏼-🤾🏽-🤾🏾-🤾🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});




$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤽‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤽‍♂️-🤽🏻‍♂️-🤽🏼‍♂️-🤽🏽‍♂️-🤽🏾‍♂️-🤽🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤽‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤽‍♀️-🤽🏻‍♀️-🤽🏼‍♀️-🤽🏽‍♀️-🤽🏾‍♀️-🤽🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤽"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤽-🤽🏻-🤽🏼-🤽🏽-🤽🏾-🤽🏿'.split('-')
ArraySM.map(emoji =>  $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤹‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)

const ArraySM='🤹‍♂️-🤹🏻‍♂️-🤹🏼‍♂️-🤹🏽‍♂️-🤹🏾‍♂️-🤹🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;



});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤹‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤹‍♀️-🤹🏻‍♀️-🤹🏼‍♀️-🤹🏽‍♀️-🤹🏾‍♀️-🤹🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🤹"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🤹-🤹🏻-🤹🏼-🤹🏽-🤹🏾-🤹🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}


$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧘‍♂️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧘‍♂️-🧘🏻‍♂️-🧘🏼‍♂️-🧘🏽‍♂️-🧘🏾‍♂️-🧘🏿‍♂️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}

$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();

});

$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;
});



$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧘‍♀️"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧘‍♀️-🧘🏻‍♀️-🧘🏼‍♀️-🧘🏽‍♀️-🧘🏾‍♀️-🧘🏿‍♀️'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});


$(document.body).on(__event,'div.emoji-content>div:not(#emoji-recently)>span>img[alt="🧘"]',function(){
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
if($(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').length !==0){
return false;
}else{
$(this).parent().addClass('open-picker_J_S_E_E_kZ')
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()
$(this).closest('.emoji-content').next()
.append(`
<div class=emoji-picker__variant-overlay>
<div class=emoji-picker__variant-popup>


</div> 
</div>
`)
const ArraySM='🧘-🧘🏻-🧘🏼-🧘🏽-🧘🏾-🧘🏿'.split('-')
ArraySM.map(emoji => $(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup').append(`${emoji}`))
RunNewBody();
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay>div.emoji-picker__variant-popup>img').addClass('img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f')
}



$("img.img_g_t_r_e_t_erwq_d_eq_w_s_a_r_u_f").click(function(){
const ImgSrc=$(this).attr('src')
const ImgAlt=$(this).attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_input_4687433698632')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()


GetLastEmoji(ImgAlt)
$(this).parent().parent().remove();




});
$(this).parent().removeClass('open-picker_J_S_E_E_kZ')
return false;


});





























///frhtgfjz



$(document.body).on('click','.emoji_tw_t__render_f_o_r_m_l_o',function(e){
e.stopImmediatePropagation()
const ImgSrc=$(this).find("img").attr('src')
const ImgAlt=$(this).find("img").attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev().find('div:eq(0)>div>div:eq(1)>div>div:eq(0)')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')


$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')

$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()
});




$(document.body).on("click",'.emoji-content>div:not(.emoji-recently)>span',function(e) {
e.stopImmediatePropagation()
if($(this).hasClass("open-picker_J_S_E_E_kZ")){
return false;
}else{


const ImgSrc=$(this).find("img").attr('src')
const ImgAlt=$(this).find("img").attr('alt')



const inputSrc=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev().find('div:eq(0)>div>div:eq(1)>div>div:eq(0)')

const removeSpan=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_n_577544889085333')


const emoji_input_icon=$(this).closest('.emojiPicker_p_h_i_d_Tw').prev()
.find('div.div_ref_css_i56886434548>div.row>div.col-8>div.div_ref_css_in8754589844>div.div_ref_css_emoji_p_65448986434332')



// Remove emoji-picker__variant-overlay
$(this).closest('.emoji-content').next().find('div.emoji-picker__variant-overlay').remove()




$(removeSpan).hide()
$(emoji_input_icon).addClass('div_ref_css_emoji_p_65448986434dd332TT')

$(inputSrc).find('br').remove()
$(inputSrc).append(`
<img contenteditable="true"  draggable="false" class="emoji img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji" alt="${ImgAlt}" src="${ImgSrc}">
`)
$(inputSrc).blur()
GetLastEmoji(ImgAlt)
RunNewBody();
}
return false;
});






function GetLastEmoji(alt){
const GetLocalStorge=localStorage.getItem('emojiPicker_recent_T')
const imgString=alt.concat("_")
if(GetLocalStorge==null){
localStorage.setItem('emojiPicker_recent_T',imgString)
}else{
const GetLocalStorgeCheck=localStorage.getItem('emojiPicker_recent_T')
const ArrayEmoji=GetLocalStorgeCheck.split("_")
const ArrayV=ArrayEmoji.some(e=>e==alt)
if(ArrayEmoji.length > 70){
if(ArrayV==false){
ArrayEmoji.shift();
localStorage.setItem('emojiPicker_recent_T',ArrayEmoji.join('_')+imgString)
$("div.c__emoji-recently").find('div.div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW').after(`<span class='emoji_tw_t__render_f_o_r_m_l_o'>${alt}</span>`)
$(document.body).find('div.c__emoji-recently').find('span').eq(70).remove();
}

}else{
if(ArrayV==false){
$("div.c__emoji-recently").find('div.div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW').after(`<span class='emoji_tw_t__render_f_o_r_m_l_o'>${alt}</span>`)
localStorage.setItem('emojiPicker_recent_T',GetLocalStorgeCheck+imgString)
}
}



}
RunNewBody();
}








function RunNewBody(){
twemoji.parse(document.body,{size: 'svg', ext: '.svg' });
}

});



