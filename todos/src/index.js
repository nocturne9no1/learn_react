import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoList from './components/todoList.js'

function InputBox() {
  return (
    <input type="text" />
  )
};

ReactDOM.render(
  <React.StrictMode>
    {/* <InputBox/>, */}
    <TodoList/>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
