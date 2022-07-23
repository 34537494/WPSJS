/* global wps:false */
let color = {
    "黑色": 1,
    "蓝色": 2,
    "鲜绿色": 4,
    "深蓝色": 9,
    "深红色": 13,
    "深黄色": 14,
    "绿色": 11,
    "粉红色": 5,
    "红色": 6,
    "紫色": 12,
    "黄色":7
}

function handleFont(value, model) {
    let sel = wps.Application.Selection.Font;
    if (model === "字体") {
        console.log(value);  
        sel.Name = value;
    }
    else if (model === "颜色") {
        console.log(value);
        var Index=color[value];
        sel.ColorIndex = Index;
    }
    let oldcaption=  wps.Application.ActiveDocument.ActiveWindow.Caption ;
    wps.Application.ActiveDocument.ActiveWindow.Caption =  oldcaption+" ";
    wps.Application.ActiveDocument.ActiveWindow.Caption =  oldcaption ;
}

export default handleFont;