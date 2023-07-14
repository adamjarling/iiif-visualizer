import {
  Canvas as CanvasType,
  ContentResource,
  EmbeddedResource,
  IIIFExternalWebResource,
  InternationalString,
} from "@iiif/presentation-3";
import { Label, Thumbnail } from "@samvera/nectar-iiif";

import Items from "./structural/Items";
import React from "react";

interface CanvasProps {
  canvas: CanvasType;
}

const Canvas: React.FC<CanvasProps> = ({ canvas }) => {
  if (!canvas) return null;

  return (
    <>
      <Label label={canvas.label as InternationalString} as="h3" />
      {/* TODO: */}
      {canvas.thumbnail && (
        <details open>
          <summary>Thumbnail</summary>
          <Thumbnail
            thumbnail={canvas.thumbnail as IIIFExternalWebResource[]}
          />
        </details>
      )}

      {canvas.items && (
        <>
          <details open>
            <summary>Items</summary>
            <div className="vizWrapperPadded">
              <Items items={canvas.items} />
            </div>
          </details>
        </>
      )}

      {canvas.placeholderCanvas && (
        <details open>
          <summary>Placeholder Canvas</summary>
          <>
            {canvas.placeholderCanvas.items ? (
              <div className="vizWrapperPadded">
                <details open>
                  <summary>Items</summary>
                  <div className="vizWrapperPadded">
                    <Items items={canvas.placeholderCanvas.items} />
                  </div>
                </details>
              </div>
            ) : (
              <p>Id: {canvas.placeholderCanvas.id}</p>
            )}
          </>
        </details>
      )}
    </>
  );
};

export default Canvas;
