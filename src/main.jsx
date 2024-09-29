import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './styles/Phonebook.css'
import './styles/AddUserForm.css'
import './styles/option.css'
import { Provider } from 'react-redux'
import { contactStore } from './redux/contaktStore.js'



createRoot(document.getElementById('root')).render(
  <Provider store={contactStore}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>

)
