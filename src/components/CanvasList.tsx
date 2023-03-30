import { Canvas } from "@iiif/presentation-3";
import ItemsGrid from "./ItemsGrid";
import { Label } from "@samvera/nectar-iiif";
import React from "react";
import classes from "./canvasList.module.css";

const { canvasWrapper, list } = classes;

interface CanvasListProps {
  items: Canvas[];
}

const CanvasList: React.FC<CanvasListProps> = ({ items }) => {
  return (
    <ul className={list}>
      {items?.map((canvas) => (
        <li className={`vizWrapper ${canvasWrapper}`}>
          <span className="vizLabel">{canvas.type}</span>
          <Label label={canvas.label} as="h3" />
          <ItemsGrid annotationPages={canvas.items} />
        </li>
      ))}
    </ul>
  );
};

export default CanvasList;
