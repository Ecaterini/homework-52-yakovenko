import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from "./app/store";
import './App.css'

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem("cart", JSON.stringify(state.cart.items))
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
