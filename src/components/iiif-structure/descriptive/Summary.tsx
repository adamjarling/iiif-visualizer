import { Manifest } from "@iiif/presentation-3";
import React from "react";
import { Summary } from "@samvera/nectar-iiif";

interface IIIFStructureSummaryProps {
  resource: Manifest;
}

const IIIFStructureSummary: React.FC<IIIFStructureSummaryProps> = ({
  resource,
}) => {
  if (!resource?.summary) return null;

  return (
    <div
      className={`vizWrapper`}
      style={{
        background: "rgba(var(--secondary-color2), 0.1)",
      }}
    >
      <p>
        <mark className="vizLabel">Summary</mark>
      </p>
      <Summary summary={resource.summary} as="p" />
    </div>
  );
};

export default IIIFStructureSummary;
