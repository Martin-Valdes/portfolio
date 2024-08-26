import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { GoogleTag } from './components/GoogleTag/GoogleTag.jsx';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GoogleTag/>
  </React.StrictMode>,
)
