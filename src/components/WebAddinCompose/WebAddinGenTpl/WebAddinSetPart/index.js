/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-vars */
import React from "react";
//import {Checkbox, Radio, Tooltip,Select} from 'antd';
//import { mergeStyles, DefaultPalette } from "office-ui-fabric-react/lib/Styling";
import { ChoiceGroup } from "office-ui-fabric-react/lib/ChoiceGroup";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { TooltipHost } from "office-ui-fabric-react/lib/Tooltip";
//import { Stack } from 'office-ui-fabric-react/lib/Stack';
//import { useId } from "@uifabric/react-hooks";
//import {SearchBox} from "office-ui-fabric-react/lib/SearchBox";
//Collapse

export class CheckOpt extends React.Component {
  render() {
    const index = this.props.curindex;
    //console.log(this.props.ckserial[index]);
    const tips = this.props.tips;
    const tooltipId = "tooltip" + index;
    //const tooltipId = useId("tooltip");
    const calloutProps = { gapSpace: 0 };
    const hostStyles = { root: { display: "inline-block" , marginTop:"10px" , paddingRight:'10px' } };
    return (
      <TooltipHost content={tips[0]} id={tooltipId} calloutProps={calloutProps} styles={hostStyles}>
        <Checkbox
          key={index}
          label={tips[1]}
          defaultChecked={this.props.ckserial[index]}
          onChange={this.props.handleChange}
        />
      </TooltipHost>
    );
  }
}

export class OptionOpt extends React.Component {
  render() {
    //const RadioGroup = Radio.Group;
    const calloutProps = { gapSpace: 0 };
    const index = this.props.curindex;
    const tips = this.props.tips;
    let stackTokens = { childrenGap: 5, padding: `10px 0px 30px 0px` };
    let defaultVal = "1";
    if (!!this.props.opserial[index]) {
      defaultVal = this.props.opserial[index].toString();
    }
   //console.log("defaultSelectedKey_optionOpt:",defaultVal)
    const hostStyles = { root: { display: "inline-block",paddingRight:'12px' } };
    let options = new Array();
    const tooltipId = "OptionTip" + index;
    this.props.data.map(
      (data, mapIndex) =>
        (options[mapIndex] = {
          key: mapIndex,
          text: (
            <TooltipHost
              content={data.tip}
              calloutProps={calloutProps}
              id={"OptionOptTip" + mapIndex}
              styles={hostStyles}
            >
              {data.text}
            </TooltipHost>
          )
        })
    );
   // console.log(options);
    if (!!this.props.opserial[index]) {
      defaultVal = this.props.opserial[index].toString();
    }
    return (
        <div style={{ display: "inline-block" }}>

            <TooltipHost content={tips[0]} id={tooltipId} calloutProps={calloutProps} styles={hostStyles}>
                <span style={{ fontSize: "14px",textAlign:"center",display:"flex", height:"22px"}}>{tips[1]}</span>
            </TooltipHost>
            <div style={{ display: "inline-block" }}>
                <ChoiceGroup
                    styles={  {  flexContainer: { display: "flex" } ,label:{wordWrap:"break-word",wordBreak:"break-all"}}}
                    defaultSelectedKey={ Number(defaultVal)-1}
                    options={options}
                    onChange={this.props.handleChange}
                />
            </div>
        </div>
    );
  }
}

export class SelectOpt extends React.Component {
  render() {
    const index = this.props.curindex;
    const tips = this.props.tips;
    //const curlist = this.props.selinitial[index];
    const curlist = this.props.data;
    //console.log(this.props.selinitial[index]);
    //console.log("SelectOpt:" + index);
    let dropdownStyles = {
        root: { display: "inline-block",paddingRight:'12px',height:"24px" }
    };
    // const tooltipId = useId("tooltip4");
    const tooltipId = "selecttooltip" + index;
    const calloutProps = { gapSpace: 5 };
    const hostStyles = { root: { display: "inline-block" ,fontSize:"14px"} };
    let options = new Array();
    this.props.data.map((data, mapIndex) => (options[mapIndex] = { key: mapIndex, text: data }));
    return (
      <div style={{ display: "inline-block", marginRight: "12px" }}>
        <TooltipHost content={tips[0]} id={tooltipId} calloutProps={calloutProps} styles={hostStyles}>
          {tips[1]}
        </TooltipHost>
        <div style={{ display:"inline-block",alignItems: "bottom" }}>
          <Dropdown
            defaultSelectedKey={this.props.selserial[index]}
            options={options}
            onChange={this.props.handleChange}
            styles={dropdownStyles}
            tabIndex={index}
          />
        </div>
      </div>
    );
  }
}
