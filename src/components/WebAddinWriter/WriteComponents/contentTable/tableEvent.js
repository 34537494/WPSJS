/* global wps:false */
export function ctrolClick(value, title, select) {
  switch (value) {
    case "标记": {
      console.log("标记");
      var cont = wps.Application.ActiveDocument.ContentControls.Add(1);
      if (!title) {
        title = "请添加标题";
      }
      cont.Title = title;
      cont.MultiLine = true;
      break;
    }
    case "提取": {
      return show();
     
    }
    case "插入": {
      var ctrols = wps.Application.ActiveDocument.ContentControls;
      var selctIndex = sort(select);
      var insertText = "";
      for (var i = 0; i < selctIndex.length; i++) {
        insertText += "\n" + ctrols.Item(selctIndex[i]).Range.Text;
      }
      var doc = wps.Application.ActiveDocument;
      var myRange = doc.Range(doc.Content.End - 1, doc.Content.End - 1);
      myRange.InsertAfter(insertText);
      break;
    }

    default:
      break;
  }
  let oldcaption = wps.Application.ActiveDocument.ActiveWindow.Caption;
  wps.Application.ActiveDocument.ActiveWindow.Caption = oldcaption + " ";
  wps.Application.ActiveDocument.ActiveWindow.Caption = oldcaption;
}
export default ctrolClick;

function show() {
  console.log("提取");

  var ctrols = wps.Application.ActiveDocument.ContentControls;
  var count = ctrols.Count;
  const data = [];

  for (var i = 1; i <= count; i++) {
    var tempcnt = ctrols.Item(i);
    var title = tempcnt.Title;
    var text = tempcnt.Range.Text;
    data.push({
      key: i,
      name: title,
      value: text,
    });
    console.log(title, text);
  }

  return data;
}

function sort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        var hand = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = hand;
      }
    }
  }
  return arr;
}
