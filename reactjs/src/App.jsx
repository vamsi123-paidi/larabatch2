// import About from "./components/About"
// import Home from "./components/Home"

// function App(){
//   const obj = {
//     name:"adam",
//     age:120
//   }
//   return (
//     <>
//      <h1>Hello this is app.jsx</h1>
//      <Home name="adam" />
//      <About obj ={obj}  />
//     </>
//   )
// }

// export default App




// import React from 'react'
// import Counter from './components/Counter'
// import InputElement from './components/InputElement'
// import Loader from './components/InputElement'
// import PatternWaves from './components/Counter'

// const App = () => {
//   return (
//     <div>
//       <Counter/>
//       <PatternWaves/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import UseEffectExe from './components/UseEffectExe'
// import UseRefExe from './components/UseRefExe'

// const App = () => {
//   return (
//     <div>
//       <UseEffectExe/>
//       <UseRefExe/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Home from "./components/Home"
import UseRefExe from "./components/UseRefExe"
import UseEffectExe from "./components/UseEffectExe"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/useref' element={<UseRefExe/>}/>
          <Route path='/useeffect'  element={<UseEffectExe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App




