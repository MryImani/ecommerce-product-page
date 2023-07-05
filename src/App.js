import { BrowserRouter,Route,Routes, } from "react-router-dom";
import Home from './pages/home/Home'
import Navbar from "./components/global/Navbar";
import Menu from "./components/global/Menu";
import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
function App() {
  const [openMenu,setOpenMenu] = useState(false);
    // const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart); 
    const cartLength = cart.reduce((total, item) => {
    return total + item.count;
  }, 0);
  function handleOpenMenu(){
  setOpenMenu(true);
  }
    function handleCloseMenu() {
      setOpenMenu(false);
    }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar openMenu={handleOpenMenu} cartLength={cartLength} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" />
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
          <Route path="/" /> */}
        </Routes>
        <Menu open={openMenu} closeMenu={handleCloseMenu} />
      </BrowserRouter>
    </div>
  );
}

export default App;
