import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Important } from './pages/Important';

function App() {
  console.log("App is rendering...");

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/important' element={<Important/>}/>
    </Routes>
  )
};

export default App
