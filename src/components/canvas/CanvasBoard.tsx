import { CanvasBoardProps } from "../../interfaces/canvas.interface";
import useFabricCanvas from "../../hooks/useFabricCanvas";
import ElementSideBar from "../sidebars/sidebartools/ElementSideBar";
import TextSideBar from "../sidebars/sidebartools/TextSideBar";
import BrandSideBar from "../sidebars/sidebartools/BrandSideBar";
import StockPhoto from "../sidebars/sidebartools/StockPhoto";

const CanvasBoard = ({ activeMenu, setActiveMenu }: CanvasBoardProps) => {
  const { canvasRef, addShape, addText, updateTextStyle } = useFabricCanvas(
    700,
    400
  );

  const renderSidebarContent = () => {
    switch (activeMenu) {
      case "Elements":
        return <ElementSideBar addShape={addShape} />;
      case "Text":
        return (
          <TextSideBar addText={addText} updateTextStyle={updateTextStyle} />
        );
      case "Brand":
        return <BrandSideBar />;
      case "StockPhoto":
        return <StockPhoto />;
      default:
        return null;
    }
  };

  return (
    <main className="bg-white flex-grow flex h-screen">
      {activeMenu && (
        <aside className="bg-gray-100 w-64 p-4 border-r border-gray-200 h-full overflow-y-auto ">
          <p onClick={() => setActiveMenu(null)}>Go Back</p>
          {renderSidebarContent()}
        </aside>
      )}
      <div className="flex-grow p-4 flex flex-col items-center justify-center">
        <div>
          <h2 className="text-xl font-semibold mb-4">Canvas Content</h2>
          <div className="border border-gray-300 shadow-lg">
            <canvas ref={canvasRef} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CanvasBoard;
