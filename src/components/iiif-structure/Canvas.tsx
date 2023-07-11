import { Canvas as CanvasType } from "@iiif/presentation-3";
import Items from "./structural/Items";
import { Label } from "@samvera/nectar-iiif";
import React from "react";

interface CanvasProps {
  canvas: CanvasType;
}

const Canvas: React.FC<CanvasProps> = ({ canvas }) => {
  return (
    <>
      <Label label={canvas.label} as="h3" />
      {canvas.items && <Items items={canvas.items} />}
    </>
  );
};

export default Canvas;
