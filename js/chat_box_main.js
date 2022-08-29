


const users_Array=[

{
Active: true,
users: [
{
online: true,
offline: false,
busy: false,
img_file__vs: '/images/__vs_profile/',
img: 'aa4d434489c1-1635549391273ce45c0ba2df0_vs.jpg',
name: 'Nonoalkouz',
idname: 's_Nonoalkouz__1000006438'
}
],
id_room: 'd0f3548dx8c34x41c5',
message: [
{owner_id:'6655886544',owner_key:true,time:new Date(),inner_messges:'fbgjg hallo fbfhdsgfs'}


],
__v_build: '2021-12-02T15:12:10.795Z',
__v: 0
},
{
Active: true,
users: [
{
online: true,
offline: false,
busy: false,
img_file__vs: '/images/__vs_profile/',
img: 'c1197ac98253-1638462529617995a542ef380_vs.jpg',
name: 'useralkouz',
idname: 's_useralkouz__100000440'
}
],
id_room: 'd7337be4xb6b0x41ae',
message: [],
__v_build: '2021-12-02T15:28:58.422Z',
},




{
Active: true,
users: [
{
online: false,
offline: false,
busy: true,
img_file__vs: '/images/__vs_profile/',
img: '2005c78403e1-16342215627165749f128a77f_vs.jpg',
name: 'Anos kouz',
idname: 's_useralkouz__100000440'
}
],
id_room: 'd7337be4xb6b0x41ae',
message: [],
__v_build: '2021-12-02T15:28:58.422Z',
},
];



(async()=>{
try{
const response_users=users_Array;

const online_nummber=response_users.filter((x)=>x.users[0].online===true)
const besy_nummber=response_users.filter((x)=>x.users[0].busy===true)




const AllUsersNummber=online_nummber.length+besy_nummber.length;
if(AllUsersNummber > 4){
$("div.div_h_t_533478_ref_5784").addClass('div_h_t_533478_ref_5784_toggeld')
}else{
$("div.div_h_t_533478_ref_5784").removeClass('div_h_t_533478_ref_5784_toggeld')
}
$('span.span_ref__css5797643490').text(online_nummber.length)




async function __read_localStorage(){

try{
const users=JSON.parse(localStorage.getItem('users_box'))
if(users!==null){

for(let img of users){
const img_src=img.src.replace('/images/__vs_profile/','')
const findRoom_id=response_users.filter((x)=>x.users[0].img==img_src)
const status=$(`.div_ref_css_6533789732>img[src='${img.src}']`).next().prop('classList')[1]

for(let userbox of findRoom_id){
const __Date=userbox.__v_build;
const CreateNewBox=/*html*/`
<div class='div_ref_css_5774533377_CC div_ref_css_56876432267TT_CC div_ref_css_56876432267TT_CCTT_56763'>
<div class="div_ref_css78909654433 div_ref_css78909654434">
<div class="div_css__CC787540975">
<div class='div_ref_css_box_568766435873_557'>
<img src="${userbox.users[0].img_file__vs}${userbox.users[0].img}" class="img_ref_css_box_568766435873_556">
<span class='span_ref_css_b_579753234884_css ${status}'></span>
</div>
<div class="div_ref_css_5698643378">${userbox.users[0].name}</div>
</div>
<div class="div_css___CC787540976">
<img class="img_ref_5665322654378_up" src="./web-img/img_578754337893_up.svg" title="up">
<button type="button" class='close btn_close_ref_css_57874347993' aria-label="Close">
<span aria-hidden="true" >&times;</span>
</button>
</div>
</div>


<div class='div_ref_m_css65447974335 div_ref_m_css6885334785 div_ref_m_css654479743TT'>


<div class='div_ref_css_664469864544'>
<div class='div_ref_css_z_d78644699532'>
<div>Wir haben seit <span>${__Date}</span> eine Freundschaft.</div>

</div>
</div>

<div class='div_ref_mm_cssr7975448964 div_ref_mm_cssr7975448965'>
<div class='div_ref_img_css644787543'>
<img src="${userbox.users[0].img_file__vs}${userbox.users[0].img}" class="img_ref_css_box_568766435873_556_mm_i">
</div>
<div class='div_ref_mm_css6545886433'>
<p class='p_s_n_65436898563_Nm'>dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv</p>
<span class='span_f_f_d_6_r_4_5_S'>14:15</span>
</div>
</div>




<div class='div_ref_mm_cssr7975448964 div_ref_mm_cssr7975448966'>
<div class='div_ref_img_css644787543'>
<img src="${userbox.users[0].img_file__vs}${userbox.users[0].img}" class="img_ref_css_box_568766435873_556_mm_i">
</div>

<div class='div_ref_mm_css6545886434'>
<p class='p_s_n_65436898563_Nm'>dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv</p>
<span class='span_f_f_d_6_r_4_5_S'>14:15</span>
</div>
</div>





</div>


<div class='div_ref_css_i5688643PP'>
<div class='div_ref_css_i56886434548 div_ref_css_i97556997453'>
<div class='row'>
<div class='col-2'>
<div class='div_ref_css_i8754589843'>
<label>
<input type='file' class='input_h_579753379_r_s_f_o_r' accept='image/jpege,image/png,image/jpg'/>
<img src='./web-img/media_s.svg' class='img_h_tI_i_M_edia_s_s76325972'>
</label>
</div>
</div>


<div class='col-8'>
<div class='div_ref_css_in8754589844'>
<div class=' form-control div_ref_css_input_4687433698632 div_ref_css_input_4687433698633 div_ref_css_input_4687433698634' contenteditable='true'></div>
<div class='div_n_577544889085333'><span>Neue Nachricht Schriben</span></div> 

<div class='div_ref_css_emoji_p_65448986434332'>
<img src='./web-img/emoji_s.svg' class='img_h_tI_i_M_edia_s_s76325972'>
</div>

</div>
</div>



<div class='col-2'>
<div class='div_ref_css_in8754556569_ss'>
<img src='../web-img/send_s.svg' class='img_h_tI_i_M_edia_s_s76325972_s'>
<span class='span_n_u_i_o_540975433f'>0</span>
</div>


</div>
</div>




</div>

<div class='div_ref_css_img_p_544887436974'>


</div>


</div>


<div class="emojiPicker_p_h_i_d_Tw"></div>
</div>
`





$('.div_ref_c_578643357').append(CreateNewBox)


}





}


}

}catch(err){
localStorage.removeItem('users_box')
}

}
__read_localStorage();






async function Users_box(){
try{



for(let user of response_users){

const inner_chat_box=/*html*/`
<div class='div_ref_css_65433488 div_ref_BB_66534348832 t_css_6543699732'>
<div class='float-left div_ref_css_6533789732'>
<img src='${user.users[0].img_file__vs}${user.users[0].img}' data-v-src=${user.users[0].img} class='img_ref_css_box_56876432226'/>
${(()=>{
if(user.users[0].online===true){
return `<span class='span_ref_css_b_579753234883 span_ref_css_b_5797532348111'></span>`
}else if(user.users[0].busy===true){
return `<span class='span_ref_css_b_579753234883 span_ref_css_b_5797532348222'></span>`
}else{
return `<span class='span_ref_css_b_579753234883 span_ref_css_b_5797532348333'></span>`
}
})()}



<div class='div_ref_css_n_578974344893'>${user.users[0].name}</div>
</div>



<div class='float-right'>

</div>
</div>
`

$('div.div_h_t_533477_ref_5783').append(inner_chat_box)
}


//FIXME: Careat Chat box
$("div.div_ref_BB_66534348832").on('click',function(e){
e.stopImmediatePropagation()
const img_data_src=$(this).find('div').eq(0).find('img').attr('data-v-src')
const findRoom_id=response_users.filter((x)=>x.users[0].img==img_data_src)
if(!findRoom_id.length){
console.log('Stop Bitte')
}else{
const status=$(this).find('div').eq(0).find('span').prop('classList')[1]
for(let userbox of findRoom_id){
const Img_Storge=`${userbox.users[0].img_file__vs}${userbox.users[0].img}`
const __Date=userbox.__v_build;

const CreateNewBox=/*html*/`
<div class='div_ref_css_5774533377_CC div_ref_css_56876432267TT_CC div_ref_css_56876432267TT_CCTT_56763 div_ref_css_56876432267TT_CCTT'>
<div class="div_ref_css78909654433 div_ref_css78909654434">
<div class="div_css__CC787540975">
<div class='div_ref_css_box_568766435873_557'>
<img src="${userbox.users[0].img_file__vs}${userbox.users[0].img}" class="img_ref_css_box_568766435873_556">
<span class='span_ref_css_b_579753234884_css ${status}'></span>
</div>
<div class="div_ref_css_5698643378">${userbox.users[0].name}</div>
</div>
<div class="div_css___CC787540976">
<img class="img_ref_5665322654378_up" src="./web-img/img_578754337893_down.svg" title="down">
<button type="button" class='close btn_close_ref_css_57874347993' aria-label="Close">
<span aria-hidden="true" >&times;</span>
</button>
</div>
</div>


<div class='div_ref_m_css65447974335 div_ref_m_css6885334785 div_ref_m_css654479743TT'>


<div class='div_ref_css_664469864544'>
<div class='div_ref_css_z_d78644699532'>
<div>Wir haben seit <span>${__Date}</span> eine Freundschaft.</div>

</div>
</div>

<div class='div_ref_mm_cssr7975448964 div_ref_mm_cssr7975448965'>
<div class='div_ref_img_css644787543'>
<img src="${userbox.users[0].img_file__vs}${userbox.users[0].img}" class="img_ref_css_box_568766435873_556_mm_i">
</div>
<div class='div_ref_mm_css6545886433'>
<p class='p_s_n_65436898563_Nm'>dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv</p>
<span class='span_f_f_d_6_r_4_5_S'>14:15</span>
</div>
</div>




<div class='div_ref_mm_cssr7975448964 div_ref_mm_cssr7975448966'>
<div class='div_ref_img_css644787543'>
<img src="${userbox.users[0].img_file__vs}${userbox.users[0].img}" class="img_ref_css_box_568766435873_556_mm_i">
</div>

<div class='div_ref_mm_css6545886434'>
<p class='p_s_n_65436898563_Nm'>dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv dvdvdvedegv</p>
<span class='span_f_f_d_6_r_4_5_S'>14:15</span>
</div>
</div>





</div>


<div class='div_ref_css_i5688643PP'>
<div class='div_ref_css_i56886434548 div_ref_css_i97556997453'>
<div class='row'>
<div class='col-2'>
<div class='div_ref_css_i8754589843'>
<label>
<input type='file' class='input_h_579753379_r_s_f_o_r' accept='image/jpege,image/png,image/jpg'/>
<img src='./web-img/media_s.svg' class='img_h_tI_i_M_edia_s_s76325972'>
</label>
</div>
</div>


<div class='col-8'>
<div class='div_ref_css_in8754589844'>
<div class=' form-control div_ref_css_input_4687433698632 div_ref_css_input_4687433698633 div_ref_css_input_4687433698634' contenteditable='true'></div>
<div class='div_n_577544889085333'><span>Neue Nachricht Schriben</span></div> 

<div class='div_ref_css_emoji_p_65448986434332'>
<img src='./web-img/emoji_s.svg' class='img_h_tI_i_M_edia_s_s76325972'>
</div>

</div>
</div>



<div class='col-2'>
<div class='div_ref_css_in8754556569_ss'>
<img src='../web-img/send_s.svg' class='img_h_tI_i_M_edia_s_s76325972_s'>
<span class='span_n_u_i_o_540975433f'>0</span>
</div>


</div>
</div>




</div>

<div class='div_ref_css_img_p_544887436974'>


</div>


</div>



<div class="emojiPicker_p_h_i_d_Tw"></div>

</div>






`
if($('.div_ref_c_578643357').find(`img[src='${userbox.users[0].img_file__vs}${userbox.users[0].img}']`).length > 0 
|| $('.div_ref_c_578643357').find(`div:contains('${userbox.users[0].name}')`).length > 0 
){



if($('.div_ref_c_578643357').find(`img[src='${userbox.users[0].img_file__vs}${userbox.users[0].img}']`)
.closest('.div_ref_css_5774533377_CC').hasClass('div_ref_css_56876432267TT_CCTT')){
return false;
}else{
$('.div_ref_c_578643357').find(`img[src='${userbox.users[0].img_file__vs}${userbox.users[0].img}']`)
.closest('.div_ref_css_5774533377_CC').addClass('div_ref_css_56876432267TT_CCTT')

$('.div_ref_c_578643357').find(`img[src='${userbox.users[0].img_file__vs}${userbox.users[0].img}']`)
.closest('.div_ref_css_5774533377_CC').find('img.img_ref_5665322654378_up')
.attr('src','./web-img/img_578754337893_down.svg')
.attr('title','down')






}





}else{


if($('.div_ref_c_578643357').children().length > 1){

const Img_src=$('.div_ref_c_578643357>div')
.eq(1).find('div.div_ref_css78909654433>div.div_css__CC787540975>div.div_ref_css_box_568766435873_557>img')
.attr('src')
$('.div_ref_c_578643357>div').eq(1).remove();
$('.div_ref_c_578643357').append(CreateNewBox)




const users=JSON.parse(localStorage.getItem('users_box') || '[]' )
const user={
key:true,
src:Img_Storge
}
users.push(user)
localStorage.setItem('users_box',JSON.stringify(users.filter(x=>x.src!==Img_src)))

}else{
$('.div_ref_c_578643357').append(CreateNewBox)
const users=JSON.parse(localStorage.getItem('users_box') || '[]' )
const user={
key:true,
src:Img_Storge
}
users.push(user)
localStorage.setItem('users_box',JSON.stringify(users))


}
}




}








}
})





//FIXME: Chat box Img up or dwon
$(document.body).on('click','.img_ref_5665322654378_up',function(e){
e.stopImmediatePropagation()
if($(this).attr('title')=='up'){
$(this).attr('src','./web-img/img_578754337893_down.svg').attr('title','down')
$(this).parent().parent().parent().addClass('div_ref_css_56876432267TT_CCTT')
}else{


$(this).attr('src','./web-img/img_578754337893_up.svg').attr('title','up')


$(this).parent().parent().parent().removeClass('div_ref_css_56876432267TT_CCTT')


}




})




//FIXME: Remove Chat Box
$(document.body).on('click','.btn_close_ref_css_57874347993',function(e){
e.stopImmediatePropagation()
$(this).closest('.div_ref_css_5774533377_CC').remove();
const findImg_src=$(this).closest('.div_css___CC787540976').prev().find('.div_ref_css_box_568766435873_557>img').attr('src')
const users=JSON.parse(localStorage.getItem('users_box'))

localStorage.setItem('users_box',JSON.stringify(users.filter(x=>x.src!==findImg_src)))
})




//FIXME: Key up Input
$(document.body).on('keyup','.div_ref_css_input_4687433698632',function(e){
if($(this).text().length > 0 || $(this).children('img').length >0){
$(this).next().hide()
$(this).next().next().addClass('div_ref_css_emoji_p_65448986434dd332TT')
$(this).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker').addClass('emoji-picker_toggeld_v1')

}else{
$(this).next().show()
$(this).next().next().removeClass('div_ref_css_emoji_p_65448986434dd332TT')
$(this).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker').removeClass('emoji-picker_toggeld_v1')
}


if($(this).text().length >20 || $(this).children('img').length > 7){
$(this).closest('.div_ref_css_i5688643PP').prev().addClass('div_ref_m_css654479743In')
$(this).next().next().addClass('div_ref_css_emoji_p_65448986434dd332TT_v2')
$(this).addClass('div_ref_css_input_4687433698633TT')
$(this).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker').addClass('emoji-picker_toggeld_v2')
}else{
$(this).closest('.div_ref_css_i5688643PP').prev().removeClass('div_ref_m_css654479743In')
$(this).removeClass('div_ref_css_input_4687433698633TT')
$(this).next().next().removeClass('div_ref_css_emoji_p_65448986434dd332TT_v2')
$(this).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker').removeClass('emoji-picker_toggeld_v2')
}







if(e.keyCode==13){
if($(this).text().length < 1 && $(this).children('img').length < 1 ){
$(this).children().remove()
return false;
}else{

$(this).next().show()
$(this).next().next().removeClass('div_ref_css_emoji_p_65448986434dd332TT')
$(this).next().next().removeClass('div_ref_css_emoji_p_65448986434dd332TT_v2')
$(this).removeClass('div_ref_css_input_4687433698633TT')
$(this).closest('.div_ref_css_i5688643PP').prev().removeClass('div_ref_m_css654479743In')
$(this).find('br').remove()
$(this).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker').removeClass('emoji-picker_toggeld_v1')
$(this).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker').removeClass('emoji-picker_toggeld_v2')


//FIXME: Start Find Text und Emoji from Input
const Img_src=$(this).find('img')
const Input_element=$(this)
let input_text=''






if($(Img_src).length > 0){
$(Img_src).each(function(){
$(Input_element).find($(this)[0]).replaceWith($(this).attr('alt'))
input_text=$(Input_element).text()
})
}else{
input_text=$(Input_element).text()
}


if(!input_text.length){
console.log('is null')
}else{
console.log(input_text)
$(Input_element).text('')
$(Input_element).children().remove()
}





}





}






})




//FIXME: Check if input has  img_emoji
$(document.body).on('blur','.div_ref_css_input_4687433698632',function(e){
if($(this).children('img').length > 0){
$(this).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker').addClass('emoji-picker_toggeld_v1')
}





const InputLength=$(this).children('img').length+$(this).text().length
if($(this).children('img').length > 7 || InputLength > 20 ){
$(this).closest('.div_ref_css_i5688643PP').prev().addClass('div_ref_m_css654479743In')
$(this).next().next().addClass('div_ref_css_emoji_p_65448986434dd332TT_v2')
$(this).addClass('div_ref_css_input_4687433698633TT')
$(this).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker').addClass('emoji-picker_toggeld_v2')
}



})





//FIXME: ADD Img In div 
$(document.body).on('change','.input_h_579753379_r_s_f_o_r', async function(e){
e.stopImmediatePropagation()
const Input=$(this).prop('files')[0]
const root_div=$(this).closest('div.div_ref_css_i5688643PP').find('.div_ref_css_img_p_544887436974')
const root_div_chat=$(this).closest('div.div_ref_css_i5688643PP').prev();
const root_div_btn_send=$(this).closest('div.row').find('div.col-2>div.div_ref_css_in8754556569_ss')




try{

$(this).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker')
.removeClass('emoji-picker_toggeld_v1 emoji-picker_toggeld_v2 emoji-picker_toggeld')


const InputFiled=Input;
var fs
fs=new FileReader();
fs.onload=function(){
$(root_div_chat).addClass('div_ref_m_css654479743_In_P_m')
$(root_div).append(`
<div class='div_ref_css_r_764337942II'>
<img src='${URL.createObjectURL(InputFiled)}' class='img_ref_css_d_i_6544898534323'>
<div class='div_d_r_l__ref_css_6533797433'>
<button type="button" class="close btn_close_ref_css_5787434793229_i" aria-label="Close">
<span aria-hidden="true">×</span>
</button>
</div>
</div>
`)
$(root_div_btn_send).addClass('div_ref_css_in8754556569_ss_ip');
$(root_div_btn_send).find('span.span_n_u_i_o_540975433f')
.text( parseInt($(root_div_btn_send).find('span.span_n_u_i_o_540975433f').text() ) + 1)
$(root_div_btn_send).find('span.span_n_u_i_o_540975433f').fadeIn();

}
fs.readAsText(InputFiled)


}catch(err){
console.log(err)
}


})




//FIXME: Remove Img
$(document.body).on('click','.div_d_r_l__ref_css_6533797433',function(e){
e.stopImmediatePropagation()

const root_div_btn_send=$(this).closest('div.div_ref_css_img_p_544887436974').prev()
.find('div.row>div.col-2>.div_ref_css_in8754556569_ss')
const root_div_chat=$(this).closest('div.div_ref_css_img_p_544887436974').parent().prev()
const Perant_length=$(this).parent().parent().children();




$(this).parent().remove()
$(root_div_btn_send).find('span').text(parseInt($(root_div_btn_send).find('span').text()) - 1)




if(Perant_length.length == 1 ){
$(root_div_chat).removeClass('div_ref_m_css654479743_In_P_m')
$(root_div_btn_send).find('span').text('0').fadeOut()
$(root_div_btn_send).removeClass('div_ref_css_in8754556569_ss_ip')

}else{
return false;
}





})



//FIXME: Focas Input with Span
$(document.body).on('click','.div_n_577544889085333',function(e){
e.stopImmediatePropagation()
$(this).prev().focus()
})




}catch{
throw new Error('Err_type_1____986889ß0965886534')
}

}
Users_box();









$(".input_t_ref_6786743489895433").keyup(function(e){

if($(this).val().length > 0){
$('.div_h_t_533477_ref_5783').css('display','none')
$('.div_h_t_533478_ref_5782').css('display','block')
}else{
$('.div_h_t_533477_ref_5783').css('display','block')
$('.div_h_t_533478_ref_5782').css('display','none')
}





const qeury=new RegExp('^' +$(this).val(),'i')
const resalt=response_users.filter((x)=>{
return qeury.test(x.users[0].name)
});

console.log(resalt)
});







}catch(err){
throw new Error('Err_type_1____986889ß0965886534')
}
})();














