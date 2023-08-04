import React from "react";
import { connect } from "react-redux";
import VoterInfo from "./VoterInfo";
import VoterButton from "./VoterButton";
const VoterRedux = (props) => {
  // const { store } = useContext(Context);
  let { supNum, oppNum } = props;
  console.log("check react-redux....", props);
  // // 获取store中的公共状态
  // let { supNum, oppNum } = store.getState().voter;

  // // 组件第一次渲染完成后  把让组件更新的方法 放在STORE的事件池中
  // let [num, setNum] = useState(0);
  // const update = () => {
  //   setNum(num + 1);
  // };

  // useEffect(() => {
  //   let unsubscribe = store.subscribe(update);
  // }, [supNum, oppNum]);

  return (
    <div>
      <div className="header">
        <h2>React投票组件--Redux 1</h2>
        <span>总人数:{supNum + oppNum}</span>
      </div>
      <VoterInfo />
      <VoterButton />
    </div>
  );
};

export default connect((state) => state.voter)(VoterRedux);
/**
 * connect(mapStateToProps, mapDispatchToProps) (我们要渲染的组件)
 * 1. mapStateToProps 可以获取到redux中的公共状态 把需要的信息 当作props
 */
