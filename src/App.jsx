import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Important } from './pages/Important';
import { Archive } from './pages/Archive';
import { Bin } from './pages/Bin';

function App() {
  console.log("App is rendering...");

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/important' element={<Important/>}/>
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/bin' element={<Bin/>}/>
    </Routes>
  )
};

export default App
