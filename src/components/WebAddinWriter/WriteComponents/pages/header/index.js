import React, { Component } from "react";
import "./style.css"
import "./divs.js"
import Button from "antd/es/button"
import { FormOutlined } from "@ant-design/icons";
/* global wps:false */

// var td = document.getElementById('container123');
// var myselect = document.querySelector("#addlines");

var flag = '0';

//  是否开启尺寸修改
 let resizeable = false
//  鼠标按下时的坐标，并在修改尺寸时保存上一个鼠标的位置
 let clientX, clientY
//  div可修改的最小宽高
 let minW = 8, minH = 8
//  鼠标按下时的位置，使用n、s、w、e表示
 let direc = ''
 
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textStyle: ["none", "none", "none", "none", "none"],
        textValue: ["1", "1", "1", "1", "1"],
        selectId: 0,
    };
  }
  addlines(state) {     //添加事件
    var td = document.getElementById('container123');
    // var myselect = document.querySelector("#addlines");
    console.log(td);
    this.setState({selectId:document.getElementById('addlines').value})
    var index = document.getElementById('addlines').value;
    // console.log("哈哈哈哈哈哈哈");
    // console.log(state.selectId);
    // var index = myselect.selectedIndex;
    td.innerHTML = '';
    if (index == "1") {
      flag = '1'
      this.addOneLine(td);
      this.reset_text("block", "block", "none", "none", "none");
      this.clearAll();
      this.synchronizea1("text_1",td);
      this.synchronizea2("text_2",td);
    }
    if (index == "2") {
      flag = '2'
      this.addTwoLine1(td);
      this.reset_text("block", "block", "block", "none", "none");
      this.clearAll();
      this.synchronizeb1("text_1",td);
      this.synchronizeb2("text_2",td);
      this.synchronizeb3("text_3",td);
    }
    if (index == "3") {
      flag = '3'
      this.addTwoLine2(td);
      this.reset_text("block", "block", "block", "none", "none");
      this.clearAll();
      this.synchronizec1("text_1",td);
      this.synchronizec2("text_2",td);
      this.synchronizec3("text_3",td);
    }
    if (index == "4") {
      flag = '4'
      this.addThreeLine(td);
      this.reset_text("block", "block", "block", "block", "none");
      this.clearAll();
    }
    if (index == "5") {
      flag = '5'
      this.reset_text("block", "block", "block", "block", "block");
      this.clearAll();
    }
  }
  //一条斜线函数
  addOneLine(td) {
    let eleId = td;
    let par= eleId.offsetParent;
    let top = 0
    if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
      top += eleId.offsetTop; // 获取高度
    }else{ 
      while(par){  // 循环获取当前对象与body的高度
        top += par.offsetTop;
        par = par.offsetParent;
        // console.log(top,par);
      }
    }
     par= eleId.offsetParent;
    let left = 0
    if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
      left += eleId.offsetLeft; // 获取高度
    }else{ 
      while(par){  // 循环获取当前对象与body的高度
        left += par.offsetLeft;
        par = par.offsetParent;
        
      }
    }
    var x1 = td.clientLeft + left;
    var y1 = td.clientTop + top;
    var x2 = x1 + td.clientWidth;
    var y2 = y1 + td.clientHeight;
    this.drawLine(x1, y1, x2, y2, td);
    // console.log(x1,x2,y1,y2);
  }
  //两条斜线（正）
  addTwoLine1(td) {
    let eleId = td;
    let par= eleId.offsetParent;
    let top = 0
    if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
      top += eleId.offsetTop; // 获取高度
    }else{ 
      while(par){  // 循环获取当前对象与body的高度
        top += par.offsetTop;
        par = par.offsetParent;
        // console.log(top,par);
      }
    }
     par= eleId.offsetParent;
    let left = 0
    if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
      left += eleId.offsetLeft; // 获取高度
    }else{ 
      while(par){  // 循环获取当前对象与body的高度
        left += par.offsetLeft;
        par = par.offsetParent;
        
      }
    }
    var x1 = td.clientLeft + left;
    var y1 = td.clientTop + top;
    var x2 = x1 + td.clientWidth;
    var y2 = y1 + td.clientHeight * 2 / 3;
    var x3 = x1 + td.clientWidth * 2 / 3;
    var y3 = y1 + td.clientHeight;
    this.drawLine(x1, y1, x2, y2, td);
    this.drawLine(x1, y1, x3, y3, td);
  }
  //两条斜线（反）
  addTwoLine2(td) {
    let eleId = td;
    let par= eleId.offsetParent;
    let top = 0
    if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
      top += eleId.offsetTop; // 获取高度
    }else{ 
      while(par){  // 循环获取当前对象与body的高度
        top += par.offsetTop;
        par = par.offsetParent;
        // console.log(top,par);
      }
    }
     par= eleId.offsetParent;
    let left = 0
    if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
      left += eleId.offsetLeft; // 获取高度
    }else{ 
      while(par){  // 循环获取当前对象与body的高度
        left += par.offsetLeft;
        par = par.offsetParent;
        
      }
    }
    var x1 = td.clientLeft + left;
    var y1 = td.clientTop + top;
    var x2 = x1 + td.clientWidth * 1 / 3;
    var y2 = y1;
    var x3 = x1 + td.clientWidth;
    var y3 = y1 + td.clientHeight;
    var x4 = x1;
    var y4 = y1 + td.clientHeight * 1 / 3;
    this.drawLine(x2, y2, x3, y3, td);
    this.drawLine(x4, y4, x3, y3, td);
  }
  //三条斜线
  addThreeLine(td) {
  }
  //画点
  makedot(x, y) {
    var pointDiv = "<div style='height:1px;position:absolute;left:" + x +
      "px;top:" + y + "px;width:1px;background:rgb(0,0,0);overflow:hidden;display: inline'></div>";
    return pointDiv;
  }
  //画线
  drawLine(x1, y1, x2, y2, container) {
    var slope; //斜率
    var direction;//坐标运动方向
    var tx = x2 - x1;
    var ty = y2 - y1;
    if (tx == 0 && ty == 0) return;
    var points = "";
    var axis;//坐标轴上的坐标
    if (Math.abs(tx) >= Math.abs(ty)) {//在x轴上移动
      direction = tx > 0 ? 1 : -1;
      tx = Math.abs(tx);
      slope = ty / tx;
      axis = x1;
      for (let i = 0; i < tx; i++) {
        points += this.makedot(axis, y1 + i * slope);
        axis += direction;
      }
  
    } else {//在y轴上移动
      direction = ty > 0 ? 1 : -1;
      ty = Math.abs(ty);
      slope = tx / ty;
      axis = y1;
      for (let i = 0; i < ty; i++) {
        points += this.makedot(x1 + i * slope, axis);
        axis += direction;
      }
    }
    container.innerHTML += points;
  }
  //文本同步函数，测试版本
  synchronizea1(obj,td) {//上半部分文本
    // document.getElementById(obj2).value =document.getElementById(obj1).value;
    document.getElementById(obj).onkeyup = ()=> {
      let s1 = this.state.textValue[0];
      // console.log(s1);
      let wpsapp = wps.WpsApplication();
      let eleId = td;
      let par= eleId.offsetParent;
      let top = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        top += eleId.offsetTop; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          top += par.offsetTop;
          par = par.offsetParent;
          // console.log(top,par);
        }
      }
       par= eleId.offsetParent;
      let left = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        left += eleId.offsetLeft; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          left += par.offsetLeft;
          par = par.offsetParent;
          
        }
      }
      let x0 = td.clientLeft + td.clientWidth;
      let y0 = td.clientTop  + td.clientHeight;
      if (s1.length == 0) {//长度判断
        this.clear1('textDiv1')
      } else {
        if (this.isChn(s1)) {//是否为中文
          let strLength = s1.length
          if (strLength == 1) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            // console.log(div1.style.left);
            diva1.style.left = 1 / 2 * x0 + left -10+ "px"
            diva1.style.top = 1 / 4 * y0+top - 10 + "px"
            // console.log(1 / 2 * x0 );
            // console.log(div1.style.left);
            document.getElementById('text11').innerText = s1.charAt(0);
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            diva1.style.left = 4/9 * x0 + left- 10 + "px"
            diva1.style.top = 2/9 * y0 +top -15 + "px"
            diva2.style.left = 13/18 * x0+ left - 10 + "px"
            diva2.style.top = 13/36 * y0 +top-15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
          } else if (strLength == 3) {
   
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            diva1.style.left = 3/8 * x0+left - 10 + "px"
            diva1.style.top = 3/16 * y0 +top -15 + "px"
            diva2.style.left = 7/12 * x0+left - 10 + "px"
            diva2.style.top = 7/24 * y0 +top-15  + "px"
            diva3.style.left = 19/24 * x0 +left- 10 + "px"
            diva3.style.top = 19/48 * y0 +top-15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
          } else if (strLength == 4) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            diva1.style.left = 1/3 * x0 +left- 10 + "px"
            diva1.style.top = 1/6 * y0  +top-15 + "px"
            diva2.style.left = 1/2 * x0 +left- 10 + "px"
            diva2.style.top = 1/4 * y0 +top-15  + "px"
            diva3.style.left = 2/3 * x0+left - 10 + "px"
            diva3.style.top = 1/3 * y0 +top-15  + "px"
            diva4.style.left = 5/6 * x0 +left- 10 + "px"
            diva4.style.top = 5/12 * y0 +top-15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
            document.getElementById('text14').innerText = s1.charAt(3);
          } else if (strLength == 5) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            diva1.style.left = 11/36 * x0+left - 10 + "px"
            diva1.style.top = 11/72 * y0 +top -15 + "px"
            diva2.style.left = 4/9 * x0 +left- 10 + "px"
            diva2.style.top = 2/9 * y0 +top-15  + "px"
            diva3.style.left = 7/12 * x0+left - 10 + "px"
            diva3.style.top = 7/24 * y0 +top-15  + "px"
            diva4.style.left = 13/18 * x0+left - 10 + "px"
            diva4.style.top = 13/36 * y0 +top-15  + "px"
            diva5.style.left = 31/36 * x0+left - 10 + "px"
            diva5.style.top = 31/72 * y0+top -15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
            document.getElementById('text14').innerText = s1.charAt(3);
            document.getElementById('text15').innerText = s1.charAt(4);
          } else if (strLength == 6) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text16' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            let diva6 = document.getElementById("text16");
            diva1.style.left = 2/7 * x0 +left- 10 + "px"
            diva1.style.top = 1/7 * y0  +top-15 + "px"
            diva2.style.left = 17/42 * x0+left - 10 + "px"
            diva2.style.top = 17/84 * y0 +top-15  + "px"
            diva3.style.left = 11/21 * x0+left - 10 + "px"
            diva3.style.top = 11/42 * y0 +top-15  + "px"
            diva4.style.left = 9/14 * x0 +left- 10 + "px"
            diva4.style.top = 9/28 * y0 +top-15  + "px"
            diva5.style.left = 16/21 * x0+left - 10 + "px"
            diva5.style.top = 8/21 * y0 +top-15  + "px"
            diva6.style.left = 37/42 * x0 +left- 10 + "px"
            diva6.style.top = 37/84 * y0+top -15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
            document.getElementById('text14').innerText = s1.charAt(3);
            document.getElementById('text15').innerText = s1.charAt(4);
            document.getElementById('text16').innerText = s1.charAt(5);
          } 
        } else {
          let strArr = s1.split(" ")//英文以空格分开
          let strLength = strArr.length
          // console.log(strArr)
          // console.log(strArr[0])
          // console.log(strArr.length)
          if (strLength == 1) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            diva1.style.left = 1 / 2 * x0 + left -10+ "px"
            diva1.style.top = 1 / 4 * y0+top - 10 + "px"
            document.getElementById('text11').innerText = strArr[0];
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            diva1.style.left = 4/9 * x0 + left- 10 + "px"
            diva1.style.top = 2/9 * y0 +top -15 + "px"
            diva2.style.left = 13/18 * x0+ left - 10 + "px"
            diva2.style.top = 13/36 * y0 +top-15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
          } else if (strLength == 3) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            diva1.style.left = 3/8 * x0+left - 10 + "px"
            diva1.style.top = 3/16 * y0 +top -15 + "px"
            diva2.style.left = 7/12 * x0+left - 10 + "px"
            diva2.style.top = 7/24 * y0 +top-15  + "px"
            diva3.style.left = 19/24 * x0 +left- 10 + "px"
            diva3.style.top = 19/48 * y0 +top-15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
          } else if (strLength == 4) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            diva1.style.left = 1/3 * x0 +left- 10 + "px"
            diva1.style.top = 1/6 * y0  +top-15 + "px"
            diva2.style.left = 1/2 * x0 +left- 10 + "px"
            diva2.style.top = 1/4 * y0 +top-15  + "px"
            diva3.style.left = 2/3 * x0+left - 10 + "px"
            diva3.style.top = 1/3 * y0 +top-15  + "px"
            diva4.style.left = 5/6 * x0 +left- 10 + "px"
            diva4.style.top = 5/12 * y0 +top-15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
            document.getElementById('text14').innerText = strArr[3];
          } else if (strLength == 5) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            diva1.style.left = 11/36 * x0+left - 10 + "px"
            diva1.style.top = 11/72 * y0 +top -15 + "px"
            diva2.style.left = 4/9 * x0 +left- 10 + "px"
            diva2.style.top = 2/9 * y0 +top-15  + "px"
            diva3.style.left = 7/12 * x0+left - 10 + "px"
            diva3.style.top = 7/24 * y0 +top-15  + "px"
            diva4.style.left = 13/18 * x0+left - 10 + "px"
            diva4.style.top = 13/36 * y0 +top-15  + "px"
            diva5.style.left = 31/36 * x0+left - 10 + "px"
            diva5.style.top = 31/72 * y0+top -15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
            document.getElementById('text14').innerText = strArr[3];
            document.getElementById('text15').innerText = strArr[4];
          } else if (strLength == 6) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text16' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            let diva6 = document.getElementById("text16");
            diva1.style.left = 2/7 * x0 +left- 10 + "px"
            diva1.style.top = 1/7 * y0  +top-15 + "px"
            diva2.style.left = 17/42 * x0+left - 10 + "px"
            diva2.style.top = 17/84 * y0 +top-15  + "px"
            diva3.style.left = 11/21 * x0+left - 10 + "px"
            diva3.style.top = 11/42 * y0 +top-15  + "px"
            diva4.style.left = 9/14 * x0 +left- 10 + "px"
            diva4.style.top = 9/28 * y0 +top-15  + "px"
            diva5.style.left = 16/21 * x0+left - 10 + "px"
            diva5.style.top = 8/21 * y0 +top-15  + "px"
            diva6.style.left = 37/42 * x0 +left- 10 + "px"
            diva6.style.top = 37/84 * y0+top -15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
            document.getElementById('text14').innerText = strArr[3];
            document.getElementById('text15').innerText = strArr[4];
            document.getElementById('text16').innerText = strArr[5];
          } 
        }
      }
    }
  }
  synchronizea2(obj,td) {//下半部分文本
    // document.getElementById(obj2).value =document.getElementById(obj1).value;
    document.getElementById(obj).onkeyup = () =>{
      let s1 = this.state.textValue[1];
      let eleId = td;
      let par= eleId.offsetParent;
      let top = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        top += eleId.offsetTop; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          top += par.offsetTop;
          par = par.offsetParent;
          // console.log(top,par);
        }
      }
       par= eleId.offsetParent;
      let left = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        left += eleId.offsetLeft; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          left += par.offsetLeft;
          par = par.offsetParent;
          
        }
      }
      let x0 = td.clientLeft + td.clientWidth;
      let y0 = td.clientTop  + td.clientHeight;
      if (s1.length == 0) {
        this.clear1('textDiv2')
      } else {
        if (this.isChn(s1)) {
          let strLength = s1.length
          if (strLength == 1) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            divb1.style.left = 1 / 2 * x0-1/6*x0+left - 10 + "px"
            divb1.style.top = 3 / 4 * y0+top - 10 + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            divb1.style.left = 5/18 * x0 +left- 10 + "px"
            divb1.style.top = 23/36 * y0 +top- 10 + "px"
            divb2.style.left = 5/9 * x0 +left- 10 + "px"
            divb2.style.top = 7/9 * y0 +top- 10 + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
          }else if (strLength == 3) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            divb1.style.left = 5/24 * x0 +left- 10 + "px"
            divb3.style.top = 13/16 * y0 +top -10 + "px"
            divb2.style.left = 5/12 * x0+left - 10 + "px"
            divb2.style.top = 17/24 * y0 +top-10  + "px"
            divb3.style.left = 5/8 * x0+left - 10 + "px"
            divb1.style.top = 29/48 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
          } else if (strLength == 4) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            divb1.style.left = 1/6 * x0 +left- 10 + "px"
            divb1.style.top = 7/12 * y0 +top-10  + "px"
            divb2.style.left = 1/3 * x0+left - 10 + "px"
            divb2.style.top = 2/3 * y0 +top-10  + "px"
            divb3.style.left = 1/2 * x0+left - 10 + "px"
            divb3.style.top = 3/4 * y0 +top -10 + "px"
            divb4.style.left = 2/3 * x0 +left- 10 + "px"
            divb4.style.top = 5/6 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
            document.getElementById('text24').innerText = s1.charAt(3);
          } else if (strLength == 5) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            divb1.style.left = 5/36 * x0 +left- 10 + "px"
            divb1.style.top = 41/72 * y0 +top-10  + "px"
            divb2.style.left = 5/18 * x0+left - 10 + "px"
            divb2.style.top = 23/36 * y0 +top-10  + "px"
            divb3.style.left = 5/12 * x0+left - 10 + "px"
            divb3.style.top = 51/72 * y0 +top -10 + "px"
            divb4.style.left = 5/9 * x0 +left- 10 + "px"
            divb4.style.top = 7/9 * y0 +top-10  + "px"
            divb5.style.left = 25/36 * x0+left - 10 + "px"
            divb5.style.top = 61/72 * y0 -10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
            document.getElementById('text24').innerText = s1.charAt(3);
            document.getElementById('text25').innerText = s1.charAt(4);
          } else if (strLength == 6) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text26' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            let divb6 = document.getElementById("text26");
            divb1.style.left = 5/42 * x0+left - 10 + "px"
            divb1.style.top = 47/84 * y0+top -10  + "px"
            divb2.style.left = 5/21 * x0+left - 10 + "px"
            divb2.style.top = 13/21 * y0 +top-10  + "px"
            divb3.style.left = 5/14* x0 +left- 10 + "px"
            divb3.style.top = 19/28 * y0 +top -10 + "px"
            divb4.style.left = 10/21 * x0+left - 10 + "px"
            divb4.style.top = 31/42 * y0 +top-10  + "px"
            divb5.style.left = 25/42 * x0+left - 10 + "px"
            divb5.style.top = 67/84 * y0 +top-10  + "px"
            divb6.style.left = 5/7 * x0+left - 10 + "px"
            divb6.style.top = 6/7 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
            document.getElementById('text24').innerText = s1.charAt(3);
            document.getElementById('text25').innerText = s1.charAt(4);
            document.getElementById('text26').innerText = s1.charAt(5);
          } 
        } else {
          let strArr = s1.split(" ")
          let strLength = strArr.length
          // console.log(strArr)
          // console.log(strArr[0])
          // console.log(strArr.length)
          if (strLength == 1) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            divb1.style.left = 1 / 2 * x0-1/6*x0+left - 10 + "px"
            divb1.style.top = 3 / 4 * y0+top - 10 + "px"
            document.getElementById('text21').innerText = strArr[0];
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            divb1.style.left = 5/18 * x0 +left- 10 + "px"
            divb1.style.top = 23/36 * y0 +top- 10 + "px"
            divb2.style.left = 5/9 * x0 +left- 10 + "px"
            divb2.style.top = 7/9 * y0 +top- 10 + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
          } else if (strLength == 3) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            divb1.style.left = 5/24 * x0 +left- 10 + "px"
            divb3.style.top = 13/16 * y0 +top -10 + "px"
            divb2.style.left = 5/12 * x0+left - 10 + "px"
            divb2.style.top = 17/24 * y0 +top-10  + "px"
            divb3.style.left = 5/8 * x0+left - 10 + "px"
            divb1.style.top = 29/48 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
          } else if (strLength == 4) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            divb1.style.left = 1/6 * x0 +left- 10 + "px"
            divb1.style.top = 7/12 * y0 +top-10  + "px"
            divb2.style.left = 1/3 * x0+left - 10 + "px"
            divb2.style.top = 2/3 * y0 +top-10  + "px"
            divb3.style.left = 1/2 * x0+left - 10 + "px"
            divb3.style.top = 3/4 * y0 +top -10 + "px"
            divb4.style.left = 2/3 * x0 +left- 10 + "px"
            divb4.style.top = 5/6 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
            document.getElementById('text24').innerText = strArr[3];
          } else if (strLength == 5) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            divb1.style.left = 5/36 * x0 +left- 10 + "px"
            divb1.style.top = 41/72 * y0 +top-10  + "px"
            divb2.style.left = 5/18 * x0+left - 10 + "px"
            divb2.style.top = 23/36 * y0 +top-10  + "px"
            divb3.style.left = 5/12 * x0+left - 10 + "px"
            divb3.style.top = 51/72 * y0 +top -10 + "px"
            divb4.style.left = 5/9 * x0 +left- 10 + "px"
            divb4.style.top = 7/9 * y0 +top-10  + "px"
            divb5.style.left = 25/36 * x0+left - 10 + "px"
            divb5.style.top = 61/72 * y0 -10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
            document.getElementById('text24').innerText = strArr[3];
            document.getElementById('text25').innerText = strArr[4];
          } else if (strLength == 6) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text26' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            let divb6 = document.getElementById("text26");
            divb1.style.left = 5/42 * x0+left - 10 + "px"
            divb1.style.top = 47/84 * y0+top -10  + "px"
            divb2.style.left = 5/21 * x0+left - 10 + "px"
            divb2.style.top = 13/21 * y0 +top-10  + "px"
            divb3.style.left = 5/14* x0 +left- 10 + "px"
            divb3.style.top = 19/28 * y0 +top -10 + "px"
            divb4.style.left = 10/21 * x0+left - 10 + "px"
            divb4.style.top = 31/42 * y0 +top-10  + "px"
            divb5.style.left = 25/42 * x0+left - 10 + "px"
            divb5.style.top = 67/84 * y0 +top-10  + "px"
            divb6.style.left = 5/7 * x0+left - 10 + "px"
            divb6.style.top = 6/7 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
            document.getElementById('text24').innerText = strArr[3];
            document.getElementById('text25').innerText = strArr[4];
            document.getElementById('text26').innerText = strArr[5];
          } 
        }
      }
    }
  }

  synchronizeb1(obj,td) {
    document.getElementById(obj).onkeyup = ()=> {
      let s1 = this.state.textValue[0];
      let eleId = td;
      let par= eleId.offsetParent;
      let top = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        top += eleId.offsetTop; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          top += par.offsetTop;
          par = par.offsetParent;
          // console.log(top,par);
        }
      }
       par= eleId.offsetParent;
      let left = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        left += eleId.offsetLeft; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          left += par.offsetLeft;
          par = par.offsetParent;
          
        }
      }
      let x0 = td.clientLeft + td.clientWidth;
      let y0 = td.clientTop  + td.clientHeight;
      console.log(x0);
      if (s1.length == 0) {//长度判断
        this.clear1('textDiv1')
      } else {
        if (this.isChn(s1)) {//是否为中文
          let strLength = s1.length
          if (strLength == 1) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            diva1.style.left = 1 / 2 * x0+left -10+ "px"
            diva1.style.top = 1 / 6 * y0+top - 10 + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
          } else if (strLength == 2) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            diva1.style.left = 4/9 * x0 +left- 10 + "px"
            diva1.style.top = 2/9 * 2/3*y0+top  -15 + "px"
            diva2.style.left = 13/18 * x0 +left- 10 + "px"
            diva2.style.top = 13/36 *2/3* y0+top-15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
          } else if (strLength == 3) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            diva1.style.left = 3/8 * x0 +left- 10 + "px"
            diva1.style.top = 3/16 * 2/3*y0 +top -15 + "px"
            diva2.style.left = 7/12 * x0 +left- 10 + "px"
            diva2.style.top = 7/24 *2/3* y0+top -15  + "px"
            diva3.style.left = 19/24 * x0+left - 10 + "px"
            diva3.style.top = 19/48 * 2/3*y0 +top-15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
          } else if (strLength == 4) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            diva1.style.left = 1/3 * x0 +left- 10 + "px"
            diva1.style.top = 1/6 * 2/3*y0 +top -15 + "px"
            diva2.style.left = 1/2 * x0 +left- 10 + "px"
            diva2.style.top = 1/4 * 2/3*y0 +top-15  + "px"
            diva3.style.left = 2/3 * x0 +left- 10 + "px"
            diva3.style.top = 1/3 *2/3* y0 +top-15  + "px"
            diva4.style.left = 5/6 * x0 +left- 10 + "px"
            diva4.style.top = 5/12 * 2/3*y0 +top-15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
            document.getElementById('text14').innerText = s1.charAt(3);
          } else if (strLength == 5) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            diva1.style.left = 11/36 * x0 +left- 10 + "px"
            diva1.style.top = 11/72 * 2/3*y0 +top -15 + "px"
            diva2.style.left = 4/9 * x0 +left- 10 + "px"
            diva2.style.top = 2/9 * 2/3*y0 +top-15  + "px"
            diva3.style.left = 7/12 * x0 +left- 10 + "px"
            diva3.style.top = 7/24 * 2/3*y0 +top-15  + "px"
            diva4.style.left = 13/18 * x0 +left- 10 + "px"
            diva4.style.top = 13/36 * 2/3*y0 +top-15  + "px"
            diva5.style.left = 31/36 * x0 +left- 10 + "px"
            diva5.style.top = 31/72 * 2/3*y0 +top-15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
            document.getElementById('text14').innerText = s1.charAt(3);
            document.getElementById('text15').innerText = s1.charAt(4);
          } else if (strLength == 6) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text16' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            let diva6 = document.getElementById("text16");
            diva1.style.left = 2/7 * x0 +left- 10 + "px"
            diva1.style.top = 1/7 * 2/3*y0 +top -15 + "px"
            diva2.style.left = 17/42 * x0 +left- 10 + "px"
            diva2.style.top = 17/84 * 2/3*y0+top -15  + "px"
            diva3.style.left = 11/21 * x0 +left- 10 + "px"
            diva3.style.top = 11/42 * 2/3*y0 +top-15  + "px"
            diva4.style.left = 9/14 * x0 +left- 10 + "px"
            diva4.style.top = 9/28 * 2/3*y0 +top-15  + "px"
            diva5.style.left = 16/21 * x0 +left- 10 + "px"
            diva5.style.top = 8/21 * 2/3*y0 +top-15  + "px"
            diva6.style.left = 37/42 * x0 +left- 10 + "px"
            diva6.style.top = 37/84 * 2/3*y0+top -15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
            document.getElementById('text14').innerText = s1.charAt(3);
            document.getElementById('text15').innerText = s1.charAt(4);
            document.getElementById('text16').innerText = s1.charAt(5);
          } 
        } else {
          let strArr = s1.split(" ")//英文以空格分开
          let strLength = strArr.length
          if (strLength == 1) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            diva1.style.left = 1 / 2 * x0+left -10+ "px"
            diva1.style.top = 1 / 6 * y0+top - 10 + "px"
            document.getElementById('text11').innerText = strArr[0];
          } else if (strLength == 2) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            diva1.style.left = 4/9 * x0 +left- 10 + "px"
            diva1.style.top = 2/9 * 2/3*y0+top  -15 + "px"
            diva2.style.left = 13/18 * x0 +left- 10 + "px"
            diva2.style.top = 13/36 *2/3* y0+top-15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
          } else if (strLength == 3) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            diva1.style.left = 3/8 * x0 +left- 10 + "px"
            diva1.style.top = 3/16 * 2/3*y0 +top -15 + "px"
            diva2.style.left = 7/12 * x0 +left- 10 + "px"
            diva2.style.top = 7/24 *2/3* y0+top -15  + "px"
            diva3.style.left = 19/24 * x0+left - 10 + "px"
            diva3.style.top = 19/48 * 2/3*y0 +top-15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
          } else if (strLength == 4) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            diva1.style.left = 1/3 * x0 +left- 10 + "px"
            diva1.style.top = 1/6 * 2/3*y0 +top -15 + "px"
            diva2.style.left = 1/2 * x0 +left- 10 + "px"
            diva2.style.top = 1/4 * 2/3*y0 +top-15  + "px"
            diva3.style.left = 2/3 * x0 +left- 10 + "px"
            diva3.style.top = 1/3 *2/3* y0 +top-15  + "px"
            diva4.style.left = 5/6 * x0 +left- 10 + "px"
            diva4.style.top = 5/12 * 2/3*y0 +top-15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
            document.getElementById('text14').innerText = strArr[3];
          } else if (strLength == 5) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            diva1.style.left = 11/36 * x0 +left- 10 + "px"
            diva1.style.top = 11/72 * 2/3*y0 +top -15 + "px"
            diva2.style.left = 4/9 * x0 +left- 10 + "px"
            diva2.style.top = 2/9 * 2/3*y0 +top-15  + "px"
            diva3.style.left = 7/12 * x0 +left- 10 + "px"
            diva3.style.top = 7/24 * 2/3*y0 +top-15  + "px"
            diva4.style.left = 13/18 * x0 +left- 10 + "px"
            diva4.style.top = 13/36 * 2/3*y0 +top-15  + "px"
            diva5.style.left = 31/36 * x0 +left- 10 + "px"
            diva5.style.top = 31/72 * 2/3*y0 +top-15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
            document.getElementById('text14').innerText = strArr[3];
            document.getElementById('text15').innerText = strArr[4];
          } else if (strLength == 6) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text16' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            let diva6 = document.getElementById("text16");
            diva1.style.left = 2/7 * x0 +left- 10 + "px"
            diva1.style.top = 1/7 * 2/3*y0 +top -15 + "px"
            diva2.style.left = 17/42 * x0 +left- 10 + "px"
            diva2.style.top = 17/84 * 2/3*y0+top -15  + "px"
            diva3.style.left = 11/21 * x0 +left- 10 + "px"
            diva3.style.top = 11/42 * 2/3*y0 +top-15  + "px"
            diva4.style.left = 9/14 * x0 +left- 10 + "px"
            diva4.style.top = 9/28 * 2/3*y0 +top-15  + "px"
            diva5.style.left = 16/21 * x0 +left- 10 + "px"
            diva5.style.top = 8/21 * 2/3*y0 +top-15  + "px"
            diva6.style.left = 37/42 * x0 +left- 10 + "px"
            diva6.style.top = 37/84 * 2/3*y0+top -15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
            document.getElementById('text14').innerText = strArr[3];
            document.getElementById('text15').innerText = strArr[4];
            document.getElementById('text16').innerText = strArr[5];
          } 
        }
      }
    }
  }
  synchronizeb2(obj,td) {//下半部分文本
    // document.getElementById(obj2).value =document.getElementById(obj1).value;
    document.getElementById(obj).onkeyup = () =>{
      let s1 = this.state.textValue[1];
      let eleId = td;
      let par= eleId.offsetParent;
      let top = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        top += eleId.offsetTop; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          top += par.offsetTop;
          par = par.offsetParent;
          // console.log(top,par);
        }
      }
       par= eleId.offsetParent;
      let left = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        left += eleId.offsetLeft; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          left += par.offsetLeft;
          par = par.offsetParent;
          
        }
      }
      let x0 = td.clientLeft + td.clientWidth;
      let y0 = td.clientTop  + td.clientHeight;
      if (s1.length == 0) {
        this.clear1('textDiv2')
      } else {
        if (this.isChn(s1)) {
          let strLength = s1.length
          if (strLength == 1) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            divb1.style.left = 1 / 2 * x0+left- 10 + "px"
            divb1.style.top = 1/2 * y0+top - 10 + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            divb1.style.left = 6/18 * x0 +left- 10 + "px"
            divb1.style.top = 6/18 * y0 +top- 10 + "px"
            divb2.style.left = 6/9 * x0 +left- 10 + "px"
            divb2.style.top = 6/9 * y0 +top- 10 + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
          }else if (strLength == 3) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            divb1.style.left = 6/24 * x0+left - 10 + "px"
            divb1.style.top = 6/24 * y0 +top -10 + "px"
            divb2.style.left = 6/12 * x0 +left- 10 + "px"
            divb2.style.top = 6/12 * y0 +top-10  + "px"
            divb3.style.left = 6/8 * x0 +left- 10 + "px"
            divb3.style.top = 6/8 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
          } else if (strLength == 4) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            divb1.style.left = 3/12 * x0 +left- 10 + "px"
            divb1.style.top = 3/12 * y0+top -10  + "px"
            divb2.style.left = 5/12 * x0 +left- 10 + "px"
            divb2.style.top = 5/12 * y0 +top-10  + "px"
            divb3.style.left = 7/12 * x0 +left- 10 + "px"
            divb3.style.top = 7/12 * y0 +top -10 + "px"
            divb4.style.left = 9/12 * x0+left - 10 + "px"
            divb4.style.top = 9/12 * y0+top -10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
            document.getElementById('text24').innerText = s1.charAt(3);
          } else if (strLength == 5) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            divb1.style.left = 7/36 * x0 +left- 10 + "px"
            divb1.style.top = 7/36 * y0 +top-10  + "px"
            divb2.style.left = 12/36 * x0 +left- 10 + "px"
            divb2.style.top = 12/36 * y0 +top-10  + "px"
            divb3.style.left = 17/36 * x0+left - 10 + "px"
            divb3.style.top = 17/36 * y0 +top -10 + "px"
            divb4.style.left = 22/36 * x0 +left- 10 + "px"
            divb4.style.top = 22/36 * y0 +top-10  + "px"
            divb5.style.left = 27/36 * x0 +left- 10 + "px"
            divb5.style.top = 27/36 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
            document.getElementById('text24').innerText = s1.charAt(3);
            document.getElementById('text25').innerText = s1.charAt(4);
          } else if (strLength == 6) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text26' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            let divb6 = document.getElementById("text26");
            divb1.style.left = 7/42 * x0+left - 10 + "px"
            divb1.style.top = 7/42 * y0 +top-10  + "px"
            divb2.style.left = 12/42 * x0+left - 10 + "px"
            divb2.style.top = 6/21 * y0 +top-10  + "px"
            divb3.style.left = 17/42* x0 +left- 10 + "px"
            divb3.style.top = 17/42 * y0 +top -10 + "px"
            divb4.style.left = 11/21 * x0 +left- 10 + "px"
            divb4.style.top = 11/21 * y0 +top-10  + "px"
            divb5.style.left = 27/42 * x0 +left- 10 + "px"
            divb5.style.top = 27/42 * y0+top -10  + "px"
            divb6.style.left = 32/42 * x0+left - 10 + "px"
            divb6.style.top = 32/42 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
            document.getElementById('text24').innerText = s1.charAt(3);
            document.getElementById('text25').innerText = s1.charAt(4);
            document.getElementById('text26').innerText = s1.charAt(5);
          } 
        } else {
          let strArr = s1.split(" ")
          let strLength = strArr.length
          if (strLength == 1) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            divb1.style.left = 1 / 2 * x0+left- 10 + "px"
            divb1.style.top = 1/2 * y0+top - 10 + "px"
            document.getElementById('text21').innerText = strArr[0];
          } else if (strLength == 2) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            divb1.style.left = 6/18 * x0 +left- 10 + "px"
            divb1.style.top = 6/18 * y0 +top- 10 + "px"
            divb2.style.left = 6/9 * x0 +left- 10 + "px"
            divb2.style.top = 6/9 * y0 +top- 10 + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
          } else if (strLength == 3) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            divb1.style.left = 6/24 * x0+left - 10 + "px"
            divb1.style.top = 6/24 * y0 +top -10 + "px"
            divb2.style.left = 6/12 * x0 +left- 10 + "px"
            divb2.style.top = 6/12 * y0 +top-10  + "px"
            divb3.style.left = 6/8 * x0 +left- 10 + "px"
            divb3.style.top = 6/8 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
          } else if (strLength == 4) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            divb1.style.left = 3/12 * x0 +left- 10 + "px"
            divb1.style.top = 3/12 * y0+top -10  + "px"
            divb2.style.left = 5/12 * x0 +left- 10 + "px"
            divb2.style.top = 5/12 * y0 +top-10  + "px"
            divb3.style.left = 7/12 * x0 +left- 10 + "px"
            divb3.style.top = 7/12 * y0 +top -10 + "px"
            divb4.style.left = 9/12 * x0+left - 10 + "px"
            divb4.style.top = 9/12 * y0+top -10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
            document.getElementById('text24').innerText = strArr[3];
          } else if (strLength == 5) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            divb1.style.left = 7/36 * x0 +left- 10 + "px"
            divb1.style.top = 7/36 * y0 +top-10  + "px"
            divb2.style.left = 12/36 * x0 +left- 10 + "px"
            divb2.style.top = 12/36 * y0 +top-10  + "px"
            divb3.style.left = 17/36 * x0+left - 10 + "px"
            divb3.style.top = 17/36 * y0 +top -10 + "px"
            divb4.style.left = 22/36 * x0 +left- 10 + "px"
            divb4.style.top = 22/36 * y0 +top-10  + "px"
            divb5.style.left = 27/36 * x0 +left- 10 + "px"
            divb5.style.top = 27/36 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
            document.getElementById('text24').innerText = strArr[3];
            document.getElementById('text25').innerText = strArr[4];
          } else if (strLength == 6) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text26' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            let divb6 = document.getElementById("text26");
            divb1.style.left = 7/42 * x0+left - 10 + "px"
            divb1.style.top = 7/42 * y0 +top-10  + "px"
            divb2.style.left = 12/42 * x0+left - 10 + "px"
            divb2.style.top = 6/21 * y0 +top-10  + "px"
            divb3.style.left = 17/42* x0 +left- 10 + "px"
            divb3.style.top = 17/42 * y0 +top -10 + "px"
            divb4.style.left = 11/21 * x0 +left- 10 + "px"
            divb4.style.top = 11/21 * y0 +top-10  + "px"
            divb5.style.left = 27/42 * x0 +left- 10 + "px"
            divb5.style.top = 27/42 * y0+top -10  + "px"
            divb6.style.left = 32/42 * x0+left - 10 + "px"
            divb6.style.top = 32/42 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
            document.getElementById('text24').innerText = strArr[3];
            document.getElementById('text25').innerText = strArr[4];
            document.getElementById('text26').innerText = strArr[5];
          } 
        }
      }
    }
  }

  synchronizeb3(obj,td) {//下半部分文本
    // document.getElementById(obj2).value =document.getElementById(obj1).value;
    document.getElementById(obj).onkeyup = () =>{
      let s1 = this.state.textValue[2];
      let eleId = td;
      let par= eleId.offsetParent;
      let top = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        top += eleId.offsetTop; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          top += par.offsetTop;
          par = par.offsetParent;
          // console.log(top,par);
        }
      }
       par= eleId.offsetParent;
      let left = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        left += eleId.offsetLeft; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          left += par.offsetLeft;
          par = par.offsetParent;
          
        }
      }
      let x0 = td.clientLeft + td.clientWidth;
      let y0 = td.clientTop  + td.clientHeight;
      if (s1.length == 0) {
        this.clear1('textDiv3')
      } else {
        if (this.isChn(s1)) {
          let strLength = s1.length
          if (strLength == 1) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            divb1.style.left = 1/6 * x0+left- 10 + "px"
            divb1.style.top = 1/2 * y0 +top- 10 + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            divb1.style.left = 5/27 * x0 +left- 10 + "px"
            divb1.style.top = 23/36 * y0 +top- 10 + "px"
            divb2.style.left = 10/27 * x0 +left- 10 + "px"
            divb2.style.top = 28/36 * y0 +top- 10 + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
            document.getElementById('text32').innerText = s1.charAt(1);
          }else if (strLength == 3) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            divb1.style.left = 1/12 * x0 +left- 10 + "px"
            divb1.style.top = 1/4 * y0  +top-10 + "px"
            divb2.style.left = 2/12 * x0 +left- 10 + "px"
            divb2.style.top = 2/4 * y0 +top-10  + "px"
            divb3.style.left = 3/12 * x0 +left- 10 + "px"
            divb3.style.top = 3/4 * y0+top -10  + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
            document.getElementById('text32').innerText = s1.charAt(1);
            document.getElementById('text33').innerText = s1.charAt(2);
          } else if (strLength == 4) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            divb1.style.left = 1/15 * x0+left - 10 + "px"
            divb1.style.top = 1/5 * y0+top -10  + "px"
            divb2.style.left = 2/15 * x0 +left- 10 + "px"
            divb2.style.top = 2/5 * y0 +top-10  + "px"
            divb3.style.left = 3/15 * x0 +left- 10 + "px"
            divb3.style.top = 3/5* y0 +top -10 + "px"
            divb4.style.left = 4/15 * x0 +left- 10 + "px"
            divb4.style.top = 4/5 * y0 +top-10  + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
            document.getElementById('text32').innerText = s1.charAt(1);
            document.getElementById('text33').innerText = s1.charAt(2);
            document.getElementById('text34').innerText = s1.charAt(3);
          } else if (strLength == 5) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text35' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            let divb5 = document.getElementById("text35");
            divb1.style.left = 1/18 * x0 +left- 10 + "px"
            divb1.style.top = 1/6 * y0 -10 +top + "px"
            divb2.style.left = 2/18 * x0 +left- 10 + "px"
            divb2.style.top = 2/6 * y0+top -10  + "px"
            divb3.style.left = 3/18 * x0+left - 10 + "px"
            divb3.style.top = 3/6 * y0 +top -10 + "px"
            divb4.style.left = 4/18 * x0 +left- 10 + "px"
            divb4.style.top = 4/6 * y0+top -10  + "px"
            divb5.style.left = 5/18 * x0+left - 10 + "px"
            divb5.style.top = 5/6 * y0 +top-10  + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
            document.getElementById('text32').innerText = s1.charAt(1);
            document.getElementById('text33').innerText = s1.charAt(2);
            document.getElementById('text34').innerText = s1.charAt(3);
            document.getElementById('text35').innerText = s1.charAt(4);
          } else if (strLength == 6) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text35' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text36' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            let divb5 = document.getElementById("text35");
            let divb6 = document.getElementById("text36");
            divb1.style.left = 1/21 * x0 +left- 10 + "px"
            divb1.style.top = 1/7 * y0 +top-10  + "px"
            divb2.style.left = 2/21 * x0 +left- 10 + "px"
            divb2.style.top = 2/7 * y0+top -10  + "px"
            divb3.style.left = 3/21* x0 +left- 10 + "px"
            divb3.style.top = 3/7 * y0 +top -10 + "px"
            divb4.style.left = 4/21 * x0 +left- 10 + "px"
            divb4.style.top = 4/7 * y0+top -10  + "px"
            divb5.style.left = 5/21 * x0 +left- 10 + "px"
            divb5.style.top = 5/7 * y0 +top-10  + "px"
            divb6.style.left = 6/21 * x0+left - 10 + "px"
            divb6.style.top = 6/7 * y0 +top-10  + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
            document.getElementById('text32').innerText = s1.charAt(1);
            document.getElementById('text33').innerText = s1.charAt(2);
            document.getElementById('text34').innerText = s1.charAt(3);
            document.getElementById('text35').innerText = s1.charAt(4);
            document.getElementById('text36').innerText = s1.charAt(5);
          } 
        } else {
          let strArr = s1.split(" ")
          let strLength = strArr.length
          if (strLength == 1) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            divb1.style.left = 1/6 * x0+left- 10 + "px"
            divb1.style.top = 1/2 * y0 +top- 10 + "px"
            document.getElementById('text31').innerText = strArr[0];
          } else if (strLength == 2) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            divb1.style.left = 5/27 * x0 +left- 10 + "px"
            divb1.style.top = 23/36 * y0 +top- 10 + "px"
            divb2.style.left = 10/27 * x0 +left- 10 + "px"
            divb2.style.top = 28/36 * y0 +top- 10 + "px"
            document.getElementById('text31').innerText = strArr[0];
            document.getElementById('text32').innerText = strArr[1];
          } else if (strLength == 3) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            divb1.style.left = 1/12 * x0 +left- 10 + "px"
            divb1.style.top = 1/4 * y0  +top-10 + "px"
            divb2.style.left = 2/12 * x0 +left- 10 + "px"
            divb2.style.top = 2/4 * y0 +top-10  + "px"
            divb3.style.left = 3/12 * x0 +left- 10 + "px"
            divb3.style.top = 3/4 * y0+top -10  + "px"
            document.getElementById('text31').innerText = strArr[0];
            document.getElementById('text32').innerText = strArr[1];
            document.getElementById('text33').innerText = strArr[2];
          } else if (strLength == 4) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            divb1.style.left = 1/15 * x0+left - 10 + "px"
            divb1.style.top = 1/5 * y0+top -10  + "px"
            divb2.style.left = 2/15 * x0 +left- 10 + "px"
            divb2.style.top = 2/5 * y0 +top-10  + "px"
            divb3.style.left = 3/15 * x0 +left- 10 + "px"
            divb3.style.top = 3/5* y0 +top -10 + "px"
            divb4.style.left = 4/15 * x0 +left- 10 + "px"
            divb4.style.top = 4/5 * y0 +top-10  + "px"
            document.getElementById('text31').innerText = strArr[0];
            document.getElementById('text32').innerText = strArr[1];
            document.getElementById('text33').innerText = strArr[2];
            document.getElementById('text34').innerText = strArr[3];
          } else if (strLength == 5) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text35' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            let divb5 = document.getElementById("text35");
            divb1.style.left = 1/18 * x0 +left- 10 + "px"
            divb1.style.top = 1/6 * y0 -10 +top + "px"
            divb2.style.left = 2/18 * x0 +left- 10 + "px"
            divb2.style.top = 2/6 * y0+top -10  + "px"
            divb3.style.left = 3/18 * x0+left - 10 + "px"
            divb3.style.top = 3/6 * y0 +top -10 + "px"
            divb4.style.left = 4/18 * x0 +left- 10 + "px"
            divb4.style.top = 4/6 * y0+top -10  + "px"
            divb5.style.left = 5/18 * x0+left - 10 + "px"
            divb5.style.top = 5/6 * y0 +top-10  + "px"
            document.getElementById('text31').innerText = strArr[0];
            document.getElementById('text32').innerText = strArr[1];
            document.getElementById('text33').innerText = strArr[2];
            document.getElementById('text34').innerText = strArr[3];
            document.getElementById('text35').innerText = strArr[4];
          } else if (strLength == 6) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text35' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text36' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            let divb5 = document.getElementById("text35");
            let divb6 = document.getElementById("text36");
            divb1.style.left = 1/21 * x0 +left- 10 + "px"
            divb1.style.top = 1/7 * y0 +top-10  + "px"
            divb2.style.left = 2/21 * x0 +left- 10 + "px"
            divb2.style.top = 2/7 * y0+top -10  + "px"
            divb3.style.left = 3/21* x0 +left- 10 + "px"
            divb3.style.top = 3/7 * y0 +top -10 + "px"
            divb4.style.left = 4/21 * x0 +left- 10 + "px"
            divb4.style.top = 4/7 * y0+top -10  + "px"
            divb5.style.left = 5/21 * x0 +left- 10 + "px"
            divb5.style.top = 5/7 * y0 +top-10  + "px"
            divb6.style.left = 6/21 * x0+left - 10 + "px"
            divb6.style.top = 6/7 * y0 +top-10  + "px"
            document.getElementById('text31').innerText = strArr[0];
            document.getElementById('text32').innerText = strArr[1];
            document.getElementById('text33').innerText = strArr[2];
            document.getElementById('text34').innerText = strArr[3];
            document.getElementById('text35').innerText = strArr[4];
            document.getElementById('text36').innerText = strArr[5];
          } 
        }
      }
    }
  }

  synchronizec1(obj,td) {
    document.getElementById(obj).onkeyup = ()=> {
      let s1 = this.state.textValue[0];
      let eleId = td;
      let par= eleId.offsetParent;
      let top = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        top += eleId.offsetTop; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          top += par.offsetTop;
          par = par.offsetParent;
          // console.log(top,par);
        }
      }
       par= eleId.offsetParent;
      let left = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        left += eleId.offsetLeft; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          left += par.offsetLeft;
          par = par.offsetParent;
          
        }
      }
      let x0 = td.clientLeft + td.clientWidth;
      let y0 = td.clientTop  + td.clientHeight;
      console.log(x0);
      if (s1.length == 0) {//长度判断
        this.clear1('textDiv1')
      } else {
        if (this.isChn(s1)) {//是否为中文
          let strLength = s1.length
          if (strLength == 1) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            diva1.style.left = 5/6 * x0 +left-10+ "px"
            diva1.style.top = 1/2 * y0-1/6*y0+top - 10 + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
          } else if (strLength == 2) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            diva1.style.left = 14/18 * x0 +left- 10 + "px"
            diva1.style.top = 1/3*y0 +top -15 + "px"
            diva2.style.left = 16/18 * x0+left - 10 + "px"
            diva2.style.top = 2/3* y0 +top-15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
          } else if (strLength == 3) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            diva1.style.left = 9/12 * x0+left - 10 + "px"
            diva1.style.top = 1/4*y0+top  -15 + "px"
            diva2.style.left = 10/12 * x0+left - 10 + "px"
            diva2.style.top = 2/4* y0 +top-15  + "px"
            diva3.style.left = 11/12 * x0+left - 10 + "px"
            diva3.style.top = 3/4*y0 +top-15  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
          } else if (strLength == 4) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            diva1.style.left = 11/15 * x0 +left- 10 + "px"
            diva1.style.top = 1/5*y0  +top-15 + "px"
            diva2.style.left = 12/15 * x0+left - 10 + "px"
            diva2.style.top = 2/5*y0 -15 +top + "px"
            diva3.style.left = 13/15 * x0 +left- 10 + "px"
            diva3.style.top = 3/5* y0 -15 +top + "px"
            diva4.style.left = 14/15 * x0 +left- 10 + "px"
            diva4.style.top = 4/5*y0 -15+top  + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
            document.getElementById('text14').innerText = s1.charAt(3);
          } else if (strLength == 5) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            diva1.style.left = 13/18 * x0 +left- 10 + "px"
            diva1.style.top = 1/6*y0  -15+top + "px"
            diva2.style.left = 14/18 * x0+left - 10 + "px"
            diva2.style.top = 2/6*y0 -15+top  + "px"
            diva3.style.left = 15/18 * x0+left - 10 + "px"
            diva3.style.top = 3/6*y0 -15 +top + "px"
            diva4.style.left = 16/18 * x0 +left- 10 + "px"
            diva4.style.top = 4/6*y0 -15 +top + "px"
            diva5.style.left = 17/18 * x0+left - 10 + "px"
            diva5.style.top = 5/6*y0 -15 +top + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
            document.getElementById('text14').innerText = s1.charAt(3);
            document.getElementById('text15').innerText = s1.charAt(4);
          } else if (strLength == 6) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text16' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            let diva6 = document.getElementById("text16");
            diva1.style.left = 15/21 * x0 +left- 10 + "px"
            diva1.style.top = 1/7 *y0  -15+top + "px"
            diva2.style.left = 16/21 * x0+left - 10 + "px"
            diva2.style.top = 2/7*y0 -15 +top + "px"
            diva3.style.left = 17/21 * x0 +left- 10 + "px"
            diva3.style.top = 3/7*y0 -15 +top + "px"
            diva4.style.left = 18/21 * x0+left - 10 + "px"
            diva4.style.top = 4/7*y0 -15+top  + "px"
            diva5.style.left = 19/21 * x0 +left- 10 + "px"
            diva5.style.top = 5/7*y0 -15 +top + "px"
            diva6.style.left = 20/21 * x0+left - 10 + "px"
            diva6.style.top = 6/7*y0 -15 +top + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
            document.getElementById('text14').innerText = s1.charAt(3);
            document.getElementById('text15').innerText = s1.charAt(4);
            document.getElementById('text16').innerText = s1.charAt(5);
          } 
        } else {
          let strArr = s1.split(" ")//英文以空格分开
          let strLength = strArr.length
          if (strLength == 1) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            diva1.style.left = 5/6 * x0 +left-10+ "px"
            diva1.style.top = 1/2 * y0-1/6*y0+top - 10 + "px"
            document.getElementById('text11').innerText = strArr[0];
          } else if (strLength == 2) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            diva1.style.left = 14/18 * x0 +left- 10 + "px"
            diva1.style.top = 1/3*y0 +top -15 + "px"
            diva2.style.left = 16/18 * x0+left - 10 + "px"
            diva2.style.top = 2/3* y0 +top-15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
          } else if (strLength == 3) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            diva1.style.left = 9/12 * x0+left - 10 + "px"
            diva1.style.top = 1/4*y0+top  -15 + "px"
            diva2.style.left = 10/12 * x0+left - 10 + "px"
            diva2.style.top = 2/4* y0 +top-15  + "px"
            diva3.style.left = 11/12 * x0+left - 10 + "px"
            diva3.style.top = 3/4*y0 +top-15  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
          } else if (strLength == 4) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            diva1.style.left = 11/15 * x0 +left- 10 + "px"
            diva1.style.top = 1/5*y0  +top-15 + "px"
            diva2.style.left = 12/15 * x0+left - 10 + "px"
            diva2.style.top = 2/5*y0 -15 +top + "px"
            diva3.style.left = 13/15 * x0 +left- 10 + "px"
            diva3.style.top = 3/5* y0 -15 +top + "px"
            diva4.style.left = 14/15 * x0 +left- 10 + "px"
            diva4.style.top = 4/5*y0 -15+top  + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
            document.getElementById('text14').innerText = strArr[3];
          } else if (strLength == 5) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            diva1.style.left = 13/18 * x0 +left- 10 + "px"
            diva1.style.top = 1/6*y0  -15+top + "px"
            diva2.style.left = 14/18 * x0+left - 10 + "px"
            diva2.style.top = 2/6*y0 -15+top  + "px"
            diva3.style.left = 15/18 * x0+left - 10 + "px"
            diva3.style.top = 3/6*y0 -15 +top + "px"
            diva4.style.left = 16/18 * x0 +left- 10 + "px"
            diva4.style.top = 4/6*y0 -15 +top + "px"
            diva5.style.left = 17/18 * x0+left - 10 + "px"
            diva5.style.top = 5/6*y0 -15 +top + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
            document.getElementById('text14').innerText = strArr[3];
            document.getElementById('text15').innerText = strArr[4];
          } else if (strLength == 6) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text14' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text15' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text16' class='textDiv1' style=\"position: absolute;\"></div>";
            let diva1 = document.getElementById("text11");
            let diva2 = document.getElementById("text12");
            let diva3 = document.getElementById("text13");
            let diva4 = document.getElementById("text14");
            let diva5 = document.getElementById("text15");
            let diva6 = document.getElementById("text16");
            diva1.style.left = 15/21 * x0 +left- 10 + "px"
            diva1.style.top = 1/7 *y0  -15+top + "px"
            diva2.style.left = 16/21 * x0+left - 10 + "px"
            diva2.style.top = 2/7*y0 -15 +top + "px"
            diva3.style.left = 17/21 * x0 +left- 10 + "px"
            diva3.style.top = 3/7*y0 -15 +top + "px"
            diva4.style.left = 18/21 * x0+left - 10 + "px"
            diva4.style.top = 4/7*y0 -15+top  + "px"
            diva5.style.left = 19/21 * x0 +left- 10 + "px"
            diva5.style.top = 5/7*y0 -15 +top + "px"
            diva6.style.left = 20/21 * x0+left - 10 + "px"
            diva6.style.top = 6/7*y0 -15 +top + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
            document.getElementById('text14').innerText = strArr[3];
            document.getElementById('text15').innerText = strArr[4];
            document.getElementById('text16').innerText = strArr[5];
          } 
        }
      }
    }
  }

  synchronizec2(obj,td) {//下半部分文本
    // document.getElementById(obj2).value =document.getElementById(obj1).value;
    document.getElementById(obj).onkeyup = () =>{
      let s1 = this.state.textValue[1];
      let eleId = td;
      let par= eleId.offsetParent;
      let top = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        top += eleId.offsetTop; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          top += par.offsetTop;
          par = par.offsetParent;
          // console.log(top,par);
        }
      }
       par= eleId.offsetParent;
      let left = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        left += eleId.offsetLeft; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          left += par.offsetLeft;
          par = par.offsetParent;
          
        }
      }
      let x0 = td.clientLeft + td.clientWidth;
      let y0 = td.clientTop  + td.clientHeight;
      if (s1.length == 0) {
        this.clear1('textDiv2')
      } else {
        if (this.isChn(s1)) {
          let strLength = s1.length
          if (strLength == 1) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            divb1.style.left = 1 / 2 * x0+left- 10 + "px"
            divb1.style.top = 1/2 * y0 +top- 10 + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            divb1.style.left = 5/18 * x0+left - 10 + "px"
            divb1.style.top = 5/18 * y0 +top- 10 + "px"
            divb2.style.left = 10/18 * x0+left - 10 + "px"
            divb2.style.top = 10/18 * y0+top - 10 + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
          }else if (strLength == 3) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            divb1.style.left = 5/24 * x0 +left- 10 + "px"
            divb1.style.top = 5/24 * y0 +top -10 + "px"
            divb2.style.left = 10/24 * x0 +left- 10 + "px"
            divb2.style.top = 10/24 * y0+top -10  + "px"
            divb3.style.left = 15/24 * x0 +left- 10 + "px"
            divb3.style.top = 15/24 * y0+top -10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
          } else if (strLength == 4) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            divb1.style.left = 5/30 * x0+left - 10 + "px"
            divb1.style.top = 5/30 * y0 +top-10  + "px"
            divb2.style.left = 10/30 * x0 +left- 10 + "px"
            divb2.style.top = 10/30 * y0+top -10  + "px"
            divb3.style.left = 15/30 * x0+left - 10 + "px"
            divb3.style.top = 15/30 * y0 +top -10 + "px"
            divb4.style.left = 20/30 * x0 +left- 10 + "px"
            divb4.style.top = 20/30 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
            document.getElementById('text24').innerText = s1.charAt(3);
          } else if (strLength == 5) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            divb1.style.left = 5/36 * x0+left - 10 + "px"
            divb1.style.top = 5/36 * y0 +top-10  + "px"
            divb2.style.left = 10/36 * x0 +left- 10 + "px"
            divb2.style.top = 10/36 * y0+top -10  + "px"
            divb3.style.left = 15/36 * x0+left - 10 + "px"
            divb3.style.top = 15/36 * y0 +top -10 + "px"
            divb4.style.left = 20/36 * x0 +left- 10 + "px"
            divb4.style.top = 20/36 * y0+top -10  + "px"
            divb5.style.left = 25/36 * x0+left - 10 + "px"
            divb5.style.top = 25/36 * y0+top -10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
            document.getElementById('text24').innerText = s1.charAt(3);
            document.getElementById('text25').innerText = s1.charAt(4);
          } else if (strLength == 6) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text26' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            let divb6 = document.getElementById("text26");
            divb1.style.left = 5/42 * x0 +left- 10 + "px"
            divb1.style.top = 5/42 * y0+top -10  + "px"
            divb2.style.left = 10/42 * x0+left- 10 + "px"
            divb2.style.top = 10/42 * y0+top -10  + "px"
            divb3.style.left = 15/42* x0 +left- 10 + "px"
            divb3.style.top = 15/42 * y0 +top -10 + "px"
            divb4.style.left = 20/42 * x0 +left- 10 + "px"
            divb4.style.top = 20/42 * y0 +top-10  + "px"
            divb5.style.left = 25/42 * x0 +left- 10 + "px"
            divb5.style.top = 25/42 * y0 +top-10  + "px"
            divb6.style.left = 30/42 * x0+left - 10 + "px"
            divb6.style.top = 30/42 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
            document.getElementById('text23').innerText = s1.charAt(2);
            document.getElementById('text24').innerText = s1.charAt(3);
            document.getElementById('text25').innerText = s1.charAt(4);
            document.getElementById('text26').innerText = s1.charAt(5);
          } 
        } else {
          let strArr = s1.split(" ")
          let strLength = strArr.length
          // console.log(strArr)
          // console.log(strArr[0])
          // console.log(strArr.length)
          if (strLength == 1) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            divb1.style.left = 1 / 2 * x0+left- 10 + "px"
            divb1.style.top = 1/2 * y0 +top- 10 + "px"
            document.getElementById('text21').innerText = strArr[0];
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            divb1.style.left = 5/18 * x0+left - 10 + "px"
            divb1.style.top = 5/18 * y0 +top- 10 + "px"
            divb2.style.left = 10/18 * x0+left - 10 + "px"
            divb2.style.top = 10/18 * y0+top - 10 + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
          } else if (strLength == 3) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            divb1.style.left = 5/24 * x0 +left- 10 + "px"
            divb1.style.top = 5/24 * y0 +top -10 + "px"
            divb2.style.left = 10/24 * x0 +left- 10 + "px"
            divb2.style.top = 10/24 * y0+top -10  + "px"
            divb3.style.left = 15/24 * x0 +left- 10 + "px"
            divb3.style.top = 15/24 * y0+top -10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
          } else if (strLength == 4) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            divb1.style.left = 5/30 * x0+left - 10 + "px"
            divb1.style.top = 5/30 * y0 +top-10  + "px"
            divb2.style.left = 10/30 * x0 +left- 10 + "px"
            divb2.style.top = 10/30 * y0+top -10  + "px"
            divb3.style.left = 15/30 * x0+left - 10 + "px"
            divb3.style.top = 15/30 * y0 +top -10 + "px"
            divb4.style.left = 20/30 * x0 +left- 10 + "px"
            divb4.style.top = 20/30 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
            document.getElementById('text24').innerText = strArr[3];
          } else if (strLength == 5) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            divb1.style.left = 5/36 * x0+left - 10 + "px"
            divb1.style.top = 5/36 * y0 +top-10  + "px"
            divb2.style.left = 10/36 * x0 +left- 10 + "px"
            divb2.style.top = 10/36 * y0+top -10  + "px"
            divb3.style.left = 15/36 * x0+left - 10 + "px"
            divb3.style.top = 15/36 * y0 +top -10 + "px"
            divb4.style.left = 20/36 * x0 +left- 10 + "px"
            divb4.style.top = 20/36 * y0+top -10  + "px"
            divb5.style.left = 25/36 * x0+left - 10 + "px"
            divb5.style.top = 25/36 * y0+top -10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
            document.getElementById('text24').innerText = strArr[3];
            document.getElementById('text25').innerText = strArr[4];
          } else if (strLength == 6) {
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text24' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text25' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text26' class='textDiv2' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text21");
            let divb2 = document.getElementById("text22");
            let divb3 = document.getElementById("text23");
            let divb4 = document.getElementById("text24");
            let divb5 = document.getElementById("text25");
            let divb6 = document.getElementById("text26");
            divb1.style.left = 5/42 * x0 +left- 10 + "px"
            divb1.style.top = 5/42 * y0+top -10  + "px"
            divb2.style.left = 10/42 * x0+left- 10 + "px"
            divb2.style.top = 10/42 * y0+top -10  + "px"
            divb3.style.left = 15/42* x0 +left- 10 + "px"
            divb3.style.top = 15/42 * y0 +top -10 + "px"
            divb4.style.left = 20/42 * x0 +left- 10 + "px"
            divb4.style.top = 20/42 * y0 +top-10  + "px"
            divb5.style.left = 25/42 * x0 +left- 10 + "px"
            divb5.style.top = 25/42 * y0 +top-10  + "px"
            divb6.style.left = 30/42 * x0+left - 10 + "px"
            divb6.style.top = 30/42 * y0 +top-10  + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
            document.getElementById('text24').innerText = strArr[3];
            document.getElementById('text25').innerText = strArr[4];
            document.getElementById('text26').innerText = strArr[5];
          } 
        }
      }
    }
  }

  
  synchronizec3(obj,td) {//下半部分文本
    // document.getElementById(obj2).value =document.getElementById(obj1).value;
    document.getElementById(obj).onkeyup = () =>{
      let s1 = this.state.textValue[2];
      let eleId = td;
      let par= eleId.offsetParent;
      let top = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        top += eleId.offsetTop; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          top += par.offsetTop;
          par = par.offsetParent;
          // console.log(top,par);
        }
      }
       par= eleId.offsetParent;
      let left = 0
      if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
        left += eleId.offsetLeft; // 获取高度
      }else{ 
        while(par){  // 循环获取当前对象与body的高度
          left += par.offsetLeft;
          par = par.offsetParent;
          
        }
      }
      let x0 = td.clientLeft + td.clientWidth;
      let y0 = td.clientTop  + td.clientHeight;
      if (s1.length == 0) {
        this.clear1('textDiv3')
      } else {
        if (this.isChn(s1)) {
          let strLength = s1.length
          if (strLength == 1) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            divb1.style.left = 1/2 * x0-1/6*x0+left- 10 + "px"
            divb1.style.top = 5/6 * y0+top - 15 + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            divb1.style.left = 5/18 * x0 +left- 10 + "px"
            divb1.style.top = 41/54 * y0+top- 10 + "px"
            divb2.style.left = 10/18 * x0 +left- 10 + "px"
            divb2.style.top = 46/54 * y0+top - 10 + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
            document.getElementById('text32').innerText = s1.charAt(1);
          }else if (strLength == 3) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            divb1.style.left = 5/24 * x0+left - 10 + "px"
            divb1.style.top = 53/72 * y0 +top -10 + "px"
            divb2.style.left = 10/24 * x0+left - 10 + "px"
            divb2.style.top = 58/72 * y0 +top-10  + "px"
            divb3.style.left = 15/24 * x0 +left- 10 + "px"
            divb3.style.top = 63/72 * y0 +top-10  + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
            document.getElementById('text32').innerText = s1.charAt(1);
            document.getElementById('text33').innerText = s1.charAt(2);
          } else if (strLength == 4) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            divb1.style.left = 5/30 * x0+left - 10 + "px"
            divb1.style.top = 65/90 * y0 +top-10  + "px"
            divb2.style.left = 10/30 * x0+left - 10 + "px"
            divb2.style.top = 70/90 * y0 +top-10  + "px"
            divb3.style.left = 15/30 * x0 +left- 10 + "px"
            divb3.style.top = 75/90* y0 +top -10 + "px"
            divb4.style.left = 20/30 * x0 +left- 10 + "px"
            divb4.style.top = 80/90 * y0+top -10  + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
            document.getElementById('text32').innerText = s1.charAt(1);
            document.getElementById('text33').innerText = s1.charAt(2);
            document.getElementById('text34').innerText = s1.charAt(3);
          } else if (strLength == 5) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text35' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            let divb5 = document.getElementById("text35");
            divb1.style.left = 5/36 * x0 +left- 10 + "px"
            divb1.style.top = 77/108 * y0 +top-10  + "px"
            divb2.style.left = 10/36 * x0 +left- 10 + "px"
            divb2.style.top = 82/108 * y0+top -10  + "px"
            divb3.style.left = 15/36 * x0+left - 10 + "px"
            divb3.style.top = 87/108 * y0+top  -10 + "px"
            divb4.style.left = 20/36 * x0+left - 10 + "px"
            divb4.style.top = 92/108 * y0+top -10  + "px"
            divb5.style.left = 25/36 * x0 +left- 10 + "px"
            divb5.style.top = 97/108 * y0 +top-10  + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
            document.getElementById('text32').innerText = s1.charAt(1);
            document.getElementById('text33').innerText = s1.charAt(2);
            document.getElementById('text34').innerText = s1.charAt(3);
            document.getElementById('text35').innerText = s1.charAt(4);
          } else if (strLength == 6) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text35' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text36' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            let divb5 = document.getElementById("text35");
            let divb6 = document.getElementById("text36");
            divb1.style.left = 5/42 * x0+left - 10 + "px"
            divb1.style.top = 89/126 * y0 +top-10  + "px"
            divb2.style.left = 10/42 * x0 +left- 10 + "px"
            divb2.style.top = 94/126 * y0+top -10  + "px"
            divb3.style.left = 15/42* x0 +left- 10 + "px"
            divb3.style.top = 99/126 * y0 +top -10 + "px"
            divb4.style.left = 20/42 * x0 +left- 10 + "px"
            divb4.style.top = 104/126 * y0 +top-10  + "px"
            divb5.style.left = 25/42 * x0 +left- 10 + "px"
            divb5.style.top = 109/126 * y0 +top-10  + "px"
            divb6.style.left = 30/42 * x0 +left- 10 + "px"
            divb6.style.top = 114/126 * y0+top -10  + "px"
            document.getElementById('text31').innerText = s1.charAt(0);
            document.getElementById('text32').innerText = s1.charAt(1);
            document.getElementById('text33').innerText = s1.charAt(2);
            document.getElementById('text34').innerText = s1.charAt(3);
            document.getElementById('text35').innerText = s1.charAt(4);
            document.getElementById('text36').innerText = s1.charAt(5);
          } 
        } else {
          let strArr = s1.split(" ")
          let strLength = strArr.length
          if (strLength == 1) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            divb1.style.left = 1/2 * x0-1/6*x0+left- 10 + "px"
            divb1.style.top = 5/6 * y0+top - 15 + "px"
            document.getElementById('text31').innerText = strArr[0];
          } else if (strLength == 2) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            divb1.style.left = 5/18 * x0 +left- 10 + "px"
            divb1.style.top = 41/54 * y0+top- 10 + "px"
            divb2.style.left = 10/18 * x0 +left- 10 + "px"
            divb2.style.top = 46/54 * y0+top - 10 + "px"
            document.getElementById('text31').innerText = strArr[0];
            document.getElementById('text32').innerText = strArr[1];
          } else if (strLength == 3) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            divb1.style.left = 5/24 * x0+left - 10 + "px"
            divb1.style.top = 53/72 * y0 +top -10 + "px"
            divb2.style.left = 10/24 * x0+left - 10 + "px"
            divb2.style.top = 58/72 * y0 +top-10  + "px"
            divb3.style.left = 15/24 * x0 +left- 10 + "px"
            divb3.style.top = 63/72 * y0 +top-10  + "px"
            document.getElementById('text31').innerText = strArr[0];
            document.getElementById('text32').innerText = strArr[1];
            document.getElementById('text33').innerText = strArr[2];
          } else if (strLength == 4) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            divb1.style.left = 5/30 * x0+left - 10 + "px"
            divb1.style.top = 65/90 * y0 +top-10  + "px"
            divb2.style.left = 10/30 * x0+left - 10 + "px"
            divb2.style.top = 70/90 * y0 +top-10  + "px"
            divb3.style.left = 15/30 * x0 +left- 10 + "px"
            divb3.style.top = 75/90* y0 +top -10 + "px"
            divb4.style.left = 20/30 * x0 +left- 10 + "px"
            divb4.style.top = 80/90 * y0+top -10  + "px"
            document.getElementById('text31').innerText = strArr[0];
            document.getElementById('text32').innerText = strArr[1];
            document.getElementById('text33').innerText = strArr[2];
            document.getElementById('text34').innerText = strArr[3];
          } else if (strLength == 5) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text35' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            let divb5 = document.getElementById("text35");
            divb1.style.left = 5/36 * x0 +left- 10 + "px"
            divb1.style.top = 77/108 * y0 +top-10  + "px"
            divb2.style.left = 10/36 * x0 +left- 10 + "px"
            divb2.style.top = 82/108 * y0+top -10  + "px"
            divb3.style.left = 15/36 * x0+left - 10 + "px"
            divb3.style.top = 87/108 * y0+top  -10 + "px"
            divb4.style.left = 20/36 * x0+left - 10 + "px"
            divb4.style.top = 92/108 * y0+top -10  + "px"
            divb5.style.left = 25/36 * x0 +left- 10 + "px"
            divb5.style.top = 97/108 * y0 +top-10  + "px"
            document.getElementById('text31').innerText = strArr[0];
            document.getElementById('text32').innerText = strArr[1];
            document.getElementById('text33').innerText = strArr[2];
            document.getElementById('text34').innerText = strArr[3];
            document.getElementById('text35').innerText = strArr[4];
          } else if (strLength == 6) {
            this.clear1('textDiv3')
            td.innerHTML += "<div id='text31' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text32' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text33' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text34' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text35' class='textDiv3' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text36' class='textDiv3' style=\"position: absolute;\"></div>";
            let divb1 = document.getElementById("text31");
            let divb2 = document.getElementById("text32");
            let divb3 = document.getElementById("text33");
            let divb4 = document.getElementById("text34");
            let divb5 = document.getElementById("text35");
            let divb6 = document.getElementById("text36");
            divb1.style.left = 5/42 * x0+left - 10 + "px"
            divb1.style.top = 89/126 * y0 +top-10  + "px"
            divb2.style.left = 10/42 * x0 +left- 10 + "px"
            divb2.style.top = 94/126 * y0+top -10  + "px"
            divb3.style.left = 15/42* x0 +left- 10 + "px"
            divb3.style.top = 99/126 * y0 +top -10 + "px"
            divb4.style.left = 20/42 * x0 +left- 10 + "px"
            divb4.style.top = 104/126 * y0 +top-10  + "px"
            divb5.style.left = 25/42 * x0 +left- 10 + "px"
            divb5.style.top = 109/126 * y0 +top-10  + "px"
            divb6.style.left = 30/42 * x0 +left- 10 + "px"
            divb6.style.top = 114/126 * y0+top -10  + "px"
            document.getElementById('text31').innerText = strArr[0];
            document.getElementById('text32').innerText = strArr[1];
            document.getElementById('text33').innerText = strArr[2];
            document.getElementById('text34').innerText = strArr[3];
            document.getElementById('text35').innerText = strArr[4];
            document.getElementById('text36').innerText = strArr[5];
          } 
        }
      }
    }
  }

  clear1(class_name) {//文本刷新清除
    var paras = document.getElementsByClassName(class_name);
    while (paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
    }
  
  }
  //清空原内容
  clearAll() {
  this.setState({
    textValue: ["","","","",""],
  });
  }
  //文本框显示
  reset_text(obj1, obj2, obj3, obj4, obj5) {
    this.setState({
      textStyle: [obj1, obj2, obj3, obj4, obj5],
    });
    // console.log(this.state.textStyle);
  }
  //判断中文
  isChn(str) {
    var reg = /^[\u4E00-\u9FA5]+$/;
    if (!reg.test(str)) {
      //console.log("不全是中文")
      return false;
    } else {
      //console.log("全是中文")
      return true;
    }
  }
  // 鼠标拖动改变大小
  //需要调整尺寸的div
  changeSize =()=>{
    var td = document.getElementById('container123');
    var bigTd=document.getElementById('container1234');
    var that=this;
      // 鼠标松开时结束尺寸修改
    function up() {
    // var td = document.getElementById('container123');
    resizeable = false
    // console.log(td.innerHTML)
    if (td.innerHTML == '') {
      console.log(flag)
      if (flag == "1") {
        that.addOneLine(td);
        // that.clearAll();
        that.synchronizea1("text_1",td);
        that.synchronizea2("text_2",td);
      }
      if (flag == "2") {
        that.addTwoLine1(td);
        that.reset_text("block", "block", "block", "none", "none");
        // that.clearAll();
        that.synchronizeb1("text_1",td);
        that.synchronizeb2("text_2",td);
        that.synchronizeb3("text_3",td);
      }
      if (flag == "3") {
        that.addTwoLine2(td);
        that.reset_text("block", "block", "block", "none", "none");
        // that.clearAll();
        that.synchronizec1("text_1",td);
        that.synchronizec2("text_2",td);
        that.synchronizec3("text_3",td);
      }
      if (flag == "4") {
        that.addThreeLine(td);
        that.reset_text("block", "block", "block", "block", "none");
        // that.clearAll();
      }
      if (flag == "5") {
        that.reset_text("block", "block", "block", "block", "block");
        // that.clearAll();
      }

    }
  
  
  }
  
  // 鼠标按下时开启尺寸修改
  function down(e) {
    td.innerHTML = ''
    let d = getDirection(e);
    // console.log(d);
    // 当位置为四个边和四个角时才开启尺寸修改
    if (d !== '') {
      resizeable = true
      direc = d
      clientX = e.clientX
      clientY = e.clientY
    }
  }
  
  // 鼠标移动事件
  function move(e) {
    // var td = document.getElementById('container123');
    let d = getDirection(e)
    let cursor
    if (d === '') cursor = 'default';
    else cursor = d + '-resize';
    // 修改鼠标显示效果
    td.style.cursor = cursor;
    // 当开启尺寸修改时，鼠标移动会修改div尺寸
    if (resizeable) {
      // 鼠标按下的位置在右边，修改宽度
      if (direc.indexOf('e') !== -1) {
        td.style.width = Math.max(minW, td.offsetWidth + (e.clientX - clientX)) + 'px'
        bigTd.style.width = Math.max(minW, bigTd.offsetWidth + (e.clientX - clientX)) + 'px'
        clientX = e.clientX
      }
  
      // 鼠标按下的位置在上部，修改高度
      if (direc.indexOf('n') !== -1) {
        td.style.height = Math.max(minH, td.offsetHeight + (clientY - e.clientY)) + 'px'
        bigTd.style.height = Math.max(minH, bigTd.offsetHeight + (clientY - e.clientY)) + 'px'
        clientY = e.clientY
      }
      // 鼠标按下的位置在底部，修改高度
      if (direc.indexOf('s') !== -1) {
        td.style.height = Math.max(minH, td.offsetHeight + (e.clientY - clientY)) + 'px'
        bigTd.style.height = Math.max(minH, bigTd.offsetHeight + (e.clientY - clientY)) + 'px'
        clientY = e.clientY
      }
  
      // 鼠标按下的位置在左边，修改宽度
      if (direc.indexOf('w') !== -1) {
        td.style.width = Math.max(minW, td.offsetWidth + (clientX - e.clientX)) + 'px'
        bigTd.style.width = Math.max(minW, bigTd.offsetWidth + (clientX - e.clientX)) + 'px'
        clientX = e.clientX
      }
  
    }
  }
  
  // 获取鼠标所在div的位置
  function getDirection(ev) {
    // console.log("hhhhhhhhh");
    // console.log(ev);
    // var td = document.getElementById('container123');
    // console.log(td);
    let xP, yP, offset, dir;
    dir = '';
    xP = ev.offsetX;
    yP = ev.offsetY;
    offset = 10;
    if (yP < offset) dir += 'n';
    else if (yP > td.offsetHeight - offset) dir += 's';
    if (xP < offset) dir += 'w';
    else if (xP > td.offsetWidth - offset) dir += 'e';
  
    return dir;
  }
      // body监听移动事件
    document.body.addEventListener('mousemove', move)
  // 鼠标按下事件
    td.addEventListener('mousedown', down)
  // 鼠标松开事件
    document.body.addEventListener('mouseup', up)
  }

  changeText(){
    var select = document.getElementById("select");
				var Value = select.value;
				var font1 = document.getElementsByClassName("textDiv1");
        var font2 = document.getElementsByClassName("textDiv2");
        var font3 = document.getElementsByClassName("textDiv3");
        // console.log(font1[1].style);
        // console.log(Value);
        for(let i=0;i<font1.length;i++){
          // console.log(1);
          font1[i].style.fontSize = Value + "px";
        }
        for(let i=0;i<font2.length;i++){
          // console.log(1);
          font2[i].style.fontSize = Value + "px";
        }
        for(let i=0;i<font3.length;i++){
          // console.log(1);
          font3[i].style.fontSize = Value + "px";
        }
  }
  insertTable(){
    // console.log("插入成功！！");
    var td = document.getElementById('container123');
    let eleId = td;
    let par= eleId.offsetParent;
    let top = 0
    if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
      top += eleId.offsetTop; // 获取高度
    }else{ 
      while(par){  // 循环获取当前对象与body的高度
        top += par.offsetTop;
        par = par.offsetParent;
        // console.log(top,par);
      }
    }
     par= eleId.offsetParent;
    let left = 0
    if(par.nodeName.toLowerCase() == "body"){ // 当节点为body可直接使用offsetTop获取距离
      left += eleId.offsetLeft; // 获取高度
    }else{ 
      while(par){  // 循环获取当前对象与body的高度
        left += par.offsetLeft;
        par = par.offsetParent;
      }
    }
    let x0 = td.clientLeft + td.clientWidth;
    let y0 = td.clientTop  + td.clientHeight;
    // console.log(x0,y0,left,top);
    // console.log(wps.WpsApplication().ActiveDocument.WordOpenXML);
    
    let myTableCell=wps.WpsApplication().ActiveDocument.Tables.Item(1).Cell(1,1);
    console.log(myTableCell);
    console.log(myTableCell.Width);
    console.log(myTableCell.Height);
    myTableCell.Width=x0;
    myTableCell.Height=y0;
    console.log(myTableCell.Width);
    console.log(myTableCell.Height);



  }
  test1=(e)=> {
    var textValue = this.state.textValue
    textValue[0] = e.target.value

    this.setState({textValue:textValue})
    // console.log(state)
  }
  test2=(e)=> {
    var textValue = this.state.textValue
    textValue[1] = e.target.value

    this.setState({textValue:textValue})
    // console.log(state)
  }
  test3=(e)=> {
    var textValue = this.state.textValue
    textValue[2] = e.target.value

    this.setState({textValue:textValue})
    // console.log(state)
  }
  test4=(e)=> {
    var textValue = this.state.textValue
    textValue[3] = e.target.value

    this.setState({textValue:textValue})
    // console.log(state)
  }
  test5=(e)=> {
    var textValue = this.state.textValue
    textValue[4] = e.target.value

    this.setState({textValue:textValue})
    // console.log(state)
  }
  render() {
    return (
      <div id="body">
        <div>
          <div style={{height:"50px"}}></div>
          <table id="container1234" style={{margin:"auto"}} border="1" cellSpacing="0" height="100px" width="100px" >
            <tbody>
              <tr style={{ position: "relative" }}>
                <td id="container123" onMouseMove={this.changeSize}></td>
              </tr>
            </tbody>
          </table>
          <div style={{height:"30px"}}></div>
        </div>
        {/* <!--文本盒子--> */}
        <div>
          <p id="">表头样式：
            <select id="addlines" name="" onChange={this.addlines.bind(this,this.state)} defaultValue="0">
              <option value="1">单斜线</option>
              <option value="2">双斜线</option>
              <option value="3">倒双斜</option>
              <option value="4">样式4</option>
              <option value="5">样式5</option>
              <option value="0" disabled hidden>选择表头样式</option>
            </select>
          </p>
          {/* <span>   </span> */}
          <p>字体大小：
          <select id="select" onChange={this.changeText.bind(this,this.state)}>
		        <option>10</option>
            <option>12</option>
		        <option>14</option>
            <option>16</option>
            <option>18</option>
            <option>20</option>
		        <option>22</option>
		      </select>
          </p>
          <p id="tableContext" style={{ display: this.state.textStyle[0] }}>文本1：<input style={{display:"inline"}} type="text" id="text_1" value={this.state.textValue[0]} onChange={this.test1} /></p>
          <p id="p2" style={{ display: this.state.textStyle[1] }}>文本2：<input style={{display:"inline"}} type="text" id="text_2" value={this.state.textValue[1]} onChange={this.test2} /></p>
          <p id="p3" style={{ display: this.state.textStyle[2] }}>文本3：<input style={{display:"inline"}} type="text" id="text_3" value={this.state.textValue[2]} onChange={this.test3} /></p>
          <p id="p4" style={{ display: this.state.textStyle[3] }}>文本4：<input style={{display:"inline"}} type="text" id="text_4" value={this.state.textValue[3]} onChange={this.test4} /></p>
          <p id="p5" style={{ display: this.state.textStyle[4] }}>文本5：<input style={{display:"inline"}} type="text" id="text_5" value={this.state.textValue[4]} onChange={this.test5} /></p>
        </div>
        <div>
          <button onClick={this.insertTable.bind(this,this.state)}>插入表头</button>
          </div>
      </div>

    )
  }
}

export default Header;
