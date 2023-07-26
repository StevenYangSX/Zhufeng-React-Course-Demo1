import React from "react";
import PropTypes from "prop-types";

class VoteClass extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state={};
  // }

  // 初始化状态 state
  state = {
    supNum: 10,
    oppNum: 5,
  };

  static defaultProps = {
    num: 0,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number,
  };

  render() {
    console.log(this.props);
    let { title } = this.props;
    let { supNum, oppNum } = this.state;
    return (
      <div className="vote-vox">
        <div className="header">
          <h2 className="title">{title}</h2>
          <span>{supNum + oppNum}人</span>
        </div>
        <div className="main">
          <p>支持人数：{supNum}人</p>
          <p>反对认识：{oppNum}人</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              this.setState({
                supNum: supNum + 1,
              });
            }}
          >
            支持
          </button>
          <button
            onClick={() => {
              this.state.oppNum--;
              this.forceUpdate();
            }}
          >
            反对
          </button>
        </div>
      </div>
    );
  }
  componentWillMount() {
    console.log("componentWillMount :  第一次渲染之前");
  }
  componentDidMount() {
    console.log("componentDidMount : 渲染完成");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate : 是否允许更新", nextProps, nextState);
    //
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate : 页面更新之前");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate : 页面更新完毕");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps : 接受新props之前", nextProps, this.props);
  }
}

export default VoteClass;
