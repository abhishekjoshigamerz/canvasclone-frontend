import { SidebarProps } from "../../interfaces/sidebar.interfaces";

const Sidebar = ({ onItemClick }: SidebarProps) => {
  return (
    <aside className="bg-gray-200 w-64 h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block hover:bg-gray-300 p-2 rounded">
              Home
            </a>
          </li>
          <li onClick={() => onItemClick("Elements")}>
            <a href="#" className="block hover:bg-gray-300 p-2 rounded">
              Elements
            </a>
          </li>
          <li onClick={() => onItemClick("Text")}>
            <a href="#" className="block hover:bg-gray-300 p-2 rounded ">
              Text
            </a>
          </li>
          <li onClick={() => onItemClick("Brand")}>
            <a href="#" className="block hover:bg-gray-300 p-2 rounded ">
              Brand
            </a>
          </li>
          <li onClick={() => onItemClick("StockPhoto")}>
            <a href="#" className="block hover:bg-gray-300 p-2 rounded ">
              Stock Photos
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
