import Util from '../js/util.js'
//import SystemDemo from '../js/systemdemo.js'
/* global wps:false */
//var WebNotifycount = 0;
function ShowComposerPane(wps){
    let tsId = wps.PluginStorage.getItem("composer_id")
    if (!tsId) {
        let tskpane = wps.CreateTaskPane(Util.GetUrlPath())
        let id = tskpane.ID
        console.log("ShowComposerPane",Util.GetUrlPath() )
        console.log("ShowComposerPane",tskpane)
        wps.PluginStorage.setItem("composer_id", id)
        tskpane.Visible = true
    } else {
        let tskpane = wps.GetTaskPane(tsId)
        tskpane.Visible = !tskpane.Visible
    }
}
function ShowWriterPane(wps){
    let tsId = wps.PluginStorage.getItem("writer_id")
    if (!tsId) {
        let tskpane = wps.CreateTaskPane(Util.GetUrlPath() + "Writer")
        let id = tskpane.ID
        console.log("ShowWriterPane",tskpane)
        console.log("ShowWriterPane",Util.GetUrlPath()+ "Writer")
        wps.PluginStorage.setItem("writer_id", id)
        tskpane.Visible = true
    } else {
        let tskpane = wps.GetTaskPane(tsId)
        tskpane.Visible = !tskpane.Visible
    }
}
function ShowQuestionBankPane(wps){
    let tsId = wps.PluginStorage.getItem("QuestionBank_id")
    if (!tsId) {
        let tskpane = wps.CreateTaskPane(Util.GetUrlPath() + "QuestionBank")
        let id = tskpane.ID
        console.log("ShowQuestionBankPane",tskpane)
        console.log("ShowQuestionBankPane",Util.GetUrlPath()+ "QuestionBank")
        wps.PluginStorage.setItem("QuestionBank_id", id)
        tskpane.Visible = true
    } else {
        let tskpane = wps.GetTaskPane(tsId)
        tskpane.Visible = !tskpane.Visible
    }
}
var ribbon = {
    //这个函数在整个wps加载项中是第一个执行的
    OnAddinLoad: function(ribbonUI) {
       
        if (typeof (wps.ribbonUI) !== "object") {
            wps.ribbonUI = ribbonUI
        }
        if (typeof (wps.Enum) !== "object") { // 如果没有内置枚举值
            wps.Enum = Util.WPS_Enum
        }
        //这几个导出函数是给外部业务系统调用的
       /* 
        window.openOfficeFileFromSystemDemo = SystemDemo.openOfficeFileFromSystemDemo
        window.InvokeFromSystemDemo = SystemDemo.InvokeFromSystemDemo
        wps.PluginStorage.setItem("EnableFlag", false) //往PluginStorage中设置一个标记，用于控制两个按钮的置灰
        wps.PluginStorage.setItem("ApiEventFlag", false) //往PluginStorage中设置一个标记，用于控制ApiEvent的按钮label
        let bFlag = wps.PluginStorage.getItem("EnableFlag")
        wps.PluginStorage.setItem("EnableFlag", !bFlag)
        wps.ribbonUI.InvalidateControl("btnIsEnbable")
        wps.ribbonUI.InvalidateControl("btnShowDialog")
        wps.ribbonUI.InvalidateControl("btnShowWriter")
        wps.ribbonUI.InvalidateControl("btnShowComposer")
        */
        ShowWriterPane(wps)
        return true
    },

    OnAction: function(control) {
        const eleId = control.Id
        switch (eleId) {
/*
            case "btnShowMsg":
                {
                    const doc = wps.WpsApplication().ActiveDocument
                    if (!doc) {
                        alert("当前没有打开任何文档")
                        return
                    }
                    alert(doc.Name)
                }
                break;
            case "btnIsEnbable":
                {
                    let bFlag = wps.PluginStorage.getItem("EnableFlag")
                    wps.PluginStorage.setItem("EnableFlag", !bFlag)

                    //通知wps刷新以下几个按饰的状态
                    wps.ribbonUI.InvalidateControl("btnIsEnbable")
                    wps.ribbonUI.InvalidateControl("btnShowDialog")
                    wps.ribbonUI.InvalidateControl("btnShowTaskPane")
                    //wps.ribbonUI.Invalidate(); 这行代码打开则是刷新所有的按钮状态
                    break
                }
            case "btnShowDialog":
                wps.ShowDialog(Util.GetUrlPath() + "dialog", "这是一个对话框网页", 400 * window.devicePixelRatio, 400 * window.devicePixelRatio, false)
                break
*/
            case "btnShowComposer":
                ShowComposerPane(wps)
                break
            case "btnShowWriter":
                ShowWriterPane(wps)
                 break
            case "btnShowQuestionBank":
                ShowQuestionBankPane(wps)
                break
/*
            case "btnApiEvent":
                {
                    let bFlag = wps.PluginStorage.getItem("ApiEventFlag")
                    let bRegister = bFlag ? false : true
                    wps.PluginStorage.setItem("ApiEventFlag", bRegister)
                    if (bRegister){
                        wps.ApiEvent.AddApiEventListener('DocumentNew', 'ribbon.OnNewDocumentApiEvent')
                    }
                    else{
                        wps.ApiEvent.RemoveApiEventListener('DocumentNew', 'ribbon.OnNewDocumentApiEvent')
                    }
                    
                    wps.ribbonUI.InvalidateControl("btnApiEvent") 
                }
                break
            case "btnWebNotify":
                {
                    let currentTime = new Date()
                    let timeStr = currentTime.getHours() + ':' + currentTime.getMinutes() + ":" + currentTime.getSeconds()
                    wps.OAAssist.WebNotify("这行内容由wps加载项主动送达给业务系统，可以任意自定义, 比如时间值:" + timeStr + "，次数：" + (++WebNotifycount), true)
                }
                break
*/
            default:
                break
        }
        return true
    },

    GetImage: function (control) {
        const eleId = control.Id
        switch (eleId) {
            // case "btnShowMsg":
            //     return "images/1.svg"
            // case "btnShowDialog":
            //     return "images/2.svg"
            // case "btnShowTaskPane":
            //     return "images/3.svg"
            case "btnShowQuestionBank":
                return "images/questionbank.svg"
            case "btnShowWriter":
                return "images/2.svg"
            case "btnShowComposer":
                return "images/3.svg"
            default:
        }
        return "images/newFromTemp.svg"
    },

    OnGetEnabled: function (control) {
        const eleId = control.Id
        switch (eleId) {
            case "btnShowMsg":
                return true
            case "btnShowDialog":
                {
                    let bFlag = wps.PluginStorage.getItem("EnableFlag")
                    return bFlag
                }
            case "btnShowTaskPane":
                {
                    let bFlag = wps.PluginStorage.getItem("EnableFlag")
                    return bFlag
                }
            default:
                break
        }
        return true
    },

    OnGetVisible: function (control) {
        const eleId = control.Id
        console.log(eleId)
        return true
    },

    OnGetLabel: function (control) {
        const eleId = control.Id
        switch (eleId) {
            case "btnIsEnbable":
                {
                    let bFlag = wps.PluginStorage.getItem("EnableFlag")
                    return bFlag ? "按钮Disable" : "按钮Enable"
                }
            case "btnApiEvent":
                {
                    let bFlag = wps.PluginStorage.getItem("ApiEventFlag")
                    return bFlag ? "清除新建文件事件" : "注册新建文件事件"
                }    
            default:
                break;
        }
        return ""
    },

    OnNewDocumentApiEvent:function(doc){
        alert("新建文件事件响应，取文件名: " + doc.Name)
    }

}

export default ribbon;