import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Hero from './Components/Hero'

function App(){
return(
  <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Hero/>}/>
 </Routes>
    </BrowserRouter>
  </>
)
}
export default App