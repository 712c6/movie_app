import React from "react";
import PropTypes from "prop-types";

/*
    1. jsx
    2. props
    3. state
*/

//React.Component가 state, render method를 가지고 있음(Class 사용 시 반드시 상속)
class App extends React.Component {
  //state: object, component의 동적 data 저장
  state = {
    count: 0
  };
  
  add = () => {
    //react는 setState를 사용했을 때 state를 재설정하고 render를 실행함
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  //Component Life Cycle Method
  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    //컴포넌트가 언마운팅 될 때, 즉 페이지를 닫거나 이동할 때 발생(구현불가예제)
    console.log("Good bye, Cruel World");
  }

  //react는 자동으로 class component내의 render method를 실행함
  render() {
    console.log("I'm rendering");

    return ( 
      <div>
        <h2>The number is: {this.state.count}</h2>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}


export default App;
