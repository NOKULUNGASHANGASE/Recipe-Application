import {Routes, Route, Outlet, BrowserRouter} from 'react-router-dom'
import Home from "./Pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './Pages/RecipeDetail';

function Layout(){
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}
function App() {
  return (
    <div className='bg-black'>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;