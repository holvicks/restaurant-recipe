
import './App.css'
import Pages from './pages/Pages' 
import Category from './components/Categories'
import { BrowserRouter } from 'react-router-dom'
import Search from "./components/Search"
function App() {


  return (
    <>
    <BrowserRouter>
    <Search />
    <Category />
    <Pages />
    </BrowserRouter>
   
    </>
  )
}

export default App
