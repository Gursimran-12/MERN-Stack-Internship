import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Button } from './components/Button.jsx'
import Login from './components/login.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App />
    <Button  value={'Read Me'} bgColor={'red'} />
    <Button value= {'Submit'} bgColor={'yellow'} textColor={'Black'} />
    <Button value={'Read More'} bgColor={'Green'} textColor={'Red'} /> */}
    <Login />
  </>
)
