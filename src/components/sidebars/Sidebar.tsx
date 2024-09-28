interface SidebarProps {
  onItemClick: (menuItem: string) => void;
}
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
          <li>
            <a
              href="#"
              className="block hover:bg-gray-300 p-2 rounded cursor-not-allowed pointer-events-none"
            >
              Text
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:bg-gray-300 p-2 rounded cursor-not-allowed pointer-events-none"
            >
              Brand
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:bg-gray-300 p-2 rounded cursor-not-allowed pointer-events-none"
            >
              Stock Photos
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
