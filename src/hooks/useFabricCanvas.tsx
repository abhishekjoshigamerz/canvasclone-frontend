import { useRef, useEffect, useCallback } from "react";
import { Canvas, Circle, Rect, Triangle, Polygon, Line, IText } from "fabric";

const useFabricCanvas = (width: number, height: number) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      fabricCanvasRef.current = new Canvas(canvasRef.current, {
        width,
        height,
      });
    }

    return () => {
      fabricCanvasRef.current?.dispose();
    };
  }, [width, height]);

  const addShape = (shapeType: string) => {
    if (!fabricCanvasRef.current) return;

    let shape;
    console.log(shapeType);
    switch (shapeType.toLowerCase()) {
      case "rectangle":
        shape = new Rect({
          width: 100,
          height: 100,
          fill: "blue",
        });
        break;
      case "circle":
        shape = new Circle({
          radius: 50,
          fill: "black",
        });
        break;
      case "triangle":
        shape = new Triangle({
          width: 100,
          height: 100,
          fill: "green",
        });
        break;
      case "hexagon":
        shape = new Polygon(
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
        break;
      case "minus":
        shape = new Line([50, 100, 200, 100], {
          stroke: "black",
          strokeWidth: 2,
        });
        break;
      default:
        console.error("Unknown shape type");
        return;
    }

    shape.set({
      left: Math.random() * (width - 100),
      top: Math.random() * (height - 100),
    });

    fabricCanvasRef.current.add(shape);
    fabricCanvasRef.current.renderAll();
  };

  const addText = useCallback(
    (textType: string) => {
      if (!fabricCanvasRef.current) return;

      let textOptions: Partial<IText> = {
        left: Math.random() * (width - 100),
        top: Math.random() * (height - 100),
        fontSize: 16,
        fill: "black",
      };

      switch (textType) {
        case "Heading 1":
          textOptions = {
            ...textOptions,
            text: "Heading 1",
            fontSize: 32,
            fontWeight: "bold",
          };
          break;
        case "Heading 2":
          textOptions = {
            ...textOptions,
            text: "Heading 2",
            fontSize: 24,
            fontWeight: "bold",
          };
          break;
        case "Paragraph":
          textOptions = { ...textOptions, text: "Paragraph text" };
          break;
        default:
          textOptions = { ...textOptions, text: "Text" };
      }

      const text = new IText(textOptions.text || "", textOptions);

      fabricCanvasRef.current.add(text);
      fabricCanvasRef.current.setActiveObject(text);
      fabricCanvasRef.current.renderAll();
    },
    [width, height]
  );

  const updateTextStyle = useCallback((property: string, value: unknown) => {
    if (!fabricCanvasRef.current) return;

    const activeObject = fabricCanvasRef.current.getActiveObject();
    if (activeObject && activeObject.type === "i-text") {
      (activeObject as IText).set(property, value);
      fabricCanvasRef.current.renderAll();
    }
  }, []);

  return { canvasRef, addShape, addText, updateTextStyle };
};

export default useFabricCanvas;
