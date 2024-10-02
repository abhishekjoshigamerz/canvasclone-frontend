import { Square, Circle, Triangle, Hexagon, Minus } from "lucide-react";
import { ShapeOptionProps } from "../../../interfaces/canvas.interface";
import { ElementSideBarProps } from "../../../interfaces/tools.interface";
const ElementSideBar = ({ addShape }: ElementSideBarProps) => {
  const ShapeOption = ({ Icon, label }: ShapeOptionProps) => (
    <div
      className="flex items-center justify-center cursor-pointer hover:bg-gray-200 p-4 rounded"
      onClick={() => addShape(label)}
    >
      <Icon className="text-blue-500 w-8 h-8" />
    </div>
  );
  return (
    <>
      <h3 className="text-lg font-semibold mb-4">Shapes</h3>
      <div className="grid grid-cols-2 gap-2">
        <ShapeOption Icon={Square} label="rectangle" />
        <ShapeOption Icon={Circle} label="circle" />
        <ShapeOption Icon={Triangle} label="triangle" />
        <ShapeOption Icon={Hexagon} label="hexagon" />
        <ShapeOption Icon={Minus} label="minus" />
      </div>
    </>
  );
};

export default ElementSideBar;
