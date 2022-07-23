/* global wps:false */

function handleSearch(value) {
    console.log(wps.Application.ActiveDocument.Content.Text);

}
let counts = 0
function Macro3(value, checked,check_val) {
    if (checked === true) {
        var toBold=check_val.indexOf("1")>-1?true:false;
        var toItalic=check_val.indexOf("2")>-1?true:false;
        var toUnderline=check_val.indexOf("3")>-1?1:0;
        for (; 1 > 0;) {
            wps.Application.Selection.Find.Wrap = 0;
            console.log(wps.Application.ActiveDocument.Content.Text);
            if (!wps.Application.Selection.Find.Execute(value)) {
                console.log("no");
                break
            }
            let sel=wps.Application.Selection.Font;
            // sel.Bold=	9999998;     //切换属性
             sel.Bold=toBold;
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
export default { handleSearch, Macro3 };