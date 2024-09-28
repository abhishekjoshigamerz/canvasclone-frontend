import {
  Canvas,
  Rect,
  Circle as FabricCircle,
  Triangle as FabricTriangle,
  Polygon,
  // Star as FabricStar,
  Line,
} from "fabric";
import { useEffect, useRef } from "react";
import { Square, Circle, Triangle, Hexagon, Minus } from "lucide-react";

interface CanvasBoardProps {
  activeMenu: string | null;
}

interface ShapeOptionProps {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
}

const CanvasBoard = ({ activeMenu }: CanvasBoardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);

  console.log(activeMenu);

  const ShapeOption = ({ Icon, label }: ShapeOptionProps) => (
    <div
      className="flex items-center justify-center cursor-pointer hover:bg-gray-200 p-4 rounded"
      onClick={() => addShape(label)}
    >
      <Icon className="text-blue-500 w-8 h-8" />
    </div>
  );

  useEffect(() => {
    if (canvasRef.current) {
      fabricCanvasRef.current = new Canvas(canvasRef.current, {
        width: 600,
        height: 400,
      });
    }
    // Cleanup function
    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
      }
    };
  }, []);

  const addRectange = () => {
    if (fabricCanvasRef.current) {
      const rect = new Rect({
        width: 100,
        height: 100,
        fill: "red",
        left: 100,
        top: 100,
      });
      fabricCanvasRef.current?.add(rect);
      fabricCanvasRef.current?.renderAll();
    }
  };

  const addTriangle = () => {
    if (fabricCanvasRef.current) {
      const triangle = new FabricTriangle({
        width: 100,
        height: 100,
        fill: "green",
        left: 300,
        top: 300,
      });
      fabricCanvasRef.current?.add(triangle);
      fabricCanvasRef.current?.renderAll();
    }
  };

  const addCircle = () => {
    if (fabricCanvasRef.current) {
      const circle = new FabricCircle({
        radius: 50,
        fill: "blue",
        left: 200,
        top: 200,
      });
      fabricCanvasRef.current?.add(circle);
      fabricCanvasRef.current?.renderAll();
    }
  };

  const addHexagon = () => {
    if (fabricCanvasRef.current) {
      const hexagon = new Polygon(
        [
          { x: 100, y: 0 },
          { x: 200, y: 0 },
          { x: 250, y: 100 },
          { x: 200, y: 200 },
          { x: 100, y: 200 },
          { x: 50, y: 100 },
        ],
        {
          fill: "yellow",
          left: 400,
          top: 200,
        }
      );
      fabricCanvasRef.current?.add(hexagon);
      fabricCanvasRef.current?.renderAll();
    }
  };

  const addLine = () => {
    if (fabricCanvasRef.current) {
      const line = new Line([50, 100, 200, 100], {
        stroke: "black",
        strokeWidth: 2,
      });
      fabricCanvasRef.current?.add(line);
      fabricCanvasRef.current?.renderAll();
    }
  };

  const addShape = (label: string) => {
    if (label === "circle") {
      addCircle();
    } else if (label === "rectange") {
      addRectange();
    } else if (label === "triangle") {
      addTriangle();
    } else if (label === "hexagon") {
      addHexagon();
    } else if (label === "minus") {
      addLine();
    } else {
      // addStar();
    }
  };

  return (
    <main className="bg-white flex-grow flex">
      {activeMenu && (
        <aside className="bg-gray-100 w-64 p-4 border-r border-gray-200 h-full overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Shapes</h3>
          <div className="grid grid-cols-2 gap-2">
            <ShapeOption Icon={Square} label="rectange" />
            <ShapeOption Icon={Circle} label="circle" />
            <ShapeOption Icon={Triangle} label="triangle" />
            <ShapeOption Icon={Hexagon} label="hexagon" />
            <ShapeOption Icon={Minus} label="minus" />
            {/* <ShapeOption Icon={Star} label="star" /> */}
          </div>
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
