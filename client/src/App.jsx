
import './App.css'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from './pages/home';
import Auth from './pages/auth';
import CreateRecipe from './pages/create-recipe';
import SavedRecipes from './pages/saved-recipes';
import Navbar from './Components/navbar';

function App() {
  
  return (
   <Router>
    < Navbar />
    <Routes>
      <Route path='/' element = { <Home/>} />
      <Route path='/auth' element = { <Auth />} />
      <Route path='/create-recipe' element = { < CreateRecipe  />} />
      <Route path='/saved-recipes' element = { < SavedRecipes />} />
    </Routes>
   </Router>
  )
}

export default App
