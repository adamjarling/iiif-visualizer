import "./App.css";

import IIIFStructureHomepage from "./components/iiif-structure/linking/Homepage";
import IIIFStructureMetadata from "./components/iiif-structure/descriptive/Metadata";
import IIIFStructureSeeAlso from "./components/iiif-structure/linking/SeeAlso";
import IIIFStructureSummary from "./components/iiif-structure/descriptive/Summary";
import IIIFStructureThumbnail from "./components/iiif-structure/descriptive/Thumbnail";
import IIIFStructureWrapper from "./components/iiif-structure/Wrapper";
import Items from "./components/iiif-structure/Items";
import JSONViewer from "./components/JSONViewer";
import ManifestLegend from "./components/iiif-structure/ManifestLegend";
import Nav from "./components/Nav";
import ResourceSelector from "./components/ResourceSelector";
import Structures from "./components/iiif-structure/Structures";
import { fetch } from "@iiif/vault-helpers/fetch";
import { useState } from "react";

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
      <Nav />
      <ResourceSelector handleSubmit={handleSubmit} />

      {resource && (
        <>
          <section className="container">
            <h2>JSON</h2>
            <JSONViewer resource={resource} />
          </section>

          <section className="container">
            <IIIFStructureWrapper resource={resource} />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
