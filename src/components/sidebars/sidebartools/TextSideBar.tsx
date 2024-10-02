import { AlignLeft, Heading1, Heading2 } from "lucide-react";

const TextSideBar = ({
  addText,
  updateTextStyle,
}: {
  addText: (text: string) => void;
  updateTextStyle: (style: string, value: unknown) => void;
}) => {
  const textOptions = [
    { name: "Heading 1", icon: Heading1 },
    { name: "Heading 2", icon: Heading2 },
    { name: "Paragraph", icon: AlignLeft },
  ];

  const fontOptions = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier",
    "Verdana",
    "Georgia",
    "Palatino",
    "Garamond",
    "Bookman",
    "Comic Sans MS",
    "Trebuchet MS",
    "Arial Black",
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Text Options</h3>

      <div className="mb-6">
        <h4 className="text-md font-medium mb-2">Add Text</h4>
        <ul className="space-y-2">
          {textOptions.map((option, index) => (
            <li key={index}>
              <div
                className="flex items-center p-2 border rounded cursor-pointer hover:bg-gray-100"
                onClick={() => addText(option.name)}
              >
                <option.icon className="mr-3" />
                <span>{option.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-md font-medium mb-2">Font Options</h4>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => updateTextStyle("fontFamily", e.target.value)}
        >
          {fontOptions.map((font, index) => (
            <option key={index} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <h4 className="text-md font-medium mb-2">Font Size</h4>
        <input
          type="number"
          min="8"
          max="72"
          defaultValue="16"
          className="w-full p-2 border rounded"
          onChange={(e) =>
            updateTextStyle("fontSize", parseInt(e.target.value))
          }
        />
      </div>

      <div className="mt-4">
        <h4 className="text-md font-medium mb-2">Text Color</h4>
        <input
          type="color"
          defaultValue="#000000"
          className="w-full p-1 border rounded"
          onChange={(e) => updateTextStyle("fill", e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextSideBar;
