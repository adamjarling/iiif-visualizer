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
    <div
      className={`vizWrapper`}
      style={{
        background: "rgba(var(--secondary-color3), 0.2)",
      }}
    >
      <span className="vizLabel">Homepage</span>
      <Homepage homepage={resource.homepage} />
    </div>
  );
};

export default IIIFStructureHomepage;
