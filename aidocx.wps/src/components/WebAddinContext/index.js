//https://www.jianshu.com/p/da6181ca5564
//https://www.jianshu.com/p/eba2b76b290b
//https://www.jianshu.com/p/87632fc165d0
//http://www.zzvips.com/article/191684.html
//没有异步逻辑用 context，有异步逻辑用 redux
//https://www.redux.org.cn/docs/react-redux/
//https://segmentfault.com/a/1190000015684895
import {createContext} from "react";

export const {Provider, Consumer} = createContext({
  userid: "",
  tplid: "",
  showLgin:false,
});
