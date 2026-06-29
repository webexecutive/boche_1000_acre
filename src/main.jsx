import { Provider } from "@/components/ui/provider"
import { HelmetProvider } from "react-helmet-async"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from 'react-ga4';
ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Provider>
        <App />
      </Provider>
    </HelmetProvider>
  </StrictMode>,
)
