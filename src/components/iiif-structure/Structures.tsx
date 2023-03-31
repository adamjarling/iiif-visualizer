import { Manifest, Range } from "@iiif/presentation-3";

import Items from "./Items";
import { Label } from "@samvera/nectar-iiif";
import React from "react";

interface StructuresProps {
  structures: Manifest["structures"];
}

const Structures: React.FC<StructuresProps> = ({ structures }) => {
  return (
    <ul>
      {structures?.map((structure) => (
        <li key={structure.id} className="vizWrapper">
          <span className="vizLabel">{structure.type}</span>
          <Label label={structure.label} as="h3" />
          {structure?.items && structure?.items?.length > 0 && (
            <Items items={structure.items} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Structures;
