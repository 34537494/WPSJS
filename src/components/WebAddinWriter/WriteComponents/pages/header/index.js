import React, { Component } from "react";
import "./style.css"
import Button from "antd/es/button"
import { FormOutlined } from "@ant-design/icons";
/* global wps:false */


// console.log(td.innerHTML);

// var para1 = document.querySelector("#p1");
// var para2 = document.querySelector("#p2");
// var para3 = document.querySelector("#p3");
// var para4 = document.querySelector("#p4");
// var para5 = document.querySelector("#p5");
// var td = document.getElementById('container123');
// var myselect = document.querySelector("#addlines");

var flag = '0';

 // 是否开启尺寸修改
 let resizeable = false
 // 鼠标按下时的坐标，并在修改尺寸时保存上一个鼠标的位置
 let clientX, clientY
 // div可修改的最小宽高
 let minW = 8, minH = 8
 // 鼠标按下时的位置，使用n、s、w、e表示
 let direc = ''

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textStyle: ["none", "none", "none", "none", "none"],
        textValue: ["1", "1", "1", "1", "1"],
        selectId: 0,
    };

    console.log("finace table ini:",this.state)

  }
  addlines(state) {     //添加事件
    var td = document.getElementById('container123');
    // var myselect = document.querySelector("#addlines");
    console.log(td);
    this.setState({selectId:document.getElementById('addlines').value})
    var index = document.getElementById('addlines').value;
    console.log("哈哈哈哈哈哈哈");
    console.log(state.selectId);
    // var index = myselect.selectedIndex;
    td.innerHTML = '';
    if (index == "1") {
      flag = '1'
      this.addOneLine(td);
      this.reset_text("block", "block", "none", "none", "none");
      this.clearAll();
      // this.synchronize1("text1",td);
      // this.synchronize2("text2",td);
    }
    if (index == "2") {
      flag = '2'
      this.addTwoLine1(td);
      this.reset_text("block", "block", "block", "none", "none");
      this.clearAll();
    }
    if (index == "3") {
      flag = '3'
      this.addTwoLine2(td);
      this.reset_text("block", "block", "block", "none", "none");
      this.clearAll();
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
    var x1 = td.clientLeft + td.offsetLeft;
    var y1 = td.clientTop + td.offsetTop;
    var x2 = x1 + td.clientWidth;
    var y2 = y1 + td.clientHeight;
    this.drawLine(x1, y1, x2, y2, td);
    // console.log(x1,x2,y1,y2);
  }
  //两条斜线（正）
  addTwoLine1(td) {
    var x1 = td.clientLeft + td.offsetLeft;
    var y1 = td.clientTop + td.offsetTop;
    var x2 = x1 + td.clientWidth;
    var y2 = y1 + td.clientHeight * 2 / 3;
    var x3 = x1 + td.clientWidth * 2 / 3;
    var y3 = y1 + td.clientHeight;
    this.drawLine(x1, y1, x2, y2, td);
    this.drawLine(x1, y1, x3, y3, td);
  }
  //两条斜线（反）
  addTwoLine2(td) {
    var x1 = td.clientLeft + td.offsetLeft;
    var y1 = td.clientTop + td.offsetTop;
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
  synchronize1(obj,td) {//上半部分文本
    // document.getElementById(obj2).value =document.getElementById(obj1).value;
    document.getElementById(obj).onkeyup = ()=> {
      let s1 = this.value;
      let x0 = td.clientLeft + td.offsetLeft + td.clientWidth;
      let y0 = td.clientTop + td.offsetTop + td.clientHeight;
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
            let div1 = document.getElementById("text11");
            div1.style.left = 1 / 2 * x0 - 10 + "px"
            div1.style.top = 1 / 4 * y0 - 10 + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            let div1 = document.getElementById("text11");
            let div2 = document.getElementById("text12");
            div1.style.left = 1 / 3 * x0 - 10 + "px"
            div1.style.top = 1 / 6 * y0 - 10 + "px"
            div2.style.left = 2 / 3 * x0 - 10 + "px"
            div2.style.top = 1 / 3 * y0 - 10 + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
          } else if (strLength == 3) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            let div1 = document.getElementById("text11");
            let div2 = document.getElementById("text12");
            let div3 = document.getElementById("text13");
            div1.style.left = 1 / 3 * x0 - 10 + "px"
            div1.style.top = 1 / 6 * y0 - 10 + "px"
            div2.style.left = 2 / 3 * x0 - 10 + "px"
            div2.style.top = 1 / 3 * y0 - 10 + "px"
            div3.style.left = 2 / 3 * x0 - 10 + "px"
            div3.style.top = 1 / 3 * y0 - 10 + "px"
            document.getElementById('text11').innerText = s1.charAt(0);
            document.getElementById('text12').innerText = s1.charAt(1);
            document.getElementById('text13').innerText = s1.charAt(2);
          } else if (strLength == 4) {
  
          } else if (strLength == 5) {
  
          } else if (strLength == 6) {
  
          } else if (strLength == 7) {
  
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
            let div1 = document.getElementById("text11");
            div1.style.left = 1 / 2 * x0 - 10 + "px"
            div1.style.top = 1 / 4 * y0 - 10 + "px"
            document.getElementById('text11').innerText = strArr[0];
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            let div1 = document.getElementById("text11");
            let div2 = document.getElementById("text12");
            div1.style.left = 1 / 3 * x0 - 10 + "px"
            div1.style.top = 1 / 6 * y0 - 10 + "px"
            div2.style.left = 2 / 3 * x0 - 10 + "px"
            div2.style.top = 1 / 3 * y0 - 10 + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
          } else if (strLength == 3) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text11' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text12' class='textDiv1' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text13' class='textDiv1' style=\"position: absolute;\"></div>";
            let div1 = document.getElementById("text11");
            let div2 = document.getElementById("text12");
            let div3 = document.getElementById("text13");
            div1.style.left = 1 / 3 * x0 - 10 + "px"
            div1.style.top = 1 / 6 * y0 - 10 + "px"
            div2.style.left = 2 / 3 * x0 - 10 + "px"
            div2.style.top = 1 / 3 * y0 - 10 + "px"
            div3.style.left = 2 / 3 * x0 - 10 + "px"
            div3.style.top = 1 / 3 * y0 - 10 + "px"
            document.getElementById('text11').innerText = strArr[0];
            document.getElementById('text12').innerText = strArr[1];
            document.getElementById('text13').innerText = strArr[2];
          } else if (strLength == 4) {
  
          } else if (strLength == 5) {
  
          } else if (strLength == 6) {
  
          } else if (strLength == 7) {
  
          }
        }
      }
    }
  
    // console.log(s1.charAt(i))
  }
  synchronize2(obj,td) {//下半部分文本
    // document.getElementById(obj2).value =document.getElementById(obj1).value;
    document.getElementById(obj).onkeyup = () =>{
      let s1 = this.value;
      let x0 = td.clientLeft + td.offsetLeft + td.clientWidth;
      let y0 = td.clientTop + td.offsetTop + td.clientHeight;
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
            let div1 = document.getElementById("text21");
            div1.style.left = 1 / 2 * x0 - 10 + "px"
            div1.style.top = 3 / 4 * y0 - 10 + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;left: 30px;top: 65px;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;left: 30px;top: 65px;\"></div>";
            let div3 = document.getElementById("text21");
            let div4 = document.getElementById("text22");
            div3.style.left = 1 / 3 * x0 - 10 + "px"
            div3.style.top = 2 / 3 * y0 - 10 + "px"
            div4.style.left = 2 / 3 * x0 - 10 + "px"
            div4.style.top = 5 / 6 * y0 - 10 + "px"
            document.getElementById('text21').innerText = s1.charAt(0);
            document.getElementById('text22').innerText = s1.charAt(1);
          }
        } else {
          let strArr = s1.split(" ")
          let strLength = strArr.length
          console.log(strArr)
          console.log(strArr[0])
          console.log(strArr.length)
          if (strLength == 1) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            let div1 = document.getElementById("text21");
            div1.style.left = 1 / 2 * x0 - 10 + "px"
            div1.style.top = 3 / 4 * y0 - 10 + "px"
            document.getElementById('text21').innerText = strArr[0];
          } else if (strLength == 2) {
            // td.innerHTML=''
            // addOneLine()
            this.clear1('textDiv2')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;left: 30px;top: 65px;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;left: 30px;top: 65px;\"></div>";
            let div3 = document.getElementById("text21");
            let div4 = document.getElementById("text22");
            div3.style.left = 1 / 3 * x0 - 10 + "px"
            div3.style.top = 2 / 3 * y0 - 10 + "px"
            div4.style.left = 2 / 3 * x0 - 10 + "px"
            div4.style.top = 5 / 6 * y0 - 10 + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
          } else if (strLength == 3) {
            this.clear1('textDiv1')
            td.innerHTML += "<div id='text21' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text22' class='textDiv2' style=\"position: absolute;\"></div>";
            td.innerHTML += "<div id='text23' class='textDiv2' style=\"position: absolute;\"></div>";
            let div1 = document.getElementById("text21");
            let div2 = document.getElementById("text22");
            let div3 = document.getElementById("text23");
            div1.style.left = 1 / 3 * x0 - 10 + "px"
            div1.style.top = 1 / 6 * y0 - 10 + "px"
            div2.style.left = 2 / 3 * x0 - 10 + "px"
            div2.style.top = 1 / 3 * y0 - 10 + "px"
            div3.style.left = 2 / 3 * x0 - 10 + "px"
            div3.style.top = 1 / 3 * y0 - 10 + "px"
            document.getElementById('text21').innerText = strArr[0];
            document.getElementById('text22').innerText = strArr[1];
            document.getElementById('text23').innerText = strArr[2];
          } else if (strLength == 4) {
  
          } else if (strLength == 5) {
  
          } else if (strLength == 6) {
  
          } else if (strLength == 7) {
  
          }
        }
      }
    }
  
    // console.log(s1.charAt(i))
  }
  clear1(class_name) {//文本刷新清除
    var paras = document.getElementsByClassName(class_name);
  
    while (paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
    }
  
  }
  //清空原内容
  clearAll() {
    // td.innerHTML='';
  //   para1.children[0].value = "";
  //   para2.children[0].value = "";
  //   para3.children[0].value = "";
  //   para4.children[0].value = "";
  //   para5.children[0].value = "";
  this.setState({
    textValue: ["","","","",""],
  });
  }
  //文本框显示
  reset_text(obj1, obj2, obj3, obj4, obj5) {
    // para1.style.display = obj1;
    // para2.style.display = obj2;
    // para3.style.display = obj3;
    // para4.style.display = obj4;
    // para5.style.display = obj5;
    this.setState({
      textStyle: [obj1, obj2, obj3, obj4, obj5],
    });
    console.log(this.state.textStyle);
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
  // let c = document.getElementById('container')
  // body监听移动事件
  // document.getElementById('body').addEventListener('mousemove', move)
  // 鼠标按下事件
  // td.addEventListener('mousedown', down)
  // 鼠标松开事件
  // document.getElementById('body').addEventListener('mouseup', up)
  
 
  
  // 鼠标松开时结束尺寸修改
  up(td) {
    resizeable = false
    // console.log(td.innerHTML)
    if (td.innerHTML == '') {
      console.log(flag)
      if (flag == "1") {
        this.addOneLine(td);
        // this.synchronize1("text1",td);
        // this.synchronize2("text2",td);
      }
      if (flag == "2") {
        this.addTwoLine1(td);
        this.reset_text("block", "block", "block", "none", "none");
        this.clearAll();
      }
      if (flag == "3") {
        this.addTwoLine2(td);
        this.reset_text("block", "block", "block", "none", "none");
        this.clearAll();
      }
      if (flag == "4") {
        this.addThreeLine(td);
        this.reset_text("block", "block", "block", "block", "none");
        this.clearAll();
      }
      if (flag == "5") {
        this.reset_text("block", "block", "block", "block", "block");
        this.clearAll();
      }
    }
  
  
  }
  
  // 鼠标按下时开启尺寸修改
  down(e,td) {
    td.innerHTML = ''
    let d = this.getDirection(e)
    // 当位置为四个边和四个角时才开启尺寸修改
    if (d !== '') {
      resizeable = true
      direc = d
      clientX = e.clientX
      clientY = e.clientY
    }
  }
  
  // 鼠标移动事件
  move(e,td) {
    let d = this.getDirection(e)
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
        clientX = e.clientX
      }
  
      // 鼠标按下的位置在上部，修改高度
      if (direc.indexOf('n') !== -1) {
        td.style.height = Math.max(minH, td.offsetHeight + (clientY - e.clientY)) + 'px'
        clientY = e.clientY
      }
      // 鼠标按下的位置在底部，修改高度
      if (direc.indexOf('s') !== -1) {
        td.style.height = Math.max(minH, td.offsetHeight + (e.clientY - clientY)) + 'px'
        clientY = e.clientY
      }
  
      // 鼠标按下的位置在左边，修改宽度
      if (direc.indexOf('w') !== -1) {
        td.style.width = Math.max(minW, td.offsetWidth + (clientX - e.clientX)) + 'px'
        clientX = e.clientX
      }
  
    }
  }
  
  // 获取鼠标所在div的位置
  getDirection(ev,td) {
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
          <table style={{margin:"auto"}} border="1" cellSpacing="0" height="100px" width="100px">
            <tbody>
              <tr style={{ position: "relative" }}>
                <td id="container123"></td>
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
          <p id="tableContext" style={{ display: this.state.textStyle[0] }}>文本1：<input style={{display:"inline"}} type="text" id="text_1" value={this.state.textValue[0]} onChange={this.test1} /></p>
          <p id="p2" style={{ display: this.state.textStyle[1] }}>文本2：<input style={{display:"inline"}} type="text" id="text_2" value={this.state.textValue[1]} onChange={this.test2} /></p>
          <p id="p3" style={{ display: this.state.textStyle[2] }}>文本3：<input style={{display:"inline"}} type="text" id="text_3" value={this.state.textValue[2]} onChange={this.test3} /></p>
          <p id="p4" style={{ display: this.state.textStyle[3] }}>文本4：<input style={{display:"inline"}} type="text" id="text_4" value={this.state.textValue[3]} onChange={this.test4} /></p>
          <p id="p5" style={{ display: this.state.textStyle[4] }}>文本5：<input style={{display:"inline"}} type="text" id="text_5" value={this.state.textValue[4]} onChange={this.test5} /></p>
        </div>
      </div>

    )
  }
}

export default Header;
