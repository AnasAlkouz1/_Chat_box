




(function ($) {
const selectables = function(obj) {
$(obj).append(/*html*/`
<div class="emoji-picker">
<div class="emoji-selectables">
<span class="picker-emoji-sel emoji-recently active" data-emoji="recently">
<img src='./web-img/recently_Last_Em_TW.svg'>
</span>
<span class="picker-emoji-sel emoji-smileys" data-emoji="smileys">😀</span>
<span class="picker-emoji-sel emoji-peoples" data-emoji="peoples">🤵</span>
<span class="picker-emoji-sel emoji-food" data-emoji="food">🍎</span>
<span class="picker-emoji-sel emoji-symbos" data-emoji="symbos">❤️</span>
<span class="picker-emoji-sel emoji-nature" data-emoji="nature">🐇</span>
<span class="picker-emoji-sel emoji-activity" data-emoji="activity">⚽️</span>
<span class="picker-emoji-sel emoji-object" data-emoji="object ">💻</span>
<span class="picker-emoji-sel emoji-travel" data-emoji="travel">✈️</span>
<span class="picker-emoji-sel emoji-flags" data-emoji="flags">🏳️</span>
</div>
<div class="emoji-content">

<div id="emoji-recently" class="picker-emoji  picker-emoji-content c__emoji-recently active">
<div class='div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW'>
<div>Recently</div>
<div><img src='./web-img/close_emojiPicker.svg' class='img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW'></div>
</div>







</div>



<div id="emoji-smileys" class="picker-emoji  picker-emoji-content c__emoji-smileys">
<div class='div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW' >
<div>Smileys</div>
<div>
<img src='./web-img/close_emojiPicker.svg' class='img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW'>
</div>



</div>
</div>
<div id="emoji-peoples" class="picker-emoji picker-emoji-content c__emoji-peoples">
<div class='div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW' >
<div>Personen</div>
<div>
<img src='./web-img/close_emojiPicker.svg' class='img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW'>
</div>
</div>
</div>
<div id="emoji-foods" class="picker-emoji picker-emoji-content c__emoji-food">
<div class='div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW'>
<div>Essen & Trinken</div>
<div>
<img src='./web-img/close_emojiPicker.svg' class='img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW'>
</div>
</div>
</div>
<div id="emoji-symbos" class="picker-emoji picker-emoji-content c__emoji-symbos">
<div class='div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW' >
<div>Symbole</div>
<div>
<img src='./web-img/close_emojiPicker.svg' class='img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW'>
</div>
</div>
</div>
<div id="emoji-natures" class="picker-emoji picker-emoji-content c__emoji-nature">
<div class='div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW' >
<div>Tiere & Natur</div>
<div>
<img src='./web-img/close_emojiPicker.svg' class='img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW'>
</div>
</div>
</div>
<div id="emoji-activity" class="picker-emoji picker-emoji-content c__emoji-activity">
<div class='div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW' >
<div>Aktivität</div>
<div>
<img src='./web-img/close_emojiPicker.svg' class='img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW'>
</div>
</div>
</div>
<div id="emoji-object" class="picker-emoji picker-emoji-content c__emoji-object">
<div class='div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW' >
<div>Objekte</div>
<div>
<img src='./web-img/close_emojiPicker.svg' class='img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW'>
</div>
</div>
</div>

<div id="emoji-travel" class="picker-emoji picker-emoji-content c__emoji-travel">
<div class='div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW' >
<div>Reisen & Orte</div>
<div>
<img src='./web-img/close_emojiPicker.svg' class='img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW'>
</div>
</div>
</div>
<div id="emoji-flags" class="picker-emoji picker-emoji-content c__emoji-flags">
<div class='div_r_t_e_P_t_z_e_s_e_d_aw_r_emoji_tW' >
<div>Flaggen</div>
<div>
<img src='./web-img/close_emojiPicker.svg' class='img_C_l_s_T_h_hi_e_r_E_g_t_toggeld_t_h_E_m_TW'>
</div>
</div>
</div>

</div>


<div class='div_ref_emoji_P_r_s_a876534389093'></div>


<div>`);
return this;
}

$.fn.emojiPickerJS= function () {
selectables(this);
const smileys =`
😀-😃-😄-😁-😆-😅-😂-🤣-😇-😉-😊-🙂-🙃-😋-😗-😌-😗-😙-😚-😋-😌-😍-🥰-😘-😗-
😙-😚-🤪-😜-😝-😛-🤑-😎-🤓-🧐-🤠-🥳-🤗-🤡-😏-😶-😐-😑-😒-🙄-🤨-🤔-🤫-🤭-
🤥-😳-😟-😠-😡-🤬-😔-🙁-☹️-😬-🥺-😣-😖-😩-😩-🥱-😤-😮-😮-😱-😨-😰-😧-😥-
😪-🤤-😓-😭-🤩-😵-😵-🥴-😲-🤯-🤐-😷-🤕-🤒-🤮-🤢-🤧-🥵-🥶-😶-😴-💤-😈-👿-
👹-👺-💩-👻-💀-☠️-👽-🤖-🎃-😺-😸-😹-😻-😼-😽-🙀-😿-😾-
👋-
🤚-
🖐️-
✋-
🖖-
👌-
🤏-
✌️-
🤞-
🤟-
🤘-
🤙-
👈-
👉-
👆-
🖕-
👇-
☝️-
👍-
👎-
✊-
👊-
🤛-
🤜-
👏-
🙌-
👐-
🤲-
🤝-🙏-
✍️-
💅-
🤳-
💪-
🦾-🦿-🦵-
🦶-
👂-
🦻-
👃-👄-🦷-👅-👁️-👀-🧠-🦴-👤-👥-🗣️ 
`.split("-");

const peoples = `
👶-
🧒-
👦-
👧-
🧑-
👱-
👨-
🧔-
👨‍🦰-
👨‍🦱-
👨‍🦳-
👨‍🦲-
👩-
👩‍🦰-
🧑‍🦰-
👩‍🦱-
🧑‍🦱-
👩‍🦳-
🧑‍🦳-
👩‍🦲-
🧑‍🦲-
👱‍♀️-
👱‍♂️-
🧓-
👴-
👵-
🙍‍♂️-
🙍‍♀️-
🙍-
🙎‍♂️-
🙎‍♀️-
🙎-
🙅‍♂️-
🙅‍♀️-
🙅-
🙆‍♂️-
🙆‍♀️-
🙆-
💁‍♂️-
💁‍♀️-
💁-
🙋‍♂️-
🙋‍♀️-
🙋-
🧏‍♂️-
🧏‍♀️-
🧏-
🙇‍♂️-
🙇‍♀️-
🙇-
🤦‍♂️-
🤦‍♀️-
🤦-
🤷‍♂️-
🤷‍♀️-
🤷-
🤴-
👸-
👳‍♂️-
👳‍♀️-
👳-
👲-
🧕-
🤵-
👰-
🤰-
🤱-
👼-
👨‍🎓-
👩‍🎓-
🧑‍🎓-
👨‍⚕️-
👩‍⚕️-
🧑‍⚕️-
👨‍🏫-👩‍🏫-🧑‍🏫-
👨‍⚖️-👩‍⚖️-🧑‍⚖️-
👨‍🌾-👩‍🌾-🧑‍🌾-
👨‍🍳-👩‍🍳-🧑‍🍳-
👨‍🔧-👩‍🔧-🧑‍🔧-
👨‍🏭-👩‍🏭-🧑‍🏭-
👨‍💼-👩‍💼-🧑‍💼-
👨‍🔬-👩‍🔬-🧑‍🔬-
👨‍💻-👩‍💻-🧑‍💻-
👨‍🎤-👩‍🎤-🧑‍🎤-
👨‍🎨-👩‍🎨-🧑‍🎨-
👨‍✈️-👩‍✈️-🧑‍✈️-
👨‍🚀-👩‍🚀-🧑‍🚀-
👨‍🚒-👩‍🚒-🧑‍🚒-
👷‍♂️-👷‍♀️-👷-
🕵️‍♂️-🕵️‍♀️-🕵️-
👮‍♂️-👮‍♀️-👮-
💂‍♂️-💂‍♀️-💂-
🎅-🤶-
🦸‍♂️-🦸‍♀️-🦸-
🦹‍♂️-🦹‍♀️-🦹-
🧙‍♂️-🧙‍♀️-🧙-
🧚‍♂️-🧚-🧚-
🧛‍♂️-🧛‍♀️-🧛-
🧜‍♂️-🧜-🧜‍♀️-
🧝‍♂️-🧝‍♀️-🧝-
🧞‍♂️-🧞‍♀️-🧞-🧟‍♂️-🧟‍♀️-🧟-
💆‍♂️-💆‍♀️-💆-
💇‍♂️-💇‍♀️-💇-
🚶‍♂️-🚶‍♀️-🚶‍♂️-
🧍‍♂️-🧍‍♀️-🧍-
🧎‍♂️-🧎‍♀️-🧎-
👨‍🦯-👩‍🦯-🧑‍🦯-
👨‍🦼-👩‍🦼-🧑‍🦼-
👨‍🦽-👩‍🦽-🧑‍🦽-
🏃‍♂️-🏃‍♀️-🏃-
🕺-💃-🕴-
👯-👯‍♂️-👯‍♀️-
🧖‍♂️-🧖‍♀️-🧖-
🧑‍🤝‍🧑-👭-👫-👬-
💏-👩‍❤️‍💋‍👨-👨‍❤️‍💋‍👨-👩‍❤️‍💋‍👩-👩‍❤️‍💋‍👩-
💑-👩‍❤️‍👨-👨‍❤️‍👨-👩‍❤️‍👩-
-👪-👨‍👩‍👦-👨‍👩‍👧-👨‍👩‍👧‍👦-👨‍👩‍👦‍👦-👨‍👩‍👧‍👧-👨‍👨‍👦-👨‍👨‍👧-👨‍👨‍👧‍👦-👨‍👨‍👦‍👦-👨‍👨‍👧‍👧-👩‍👩‍👦-👩‍👩‍👧-👩‍👩‍👧‍👦-👩‍👩‍👦‍👦-👩‍👩‍👧‍👧-👨‍👦-👨‍👦‍👦-👨‍👧-👨‍👧‍👦-👨‍👧‍👧-👩‍👦-👩‍👦‍👦-
👩‍👧-👩‍👧‍👦-👩‍👧‍👧-👤-👥-👣`.split("-")


const natures =`🐶-🐱-🐭-🐹-🐰-🦊-🐻-🐼-🐨-🐯-🦁-🐮-🐷-
🐽-🐸-🙈-🙉-🙊-🐒-🐔-🐧-🐦-🐤-🐣-🐥-🦆-🦅-🦉-🦇-🐺-🐗-🐴-🦄-
🐝-🐛-🦋-🐌-🐞-🐜-🦟-🦗-🕷-🕸-🦂-🐢-🐍-🦎-🦖-🦕-🐙-🦑-🦐-🦞-🦀-🐡-🐠-🐟-🐬-🐳-🐋-🦈-🐊-🐅-🐆-🦓-🦍-🦧-🐘-🦛-🦏-
🐪-🐫-🦒-🦘-🐃-🐂-🐄-🐎-🐖-🐏-🐑-🦙-🐐-🦌-🐕-🐩-🦮-🐕‍🦺-🐈-🐓-🦃-🦚-🦜-🦢-🦩-🕊-🐇-🦝-🦨-🦡-🦦-🦥-🐁-🐀-
🐿-🦔-🐾-🐉-🐲-🌵-🎄-🌲-🌳-🌴-🌱-🌿-☘️-🍀-🎍-🎋-🦠-🍃-🍂-🍁-🍄-🐚-🌾-💐-🌷-🌹-🥀-🌺-🌸-🌼-🌻-🌞-🌝-🌛-🌜-🌚-🌕-🌖-
🌗-🌘-🌑-🌒-🌓-🌔-🌙-🌎-🌍-🌏-🌐-🗺️-🧭-🪐-💫-⭐️-🌟-✨-⚡️-☄️-💥-🔥-🌪-🌈-☀️-🌤-⛅️-🌥-☁️-🌦-🌧-⛈-🌩-🌨-
❄️-☃️-⛄️-🌬-💨-💧-💦-☔️-☂️-🌊-🌫`.split("-");


const foods = `🍏-🍎-🍐-🍊-🍋-🍌-🍉-🍇-🍓-🍈-🍒-🍑-🥭-🍍-🥥-🥝-🍅-🍆-🥑-🥦-🥬-🥒-🌶-🌽-🥕-🧄-🧅-🥔-🍠-🥐-
🥯-🍞-🥖-🥨-🧀-🥚-🍳-🧈-🥞-🧇-🥓-🥩-🍗-🍖-🦴-🌭-🍔-🍟-🍕-🥪-🥙-🧆-🌮-🌯-🥗-🥘-🥫-🍝-🍜-
🍲-🍛-🍣-🍱-🥟-🦪-🍤-🍙-🍚-🍘-🍥-🥠-🥮-🍢-🍡-🍧-🍨-🍦-🥧-🧁-🍰-🎂-🍮-🍭-🍬-🍫-🍿-🍩-🍪-🌰-🥜-🍯-🥛-🍼-☕️-🍵-🧃-
🥤-🍶-🍺-🍻-🥂-🍷-🥃-🍸-🍹-🧉-🍾-🧊-🥄-🍴-🍽-🥣-🥡-🥢-🧂-
🍥-🍣-🍱-🍛-🍙-🍘-🥟-🍰-🎂-🧁-🥧-🥠-🥮-☕️-🍵-🥣-🍼-🥤-🧋-🧃-🧉-🥛-🍺-🍻-🍷-🥂-🥃-🍸-🍹-🍾-🍶-🧊-🔪-🥄-🍴-🍽️
`
.split("-");
const activitys = `
⚽️-🏀-🏈-⚾️-🥎-🎾-🏐-🏉-🥏-🎱-🪀-🏓-🏸-🏒-🏑-🥍-🏏-🥅-⛳️-🪁-🏹-🎣-🤿-🥊-🥋-🎽-🛹-🛷-⛸-🥌-
🧗‍♂️-🧗‍♀️-🧗-
🏇-⛷️-🏂-
🏌️‍♂️-🏌️‍♀️-🏌️-
🏄‍♂️-🏄‍♀️-🏄-
🚣‍♂️-🚣‍♀️-🚣-
🏊‍♂️-🏊‍♀️-🏊-
⛹️‍♂️-⛹️‍♀️-⛹️-
🏋️‍♂️-🏋️‍♀️-🏋️-
🚴‍♂️-🚴‍♀️-🚴-
🤸‍♂️-🤸‍♀️-🤸-
🤾‍♂️-🤾‍♀️-🤾-
🤽‍♂️-🤽‍♀️-🤽-
🤹‍♂️-🤹‍♀️-🤹-
🧘‍♂️-🧘‍♀️-🧘-




🤼-🤼‍♂️-🤼‍♀️-
🎿-⛷-🪂-🤺-
🏆-🥇-🥈-🥉-🏅-🎖-🏵-🎗-🎫-🎟-🎪-🎭-🩰-🎨-🎬-🎤-🎧-🎼-🎹-🥁-🎷-🎺-
🎸-🪕-🎻-🎲-♟-🎯-🎳-🎮-🕹️-🧸-🎰-🧩-♟️-👾

`.split("-");


const travels =`
🚗-🚙-🚕-🛺-🚌-🚎-🏎️-🚓-🚑-🚒-🚐-🚚-🚛-🚜-🏍️-🛵-🚲-🦼-🦽-🛴-🛹-🛼-🚨-🚔-🚍-🚘-🚖-🚠-🚟-🚃-🚋-🚝-🚄-🚅-🚈-🚞-
🚂-🚆-🚇-🚊-🚉-🚁-🛩️-✈️-🛫-🛬-🪂-💺-🛰️-🚀-🛸-🛶-⛵️-🛥️-🚤-⛴️-🛳️-🚢-⚓️-⛽️-🚧-🚏-🚦-🚥-🛑-🎡-🎢-🎠-🏗️-🌁-
🗼-🏭-⛲️-🎑-⛰️-🏔️-🗻-🌋-🗾-🏕️-⛺️-🏞️-🛣️-🛤️-🌅-🌄-🏜️-🏖️-🏝️-🌇-🌆-🏙️-🌃-🌉-🌌-🌠-🎇-🎆-🏘️-🏰-🏯-🏟️-🗽-🏠-
🏡-🏚️-🏢-🏬-🏣-🏤-🏥-🏦-🏨-🏪-🏫-🏩-💒-🏛️-⛪️-🕌-🛕-🕍-🕋-⛩️
`
.split("-");
const symbos = `
❤️-🧡-💛-💚-💙-💜-🤎-🖤-🤍-💔-❣️-💕-💞-💓-💗-💖-💘-💝-❤️‍🔥-❤️‍🩹-💟-☮️-✝️-☪️-🕉️-☸️-✡️-🔯-🕎-☯️-☦️-🛐-⛎-
♈️-♉️-♊️-♋️-♌️-♍️-♎️-♏️-♐️-♑️-♒️-♓️-🆔-⚛️-⚕️-☢️-☣️-📴-📳-🈶-🈚️-🈸-🈺-🈷️-🈺-✴️-🆚-🉑-💮-🉐-㊙️-㊗️-🈴-🈵-🈹-
-🈲-🅰️-🅱️-🆎-🆑-🅾️-🆘-⛔️-📛-🚫-❌-⭕️-💢-♨️-🚷-🚯-🚳-🚱-🔞-📵-🚭-❗️-❕-❓-❔-‼️-⁉️-💯-🔅-🔆-🔱-⚜️-〽️-⚠️-
🚸-🔰-♻️-🈯️-💹-❇️-✳️-❎-✅-💠-🌀-➿-🌐-♾-🏧-
🚾-♿️-🅿️-🈳-🈂️-🛂-🛃-🛄-🛅-🚰-🛗-🚹-♂️-🚺-♀️-⚧️-🚼-🚻-🚮-🎦-📶-🈁-🆖-🆗-🆙-🆒-🆕-🆓-0⃣-1⃣-2⃣-3⃣-4⃣-5⃣-6⃣-7⃣-8⃣-9⃣-🔟-
🔢-▶️-⏸️-⏯️-⏹️-⏺️-⏏️-⏭️-⏮️-⏩-⏪-🔀-🔁-🔂-◀️-🔼-🔽-⏫-⏬-➡️-⬅️-⬆️-⬇️-↗️-↘️-↙️-↖️-↕️-↔️-🔄-↪️-↩️-🔃-⤴️-⤵️-#⃣-*⃣-ℹ️-🔤-🔡-🔠-🔣-🎵-
🎶-〰️-➰-✔️-➕-➖-➗-✖️-💲-💱-©️-®️-™️-🔚-🔙-🔛-🔝-🔜-☑️-🔘-🔴-🟠-🟡-🟢-🔵-🟣-🟤-⚫️-⚪️-🟥-🟧-🟨-🟩-🟦-🟪-🟫-⬛️-⬜️-◼️-◻️-◾️-◽️-▪️-▫️-🔸-🔹-🔶-🔷-🔺-🔻-🔲-🔳-🔈-
🔉-🔊-🔇-📣-📢-🔔-🔕-🃏-🀄️-♠️-♣️-♥️-♦️-🎴-👁‍🗨-🗨️-💭-🗯️-💬-🕐-🕑-🕒-🕓-🕔-🕕-🕖-🕗-🕘-🕙-🕚-🕛-🕜-🕝-
🕞-🕟-🕠-🕡-🕢-🕣-🕤-🕥-🕦-🕧
`.split("-");
const flags=`🇩🇪-🇦🇨-🇦🇩-🇦🇪-🇦🇫-🇦🇬-🇦🇮-🇦🇱-🇦🇲-🇦🇴-🇦🇶-🇦🇷-🇦🇸-🇦🇹-🇦🇺-🇦🇼-🇦🇽-🇦🇿-🇧🇦-🇧🇧-🇧🇩-🇧🇪-🇧🇫-🇧🇬-🇧🇭-
🇧🇮-🇧🇯-🇧🇱-🇧🇲-🇧🇳-🇧🇴-🇧🇶-🇧🇷-🇧🇸-🇧🇹-🇧🇼-🇧🇾-🇧🇿-🇨🇦-🇨🇨-🇨🇩-🇨🇫-🇨🇬-🇨🇭-🇨🇮-🇨🇰-🇨🇱-🇨🇲-🇨🇴-🇨🇳-🇨🇷-🇨🇺-🇨🇻-🇨🇼-🇨🇽-🇨🇾-🇨🇿-🇩🇯-
🇩🇰-🇩🇲-🇩🇴-🇩🇿-🇪🇨-🏴󠁧󠁢󠁥󠁮󠁧󠁿-🇪🇪-🇪🇬-🇪🇭-🇪🇷-🇪🇸-🇪🇹-🇪🇺-🇫🇮-🇫🇯-🇫🇰-🇫🇲-🇫🇴-🇫🇷-🇬🇦-🇬🇧-🇬🇩-🇬🇪-🇬🇫-🇬🇬-🇬🇭-🇬🇮-🇬🇱-🇬🇲-🇬🇳-🇬🇵-🇬🇶-🇬🇷-
🇬🇸-🇬🇹-🇬🇺-🇬🇼-🇬🇾-🇭🇰-🇭🇳-🇭🇷-🇭🇹-🇭🇺-🇮🇨-🇮🇩-🇮🇪-🇮🇱-🇮🇲-🇮🇳-🇮🇴-🇮🇶-🇮🇷-🇮🇸-🇮🇹-🇯🇪-🇯🇲-🇯🇴-🇯🇵-🇰🇪-🇰🇬-🇰🇭-🇰🇮-🇰🇲-🇰🇳-🇰🇵-🇰🇷-🇰🇼-🇰🇾-🇰🇿-🇱🇦-🇱🇧-🇱🇨-🇱🇮-🇱🇰-🇱🇷-🇱🇸-🇱🇹-🇱🇺-
🇱🇻-🇱🇾-🇲🇦-🇲🇨-🇲🇩-🇲🇪-🇲🇬-🇲🇭-🇲🇰-🇲🇱-🇲🇲-🇲🇳-🇲🇴-🇲🇵-🇲🇶-🇲🇷-
🇲🇸-🇲🇹-🇲🇺-🇲🇻-🇲🇼-🇲🇽-🇲🇾-🇲🇿-🇳🇦-🇳🇨-🇳🇪-🇳🇫-🇳🇬-🇳🇮-🇳🇱-🇳🇴-🇳🇵-🇳🇷-🇳🇺-🇳🇿-🇴🇲-🇵🇦-🇵🇪-🇵🇫-🇵🇬-🇵🇭-🇵🇰-🇵🇱-
🇵🇲-🇵🇳-🇵🇷-🇵🇸-🇵🇹-🇵🇼-🇵🇾-🇶🇦-🇷🇪-🇷🇴-🇷🇸-🇷🇺-🇷🇼-🇸🇦-🏴󠁧󠁢󠁳󠁣󠁴󠁿-🇸🇧-🇸🇨-🇸🇩-🇸🇪-
🇸🇬-🇸🇭-🇸🇮-🇸🇰-🇸🇱-🇸🇲-🇸🇳-🇸🇴-🇸🇷-🇸🇸-🇸🇹-🇸🇻-🇸🇽-🇸🇾-🇸🇿-🇹🇦-🇹🇨-🇹🇩-🇹🇫-🇹🇬-🇹🇭-🇹🇯-🇹🇰-🇹🇱-🇹🇲-🇹🇳-🇹🇴-🇹🇷-🇹🇹-🇹🇻-🇹🇼-🇹🇿-🇺🇦-
🇺🇬-🇺🇳-🇺🇸-🇺🇾-🇺🇿-🇻🇦-🇻🇨-🇻🇪-🇻🇬-🇻🇮-🇻🇳-🇻🇺-🏴󠁧󠁢󠁷󠁬󠁳󠁿-🇼🇫-🇼🇸-🇽🇰-🇾🇪-🇾🇹-🇿🇦-🇿🇲-🇿🇼-🏳️-🏴-🏳️‍🌈-🚩-🏁-🎌-🏴‍☠️
`
.replace(/\s+/g,'').split('-')

const object=`
⌚️-📱-📲-💻-⌨️-🖥️-🖨️-🖱️-🖲️-🕹️-🗜️-💽-💾-💿-📀-📼-📷-📸-📹-🎥-📽️-🎞️-📞-☎️-📟-📠-📺-📻-🎙️-🎚️-🎛️-⏱️-⏲️-⏰-🕰️-⏳-⌛️-🧮-
📡-🔋-🔌-💡-🔦-🕯️-🧯-🗑️-🛢️-🛒-💸-💵-💴-💶-💷-💰-💳-🧾-💎-⚖️-🦯-🧰-🔧-🔨-⚒️-🛠️-⛏️-🪓-🔩-⚙️-⛓️-🧱-🔫-
🧨-💣-🔪-🗡️-⚔️-🛡️-🚬-⚰️-⚱️-🏺-🔮-📿-🧿-💈-🧲-⚗️-🧪-🧫-🧬-🔭-🔬-🕳️-💊-💉-🩸-🩹-🩺-🌡️-🏷️-🔖-🚽-
🚿-🛁-🛀-🪥-🪒-🧴-🧻-🧼-🧽-🧹-🧺-🪣-🔑-🗝️-🛋️-🪑-🛌-🛏️-🚪-🪞-🪟-🧳-🛎️-🖼️-🧭-🗺️-⛱️-🗿-🛍️-🎈-🎏-🎀-🧧-🎁-🎊-🎉-🎎-
🎐-🏮-🪔-✉️-📩-📨-📧-💌-📮-📪-📫-📬-📭-📦-📯-📥-📤-📜-📃-📑-📊-📈-📉-📄-📅-📆-🗓️-📇-🗃️-🗳️-🗄️-📋-🗒️-📁-📂-🗂️-🗞️-
📰-📓-📕-📗-📘-📙-📔-📒-📚-📖-🔗-📎-🖇️-✂️-📐-📏-📌-📍-🧷-🧵-🧶-🔐-🔒-🔓-🔏-🖊️-🖋️-✒️-📝-✏️-🖍️-🖌️-🔍-🔎
`.split("-")

smileys.map(emoji => $('.c__emoji-smileys').append(`<span>${emoji}</span>`));
natures.map(emoji => $('.c__emoji-nature').append(`<span>${emoji}</span>`));
foods.map(emoji => $('.c__emoji-food').append(`<span>${emoji}</span>`));
activitys.map(emoji => $('.c__emoji-activity').append(`<span>${emoji}</span>`));
travels.map(emoji => $('.c__emoji-travel').append(`<span>${emoji}</span>`));
peoples.map(emoji => $('.c__emoji-peoples').append(`<span>${emoji}</span>`));
symbos.map(emoji => $('.c__emoji-symbos').append(`<span>${emoji}</span>`));
flags.map(emoji => $('.c__emoji-flags').append(`<span>${emoji}</span>`));
object.map(emoji => $('.c__emoji-object').append(`<span>${emoji}</span>`));






$('.emoji-selectables span').click(function() {

$(this).closest('.emoji-selectables').children().removeClass('active')
$(this).closest('.emoji-selectables').next().find('div.picker-emoji').removeClass('active')




if($(this).hasClass('emoji-recently')){
$(this).closest('.emoji-selectables').next().find(`.c__emoji-recently`).show()
}else{
$(this).closest('.emoji-selectables').next().find(`.c__emoji-recently`).hide()
}



$(this).closest('.emoji-selectables').find(`.picker-emoji-sel.emoji-${$(this)[0].dataset.emoji}`).addClass('active');
$(this).closest('.emoji-selectables').next().find(`.c__emoji-${$(this)[0].dataset.emoji}`).addClass('active');



$(this).closest('.emoji-selectables').next().next().find('div.emoji-picker__variant-overlay').remove();

})



return this;
}









twemoji.parse(document.body);




})(jQuery);