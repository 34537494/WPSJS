import Tree from "rc-tree";

export function GetRealData(response) {
  //获得实际数据
  if (response["success"]) {
    if (response["head"] == null) {
      if (response["msg"] == null) {
        return "";
      } else {
        return response["msg"];
      }
    } else {
      return '{"head":' + response["head"] + ',"data":' + response["msg"] + "}";
    }
  } else {
    return "";
  }
}

export function GetRealDataOfYear(response) {
  //获得实际数据
  if (response["success"]) {
    if (response["head"] != null) {
      if (response["msg"] == null) {
        return "";
      } else {
        return response["msg"];
      }
    } else {
      return '{"head":' + response["head"] + ',"data":' + response["msg"] + "}";
    }
  } else {
    return "";
  }
}

export function GetRealDataOfFinance(response) {
  //获得实际数据
  if (response["success"]) {
    if (response["head"] == null) {
      if (response["msg"] == null) {
        return "";
      } else {
        return response["msg"];
      }
    } else {
      return '{"head":' + response["head"] + ',"data":' + response["msg"] + "}";
    }
  } else {
    return "";
  }
}

function JsonToTree(JsonStr, SearchKey) {
  //将json转换为antidesign tree控件的数据源
  //思路：遍历重建
  //https://blog.csdn.net/xujie3/article/details/52954940
  var tmpJson = {};
  if (JsonStr.indexOf(SearchKey) !== -1) {
    var JsonObj = JSON.parse(JsonStr);
    for (var p in JsonObj) {
      //遍历json数组
      let title = p.substring(p.indexOf("_") + 1);
      tmpJson.title = title.substring(0, title.lastIndexOf(":"));
      tmpJson.key = title.substring(title.lastIndexOf(":") + 1);
      let subJson = [];
      for (var s in JsonObj[p]) {
        let lastJson = {};
        if (JsonObj[p][s] !== "") {
          let subjsonstr = '{"' + s + '":' + JSON.stringify(JsonObj[p][s]) + "}";
          lastJson = JsonToTree(subjsonstr, SearchKey);
          if (subjsonstr.indexOf(SearchKey) !== -1) {
            subJson.push(lastJson);
          }
        } else {
          //console.log("s:", s);
          if (s.indexOf(SearchKey) !== -1) {
            let title = s.substring(s.indexOf("_") + 1);
            lastJson.title = title.substring(0, title.lastIndexOf(":"));
            lastJson.key = title.substring(title.lastIndexOf(":") + 1);
            subJson.push(lastJson);
          }
        }
      }
      if (subJson.length > 0) {
        tmpJson.children = subJson;
      }
    }
  }
return tmpJson;
}

export function ConvertJsonToTree(jsonArray, SearchKey) {
  //将json转换为antidesign tree控件的数据源，要用到递归
  var TreeJson = [];
  for (var a in jsonArray) {
    //遍历json数组时，这么写p为索引，0,1
    //console.log(a);
    //console.log("JsonStr:", jsonArray[a]["文本元结构"]);
    let child = JsonToTree(jsonArray[a]["文本元结构"], SearchKey);
    //console.log("child:", JSON.stringify(child) === "{}");
    if (JSON.stringify(child) !== "{}") {
      TreeJson.push(child);
    }
  }
  console.log("TreeJson:", TreeJson);
  return TreeJson;
}

export function ConvertJsonToTreeOfYear(jsonArray) {
  //将json转换为antidesign tree控件的数据源，要用到递归
  var TreeJson = [];
  for (var a in jsonArray) {
    //遍历json数组时，这么写p为索引，0,1
    console.log(a);
    console.log("JsonStr:", jsonArray[a]);
    let lastJson = {};
    lastJson.title = jsonArray[a]["年份"];
    lastJson.key = a;
    TreeJson.push(lastJson);
  }
  console.log("TreeJson:", TreeJson);
  return TreeJson;
}

export function ConvertJsonToTreeOfFinance(jsonArray) {
  //将json转换为antidesign tree控件的数据源，要用到递归
  var TreeJson = [];
  var numOfFinance = [];
  var TreeAndNumber = [];

  var p = 0;
  for (var a in jsonArray) {
    if (a == "财报ID" || a == "公司ID") {
      ///console.log("hhhhh");
    } else {
      //console.log(jsonArray["" + a]);
      //console.log("JsonStr:", a);
      let lastJson = {};
      let lastNum = {};
      lastJson.title = a;
      lastJson.key = p;
      lastNum.key = p;
      lastNum.value = jsonArray["" + a];
      TreeJson.push(lastJson);
      numOfFinance.push(lastNum);
      p++;
    }
  }
  TreeAndNumber.push(TreeJson);
  TreeAndNumber.push(numOfFinance);
  //console.log("numOfFinance", numOfFinance);
  //console.log("TreeJson:", TreeJson);
  console.log(TreeAndNumber);
  return TreeAndNumber;
}
