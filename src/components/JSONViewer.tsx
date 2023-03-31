import Highlight, { defaultProps } from "prism-react-renderer";

import { Manifest } from "@iiif/presentation-3";
import palenight from "prism-react-renderer/themes/palenight";

interface JSONViewerProps {
  resource: Manifest;
}

const JSONViewer: React.FC<JSONViewerProps> = ({ resource }) => {
  return (
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
  );
};

export default JSONViewer;
