/* global wps:false */

export function insert(param,row,col,text) {
    switch (param) {
        case "图片": {
            addPictrue()
            break
        }

        case "表格": {
            addTable(row,col)
            break
        }

        case "文字": {
            addString(text)
            break
        }
        default:
    }
}

function addString(text) {
    console.log("新增文字");
    wps.WpsApplication().Selection.InsertAfter(text);       //在插入点或者选中区域后插入文本
}
function addTable(row,col) {
    console.log("新增表格");
    //法一：
    // var endIndex=wps.Application.Selection.End;    //获得插入点或者选中区域的最后一个字符的位置
    //  let myRange = wps.Application.ActiveDocument.Range(endIndex, endIndex)    //定位range
    //  wps.Application.ActiveDocument.Tables.Add(myRange, 3, 4,1,0)     //在range位置插入表格
    //法二：
    var tableNew = wps.Application.ActiveDocument.Tables.Add(wps.Application.Selection.Range, row, col, 1, 0);
    tableNew.AllowAutoFit = true;
}
function addPictrue() {
    //需要绝对路径
    // wps.Application.Selection.InlineShapes.AddPicture("C:\\Users\\86184\\Pictures\\1591153632523.jpg", 0, 0, undefined);
    console.log("新增图片1111");
}

