/* global wps:false */
 
function handle(param) {

    let sel=wps.Application.Selection.Font ;

    switch (param) {

        case "加粗":
            {
                
                 if ( sel.Bold=== 0|| sel.Bold===9999999) {
                    sel.Bold =-1;
                    
                    console.log("加粗");
                }
                else {
                    sel.Bold = 0;
                    console.log("取消加粗");
                }
                break;
            }

        case "下划线":
            {
                if (sel.Underline===0||sel.Underline===9999999) {
                    sel.Underline = 1;
                    sel.UnderlineColor=	-16777216;
                    console.log("加下划线");
                }
                else {
                    sel.Underline = 0;
                    sel.UnderlineColor=	-16777216;
                    console.log("取消下划线");
                }
                break;
            }


        case "倾斜":
            {
                if (sel.Italic===false||sel.Italic===9999999) {
                    sel.Italic = true;
                    console.log("倾斜");
                }
                else {
                    sel.Italic = false;
                    console.log("取消倾斜");
                }
                break;
            }


        case "变小":
            {
                console.log(param);
                sel.Shrink();
                console.log(sel.Size);
                break;
            }


        case "变大":
            {
                console.log(param);
                sel.Grow();
                console.log(sel.Size);
                break;
            }


        case "帮助1":
            {
                console.log(param);
                // Util.GetUrlPath()
                wps.ShowDialog("http://localhost:3889/help1.html", "帮助", 500 * window.devicePixelRatio, 300 * window.devicePixelRatio, false)
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