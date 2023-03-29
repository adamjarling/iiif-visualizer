import {
  Annotation,
  AnnotationBody,
  AnnotationPage,
  Canvas,
} from "@iiif/presentation-3";

import React from "react";
import classes from "./itemsGrid.module.css";

const { card, grid } = classes;

interface ItemsGridProps {
  annotationPages?: AnnotationPage[];
}

type Body = AnnotationBody & { id: string; type: string };

const ItemsGrid: React.FC<ItemsGridProps> = ({ annotationPages = [] }) => {
  if (annotationPages.length === 0) return null;

  return (
    <ul className={grid}>
      {annotationPages.map((annotationPage) => {
        const { items } = annotationPage;
        if (!items) return null;

        return items.map((item) => {
          const { body } = item;
          if (!body) return null;

          const { id, type } = body as Body;
          if (!id || !type) return null;

          if (type === "Image") {
            return (
              <li className={card}>
                <img src={id} />
              </li>
            );
          }

          if (type === "Video") {
            return <video src={id} />;
          }

          return null;
        });
      })}
    </ul>
  );
};

export default ItemsGrid;
