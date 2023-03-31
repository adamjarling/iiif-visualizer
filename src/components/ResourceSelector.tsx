import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";
import classes from "./ResourceSelector.module.css";

interface ResourceSelectorProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const resources = [
  {
    label: "Simple 1 image",
    url: "https://iiif.io/api/cookbook/recipe/0001-mvm-image/manifest.json",
  },
  {
    label: "A book",
    url: "https://iiif.io/api/cookbook/recipe/0009-book-1/manifest.json",
  },
  {
    label: "Fava masks",
    url: "https://api.dc.library.northwestern.edu/api/v2/works/f912a581-d9e8-43d6-a7c8-a8d46eff7517?as=iiif",
  },
  {
    label: "Local mixed",
    url: "__fixtures__/manifest1.json",
  },
  {
    label: "Newspaper",
    url: "https://iiif.io/api/cookbook/recipe/0068-newspaper/newspaper_title-collection.json",
  },
  {
    label: "Structures and Ranges",
    url: "https://iiif.io/api/cookbook/recipe/0024-book-4-toc/manifest.json",
  },
];

const ResourceSelector: React.FC<ResourceSelectorProps> = ({
  handleSubmit,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleResourceClick(url: string) {
    inputRef.current!.value = url;
  }

  return (
    <div className={classes.wrapper}>
      <form name="iiif-resource" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          name="url"
          placeholder="Manifest url"
        />
        <button>
          <ArrowRightIcon />
        </button>
      </form>

      <ul className={classes.resourceList}>
        {resources.map((resource) => (
          <li key={resource.url}>
            <button onClick={() => handleResourceClick(resource.url)}>
              {resource.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceSelector;
