import { Manifest } from "@iiif/presentation-3";
import { Metadata } from "@samvera/nectar-iiif";
import React from "react";

interface IIIFStructureMetadataProps {
  resource: Manifest;
}

const IIIFStructureMetadata: React.FC<IIIFStructureMetadataProps> = ({
  resource,
}) => {
  if (!resource?.metadata) return null;

  return (
    <div
      className={`vizWrapper`}
      style={{
        background: "rgba(var(--secondary-color2), 0.1)",
      }}
    >
      <p>
        <mark className="vizLabel">Metadata</mark>
      </p>
      <Metadata metadata={resource.metadata} />
    </div>
  );
};

export default IIIFStructureMetadata;
