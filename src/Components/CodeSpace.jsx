import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "../Styles/Components/CodeSpace.css"
const CodeSpace = ({ language, code }) => {
  return (
    <div className="codeSpace-container">
    <SyntaxHighlighter language={language} style={darcula} >
      {code}
    </SyntaxHighlighter>
    </div>
  );
}

export default CodeSpace;
