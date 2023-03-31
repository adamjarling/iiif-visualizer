import "./App.css";

import Highlight, { defaultProps } from "prism-react-renderer";
import { useEffect, useState } from "react";

import IIIFStructureHomepage from "./components/iiif-structure/linking/Homepage";
import IIIFStructureMetadata from "./components/iiif-structure/descriptive/Metadata";
import IIIFStructureSeeAlso from "./components/iiif-structure/linking/SeeAlso";
import IIIFStructureSummary from "./components/iiif-structure/descriptive/Summary";
import IIIFStructureThumbnail from "./components/iiif-structure/descriptive/Thumbnail";
import Items from "./components/iiif-structure/Items";
import ManifestSummary from "./components/ManifestSummary";
import ResourceSelector from "./components/ResourceSelector";
import { fetch } from "@iiif/vault-helpers/fetch";
import palenight from "prism-react-renderer/themes/palenight";

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
            <Highlight
              {...defaultProps}
              code={JSON.stringify(resource, null, 2)}
              language="javascript"
              theme={palenight}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={className}
                  style={{ ...style, background: "var(--black)" }}
                >
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </section>

          <section>
            <h2 className="iconHeadline">
              <img src="/iiif-logo.png" alt="IIIF Logo" />
              Manifest
            </h2>
            <ManifestSummary resource={resource} />
          </section>

          <section className="resourceWrapper">
            <div className={`vizWrapper`}>
              <span className="vizLabel">{resource.type}</span>
              <IIIFStructureMetadata resource={resource} />
              <IIIFStructureSummary resource={resource} />
              <IIIFStructureThumbnail resource={resource} />
              <IIIFStructureHomepage resource={resource} />
              <IIIFStructureSeeAlso resource={resource} />
              <Items items={resource.items} />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
