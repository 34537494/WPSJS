import React from "react";
import { Button, Table } from "antd";
/* global wps:false */
function RenderTable() {
  const columns = [
    {
      title: "学生学号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "学生姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "学生年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "学生性别",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "学生专业",
      dataIndex: "major",
      key: "major",
    },
    {
      title: "入学年份",
      dataIndex: "years",
      key: "years",
    },
  ];

  const [list, setList] = React.useState([]);
  const [selectedList, setSelectedList] = React.useState([]);

  async function fetchData() {
    const fetchResp = await fetch("http://localhost:3000/index.php");
    const res = await fetchResp.json();
    setList(res);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        padding: 20,
      }}
    >
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
          const renderData = [
            "学生学号",
            "学生姓名",
            "学生年龄",
            "学生性别",
            "学生专业",
            "入学年份",
          ];
          selectedList.forEach((item) => {
            renderData.push(item.id);
            renderData.push(item.name);
            renderData.push(item.age);
            renderData.push(item.sex);
            renderData.push(item.major);
            renderData.push(item.years);
          });

          const wpsApp = wps.WpsApplication();
          let table = wpsApp.ActiveDocument.Tables.Add(
            wpsApp.Selection.Range,
            renderData.length / 6,
            6
          );
          let duoShaoGe = table.Range.Cells.Count;
          for (let i = 1; i < duoShaoGe + 1; i++) {
            table.Range.Cells.Item(i).Range.InsertAfter(renderData[i - 1]);
          }
        }}
      >
        插入表格
      </Button>
    </div>
  );
}

export default RenderTable;
