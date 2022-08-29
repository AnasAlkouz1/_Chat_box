



function getCharacterOffsetWithin_final(range, node) {
var treeWalker = document.createTreeWalker(
node,
NodeFilter.ELEMENT_NODE,
function(node) {
var nodeRange = document.createRange();
nodeRange.selectNodeContents(node);
return nodeRange.compareBoundaryPoints(Range.END_TO_END, range) < 1 ?
NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
},
false
);

var charCount = 0, lastNodeLength = 0;

if (range.startContainer.nodeType == 3) {
charCount += range.startOffset;
}

while (treeWalker.nextNode()) {
charCount += lastNodeLength;
lastNodeLength = 0;

if(range.startContainer != treeWalker.currentNode) {
if(treeWalker.currentNode instanceof Text) {
lastNodeLength += treeWalker.currentNode.length;
} else if(treeWalker.currentNode instanceof HTMLBRElement ||
treeWalker.currentNode instanceof HTMLImageElement /* ||
treeWalker.currentNode instanceof HTMLDivElement*/)
{
lastNodeLength++;
}
}
}

return charCount + lastNodeLength;
}

var update = function(ele) {
var el =ele
var range = window.getSelection().getRangeAt(0);



if(getCharacterOffsetWithin_final(range, el) > 0 || $(ele).children('img').length > 0 ){
$(ele).next().hide();
$(ele).next().next().addClass('div_ref_css_emoji_p_65448986434dd332TT')
}else{
$(ele).next().show()
$(ele).next().next().removeClass('div_ref_css_emoji_p_65448986434dd332TT')
}


if($(ele).children('img').length > 7 || getCharacterOffsetWithin_final(range, el) > 20 ){

$(ele).closest('.div_ref_css_i5688643PP').prev().addClass('div_ref_m_css654479743In')
$(ele).next().next().addClass('div_ref_css_emoji_p_65448986434dd332TT_v2')
$(ele).addClass('div_ref_css_input_4687433698633TT')
$(ele).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker').addClass('emoji-picker_toggeld_v2')
}else{
$(ele).closest('.div_ref_css_i5688643PP').prev().removeClass('div_ref_m_css654479743In')
$(ele).next().next().removeClass('div_ref_css_emoji_p_65448986434dd332TT_v2')
$(ele).removeClass('div_ref_css_input_4687433698633TT')
$(ele).closest('.div_ref_css_i5688643PP').next().find('.emoji-picker').removeClass('emoji-picker_toggeld_v2')
}
    





};







$(document.body).on("mouseup keyup keydown keypress",'.div_ref_css_input_4687433698632',function(){
if($(this).children().length > 0 ){
update($(this)[0])
}
});







// FIXME: Icon Click
$(document.body).on("click",'.img_h_l_d_t_A_f_R_t_z_e_w_er_d_tw_emoji',function(){
$(this).parent().blur()
});
