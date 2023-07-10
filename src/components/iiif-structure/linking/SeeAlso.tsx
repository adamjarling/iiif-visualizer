import { Manifest } from "@iiif/presentation-3";
import React from "react";
import { SeeAlso } from "@samvera/nectar-iiif";

interface IIIFStructureSeeAlsoProps {
  resource: Manifest;
}

const IIIFStructureSeeAlso: React.FC<IIIFStructureSeeAlsoProps> = ({
  resource,
}) => {
  if (!resource?.seeAlso) return null;

  return (
    <div
      className={`vizWrapper`}
      style={{
        background: "rgba(var(--secondary-color3), 0.2)",
      }}
    >
      <p>
        <mark className="vizLabel">SeeAlso</mark>
      </p>
      <SeeAlso seeAlso={resource.seeAlso} />
    </div>
  );
};

export default IIIFStructureSeeAlso;
