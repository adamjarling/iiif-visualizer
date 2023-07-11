import { Homepage } from "@samvera/nectar-iiif";
import { Manifest } from "@iiif/presentation-3";
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
        <Homepage homepage={resource.homepage} />
      </div>
    </details>
  );
};

export default IIIFStructureHomepage;
