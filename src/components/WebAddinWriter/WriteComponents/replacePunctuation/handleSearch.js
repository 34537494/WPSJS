/* global wps:false */

function handleSearch(value) {
    console.log(wps.Application.ActiveDocument.Content.Text);

}
let counts = 0
function Macro3(value, checked, check_val) {
    if (checked === true) {
        var toBold = check_val.indexOf("1") > -1 ? true : false;
        var toItalic = check_val.indexOf("2") > -1 ? true : false;
        var toUnderline = check_val.indexOf("3") > -1 ? 1 : 0;
        for (; 1 > 0;) {
            wps.Application.Selection.Find.Wrap = 0;
            console.log(wps.Application.ActiveDocument.Content.Text);
            if (!wps.Application.Selection.Find.Execute(value)) {
                console.log("no");
                break
            }
            let sel = wps.Application.Selection.Font;
            // sel.Bold=	9999998;     //切换属性
            sel.Bold = toBold;
            sel.Italic = toItalic;
            sel.Underline = toUnderline;
            console.log(++counts)
        }
    }
    else {
        console.log(wps.Application.ActiveDocument.Content.Text);
        console.log(counts + 1)
        wps.Application.Selection.Find.Execute(value)
        wps.Application.Selection.Find.Wrap = 1;
    }
}

//整个函数结构与替换文字相似，不过取消了原字与替换字的输入，只需要匹配xml文件即可
function replace_punctuation_main(doc) {

    var doc_split = doc.split("w:p>")                                       //将xml文件以段落分组
    var newPara = [];
    var para_isodd = false                                                  //判断循环是否处于奇数
    for (var i = 0; i < doc_split.length; i++) {
        if (para_isodd && i !== doc_split.length - 1) {
            newPara[i] = getNewXml_punctuation(doc_split[i])        //如果为含有文本的内容，则进入getNewXml函数，获取每段的新的xml存入一个数组中
            para_isodd = false
        }
        else if (!para_isodd && i !== doc_split.length - 1) {

            newPara[i] = doc_split[i] + "w:p>"                      //否则，直接添加进新段落数组中
            para_isodd = true
        }
        else {
            newPara[i] = doc_split[i]                               //若为最后一个，则为一些配置属性，直接添加
        }
    }

    var finalParaXml = ""
    for (i = 0; i < newPara.length; i++) {
        finalParaXml += newPara[i]                              //将每段内容拼接起来得到段落部分的xml
    }
    var FinalXml = ""

    FinalXml += finalParaXml       //将原始头部和尾部与段落部分拼接起来，得到最终xml

    console.log(FinalXml)


    //以下为写入文件部分
    let wpsapp = wps.WpsApplication();
    let docName = wpsapp.ActiveDocument.FullName;
    let needbeDelte = false;
    // if (!wps.FileSystem.Exists(docName)) {
    //     let TempPath = wps.Env.GetTempPath() + "\\TempDoc";  // wpsapp.NormalTemplate.Path;
    //     let TempPath_forall = TempPath.split("/").join("\\")
    //     if (!wps.FileSystem.Exists(TempPath_forall)) {
    //         wps.FileSystem.Mkdir(TempPath_forall);
    //     }
    //     // docName = TempPath + "\\TempDoc.docx"; //linux下分隔符可能有问题
    //     let newdoc = wps.WpsApplication().Documents.Add(null, null, 0, false);
    //     newdoc.Range(0, 0).InsertXML(FinalXml);
    //     needbeDelte = true;
    //     console.log(TempPath_forall + "\\" + docName)
    //     newdoc.SaveAs2(TempPath_forall + "\\" + docName, 12, null, null, false);
    //     newdoc.Close(false);
    // }
    // else{
    //     wpsapp.ActiveDocument.Content.Select()
    //     wpsapp.Selection.Range.Delete()
    //     wpsapp.ActiveDocument.Range(0, 0).InsertXML(FinalXml);
    // }
        wpsapp.ActiveDocument.Content.Select()
        wpsapp.Selection.Range.Delete()
        wpsapp.ActiveDocument.Range(0, 0).InsertXML(FinalXml);
    try {
        if (needbeDelte === true) {
            try {
                wps.FileSystem.Remove(docName);
            } catch(err) { }
        }
    } catch(err) { }
}

//第一个参数为按照段落拆分的xml文本
function getNewXml_punctuation(doc1) {
    var txt = [];              //存储Word文档中的文字
    var newdocxml = [];           //存储每段中
    if(doc1.split(/w:t>|w:t xml:space="preserve">/).length === 1)                //如果没有文本内容，不做修改
    {
        return doc1 + "w:p>"
    }
    for (var i = 0; i < (doc1.split(/w:t>|w:t xml:space="preserve">/).length - 1) / 2; i++) {
        if (doc1.split(/w:t>|w:t xml:space="preserve">/)[1 + 2 * i]) {
            if (doc1.split(/w:t>|w:t xml:space="preserve">/)[1 + 2 * i].length > 2) {
                if (doc1) {
                    newdocxml.push(doc1.slice(0, -2))                                                  //将拆分后的数组存储进newdocxml中
                }
                txt.push(doc1.split(/w:t>|w:t xml:space="preserve">/)[1 + 2 * i].slice(0, -2))         //将文本提取出来，每一个部分为数组的一个值
            }
            else {
                console.log("error")
            }
        }
    }

    let new_txt = replace_punctuation(txt.join(""))
    var isodd = false
    var newxml = ""
    var num = 0
    if(txt)
    {
        var SingleWord = new_txt
    }

    for (i = 0; i < doc1.split(/w:t>|w:t xml:space="preserve">/).length; i++) {
        
        if (!isodd && i !== doc1.split(/w:t>|w:t xml:space="preserve">/).length - 1) {
            newxml += (doc1.split(/w:t>|w:t xml:space="preserve">/)[i] + "w:t>")
            isodd = true
        }
       
        else if (isodd && i !== doc1.split(/w:t>|w:t xml:space="preserve">/).length - 1) {
            if(SingleWord.slice(num, num + txt[(i - 1) / 2].length).indexOf(" ") === -1)
            {
                newxml += (SingleWord.slice(num, num + txt[(i - 1) / 2].length).join("") + "</w:t>")
            }
            else if(SingleWord.slice(num, num + txt[(i - 1) / 2].length).indexOf(" ") !== -1 && newxml.slice(-4) === "w:t>")
            {
                newxml = newxml.slice(0,newxml.length-5) + "<w:t xml:space=\"preserve\">" + (SingleWord.slice(num, num + txt[(i - 1) / 2].length).join("") + "</w:t>")
            }
            else
            {
                newxml += (SingleWord.slice(num, num + txt[(i - 1) / 2].length).join("") + "</w:t>")
            }
            num += txt[(i - 1) / 2].length
            isodd = false
        }
        else {
            newxml += "</w:r></w:p>"
        }
    }
    // console.log(newxml)
    return newxml;
}

//将文本内容传入即可
function replace_punctuation(txt) {

    //将文本中的字符按照Unicode编码匹配，如果需要处理则验证前后一个字符是否为对应内容
    let txt_split = txt.split("")

    for(var i = 0;i<txt_split.length;i++)
    {
        if(i < txt.length-1)
        {
            if(txt.charCodeAt(i) === 12288){                              //全角空格并非与半角空格之间相差65248，需要特殊处理
                if(((65 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 90) || (97 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 122)) && ( (65 <= txt.charCodeAt(i+1) && txt.charCodeAt(i+1) <= 90) || (97 <= txt.charCodeAt(i+1) && txt.charCodeAt(i+1) <= 122)))          //如果Unicode编码小于等于255就是英文字符，如果大于则为中文，前后均为英文则需要修改
                {
                    txt_split[i] = ' ';
                }
                else{
                    continue
                }
            }
            else if(txt.charCodeAt(i) === 12290){                              //中文句号要特殊处理
                if(((65 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 90) || (97 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 122)) && ( (65 <= txt.charCodeAt(i+1) && txt.charCodeAt(i+1) <= 90) || (97 <= txt.charCodeAt(i+1) && txt.charCodeAt(i+1) <= 122)))          //如果Unicode编码小于等于255就是英文字符，如果大于则为中文，前后均为英文则需要修改
                {
                    txt_split[i] = '.';
                }
                else{
                    continue
                }
            }
            else if(txt.charCodeAt(i) === 32)                                //英文空格需要特殊处理
            {   
                if(txt.charCodeAt(i-1) >255 && txt.charCodeAt(i+1) >255)
                {
                    txt_split[i] = String.fromCharCode(12288)
                }
            }
            else if(txt.charCodeAt(i) === 46)                                //英文句号需要特殊处理
            {
                if(txt.charCodeAt(i-1) >255 && txt.charCodeAt(i+1) >255)
                {
                    txt_split[i] = String.fromCharCode(12290)
                }
            }
            else if(txt.charCodeAt(i) >= 65281 && txt.charCodeAt(i) <= 65374){             // 如果Unicode编码位于全角！（65281）到全角～（65374）区间内，则为中文标点
                if(((65 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 90) || (97 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 122)) && ( (65 <= txt.charCodeAt(i+1) && txt.charCodeAt(i+1) <= 90) || (97 <= txt.charCodeAt(i+1) && txt.charCodeAt(i+1) <= 122)))          //如果Unicode编码小于等于255就是英文字符，如果大于则为中文，前后均为英文则需要修改
                {
                    // console.log(txt[i])
                    // console.log(String.fromCharCode(txt.charCodeAt(i)-65248))
                    txt_split[i] = String.fromCharCode(txt.charCodeAt(i)-65248)
                }
                else{
                    continue
                }
            }
            
            else if(txt.charCodeAt(i) >= 33 && txt.charCodeAt(i) <= 126){
                if(txt.charCodeAt(i-1) >255 && txt.charCodeAt(i+1) >255)
                {
                    txt_split[i] = String.fromCharCode(txt.charCodeAt(i)+65248)
                }
            }
            
        }
        else{                   //末尾的字符
            if(txt.charCodeAt(i) === 12288){                              //全角空格并非与半角空格之间相差65248，需要特殊处理
                if((65 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 90) || (97 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 122))          //如果Unicode编码小于等于255就是英文字符，如果大于则为中文，前后均为英文则需要修改
                {
                    txt_split[i] = ' ';
                }
                else{
                    continue
                }
            }
            else if(txt.charCodeAt(i) === 12290){                              //中文句号要特殊处理
                if((65 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 90) || (97 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 122))          //如果Unicode编码小于等于255就是英文字符，如果大于则为中文，前后均为英文则需要修改
                {
                    txt_split[i] = '.';
                }
                else{
                    continue
                }
            }
            else if(txt.charCodeAt(i) === 32)
            {
                if(txt.charCodeAt(i-1) >255)
                {
                    txt_split[i] = String.fromCharCode(12288)
                }
            }
            else if(txt.charCodeAt(i) === 46)
            {
                if(txt.charCodeAt(i-1) >255)
                {
                    txt_split[i] = String.fromCharCode(12290)
                }
            }
            else if(txt.charCodeAt(i) >= 65281 && txt.charCodeAt(i) <= 65374){             // 如果Unicode编码位于全角！（65281）到全角～（65374）区间内，则为中文标点
                if((65 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 90) || (97 <= txt.charCodeAt(i-1) && txt.charCodeAt(i-1) <= 122))          //如果Unicode编码小于等于255就是英文字符，如果大于则为中文，前后均为英文则需要修改
                {
                    txt_split[i] = String.fromCharCode(txt.charCodeAt(i)-65248)
                }
                else{
                    continue
                }
            }
            else if(txt.charCodeAt(i) >= 33 && txt.charCodeAt(i) <= 126){
                if(txt.charCodeAt(i-1) >255){
                    txt_split[i] = String.fromCharCode(txt.charCodeAt(i)+65248)
                }
            }
            else{
                continue
            }
        }
    }
    return txt_split;
}


export default { handleSearch, Macro3, replace_punctuation_main };