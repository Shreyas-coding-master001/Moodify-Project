import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes/AppRoutes.jsx'
import './App.css'
import { AuthContextProvider } from './features/auth/auth.context'
import { SongContextProvider } from './features/home/song.context.jsx';
import Home from './features/home/pages/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthContextProvider>
        <SongContextProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </SongContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
