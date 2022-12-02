import React, { Component } from "react";
import { Avatar, InputNumber, Input,Image } from "antd";
import {
  UserOutlined,
  ArrowDownOutlined,
  DingdingOutlined,
} from "@ant-design/icons";
import {insert} from "./logeEvent";
import "./logo.css";
const { TextArea } = Input;
/* global wps:false */
class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 3,
      cols: 3,
      text : "",
      images:""
    };
  }
  imageClick(param) {
    // console.log(param)
    // var fileName=document.getElementById("file").value;
    // console.log(fileName)   //伪路径
    console.log("row:", this.state.rows, "col:", this.state.cols);
    let val=this.refs.textarea.value;
    console.log(val)
     insert(param,this.state.rows,this.state.cols)
  }
  textClick(param){
    console.log(this.state.text)
    let val=this.refs.textarea.value;
    console.log(val)
    insert(param,this.state.rows,this.state.cols,this.state.text)
  }

  insertText() {
    let val = document.getElementsByClassName("ant-input ant-input-lg")["0"].value
    // let val = this.refs.textarea.value;
    this.setState({
      text: val,
    });
  }
  inputChangeRow() {
    let val = this.refs.row.value;
    this.setState({
      rows: val,
    });
  }
  inputChangeCol() {
    console.log(this.refs.row.value)

    let val = this.refs.col.value;
    this.setState({
      cols: val,
    });
  }
  getimagesize(filedata)  
  {  
      var imgsize={  
      width:0,  
      height:0  
      };  

      return imgsize;  
  }  

  //需要预览与选择功能，可能还需要插入图片的名称在图片下面选项
  onImageChange = (event) => {
    console.log("event.target.files:", event.target.files);
    //设置xml头和尾部
      let PicNum = event.target.files.length;
      let XmlStart = "<?xml version=\"1.0\" standalone=\"yes\"?><?mso-application progid=\"Word.Document\"?><w:wordDocument xmlns:aml=\"http://schemas.microsoft.com/aml/2001/core\" xmlns:wpc=\"http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas\" xmlns:dt=\"uuid:C2F41010-65B3-11d1-A29F-00AA00C14882\" xmlns:mc=\"http://schemas.openxmlformats.org/markup-compatibility/2006\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:w10=\"urn:schemas-microsoft-com:office:word\" xmlns:w=\"http://schemas.microsoft.com/office/word/2003/wordml\" xmlns:wx=\"http://schemas.microsoft.com/office/word/2003/auxHint\" xmlns:wne=\"http://schemas.microsoft.com/office/word/2006/wordml\"><w:body>";
      let XmlEnd = "</w:body></w:wordDocument>";
        var filesize = 0;
        let picData=[];
        let pagewidth =0;
        const CurWord = wps.WpsApplication();
        console.log("PicNum",PicNum);
        if (PicNum>0){
            console.log("CurWord.Selection.Sections",CurWord.Selection.Sections);
            let  CurSet =  CurWord.Selection.Sections.PageSetup;
            pagewidth = CurSet.PageWidth - CurSet.LeftMargin - CurSet.RightMargin;//注意单位换算与边缘调整
            pagewidth = parseInt(pagewidth * 19 / 20); //为了不铺满
        }
    
     
    for (let j = 0; j < PicNum; j++) {
      let reader = new FileReader();
      // eslint-disable-next-line no-loop-func
      reader.onload = (e) => {
        //如果有多个文件的话，那么就遍历一下
       // console.log("reader:",reader);
       // console.log("e:",e);
        console.log("e.target.result:", e.target.result);
        this.setState({image: e.target.result});
        //构造xml中间部分
        filesize=filesize-e.total;
        //console.log("filesize:",filesize);
        let base64Str = e.target.result.toString();
        console.log("pagewidth",pagewidth);
        //console.log("image:",image);
        let image=document.createElement("img");  //也可以用getelement
        image.src=base64Str; 
        image.onload = function () {
            let imagewidth =  parseInt(image.width);
            let imageheight =  parseInt(image.height);
            base64Str = base64Str.substr(base64Str.indexOf(",") + 1);
            console.log("imagewidth",imagewidth);
            console.log("imageheight",imageheight);
           
            if (pagewidth < imagewidth)
            {
                //console.log("imagewidthbef",imageheight);
                imageheight =  imageheight *  pagewidth / imagewidth;
                imagewidth = pagewidth;
                //console.log("imageheightatf",imageheight);
            }
            
            let tmpNewName = "0" + (new Date()).getTime().toString() + filesize;
            //console.log(tmpNewName);
            let PicStart = "<w:p><w:pPr><w:jc w:val=\"center\"/></w:pPr><w:r><w:pict><w:binData w:name=\"wordml://" + tmpNewName + ".png\" xml:space=\"preserve\">";
            let PicMid = "</w:binData><v:shape id=\"" + tmpNewName + "\" style=\"width: ";
            let PicEnd = "<v:imagedata src=\"wordml://" + tmpNewName + ".png\" o:title=\"\"/></v:shape></w:pict></w:r></w:p>";
            //picData.push(PicStart.Replace("03000001", tmpNewName) + base64Str + PicMid + imagewidth + "pt;height:" + imageheight + "pt\">" + PicEnd.Replace("03000001", tmpNewName));
            picData.push(PicStart + base64Str + PicMid + imagewidth + "pt;height:" + imageheight + "pt\">" + PicEnd);
       
            if (filesize === 0) {
              //最快的是在这里一次性插入
              let OpenXml=XmlStart+picData.join()+XmlEnd;
              // console.log("OpenXml:",OpenXml);
              console.log("end of image change");
             //image.parentNode.removeChild(image);
             //插入数据到wps
             let CurDoc = CurWord.ActiveDocument;
             CurDoc.Range(CurWord.Selection.Start,CurWord.Selection.End).InsertXML(OpenXml);
            }
        } 
       
      };
      //console.log(typeof event.target.files[j]);
      filesize=filesize+event.target.files[j].size;
      reader.readAsDataURL(event.target.files[j]);
    }
    
  };
  render() {
    return (
      <div className="myStyle_1">
        <h2>插入功能
        <Avatar
            size={30}
            icon={<ArrowDownOutlined />}
          />
          </h2>
        <div className="myStyle_2">
          <h1>插入图片</h1>
          <input
            type="file"
            id="file"
            multiple="multiple"
            onChange={this.onImageChange}
          />
          {/* <img id="target" src={this.state.image} /> */}
          <Image.PreviewGroup>
          {this.state.images} 
          </Image.PreviewGroup>
        </div>
        <br />
        <div className="myStyle_2">
          <h1>插入表格<Avatar 
            size={30} 
            icon={<DingdingOutlined />} /> 
          </h1>
          <button onClick={this.imageClick.bind(this, "表格")}>
            <span>插入表格</span>
          </button>
          行数：
          <InputNumber
            min={1}
            max={10}
            defaultValue={3}
            ref="row"
            onChange={() => this.inputChangeRow()}
            size="small"
          />
          列数：
          <InputNumber
            min={1}
            max={10}
            defaultValue={3}
            ref="col"
            onChange={() => this.inputChangeCol()}
            size="small"
          />
        </div>
        <br />
        <div className="myStyle_2">
          
          <h1>插入文字<Avatar
            size={25}
            icon={<UserOutlined />}
          /></h1>
          <button onClick={this.textClick.bind(this, "文字")}>
            <span>插入文字</span>
          </button>
          {/* <p>插入文字</p> */}
          <TextArea
            rows={5}
            size="large"
            ref="textarea"
            onChange={() => this.insertText()}
            style={{ width: "auto" }}
          />
        </div>
      </div>
    );
  }
}

export default Logo;
