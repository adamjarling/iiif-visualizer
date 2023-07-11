import React, { useEffect, useRef, useState } from "react";

import IIIFStructureHomepage from "../../components/iiif-structure/linking/Homepage";
import IIIFStructureMetadata from "../../components/iiif-structure/descriptive/Metadata";
import IIIFStructureSeeAlso from "../../components/iiif-structure/linking/SeeAlso";
import IIIFStructureSummary from "../../components/iiif-structure/descriptive/Summary";
import IIIFStructureThumbnail from "../../components/iiif-structure/descriptive/Thumbnail";
import Items from "./structural/Items";
import ManifestLegend from "../../components/iiif-structure/ManifestLegend";
import Structures from "../../components/iiif-structure/Structures";
import classes from "./Wrapper.module.scss";

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
          <details>
            <summary>{resource.type}</summary>
            <div className={`vizWrapper`}>
              {/* <p>
              <mark className="vizLabel">{resource.type}</mark>
            </p> */}
              <section className={`${classes.descriptive}`}>
                <IIIFStructureMetadata resource={resource} />
                <IIIFStructureSummary resource={resource} />
                <IIIFStructureThumbnail resource={resource} />
              </section>

              <section className={classes.linking}>
                <IIIFStructureHomepage resource={resource} />
                <IIIFStructureSeeAlso resource={resource} />
              </section>

              <section className={classes.structural}>
                <Items items={resource.items} />
                <Structures structures={resource.structures} />
              </section>
            </div>
          </details>
        </>
      </details>
    </>
  );
};

export default IIIFStructureWrapper;
