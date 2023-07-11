import { Annotation as AnnotationType, Body } from "@iiif/presentation-3";

import React from "react";
import classes from "./Items.module.css";

interface AnnotationProps {
  annotation: AnnotationType;
}

const Annotation: React.FC<AnnotationProps> = ({ annotation }) => {
  const { body } = annotation;
  if (!body) return null;

  // @ts-ignore
  const { id, type, format, width, height, service } =
    body as AnnotationType["body"];
  if (!id || !type) return null;

  if (type === "Image") {
    const serviceType = service?.[0]?.type || service?.[0]?.["@type"];
    return (
      <details open>
        <summary>Annotation</summary>
        <div className="">
          <img src={id} alt={`IIIF annotation painting on canvas`} />
          <dl>
            <dt>Motivation</dt>
            <dd>{annotation.motivation}</dd>
          </dl>
          <ul className={classes.annotationMetadata}>
            <li>
              <small>{format}</small>
            </li>
            <li>
              <small>{`${width} x ${height}`}</small>
            </li>
            {serviceType && (
              <li>
                <small>{serviceType}</small>
              </li>
            )}
          </ul>
        </div>
      </details>
    );
  }

  if (type === "Video") {
    return <video src={id} />;
  }

  return null;
};

export default Annotation;
