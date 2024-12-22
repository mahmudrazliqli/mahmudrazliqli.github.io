function kokturk2arab(oldturkishStr) {
   const oldturkishText =":"+oldturkishStr.replace(/⸱/g, ':').replace(/⁚/g, ':').replace(/ /g, ':').replace(/::/g, ':');
    const arabicText = oldturkishText
    .replace(/:𐰼:/g,':ار:')
    .replace(/:𐰋:/g,':اب:')	
    .replace(/:𐱃:/g,':آت:')	
    .replace(/:𐰖:/g,':آی:')	
    .replace(/:𐰉𐰺:/g,':بار:')
     .replace(/:𐰨𐰯:/g, ':آنچاپ:')
    .replace(/:𐰨𐰀:/g, ':آنچا:')
    .replace(/:𐰦𐰍:/g,':آنداغ:')
    .replace(/:𐰪𐰃𐰍:/g,':آنیېغ:')
    .replace(/:𐰞𐰯:/g,':آلپ:')
    .replace(/:𐰚𐰃:/g,':اکی:')
    .replace(/:𐰓𐰏𐰇:/g, ':ادگۆ:')
    .replace(/:𐰖𐰉𐰞𐰴:/g,':یابلاق:')
    .replace(/:𐰞𐱃𐰆𐰣:/g,':آلتون:') 
    .replace(/:𐱃𐰞𐰍:/g,':آتلېغ:')
    .replace(/𐰰𐰣:/g,'پان:')
    
    .replace(/𐰆𐰀/g,'وآ')

    //sesliler
    .replace(/𐰀/g, 'ه‌')
    .replace(/𐰃/g, 'ې')//.replace(/𐰃/g, 'ی')
    .replace(/𐰆/g, 'و')
    .replace(/𐰇/g, 'ۆ')
    .replace(/𐰅/g, 'ئ')
    //xunsa saitlər
    .replace(/𐰲/g, 'چ')
    .replace(/𐰢/g, 'م')
    .replace(/𐰭/g, 'ڭ')
    .replace(/𐰯/g, 'پ')
    .replace(/𐱁/g, 'ش')
    .replace(/𐰔/g, 'ز')
    .replace(/𐰕/g, 'ز')//yenisey
    //qalın  ٛ
    .replace(/𐰉/g, 'بٛ')
    .replace(/𐰑/g, 'دٛ')
    .replace(/𐰺/g, 'رٛ')
    .replace(/𐰞/g, 'لٛ')
    .replace(/𐰣/g, 'نٛ')
    .replace(/𐰖/g, 'یٛ')
    .replace(/𐰽/g, 'سٛ')
    .replace(/𐱃/g, 'تٛ')
    .replace(/𐰍/g, 'غ')
    .replace(/𐰴/g, 'ق')
    //incə  
    .replace(/𐰋/g, 'ب')
    .replace(/𐰓/g, 'د')
    .replace(/𐰼/g, 'ر')
    .replace(/𐰠/g, 'ل')
    .replace(/𐰤/g, 'ن')
    .replace(/𐰘/g, 'ی')
    .replace(/𐰾/g, 'س')
    .replace(/𐱅/g, 'ت')
    .replace(/𐰚/g, 'ک')            
    .replace(/𐰏/g, 'گ')

    //iki səsli
    .replace(/𐰱/g, 'یچ')
    .replace(/𐰶/g, 'یک')
    .replace(/𐰶/g, 'یق')
    .replace(/𐰰/g, 'پ') 
    .replace(/𐰜/g, 'ۆک')////yenisey
    .replace(/𐰝:/g, 'ۆک:')//yenisey ?????
    .replace(/𐰝/g, 'ک')//yenisey ?????
    .replace(/𐱇/g, 'وت')////yenisey

    .replace(/𐰸/g, 'وق')
    .replace(/𐰨/g, 'نچ')
    .replace(/𐰦/g, 'ند')
    .replace(/𐰪/g, 'نی')
    .replace(/:/g, ' ');

    const arabicText2 = arabicText
    .replace(/وو/g, 'و')
    .replace(/ېې/g, 'ې')
    .replace(/ۆۆ/g, 'ۆ')
    .replace(/ ه‌/g,' آ')
    .replace(/ و/g, ' او')
    .replace(/ ې/g, ' اې')//.replace(/ ی/g, ' ای')
    .replace(/ ۆ/g, ' اۆ')	
    .replace(/ ئ/g, ' ائ')	
    .replace(/ٛه‌/g, 'ٛا')
    .replace(/صه‌/g, 'صا')
    .replace(/طه‌/g, 'طا')
    .replace(/قه‌/g, 'قا')
    .replace(/غه/g, 'غا')
    
    ;

    const arabicText3 = arabicText2
    .replace(/پنٛ /g, 'پان ')
    .replace(/ لٛپ/g, ' آلپ')
    ;

    return arabicText3;
}