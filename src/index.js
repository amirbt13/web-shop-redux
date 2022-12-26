import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'

axios.interceptors.request.use((req) => {
  console.log(`a ${req.method} request sent to ${req.url}`)
  return req
}, (req) => {
  console.log(`an error occurd sending request to ${req.url}`)
})

//  axios.interceptors.response.use((res) => {
  
//    console.log(`response got back from ${res.config.url} status: ${res.request.status}`)
//  }, (res) => {
//   console.log(res)
//   console.log(`there is no response from ${res.config.url} , ${res.request.status}`)
//  })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
 
);

