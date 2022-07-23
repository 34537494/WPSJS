/* global wps:false */
function controlClick(value) {
  switch (value) {
    case "标记": {
      var cont = wps.Application.ActiveDocument.ContentControls.Add(1);
      cont.Title = "测试";
      cont.MultiLine = true;
      break;
    }
    case "提取": {
      var ctrols = wps.Application.ActiveDocument.ContentControls;
      var count = ctrols.Count;
      for (var i = 1; i <= count; i++) {
        var tempcnt = ctrols.Item(i);
        var text = tempcnt.Range.Text;
        console.log(text);
      }

      break;
    }

    default:
      break;
  }
}
export default controlClick;
