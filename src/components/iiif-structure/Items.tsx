import { Annotation, AnnotationPage, Canvas } from "@iiif/presentation-3";

import AnnotationComponent from "./Annotation";
import CanvasComponent from "./Canvas";
import React from "react";
import classes from "./Items.module.css";

const { annotationBg, annotationPageBg, canvasBg, grid } = classes;

interface ItemsProps {
  items: Canvas[] | AnnotationPage[] | Annotation[] | any[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  if (items.length === 0) return null;

  switch (items[0].type) {
    case "Canvas":
      return (
        <ul>
          {items?.map((item, i) => (
            <li key={item.id} className={`vizWrapper ${canvasBg}`}>
              <p>
                <mark className="vizLabel">
                  {item.type} ({`${i + 1} of ${items.length}`})
                </mark>
              </p>
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
              <p>
                <mark className="vizLabel">{annotationPage.type}</mark>
              </p>
              {annotationPage.items && <Items items={annotationPage.items} />}
            </li>
          ))}
        </ul>
      );
    case "Annotation":
      const annotations = items as Annotation[];
      return (
        <ul className={`grid`}>
          {annotations?.map((annotation) => (
            <li key={annotation.id} className={`vizWrapper ${annotationBg}`}>
              <p>
                <mark className="vizLabel">
                  {annotation.type} <i>motivation="{annotation.motivation}"</i>
                </mark>
              </p>
              <AnnotationComponent annotation={annotation} />
            </li>
          ))}
        </ul>
      );

    case "Range":
      return (
        <ul>
          {items?.map((item, i) => (
            <li key={item.id} className={`vizWrapper ${canvasBg}`}>
              <p>
                <mark className="vizLabel">
                  {item.type} ({`${i + 1} of ${items.length}`})
                </mark>
              </p>
              <CanvasComponent canvas={item as Canvas} />
            </li>
          ))}
        </ul>
      );
    default:
      return <></>;
  }
};

export default Items;
