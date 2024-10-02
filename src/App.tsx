import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebars/Sidebar";
import CanvasBoard from "./components/canvas/CanvasBoard";
import Footer from "./components/footer/footer";

function App() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const handleSideBarMenu = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <div className="w-64 flex-shrink-0">
          <Sidebar onItemClick={handleSideBarMenu} activeMenu={activeMenu} />
        </div>
        <div className="flex-grow overflow-hidden">
          <CanvasBoard activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
