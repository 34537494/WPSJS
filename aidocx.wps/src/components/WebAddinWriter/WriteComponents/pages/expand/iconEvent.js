/* global wps:false */
 
import Handle from '../../replacePunctuation/handleSearch';


function handle(param) {
 
    switch (param) {

        case "中英文标点匹配":
            {
                var doc = wps.WpsApplication().ActiveDocument.WordOpenXML
                Handle.replace_punctuation_main(doc)
                break;
            }

        case "帮助2":
            {
                console.log(param);
                wps.ShowDialog("http://localhost:3889/help2.html", "帮助", 500 * window.devicePixelRatio, 300 * window.devicePixelRatio, false);
                break;
            }
           
        default:
            break;
    }
    //console.log(wps.Application.ActiveWindow.Caption);
    let oldcaption=  wps.Application.ActiveDocument.ActiveWindow.Caption ;
    wps.Application.ActiveDocument.ActiveWindow.Caption =  oldcaption+" ";
    wps.Application.ActiveDocument.ActiveWindow.Caption =  oldcaption ;
//    wps.Application.ActiveDocument.ActiveWindow.View.Zoom.Percentage = wps.Application.ActiveDocument.ActiveWindow.View.Zoom.Percentage+1;
//    wps.Application.ActiveDocument.ActiveWindow.View.Zoom.Percentage = wps.Application.ActiveDocument.ActiveWindow.View.Zoom.Percentage-1;
    // wps.Application.ActiveWindow.ScrollIntoView(wps.Application.Selection.Range, true)
  
}
export default handle;