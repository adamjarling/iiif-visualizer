import "./CanvasList.css";

import { Canvas } from "@iiif/presentation-3";
import ItemsGrid from "./ItemsGrid";
import { Label } from "@samvera/nectar-iiif";
import React from "react";

interface CanvasListProps {
  items: Canvas[];
}

const CanvasList: React.FC<CanvasListProps> = ({ items }) => {
  return (
    <ul className="canvas-list">
      {items?.map((canvas) => (
        <li>
          <Label label={canvas.label} as="h3" />
          <ItemsGrid annotationPages={canvas.items} />
        </li>
      ))}
    </ul>
  );
};

export default CanvasList;
