import Header from "./components/header/Header";
import Sidebar from "./components/sidebars/Sidebar";
import CanvasBoard from "./components/canvas/CanvasBoard";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex-grow overflow-hidden">
          <CanvasBoard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
