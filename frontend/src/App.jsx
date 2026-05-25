import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes.jsx'
import './App.css'
import { AuthContextProvider } from './features/auth/auth.context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default App
