import { Manifest } from "@iiif/presentation-3";
import React from "react";
import { Thumbnail } from "@samvera/nectar-iiif";

interface IIIFStructureThumbnailProps {
  resource: Manifest;
}

const IIIFStructureThumbnail: React.FC<IIIFStructureThumbnailProps> = ({
  resource,
}) => {
  if (!resource?.thumbnail) return null;

  return (
    <details open>
      <summary>Thumbnail</summary>
      <div className={``}>
        <Thumbnail thumbnail={resource.thumbnail} />
      </div>
    </details>
  );
};

export default IIIFStructureThumbnail;
