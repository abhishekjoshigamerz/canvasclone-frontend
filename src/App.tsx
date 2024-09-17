import Header from "./components/header/Header";
import Sidebar from "./components/sidebars/Sidebar";
import Canvas from "./components/canvas/Canvas";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <Canvas />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
