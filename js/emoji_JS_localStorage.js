






$(document).ready(function(){
function renderEmoji(){
const GetLocalStorgeEmoji=localStorage.getItem('emojiPicker_recent_T')
if(GetLocalStorgeEmoji==null){
return false;
}else{
const GetLocalStorgeEmojiToArray=GetLocalStorgeEmoji.split("_").reverse();
GetLocalStorgeEmojiToArray.map(ele=>$("div.c__emoji-recently").append(`<span>${ele}</span>`))
$("div.c__emoji-recently").find('span:empty').remove();
twemoji.parse(document.body,{size: 'svg', ext: '.svg' });
}



}
renderEmoji();




})














