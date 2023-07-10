import { Manifest } from "@iiif/presentation-3";
import React from "react";
import classes from "./ManifestLegend.module.css";

const { legend, wrapper } = classes;

interface ManifestSummaryProps {
  resource: Manifest;
}

const legendItems = [
  {
    label: "Descriptive",
    data: "descriptive",
  },
  {
    label: "Structural",
    data: "structural",
  },
  {
    label: "Linking",
    data: "linking",
  },
];

const ManifestLegend: React.FC<ManifestSummaryProps> = ({ resource }) => {
  return (
    <div className={wrapper}>
      <ul className={legend}>
        {legendItems.map(({ label, data }) => (
          <li key={data}>
            <span
              {...{
                [`data-${data}`]: data,
              }}
            />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManifestLegend;
