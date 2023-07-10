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
    <div
      className={`vizWrapper`}
      style={{
        background: "rgba(var(--secondary-color2), 0.1)",
      }}
    >
      <p>
        <mark className="vizLabel">Thumbnail</mark>
      </p>
      <Thumbnail thumbnail={resource.thumbnail} />
    </div>
  );
};

export default IIIFStructureThumbnail;
