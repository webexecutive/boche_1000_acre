import { Provider } from "@/components/ui/provider"
import { HelmetProvider } from "react-helmet-async"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Provider>
        <App />
      </Provider>
    </HelmetProvider>
  </StrictMode>,
)
