import { Manifest } from "@iiif/presentation-3";
import { NectarExternalWebResource } from "@samvera/nectar-iiif/dist/types/nectar";
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
    <details open>
      <summary>SeeAlso</summary>
      <div className={``}>
        <SeeAlso seeAlso={resource.seeAlso as NectarExternalWebResource[]} />
      </div>
    </details>
  );
};

export default IIIFStructureSeeAlso;
