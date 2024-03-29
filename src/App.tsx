import "./App.scss";

import IIIFStructureWrapper from "./components/iiif-structure/Wrapper";
import JSONViewer from "./components/JSONViewer";
import Nav from "./components/Nav";
import ResourceSelector from "./components/ResourceSelector";
import { fetch } from "@iiif/vault-helpers/fetch";
import { useState } from "react";

function App() {
  const [resource, setResource] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = e.currentTarget.url.value;
    if (!url) return;

    fetch(url)
      .then((response) => response)
      .then((data) => {
        setError(null);
        setResource(data);
      })
      .catch((error) => {
        console.error(error);
        setResource(null);
        setError(error as Error);
      });
  };

  return (
    <div className="App">
      <Nav />
      <ResourceSelector handleSubmit={handleSubmit} />

      {error && <p style={{ textAlign: "center" }}>Error: {error.message}</p>}

      {resource && (
        <>
          <section className="container">
            <hgroup>
              <h2>JSON</h2>
              <h3>* converted to presentation v3</h3>
            </hgroup>
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
