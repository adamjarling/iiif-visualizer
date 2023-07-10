import "./App.css";

import IIIFStructureWrapper from "./components/iiif-structure/Wrapper";
import JSONViewer from "./components/JSONViewer";
import Nav from "./components/Nav";
import ResourceSelector from "./components/ResourceSelector";
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
      })
      .catch((error) => {
        console.error(error);
        setResource(null);
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
