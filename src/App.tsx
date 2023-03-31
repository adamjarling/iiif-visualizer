import "./App.css";

import { useEffect, useState } from "react";

import IIIFStructureHomepage from "./components/iiif-structure/linking/Homepage";
import IIIFStructureMetadata from "./components/iiif-structure/descriptive/Metadata";
import IIIFStructureSeeAlso from "./components/iiif-structure/linking/SeeAlso";
import IIIFStructureSummary from "./components/iiif-structure/descriptive/Summary";
import IIIFStructureThumbnail from "./components/iiif-structure/descriptive/Thumbnail";
import Items from "./components/iiif-structure/Items";
import JSONViewer from "./components/JSONViewer";
import ManifestLegend from "./components/ManifestLegend";
import ResourceSelector from "./components/ResourceSelector";
import Structures from "./components/iiif-structure/Structures";
import { fetch } from "@iiif/vault-helpers/fetch";

function App() {
  const [resource, setResource] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = e.currentTarget.url.value;
    if (!url) return;

    fetch(url)
      .then((response) => response)
      .then((data) => {
        setResource(data);
      });
  };

  return (
    <div className="App">
      <ResourceSelector handleSubmit={handleSubmit} />

      {resource && (
        <>
          <section>
            <h2>JSON</h2>
            <JSONViewer resource={resource} />
          </section>

          <section>
            <h2 className="iconHeadline">
              <img src="/iiif-logo.png" alt="IIIF Logo" />
              Manifest
            </h2>
          </section>

          <section className="resourceWrapper">
            <ManifestLegend resource={resource} />
            <div className={`vizWrapper`}>
              <span className="vizLabel">{resource.type}</span>
              <IIIFStructureMetadata resource={resource} />
              <IIIFStructureSummary resource={resource} />
              <IIIFStructureThumbnail resource={resource} />
              <IIIFStructureHomepage resource={resource} />
              <IIIFStructureSeeAlso resource={resource} />
              <Items items={resource.items} />
              <Structures structures={resource.structures} />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
