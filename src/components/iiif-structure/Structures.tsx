import { Manifest, Range } from "@iiif/presentation-3";

import Items from "./structural/Items";
import { Label } from "@samvera/nectar-iiif";
import React from "react";

interface StructuresProps {
  structures: Manifest["structures"];
}

const Structures: React.FC<StructuresProps> = ({ structures }) => {
  return (
    <>
      <details>
        <summary>Structures</summary>
        <ul className="vizWrapperPadded">
          {structures?.map((structure) => (
            <li key={structure.id} className="">
              <details>
                <summary>
                  {structure.type} [<small>{structure.id}]</small>
                </summary>
                <div className="vizWrapperPadded">
                  <Label label={structure.label} as="h3" />
                  {structure?.items && structure?.items?.length > 0 && (
                    <Items items={structure.items} />
                  )}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
};

export default Structures;
