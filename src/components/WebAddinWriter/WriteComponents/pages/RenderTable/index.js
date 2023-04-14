import React from "react";
import { Button, Table, Select } from "antd";
import { apiWritePath } from "../../../../../settings";
/* global wps:false */
function RenderTable() {
  const [columns, setColumns] = React.useState([]);
  const [list, setList] = React.useState([]);
  const [selectedList, setSelectedList] = React.useState([]);
  const [type, setType] = React.useState();
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {

    fetch(`${apiWritePath}getinf/getTableInfo/getData`).then(res => {
      res.json().then(data => {
        setOptions(data)
      })
    })
  }, [])

  React.useEffect(() => {
    async function fetchData() {
      const fetchResp = await fetch(
        `${apiWritePath}getinf/getTableInfo/getData?type=1&tableName=` + type
      );
      const res = await fetchResp.json();
      setColumns(res.columns);
      setList(res.list);
    }
    fetchData();
  }, [type]);

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <div style={{ padding: "10px 0", textAlign: "left" }}>
        <Select
          defaultValue={type}
          style={{ width: 120 }}
          onChange={(v) => {
            setType(v);
            setSelectedList([]);
          }}
          options={options}
        />
      </div>

      <Table
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys, selectedRows) => {
            setSelectedList(selectedRows);
          },
        }}
        columns={columns}
        dataSource={list.map((item, index) => {
          return { ...item, key: index };
        })}
        pagination={false}
      ></Table>
      <Button
        type="primary"
        style={{
          marginTop: 20,
        }}
        onClick={async () => {
          columns.map((item) => item.title);

          const renderData = columns.map((item) => item.title);

          selectedList.forEach((item) => {
            columns.forEach((i2) => {
              renderData.push(item[i2.dataIndex]);
            });
          });

          const wpsApp = wps.WpsApplication();
          let table = wpsApp.ActiveDocument.Tables.Add(
            wpsApp.Selection.Range,
            renderData.length / columns.length,
            columns.length
          );
          let duoShaoGe = table.Range.Cells.Count;
          for (let i = 1; i < duoShaoGe + 1; i++) {
            table.Range.Cells.Item(i).Range.InsertAfter(renderData[i - 1]);
          }
        }}
      >
        表格插入
      </Button>
    </div>
  );
}

export default RenderTable;
