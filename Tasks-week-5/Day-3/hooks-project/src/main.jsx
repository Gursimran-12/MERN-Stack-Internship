import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import UseRef from './useRef.jsx'
import Memo from './memo.jsx'
import Text from './UseRef-text.jsx'
import IdGenerator from './uuid.jsx'
import Login from './examples/loginSystem.jsx'
import InputFocus from './examples/useRefFocus.jsx'

createRoot(document.getElementById('root')).render(
  // <App />
  // <UseRef />
  // <Memo />
  <Text />
  // <Login />
  // <IdGenerator />
)
