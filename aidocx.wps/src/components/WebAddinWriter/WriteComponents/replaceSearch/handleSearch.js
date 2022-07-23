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
function replace_main(word, replaceWord, doc) {

    var doc_split = doc.split("w:p>")                                       //将xml文件以段落分组
    var newPara = [];
    var para_isodd = false                                                  //判断循环是否处于奇数
    for (var i = 0; i < doc_split.length; i++) {
        if (para_isodd && i !== doc_split.length - 1) {
            newPara[i] = getNewXml(doc_split[i], word, replaceWord)        //如果为含有文本的内容，则进入getNewXml函数，获取每段的新的xml存入一个数组中
            para_isodd = false
        }
        else if (!para_isodd && i !== doc_split.length - 1) {

            newPara[i] = doc_split[i] + "w:p>"                             //否则，直接添加进新段落数组中
            para_isodd = true
        }
        else {
            newPara[i] = doc_split[i]                                       //若为最后一个，则为一些配置属性，直接添加
        }
    }

    var finalParaXml = ""
    for (let i = 0; i < newPara.length; i++) {
        finalParaXml += newPara[i]                              //将每段内容拼接起来得到段落部分的xml
    }
    var FinalXml = ""

    FinalXml += finalParaXml       //将原始头部和尾部与段落部分拼接起来，得到最终xml

    // console.log(FinalXml)


    //以下为写入文件部分
    let wpsapp = wps.WpsApplication();
    let docName = wpsapp.ActiveDocument.FullName;
    let needbeDelte = false;
    // if (!wps.FileSystem.Exists(docName)) {
    //     // let TempPath = wps.Env.GetTempPath() + "\\TempDoc";  // wpsapp.NormalTemplate.Path;
    //     // let TempPath_forall = TempPath.split("/").join("\\")
    //     // if (!wps.FileSystem.Exists(TempPath_forall)) {
    //     //     wps.FileSystem.Mkdir(TempPath_forall);
    //     // }
    //     // // docName = TempPath + "\\TempDoc.docx"; //linux下分隔符可能有问题
    //     // let newdoc = wps.WpsApplication().Documents.Add(null, null, 0, false);
    //     // newdoc.Range(0, 0).InsertXML(FinalXml);
    //     // needbeDelte = true;
    //     // console.log(TempPath_forall + "\\" + docName)
    //     // newdoc.SaveAs2(TempPath_forall + "\\" + docName, 12, null, null, false);
    //     // newdoc.Close(false);
    //     wpsapp.ActiveDocument.Content.Select()
    //     wpsapp.Selection.Range.Delete()
    //     wpsapp.ActiveDocument.Range(0, 0).InsertXML(FinalXml);
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
            } catch (err) { }
        }
    } catch (err) { }
}


//第一个参数为按照段落拆分的xml文本，Word为需要替换的文字，replaceWord为替换成的内容
function getNewXml(doc_split, word, replaceWord) {
    var txt = [];              //存储Word文档中的文字
    var newdocxml = [];           //存储每段拆分后的xml
    if (doc_split.split(/w:t>|w:t xml:space="preserve">/).length === 1) {                //如果没有文本内容，不做修改
        return doc_split + "w:p>"
    }
    for (var i = 0; i < (doc_split.split(/w:t>|w:t xml:space="preserve">/).length - 1) / 2; i++) {
        if (doc_split.split(/w:t>|w:t xml:space="preserve">/)[1 + 2 * i]) {
            if (doc_split.split(/w:t>|w:t xml:space="preserve">/)[1 + 2 * i].length > 2) {
                if (doc_split) {
                    newdocxml.push(doc_split.slice(0, -2))                                                  //将拆分后的数组存储进newdocxml中
                }
                txt.push(doc_split.split(/w:t>|w:t xml:space="preserve">/)[1 + 2 * i].slice(0, -2))         //将文本提取出来，每一个部分为数组的一个值
            }
            else {
                console.log("error")
            }
        }
    }
    // console.log(txt)

    var ans = replace(doc_split, word, replaceWord, txt)
    // // console.log("getNewXml")
    return ans;
}


//替换，第一个参数为按照段落拆分的xml文本，Word为需要替换的文字，replaceWord为替换成的内容，txt为文字数组
function replace(doc_split, word, replaceWord, txt) {
    if (txt) {
        var SingleWord = txt.join("").split("")                             //判断各个值是否存在，再进行单字拆分，用以后续判断替换
    }
    if (word) {
        var word_split = word.split("")
    }
    if (replaceWord) {
        var replaceWord_split = replaceWord.split("")
    }
    for (var i = 0; i < SingleWord.length; i++) {
        if (SingleWord.slice(i, i + word_split.length).join("") === word_split.join("")) {
            if (replaceWord_split.length <= word_split.length) {                                //根据替换字与原字长度的不同形式进行替换，共两种情况
                for (var j = 0; j < word_split.length; j++) {
                    if (replaceWord_split !=="") {
                        SingleWord[i + j] = replaceWord_split[j]
                    }
                    else {
                        SingleWord[i + j] = ""                                                  //若替换字短于原字，后续原字替换为空白
                    }
                }
            }
            else {
                for (let j = 0; j < word_split.length; j++) {
                    if (j !== word_split.length - 1) {
                        SingleWord[i + j] = replaceWord_split[j]
                    }
                    else {
                        SingleWord[i + j] = replaceWord_split.slice(word_split.length - 1).join("")         //长于的话，则将后续所有替换字全部存储在原字数组最后一位
                    }
                }
            }
        }
        else {
            continue
        }
    }

    var isodd = false
    var newxml = ""
    var num = 0

    for (let i = 0; i < doc_split.split(/w:t>|w:t xml:space="preserve">/).length; i++) {                //将替换好的文本内容与其格式内容进行xml拼接

        if (!isodd && i !== doc_split.split(/w:t>|w:t xml:space="preserve">/).length - 1) {
            newxml += (doc_split.split(/w:t>|w:t xml:space="preserve">/)[i] + "w:t>")
            isodd = true
        }

        else if (isodd && i !== doc_split.split(/w:t>|w:t xml:space="preserve">/).length - 1) {          //根据文本原本不同的位置进行拼接，根据txt将文本拆分之后写入xml文件
            // console.log(num + txt[(i - 1) / 2].length)
            // console.log(SingleWord.slice(num, num + txt[(i - 1) / 2].length).indexOf(" "))
            if (SingleWord.slice(num, num + txt[(i - 1) / 2].length).indexOf(" ") === -1) {
                newxml += (SingleWord.slice(num, num + txt[(i - 1) / 2].length).join("") + "</w:t>")
            }
            else if (SingleWord.slice(num, num + txt[(i - 1) / 2].length).indexOf(" ") !== -1 && newxml.slice(-4) === "w:t>") {
                newxml = newxml.slice(0, newxml.length - 5) + "<w:t xml:space=\"preserve\">" + (SingleWord.slice(num, num + txt[(i - 1) / 2].length).join("") + "</w:t>")
            }
            else{
                newxml += (SingleWord.slice(num, num + txt[(i - 1) / 2].length).join("") + "</w:t>")
            }
            num += txt[(i - 1) / 2].length
            isodd = false
        }
        else {
            newxml += "</w:r></w:p>"
        }
    }
    return newxml;
}


export default { handleSearch, Macro3, replace_main };