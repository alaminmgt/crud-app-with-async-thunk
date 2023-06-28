import React from 'react'
import Navbar from './components/Navbar'
import Create from './components/Create'
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Read from './components/Read';
import Update from './components/Update';

const App = () => {
  return (
    <div style={{textAlign : "center"}}>
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route exact path="/" element={<Create/>}/>
          <Route path="/read" element={<Read/>}/>
          <Route path="/edit/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
