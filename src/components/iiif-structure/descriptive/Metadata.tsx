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
    <details open>
      <summary>Metadata</summary>
      <div className={`vizWrapperPadded`}>
        {/* <p>
          <mark className="vizLabel">Metadata</mark>
        </p> */}
        <Metadata metadata={resource.metadata} />
      </div>
    </details>
  );
};

export default IIIFStructureMetadata;
