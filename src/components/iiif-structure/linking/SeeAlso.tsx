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
    <details>
      <summary>SeeAlso</summary>
      <div className={`vizWrapperPadded`}>
        {/* <p>
        <mark className="vizLabel">SeeAlso</mark>
      </p> */}
        <SeeAlso seeAlso={resource.seeAlso} />
      </div>
    </details>
  );
};

export default IIIFStructureSeeAlso;
