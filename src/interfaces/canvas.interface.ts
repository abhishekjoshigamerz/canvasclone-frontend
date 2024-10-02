export interface ShapeOptionProps {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
}

export interface CanvasBoardProps {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
}
