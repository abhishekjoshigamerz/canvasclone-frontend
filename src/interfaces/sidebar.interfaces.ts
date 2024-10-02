export interface SidebarProps {
  activeMenu: string | null;
  onItemClick: (menuItem: string) => void;
}
