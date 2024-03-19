import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Inicio } from "./pages/Inicio"
import {GlobalStyle} from "./GlobalStyle"
import { Logged } from "./pages/Logged"
import { CreatAccout } from "./pages/CreatAccount"

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="logged" element={<Logged/>}/>
        <Route path="createaccount" element={<CreatAccout/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
