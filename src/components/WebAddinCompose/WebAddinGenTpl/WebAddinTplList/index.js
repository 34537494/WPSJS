/* eslint-disable no-unused-vars */
import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { Announced } from "office-ui-fabric-react/lib/Announced";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
} from "office-ui-fabric-react/lib/DetailsList";
import { MarqueeSelection } from "office-ui-fabric-react/lib/MarqueeSelection";
import { mergeStyleSets } from "office-ui-fabric-react/lib/Styling";
import { apiPublicPath, RootPath } from "../../../../settings";
import { handlePost } from "../../../WebAddinCommon";
import {
  PrimaryButton,
  DefaultButton,
} from "office-ui-fabric-react/lib/Button";
import confirmDialog from "../../../WebAddinCommon/DynamicConfirm";
import DialogAlert from "../../../WebAddinCommon/DynamicModal";
import styles from "./WebAddinTplList.scss";
import {
  UploadDocContent,
  composeDocInsert,
} from "../../../WebAddinCommon/UploadDocContent";
const Cookies = require("js-cookie");
const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: "16px",
  },
  fileIconCell: {
    textAlign: "center",
    selectors: {
      "&:before": {
        content: ".",
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0px",
        visibility: "hidden",
      },
    },
  },
  fileIconImg: {
    verticalAlign: "middle",
    maxHeight: "16px",
    maxWidth: "16px",
  },
  controlWrapper: {
    display: "flex",
    flexWrap: "wrap",
    top: "20px",
    alignItems: "center",
  },
  fabricWrapper: {
    position: "relative",
    margin: "0 auto",
    textAlign: "center",
    maxWidth: "586px",
    minWidth: "280px",
    fontSize: "16px",
    width: "90%",
  },

  selectionDetails: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const controlStyles = {
  root: {
    margin: "0 30px 5px 0",
    maxWidth: "300px",
    minWidth: "60px",
  },
  fieldGroup: {
    marginTop: "3px",
  },
};
const newNameStyles = {
  root: {
    margin: "0 5px 5px 0",
    maxWidth: "600px",
    minWidth: "60px",
  },
  fieldGroup: {
    marginTop: "3px",
  },
};
const selectInfStyles = {
  fontSize: "16px",
  fontWeight: "bold",
  marginTop: "8px",
};
const ButtonStyles = {
  root: {
    maxWidth: "60px",
    minWidth: "35px",
    marginTop: "8px",
    marginRight: "8px",
    paddingLeft: "8px",
    paddingRight: "8px",
  },
};
const BtnRenameStyles = {
  root: {
    maxWidth: "90px",
    minWidth: "35px",
    marginTop: "8px",
    marginRight: "8px",
  },
};

const ListBtnStyles = {
  root: {
    maxWidth: "60px",
    minWidth: "35px",
    paddingLeft: "8px",
    paddingRight: "8px",
  },
};
const noShareStyles = {
  root: {
    maxWidth: "95px",
    minWidth: "35px",
    marginTop: "8px",
    marginRight: "8px",
  },
};

const BtnSpanStyles = {
  maxWidth: "60px",
  minWidth: "35px",
};
const noShareSpanStyles = {
  maxWidth: "95px",
  minWidth: "35px",
};
const reNameSpanStyles = {
  maxWidth: "90px",
  minWidth: "35px",
};
const WholeBtnStyles = {
  root: {
    maxWidth: "90px",
    minWidth: "45px",
    height: "32px",
    marginTop: "8px",
    marginRight: "8px",
  },
};
const ShareBtnStyles = {
  root: {
    maxWidth: "135px",
    minWidth: "45px",
    height: "32px",
    marginTop: "8px",
    marginRight: "8px",
  },
};
const WholeSpanStyles = {
  maxWidth: "90px",
  minWidth: "45px",
};
const ShareSpanStyles = {
  maxWidth: "130px",
  minWidth: "45px",
};
export default class TplDetailsList extends React.Component {
  _selection = "";
  _AllItems = [];
  constructor(props) {
    super(props);

    const columns = [
      /*
        {
                key: 'column1',
                name: '类型',
                className: classNames.fileIconCell,
                iconClassName: classNames.fileIconHeaderIcon,
                ariaLabel: 'Column operations for File type, Press to sort on File type',
                iconName: 'Page',
                isIconOnly: true,
                fieldName: 'name',
                minWidth: 16,
                maxWidth: 16,
                onColumnClick: this._onColumnClick,
                onRender: (item) => {
                    return <img src={item.iconName} className={classNames.fileIconImg} alt={item.fileType + ' file icon'} />;
                }
            },
            */
      {
        key: "column2",
        name: "方案",
        fieldName: "name",
        minWidth: 100,
        maxWidth: 280,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: "Sorted A to Z",
        sortDescendingAriaLabel: "Sorted Z to A",
        onColumnClick: this._onColumnClick,
        data: "string",
        isPadded: true,
      },
      {
        key: "column3",
        name: "操作",
        fieldName: "command",
        minWidth: 85,
        maxWidth: 120,
        isResizable: true,
        onColumnClick: this._onColumnClick,
        data: "number",
        onRender: (item) => {
          return <span>{item.command}</span>;
        },
        isPadded: true,
      },
      {
        key: "column4",
        name: "更新",
        fieldName: "dateModified",
        minWidth: 100,
        maxWidth: 160,
        fontSize: "14px",
        isResizable: true,
        isCollapsible: true,
        data: "number",
        onColumnClick: this._onColumnClick,
      },
    ];

    this._selection = new Selection({
      onSelectionChanged: () => {
        this.setState({
          selectionDetails: this._getSelectionDetails(),
        });
      },
    });

    this.state = {
      //someThings: props.someThings
      items: [],
      newTitle: "",
      columns: columns,
      selectionDetails: this._getSelectionDetails(),
      isModalSelection: true,
      isCompactMode: true,
      announcedMessage: undefined,
    };
  }
  componentDidMount() {
    this.getDataList();
    console.log("tpllist_componentDidMount");
  }
  getDataList() {
    console.log("TplList_getDataList");
    const data = {};
    data.user_id = this.props.curUser.user_id;
    // data.tpl_id = record.id;
    //console.log(data);
    const items = [];
    handlePost(`${apiPublicPath}getinfs/getautotplslist/index`, data).then(
      (result) => {
        try {
          //console.log("apiPublicPath_getautotplslist_result.count:", result);
          const resultNum = result.length;
          for (let i = 0; i < resultNum; i++) {
            items.push({
              key: i.toString(),
              name: result[i].title,
              dateModified: (
                <span style={{ fontSize: "14px", verticalAlign: "middle" }}>
                  {result[i].tpl_time}
                </span>
              ),
              tplData: result[i],
              command: (
                <div>
                  <div style={{ display: "inline-block" }}>
                    <PrimaryButton
                      primary
                      styles={ListBtnStyles}
                      onClick={this.handleTplDetail.bind(this, i)}
                    >
                      详情
                    </PrimaryButton>
                  </div>
                  <div style={{ display: "inline-block", marginLeft: "4px" }}>
                    <DefaultButton
                      primary
                      styles={ListBtnStyles}
                      onClick={this.handleTplEdit.bind(this, i)}
                    >
                      编辑
                    </DefaultButton>
                  </div>
                </div>
              ),
            });
          }
          this._AllItems = items;
        } catch (e) {
          //console.log(e);
          //message.error("数据获取错误，请检查网络！");
          console.log(
            "apiPublicPath_getautotplslist_ERROR:数据获取错误，请检查网络！"
          );
        }
      }
    );
    this.setState({
      items: items,
    });
  }
  render() {
    const {
      columns,
      isCompactMode,
      items,
      selectionDetails,
      isModalSelection,
      announcedMessage,
    } = this.state;
    return (
      <Fabric className={classNames.fabricWrapper}>
        <div className={classNames.controlWrapper}>
          <TextField
            label="筛选:"
            onChange={this._onChangeText}
            styles={controlStyles}
          />
          <div className={classNames.selectionDetails}>{selectionDetails}</div>
          <Announced message={selectionDetails} />
        </div>
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            compact={isCompactMode}
            columns={columns}
            selectionMode={SelectionMode.multiple}
            getKey={this._getKey}
            setKey="multiple"
            layoutMode={DetailsListLayoutMode.justified}
            isHeaderVisible={true}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            onItemInvoked={this._onItemInvoked}
            enterModalSelectionOnTouch={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="Row checkbox"
          />
        </MarqueeSelection>
      </Fabric>
    );
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      previousState.isModalSelection !== this.state.isModalSelection &&
      !this.state.isModalSelection
    ) {
      this._selection.setAllSelected(false);
    }
    if (this.props.listRenew === true && previousProps.listRenew === false) {
      this.getDataList();
    }
  }

  _onChangeText = (ev, text) => {
    this.setState({
      items: text
        ? this._AllItems.filter((i) => i.name.toLowerCase().indexOf(text) > -1)
        : this._AllItems,
    });
  };

  _getSelectionDetails() {
    const selectionCount = this._selection.getSelectedCount();
    //console.log("tplList__getSelectionDetails_this._selection:", this._selection);
    switch (selectionCount) {
      case 0:
        return (
          <div>
            <h4>没有选中方案</h4>
            <p>按住鼠标,滑动，可批量选中</p>
          </div>
        );
      case 1:
        const selectItem = (
          <div styles={selectInfStyles}>
            选中: {this._selection.getSelection()[0].name}
          </div>
        );
        return (
          <div>
            {selectItem}
            <PrimaryButton
              primary
              styles={ButtonStyles}
              onClick={this.handleComposeClick.bind(
                this,
                this._selection.getSelection()[0].tplData
              )}
            >
              <span style={BtnSpanStyles}>排版</span>
            </PrimaryButton>
            <DefaultButton
              styles={BtnRenameStyles}
              onClick={this.handleRenameTpl.bind(this)}
            >
              <span style={reNameSpanStyles}>重命名</span>
            </DefaultButton>
            <DefaultButton
              styles={ButtonStyles}
              onClick={this.handleDelTpl.bind(this)}
            >
              <span style={BtnSpanStyles}>删除</span>
            </DefaultButton>
            <DefaultButton
              styles={noShareStyles}
              onClick={this.handleShareAll.bind(this, "0")}
            >
              <span style={noShareSpanStyles}>取消分享</span>
            </DefaultButton>
          </div>
        );
      default:
        const itemsStatic = (
          <div styles={selectInfStyles}> {selectionCount} 个方案被选中</div>
        );
        return (
          <div>
            {itemsStatic}
            <PrimaryButton
              styles={WholeBtnStyles}
              onClick={this.handleDelAllTpl.bind(this)}
            >
              <span style={WholeSpanStyles}>全部删除</span>
            </PrimaryButton>
            <DefaultButton
              styles={ShareBtnStyles}
              onClick={this.handleShareAll.bind(this, "1")}
            >
              <span style={ShareSpanStyles}>全部分享</span>
            </DefaultButton>
            <DefaultButton
              styles={ShareBtnStyles}
              onClick={this.handleShareAll.bind(this, "0")}
            >
              <span style={ShareSpanStyles}>全部取消分享</span>
            </DefaultButton>
          </div>
        );
    }
  }

  _onColumnClick = (ev, column) => {
    console.log(" getautotplslist__onColumnClick_this.state:", this.state);
    const { columns, items } = this.state;
    const newColumns = columns.slice();
    const currColumn = newColumns.filter(
      (currCol) => column.key === currCol.key
    )[0];
    newColumns.forEach((newCol) => {
      if (newCol === currColumn) {
        currColumn.isSortedDescending = !currColumn.isSortedDescending;
        currColumn.isSorted = true;
        this.setState({
          announcedMessage: `${currColumn.name} is sorted ${
            currColumn.isSortedDescending ? "descending" : "ascending"
          }`,
        });
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });
    const newItems = this._copyAndSort(
      items,
      currColumn.fieldName,
      currColumn.isSortedDescending
    );
    this.setState({
      columns: newColumns,
      items: newItems,
    });
  };
  _copyAndSort(items, columnKey, isSortedDescending) {
    const key = columnKey;
    return items
      .slice(0)
      .sort((a, b) =>
        (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1
      );
  }

  handleTplDetail = (index, e) => {
    const SchemaType = [
      "学位论文书稿",
      "学术期刊投稿",
      "课设或大作业",
      "制度标准汇编",
      "研究设计报告",
      "投标与招标书",
      "软件操作文档",
      "未知类型文档",
    ];

    const mainInf = {
      SourceType: "私有",
      SchemaType:
        SchemaType[
          this._selection._items[this._selection._keyToIndexMap[index]].tplData
            .type
        ],
      searchType: 1,
    };
    this.props.history.push({
      pathname: "/Compose/details",
      state: this.props,
      tplData:
        this._selection._items[this._selection._keyToIndexMap[index]].tplData,
      mainInf: mainInf,
    });
  };

  handleTplEdit = (index, e) => {
    //url = `${RootPath}Compose/share/${this.state.tplData.ownerid}_${tplId}`;
    let tplData =
      this._selection._items[this._selection._keyToIndexMap[index]].tplData;
    console.log(
      "this._selection._items[this._selection._keyToIndexMap[index]].tplData:",
      this._selection._items[this._selection._keyToIndexMap[index]].tplData
    );
    const data = {};
    data.tel = this.props.curUser.tel;
    data.user_id = this.props.curUser.user_id;
    let fullurl =
      RootPath +
      "LoginOnce/tel/" +
      this.props.curUser.tel +
      "/ID/" +
      this.props.curUser.user_id +
      "/direct/" +
      "_Compose_option-recordid-" +
      tplData.id +
      "-ownerid-" +
      tplData.ownerid;
    handlePost(`${apiPublicPath}users/reglogin/addtoken`, data).then(
      (result) => {
        if (result.success) {
          console.log("handleTplEdit_fullurl:", fullurl);
          window.open(fullurl);
        }
        this.setState({});
      },
      (error) => {}
    );
  };

  onRenameChangeText = (ev, text) => {
    //console.log("onRenameChangeText_text:", text);
    this.setState({
      newTitle: text,
    });
  };
  handleRenameTpl = (e) => {
    //重命名，方便搜索
    const record = this._selection._selectedItems[0].tplData;
    const _this = this;
    confirmDialog.success({
      title: "重命名排版方案，方便搜索",
      content: (
        <div
          style={{
            display: "inline-block",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            label="新名称:"
            defaultValue={record.title}
            onChange={this.onRenameChangeText}
            styles={newNameStyles}
          />
        </div>
      ),
      okText: "确定",
      cancelText: "取消",
      onOk() {
        const data = {};
        data.custplid = record.id;
        data.newTitle = _this.state.newTitle;
        console.log("handleRenameTpl_text:", data);
        handlePost(
          `${apiPublicPath}getinfs/getautotplslist/reNameUserTpl`,
          data
        ).then((result) => {
          if (result.success === true) {
            // _this.setState({});
            _this.getDataList();
          }
        });
      },
      onCancel() {},
    });
  };

  handleDelTpl = (e) => {
    const record = this._selection._selectedItems[0].tplData;
    const _this = this;
    confirmDialog.success({
      title: "删除排版方案提示",
      content: "删除排版方案不可恢复，确认删除吗？",
      okText: "是",
      cancelText: "否",
      onOk() {
        const data = {};
        data.custplid = record.id;
        data.realdel = true;
        data.user_id = _this.props.curUser.user_id;
        //console.log(data);
        handlePost(
          `${apiPublicPath}getinfs/getautotplslist/deluserTpl`,
          data
        ).then((result) => {
          DialogAlert.success({
            title: "删除排版方案结果",
            content: result.msg,
            time: 2000,
          });
          if (result.success === true) {
            // _this.setState({});
            _this.getDataList();
          }
        });
      },
      onCancel() {},
    });
  };

  handleDelAllTpl = (e) => {
    //删除所有选中方案
    console.log("tplList_handleDelTpl_e:", e);
    console.log("handleDelAllTpl._selection:", this._selection);
    let DelAll = false;
    let itemNum = this._selection._items.length;
    let delId = [];
    if (this._selection_isAllSelected === true) {
      //判断是否被筛选了
      this._selection._items.map((item) => delId.push(item.tplData.id));
    } else {
      let Indices = this._selection._exemptedIndices;
      if (Indices[0] === undefined) {
        for (let i = 0; i < itemNum; i++) {
          delId.push(this._selection._items[i].tplData.id);
        }
      } else {
        for (let i = 0; i < itemNum; i++) {
          if (Indices[i] === true) {
            delId.push(this._selection._items[i].tplData.id);
          }
        }
      }
    }
    //console.log("delId:", delId);
    itemNum = delId.length;
    const _this = this;
    const data = {};

    if (itemNum > 1) {
      confirmDialog.success({
        title: "批量删除排版方案提示",
        content: "删除排版方案不可恢复，确认删除吗？",
        okText: "是",
        cancelText: "否",
        onOk() {
          data.custplid = delId;
          data.realdel = true;
          data.user_id = _this.props.curUser.user_id;
          //console.log(data);
          handlePost(
            `${apiPublicPath}getinfs/getautotplslist/delBatchTpl`,
            data
          ).then((result) => {
            if (result.success === true) {
              DialogAlert.success({
                title: "批量删除排版方案",
                content: result.msg,
                time: 2000,
              });
              _this.getDataList();
            }
          });
        },
        onCancel() {},
      });
    }
  };

  handleShareAll = (direct, e) => {
    //分享所有选中方案
    //console.log("tplList_handleDelTpl_e:", e);
    //console.log("tplList_handleDelTpl_direct:", direct);
    //console.log("handleDelAllTpl._selection:", this._selection);
    let DelAll = false;
    let itemNum = this._selection._items.length;
    let delId = [];
    let shareTitle = "批量分享排版方案";
    if (direct === "0") {
      shareTitle = "批量取消排版方案分享";
    }
    if (this._selection_isAllSelected === true) {
      //判断是否被筛选了
      this._selection._items.map((item) => delId.push(item.tplData.id));
    } else {
      let Indices = this._selection._exemptedIndices;
      for (let i = 0; i < itemNum; i++) {
        if (Indices[i] === true) {
          delId.push(this._selection._items[i].tplData.id);
        }
      }
    }
    //console.log("delId:", delId);
    itemNum = delId.length;
    const _this = this;
    const data = {};
    if (itemNum >= 1) {
      data.custplid = delId;
      data.share = direct;
      data.user_id = this.props.curUser.user_id;
      //console.log(data);
      handlePost(
        `${apiPublicPath}getinfs/getautotplslist/shareBatchTpl`,
        data
      ).then((result) => {
        if (result.success === true) {
          DialogAlert.success({
            title: "批量分享排版方案",
            content: result.msg,
            time: 2000,
          });
        }
      });
    }
  };
  composeInsert(tplData, xhr) {
    composeDocInsert(this.props, tplData, xhr, "aidocx.com");
  }
  //直接排版
  handleComposeClick = (tplData, e) => {
    console.log("handleComposeClick:", tplData);
    if (
      this.state === undefined ||
      this.state.curUser === undefined ||
      this.state.curUser.user_id === ""
    ) {
      UploadDocContent(
        `${apiPublicPath}tools/composeFilesRecord`,
        "0",
        this.state.curUser.user_id,
        this.composeInsert.bind(this, tplData)
      );
    }
  };
}
