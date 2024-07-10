import React from 'react'
import ReactDOM from 'react-dom/client'

// import './index.css'
import App from './App'
import Wrapper from './wrapper/Wrapper'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wrapper>
    <App />
    </Wrapper>
  </React.StrictMode>,
)
