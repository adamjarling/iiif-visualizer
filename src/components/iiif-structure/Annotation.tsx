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
    return (
      <li className={classes.card}>
        <img src={id} alt={`IIIF annotation painting on canvas`} />
        <ul className={classes.annotationMetadata}>
          <li>{format}</li>
          <li>{`${width} x ${height}`}</li>
          {service && <li>{service[0].type}</li>}
        </ul>
      </li>
    );
  }

  if (type === "Video") {
    return <video src={id} />;
  }

  return null;
};

export default Annotation;
