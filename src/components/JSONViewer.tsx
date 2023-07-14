import Highlight, { defaultProps } from "prism-react-renderer";
import { useRef, useState } from "react";

import { Manifest } from "@iiif/presentation-3";
import palenight from "prism-react-renderer/themes/palenight";

interface JSONViewerProps {
  resource: Manifest;
}

const JSONViewer: React.FC<JSONViewerProps> = ({ resource }) => {
  const myRef = useRef<HTMLDetailsElement>(null);
  const [summaryText, setSummaryText] = useState<string>("Hide code");

  const handleClick = () => {
    setTimeout(() => {
      setSummaryText(
        myRef.current?.hasAttribute("open") ? "Hide code" : "Show code"
      );
    }, 0);
  };

  return (
    <>
      <details open ref={myRef}>
        <summary onClick={handleClick}>{summaryText}</summary>
        <Highlight
          {...defaultProps}
          code={JSON.stringify(resource, null, 2)}
          language="javascript"
          theme={palenight}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{ ...style, background: "var(--black)" }}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </details>
    </>
  );
};

export default JSONViewer;
