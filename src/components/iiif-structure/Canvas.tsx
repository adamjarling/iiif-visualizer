import { Label, Thumbnail } from "@samvera/nectar-iiif";

import { Canvas as CanvasType } from "@iiif/presentation-3";
import Items from "./structural/Items";
import React from "react";

interface CanvasProps {
  canvas: CanvasType;
}

const Canvas: React.FC<CanvasProps> = ({ canvas }) => {
  return (
    <>
      <Label label={canvas.label} as="h3" />
      {/* TODO: */}
      {canvas.thumbnail && (
        <details open>
          <summary>Thumbnail</summary>
          <Thumbnail thumbnail={canvas.thumbnail} />
        </details>
      )}

      {canvas.items && <Items items={canvas.items} />}
    </>
  );
};

export default Canvas;
