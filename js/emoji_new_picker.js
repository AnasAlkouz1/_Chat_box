

$(document.body).on('click','.div_ref_css_emoji_p_65448986434332', function(e){
e.stopImmediatePropagation()
if($(this).closest('.div_ref_css_i5688643PP').next().children().length > 0 ){
$(this).closest('.div_ref_css_i5688643PP').next().find('div.emoji-picker').toggleClass('emoji-picker_toggeld')
}else{
$(this).closest('.div_ref_css_i5688643PP').next().emojiPickerJS();
twemoji.parse(document.body,{size: 'svg', ext: '.svg' })




const Clone_emoji=$('div.input_f_654489897643236>div.emoji-picker>div.emoji-content>div.c__emoji-recently').html().replaceAll(`
<div class="div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW">
<div>Recently</div>
<div><img src="./web-img/close_emojiPicker.svg" class="img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW"></div>
</div>
`,
'')
$(this).closest('.div_ref_css_i5688643PP').next().find('div.emoji-picker>div.emoji-content>div.c__emoji-recently').append(Clone_emoji)




$(this).closest('.div_ref_css_i5688643PP').next().find('div.emoji-picker>div.emoji-content>div.c__emoji-recently').find('span').addClass('emoji_tw_t__render_f_o_r_m_l_o')


if($(this).closest('.div_ref_css_i5688643PP').next().find('div.emoji-picker>div.emoji-content>div.c__emoji-recently>div.div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW').length ==2){
$(this).closest('.div_ref_css_i5688643PP').next().find('div.emoji-picker>div.emoji-content>div.c__emoji-recently>div.div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW').eq(0).remove()
}





if($(this).prev().prev().hasClass('div_ref_css_input_4687433698633TT') ){
$(this).closest('.div_ref_css_i5688643PP').next().find('div.emoji-picker').toggleClass('emoji-picker_toggeld emoji-picker_toggeld_v2')
}else if ($(this).prev().prev().text().length > 0 || $(this).prev().prev().children('img').length > 0 ){
$(this).closest('.div_ref_css_i5688643PP').next().find('div.emoji-picker').toggleClass('emoji-picker_toggeld emoji-picker_toggeld_v1')
}else{
$(this).closest('.div_ref_css_i5688643PP').next().find('div.emoji-picker').toggleClass('emoji-picker_toggeld')
}
    


return false
}
});



    
$(document.body).on('click','.img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW',function(){
$(this).closest('.emoji-picker').removeClass('emoji-picker_toggeld')
});





$(document.body).ready(function(){
$('div.input_f_654489897643236').hide();
$('div.input_f_654489897643236').emojiPickerJS();
})
