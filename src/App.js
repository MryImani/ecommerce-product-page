import { BrowserRouter,Route,Routes, } from "react-router-dom";
import Home from './pages/home/Home'
import Navbar from "./components/global/Navbar";
import Menu from "./components/global/Menu";
import { useState } from "react";
function App() {
  const [openMenu,setOpenMenu] = useState(false);
  function handleOpenMenu(){
  setOpenMenu(true);
  }
    function handleCloseMenu() {
      setOpenMenu(false);
    }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar openMenu={handleOpenMenu} />
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
