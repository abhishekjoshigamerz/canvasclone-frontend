export interface ElementSideBarProps {
  addShape: (shapeType: string) => void;
}
export interface TextSideBarProps {
  addText: () => void;
  updateTextStyle: (property: string, value: unknown) => void;
}
