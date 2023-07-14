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
    <details open>
      <summary>Summary</summary>
      <div className={`vizWrapperPadded`}>
        {/* <p>
        <mark className="vizLabel">Summary</mark>
      </p> */}
        <Summary summary={resource.summary} as="p" />
      </div>
    </details>
  );
};

export default IIIFStructureSummary;
