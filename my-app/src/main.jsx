import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import  {Provider} from "react-redux"
import store from './redux/configStore';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <App />
        </Provider>

)
