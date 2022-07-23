import React, { Component } from "react";

import styles from "./WebAddinHelper.scss";
import WebAddinHeader from "../../components/WebAddinHeader";
//import { MultiOptSel, SingleOptSel } from "components/WebAddinCommon/OtherFuncPop";
//import { Card } from "antd";
//import { Link } from "react-router-dom";
//import { push } from "react-router-redux";
//const myImg = src => <img src={`${src}`} className="am-icon am-icon-xs" alt="" />;
//import mobileReturn from "assets/mobilepng/mobile-return.png";
class WebAddinHelper extends Component {
  //通过路由处理，所有相关移动端的数据都写在这里！
  
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab"
    };
  }
  /*
  componentDidMount() {
    this.props.onRef(this);
  }
   */
  renderContent(pageText) {
    if (pageText === "My") {
      return <div style={{ backgroundColor: "white", textAlign: "center" }} />;
    }
  }

  headTypePress(route) {
    this.props.history.push(route);
  }

  render() {
    const helpData = [
      {
        value: "0",
        title: "选排版方案",
        route: "/Compose",
        content: (
          <div className={styles.help}>
            <h2>搜索选择排版方案请注意：</h2>
            <h3>（1）不要用缩写</h3>
            <p>比如，搜索华中科技大学时，请输入"华中科技大学"，不要输入"华科"。因为"华科"可能是不同学校的缩写。</p>
            <h3>（2）注意选择合适的方案来源</h3>
            <p>
              没有登录时，请使用公共的或者全部的。登录后，个人方案会部分优先显示，选中私有类型时，会显示全部私有排版方案。机构方案是您的账户属于某个机构时，机构内部人员共享的排版方案。
            </p>
            <p>在线智能排版提供以下8个方面自动化功能：</p>
            <h3>（1）特征段落排版</h3>
            <p>基于特征内容智能识别技术，自动识别文档中的各级标题、图说、表说、图注、表注、公式段落和封面，调整为满足要求的样式或者格式。</p>
            <h3>（2）智能调整源文档格式</h3>
            <p>
              一是有保留地删除原来的格式。二是智能合并模板与被处理文档中的样式，择性地删除没有被使用的样式。三是依据模板的各节的页面设置调整文档各节的页面设置，控制超过页面的图表到页面内。
            </p>
            <h3>（3）控制文档自动部分</h3>
            <p>
              一是选项性锁定域，确保域不会在排版中变动，保证被排版的文档，防止后续手工排版中域的内容被意外修改。二是多级编号、列表编号、带符号编号，以及图、表和公式题注的文本化。三是转换尾注为文本，并按照参考文献标注的要求文本化标注区域。
            </p>
            <h3>（4）空格控制与标点修正</h3>
            <p>依据现有空格数量和上下文情况，调整空格数量。依据文档的中英文特性和标点的上下文情况调整中英文标点符号（包括多种括号）。</p>
            <h3>（5）修正不规范排版习惯</h3>
            <p>修正例如空格排版，空段排版，强制分页符控制分页，强制换行符控制分段，不正确的上下标设置，不正确使用浮动图片等不规范的写作排版习惯。</p>
            <h3>（6）页眉页脚与封面目录等控制</h3>
            <p>复制模板中的页眉页脚到被处理文档，加入文档封面、版权页等特殊内容；删除原来目录，自动生成大纲目录、图题目录和表题目录。</p>
            <h3>（7）检查编号与不合理位置</h3>
            <p>通过审阅功能来标示编号重复、不连续，编号内容重复或者为空等问题。检查文档篇章结构是否满足纺锤形统计规律等等，提示摘要部分超过或者不足字数要求。</p>
            <h3>（8）提供可回溯版本</h3>
            <p>通过修订功能，标示出排版过程对文档的修改情况。将不同的处理过程用不同的修订者标示出来，可以分类还原到修改前的状态。</p>
            <WhiteSpace />
          </div>
        )
      },
      {
        value: "1",
        title: "选电子书方案",
        route: "/Compose/ebook",
        content: (
          <div className={styles.help}>
            <h2>电子书自动生成有如下特点：</h2>
            <p>（1）根据文档标题结构，将长文档拆分为子文档，同时提供类似Word文档中的“文档结构图”的HTML文档系统大纲，提供上下文链接，方便Web浏览。</p>
            <p>（2）为HTML文档系统添加索引、查找、书签功能，进一步方便Web文档的浏览。</p>
            <p>（3）控制Word文档自动多级编号是否显示，处理Word文档内部交叉引用与链接、处理链接媒体、处理链接文件。</p>
            <p>（4）提供多种嵌入图片处理的功能，添加单击图片行为，使矢量图能放大显示。</p>
            <p>（5）修复与转换公式，将图形化的公式转换为文本化的公式。</p>
          </div>
        )
      },
      {
        value: "2",
        title: "自动编号",
        route: "/OtherFun/upload/1",
        content: (
          <div className={styles.help}>
            <p>编号自动转换是将文本化的编号转换为自动编号，自动编号的文档编辑合并更方便。</p>
            <p>
              编号自动转换通过自动识别文档中的各级标题、图说、表说、公式段落和上标法标注的参考文献，将这些编号转换为自动编号，调整编号引用位置为交叉引用。同时检查编号，调整编号后的空格数量。
            </p>
            <p>编号自动转换前请注意有多个选项可选择。</p>
          </div>
        )
      },
      {
        value: "3",
        title: "公式修复",
        route: "/OtherFun/upload/2",
        content: (
          <div className={styles.help}>
            <p>写作排版中经常遇到MathType公式不能编辑了，或者公式是截图得到的，或者出版商要去统一作用MathType或者Omath，公式需要转换。</p>
            <p>公式转换包括两种，一是批量将所有公式转换为Omath公式，二是批量将所有公式转换为MathType公式。所有公式中包括了公式域和损坏的公式。</p>
            <p>因为各公式体系不完全兼容，所以转换过程同时提供转换前后的比对功能，通过批注或者修订标注出来。</p>
            <p>因为各公式体系不完全兼容，所以转换过程同时提供转换前后的比对功能，通过批注或者修订标注出来。最近增加了OCR公式识别功能，可以还原截图中的公式，受到排版公司青睐。</p>
            <p>启用OCR公式识别功能，可以还原截图中的公式</p>
          </div>
        )
      },
      {
        value: "4",
        title: "个人中心",
        route: "/UserCenter/0",
        content: (
          <div className={styles.help}>
            <p>将现有排版方案加入到个人中心是建立新排版方案最简单的方式。</p>
            <p>上传文档生成自定义排版方案能基于用户选择的排版类型和上传的排版好的文档快速生成新的排版方案。</p>
            <p>手机端仅仅提供基本的上传文档生成自定义排版方案，要体验完整的功能请使用电脑登录。</p>
            <p>
              注意选择合适的长文档类型，比如"学位论文书稿"可能会有封面，自动生成排版方案时会尝试分析并建立封面给以后排版使用；如果选择"学术期刊投稿"，那么一般是没有封面的，且排版过程中主要内容会自动分栏排版。
            </p>
            <p>电脑登录时，个人中心中的排版方案可以被用户编辑、删除、分享或者立即使用，不同用户权限下可编辑范围不同，方案中的各种资源都是Word文档，请下载后本地编辑后上传。</p>
            <p>要分享或者取消分享排版方案，可以中编辑排版方案页面中进行</p>
            <p>删除排版方案不可恢复，且他人不能再使用您的排版方案。</p>
          </div>
        )
      },
      {
        value: "5",
        title: "个人中心",
        route: "/UserCenter/1",
        content: (
          <div className={styles.help}>
            <h2>积分规则：</h2>
            <p>注册、激活邮箱能获得积分</p>
            <p>分享排版方案带来新用户，可以获得积分</p>
            <p>建立排版方案带来新用户，可以获得积分</p>
            <p>使用处理功能过程中按照自动处理工作量扣除积分</p>
            <p>可以联系我们购买积分</p>
          </div>
        )
      },
      {
        value: "6",
        title: "个人中心",
        route: "/UserCenter/2",
        content: (
          <div className={styles.help}>
            <p>可以查看处理记录，下载自动处理后的文档。</p>
            <p>为了您的文档更安全，建议定期删除处理记录。</p>
            <p>记录清理后不可恢复，包括记录本身、处理前的文档和自动处理后的文档。</p>
          </div>
        )
      },
      {
        value: "7",
        title: "个人中心",
        route: "/UserCenter/3",
        content: (
          <div className={styles.help}>
            <p>请电脑登录后，修改个人资料</p>
          </div>
        )
      },
      {
        value: "8",
        title: "注册登录",
        route: "/Reglogin",
        content: (
          <div className={styles.help}>
            <p>电话号码和邮箱必须不能重复注册。</p>
            <p>电话号码和邮箱必须是真实信息，在找回密码时需要用到。</p>
          </div>
        )
      },
      {
        value: "9",
        title: "重置密码",
        route: "/FindPsw",
        content: (
          <div className={styles.help}>
            <p>通过输入电话号码和邮箱，系统会向您的邮箱发送验证邮件，之后进行操作即可</p>
          </div>
        )
      },
      {
        value: "10",
        title: "设置密码",
        route: "/FindPsw",
        content: <div className={styles.help}>按照提示设置密码，建议长度最少7位</div>
      },
      {
        value: "11",
        title: "预览下载",
        route: "/Compose/download",
        content: (
          <div className={styles.help}>
            <p>标准版：不包含审阅和批注</p>
            <p>审阅版：可查看或者还原修改的位置，以及可能存在的问题的批注</p>
            <p>无样式版：可避免文档再不同电脑中打开的版面变化和复制粘贴中段落字体格式等的变化</p>
          </div>
        )
      },
      {
        value: "12",
        title: "预览下载",
        route: "/Compose/download/other",
        content: (
          <div className={styles.help}>
            <p>标准版不包含审阅和批注</p>
            <p>审阅版，可查看或者还原修改的位置，以及可能存在的问题的批注</p>
          </div>
        )
      }
    ];
    let dataIndex = 0;
    if (!!this.props.match.params.id) {
      dataIndex = this.props.match.params.id;
    }
    if (dataIndex > 12 || dataIndex < 0) {
      this.props.history.push("/");
    }
    const data = helpData[dataIndex];
    return (
      <div className={styles.App}>
        <WebAddinHeader funcname={data.title} />

        </div>
      </div>
    );
  }
}

export default WebAddinHelper;
