import { Canvas, Rect } from "fabric";
import { useEffect, useRef } from "react";

const CanvasBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      fabricCanvasRef.current = new Canvas(canvasRef.current, {
        width: 600,
        height: 400,
      });

      // Add a simple rectangle to the canvas
      const rect = new Rect({
        left: 100,
        top: 100,
        fill: "red",
        width: 200,
        height: 100,
      });

      fabricCanvasRef.current.add(rect);
    }

    // Cleanup function
    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
      }
    };
  }, []);

  return (
    <main className="bg-white flex-grow p-4 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4">Canvas Content</h2>
      <div className="border border-gray-300 shadow-lg">
        <canvas ref={canvasRef} />
      </div>
    </main>
  );
};

export default CanvasBoard;
