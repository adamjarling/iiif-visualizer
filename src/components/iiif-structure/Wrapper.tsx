import React, { useEffect, useRef, useState } from "react";

import IIIFStructureHomepage from "../../components/iiif-structure/linking/Homepage";
import IIIFStructureMetadata from "../../components/iiif-structure/descriptive/Metadata";
import IIIFStructureSeeAlso from "../../components/iiif-structure/linking/SeeAlso";
import IIIFStructureSummary from "../../components/iiif-structure/descriptive/Summary";
import IIIFStructureThumbnail from "../../components/iiif-structure/descriptive/Thumbnail";
import Items from "../../components/iiif-structure/Items";
import ManifestLegend from "../../components/iiif-structure/ManifestLegend";
import Structures from "../../components/iiif-structure/Structures";

interface Props {
  resource: any;
}

const IIIFStructureWrapper: React.FC<Props> = ({ resource }) => {
  const myRef = useRef<HTMLDetailsElement>(null);
  const [summaryText, setSummaryText] = useState<string>("Hide structure");

  const handleClick = () => {
    setTimeout(() => {
      setSummaryText(
        myRef.current?.hasAttribute("open")
          ? "Hide structure"
          : "Show structure"
      );
    }, 0);
  };

  return (
    <>
      <h2>{resource.type}</h2>
      <details open ref={myRef}>
        <summary onClick={handleClick}>{summaryText}</summary>
        <>
          <ManifestLegend resource={resource} />
          <div className={`vizWrapper`}>
            <p>
              <mark className="vizLabel">{resource.type}</mark>
            </p>
            <IIIFStructureMetadata resource={resource} />
            <IIIFStructureSummary resource={resource} />
            <IIIFStructureThumbnail resource={resource} />
            <IIIFStructureHomepage resource={resource} />
            <IIIFStructureSeeAlso resource={resource} />
            <Items items={resource.items} />
            <Structures structures={resource.structures} />
          </div>
        </>
      </details>
    </>
  );
};

export default IIIFStructureWrapper;
