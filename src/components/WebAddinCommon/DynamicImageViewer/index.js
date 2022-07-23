/* eslint-disable jsx-a11y/alt-text */
import React from "react";
//import { PrimaryButton, DefaultButton, ActionButton } from "office-ui-fabric-react/lib/Button";
//import { Dialog, DialogType, DialogFooter } from "office-ui-fabric-react/lib/Dialog";
//import ReactDOM from "react-dom"; //DynamicImageViewer.scss
//import { Stack } from "office-ui-fabric-react/lib/Stack";
import styles from "./DynamicImageViewer.scss";
import imgNoResultTip from "../../../assets/templates-no-result-tip.png";
import { apiPublicPath } from "../../../settings";
import { DocumentCard, DocumentCardTitle } from "office-ui-fabric-react/lib/DocumentCard";
export default class ImageViewer extends React.Component {
  render() {
    //https://github.com/xiabingwu/react-viewerjs
    //依据读取的情况判断？还是直接到数据库？直接到数据库比较好！
    //<Lazyload src={data} />
    const Samplelist = `${apiPublicPath}getinfs/getSampleList/index?tpl_id=` + this.props.FullID + "&index=";
    let dataLists = new Array(this.props.SamplePN);
    // console.log("dataLists.length:", dataLists.length);
    for (let i = 0; i < dataLists.length; i++) {
      dataLists[i] = Samplelist + String(i + 1);
    }

    const cardStyles = {
      root: {
        backgroundColor: "transparent",
        width: "100%",
        maxWidth: "100%",
        marginTop: 0,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5
      }
    };

    return (
      <div>
        <DocumentCard styles={cardStyles}>
          <DocumentCardTitle title="范文示例" />
        </DocumentCard>
        {dataLists.length > 0 ? (
          dataLists.map((dataList, index) => (
            // eslint-disable-next-line no-restricted-globals
            <div onClick={() => scrollTo(0, 0)} style={{ cursor: "pointer" }} key={index}>
              <DocumentCard styles={cardStyles}>
                <img src={dataList} width="100%" />
              </DocumentCard>
            </div>
          ))
        ) : (
          <div className={styles["no-result-tip"]}>
            <p>抱歉，没有找到排版方案预览</p>
            <img src={imgNoResultTip} alt="没有找到排版方案预览" />
          </div>
        )}
      </div>
    );
  }
}
