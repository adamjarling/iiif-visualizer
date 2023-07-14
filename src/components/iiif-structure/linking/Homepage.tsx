import { Homepage } from "@samvera/nectar-iiif";
import { Manifest } from "@iiif/presentation-3";
import { NectarExternalWebResource } from "@samvera/nectar-iiif/dist/types/nectar";
import React from "react";

interface IIIFStructureHomepageProps {
  resource: Manifest;
}

const IIIFStructureHomepage: React.FC<IIIFStructureHomepageProps> = ({
  resource,
}) => {
  if (!resource?.homepage) return null;

  return (
    <details open>
      <summary>Homepage</summary>
      <div className={``}>
        <Homepage homepage={resource.homepage as NectarExternalWebResource[]} />
      </div>
    </details>
  );
};

export default IIIFStructureHomepage;
