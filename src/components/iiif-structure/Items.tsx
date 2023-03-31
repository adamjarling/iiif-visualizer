import { Annotation, AnnotationPage, Canvas } from "@iiif/presentation-3";

import AnnotationComponent from "./Annotation";
import CanvasComponent from "./Canvas";
import React from "react";
import classes from "./Items.module.css";

const { annotationBg, annotationPageBg, canvasBg, grid } = classes;

interface ItemsProps {
  items: Canvas[] | AnnotationPage[] | Annotation[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  if (items.length === 0) return null;

  switch (items[0].type) {
    case "Canvas":
      return (
        <ul>
          {items?.map((item, i) => (
            <li key={item.id} className={`vizWrapper ${canvasBg}`}>
              <span className="vizLabel">
                {item.type} ({`${i + 1} of ${items.length}`})
              </span>
              <CanvasComponent canvas={item as Canvas} />
            </li>
          ))}
        </ul>
      );
    case "AnnotationPage":
      let annotationPages = items as AnnotationPage[];
      return (
        <ul className={`vizWrapper ${annotationPageBg}`}>
          {annotationPages?.map((annotationPage) => (
            <li key={annotationPage.id}>
              <span className="vizLabel">{annotationPage.type}</span>
              {annotationPage.items && <Items items={annotationPage.items} />}
            </li>
          ))}
        </ul>
      );
    case "Annotation":
      const annotations = items as Annotation[];
      return (
        <ul className={`${grid} `}>
          {annotations?.map((annotation) => (
            <li key={annotation.id} className={`vizWrapper ${annotationBg}`}>
              <span className="vizLabel">
                {annotation.type} | <i>motivation="{annotation.motivation}"</i>
              </span>
              <AnnotationComponent annotation={annotation} />
            </li>
          ))}
        </ul>
      );
    default:
      return <></>;
  }
};

export default Items;
