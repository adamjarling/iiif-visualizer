import { Annotation, AnnotationPage, Canvas } from "@iiif/presentation-3";

import AnnotationComponent from "./Annotation";
import CanvasComponent from "../Canvas";
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
            <li key={item.id} className={""}>
              <details open>
                <summary>
                  {item.type} ({`${i + 1} of ${items.length}`})
                </summary>
                <div className="vizWrapperPadded">
                  <CanvasComponent canvas={item as Canvas} />
                </div>
              </details>
            </li>
          ))}
        </ul>
      );
    case "AnnotationPage":
      let annotationPages = items as AnnotationPage[];
      return (
        <ul className={``}>
          {annotationPages?.map((annotationPage) => (
            <li key={annotationPage.id}>
              <details open>
                <summary>{annotationPage.type}</summary>
                <div className="vizWrapperPadded">
                  {annotationPage.items && (
                    <Items items={annotationPage.items} />
                  )}
                </div>
              </details>
            </li>
          ))}
        </ul>
      );
    case "Annotation":
      const annotations = items as Annotation[];
      return (
        <ul className={`grid`}>
          {annotations?.map((annotation) => (
            <li key={annotation.id} className={``}>
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
