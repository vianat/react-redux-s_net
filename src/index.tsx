import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type postType = {
    id: number,
    text: string,
    likesCount: number
}

let posts = [
    {id: 1, text: "hi its first post", likesCount: 0},
    {id: 2, text: "tiktok gavno", likesCount: 177},
    {id: 3, text: "you are fufel!", likesCount: 62}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
