import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from "./app/router.jsx";
import { RouterProvider } from "react-router";
import { store } from './app/store'
import { Provider } from 'react-redux'

import './assets/styles/main.css'
import "./assets/fonts/fonts.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
