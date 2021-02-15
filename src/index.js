import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //index.html의 root div에 react로 작성한 모든 요소들을 넣어줌
  //html에 코드를 작성하지 않기 때문에 동작 속도가 빨라진다.
  //Virtual DOM(document object model)
  document.getElementById('root')
);