import "./App.css";

import * as manifest from "./__fixtures__/manifest1.json";

import Items from "./components/iiif-structure/Items";
import { fetch } from "@iiif/vault-helpers/fetch";
import { useState } from "react";

function App() {
  const [resource, setResource] = useState<any>(manifest);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");

    // get the value of name="url" input
    const url = e.currentTarget.url.value;

    // fetch the manifest
    fetch(url)
      .then((response) => response)
      .then((data) => {
        // set the resource state
        setResource(data);
      });
  };

  return (
    <div className="App">
      <p>https://iiif.io/api/cookbook/recipe/0001-mvm-image/manifest.json</p>
      <p>https://iiif.io/api/cookbook/recipe/0009-book-1/manifest.json</p>
      <p>
        https://api.dc.library.northwestern.edu/api/v2/works/f912a581-d9e8-43d6-a7c8-a8d46eff7517?as=iiif
      </p>
      <form name="iiif-resource" onSubmit={handleSubmit}>
        <input type="text" name="url" placeholder="Manifest url" />
        <button>Get</button>
      </form>

      {resource && (
        <div>
          <pre className="code">{JSON.stringify(resource, null, 2)}</pre>
          <div className={`vizWrapper`}>
            <span className="vizLabel">{resource.type}</span>
            {/* <CanvasList items={resource.items} /> */}
            <Items items={resource.items} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
