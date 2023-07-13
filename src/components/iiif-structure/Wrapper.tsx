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
  return (
    <>
      <h2>{resource.type}</h2>
      <ManifestLegend resource={resource} />
      <details open>
        <summary>{resource.type}</summary>
        <div className={`vizWrapper`}>
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
            <details>
              <summary>Items</summary>
              <div className="vizWrapperPadded">
                <Items items={resource.items} />
              </div>
            </details>
            {resource.structures && (
              <Structures structures={resource.structures} />
            )}
          </section>
        </div>
      </details>
    </>
  );
};

export default IIIFStructureWrapper;
