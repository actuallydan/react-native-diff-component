import PropTypes from "prop-types";
import React from "react";
import jsdiff from "diff";

const fnMap = {
  chars: jsdiff.diffChars,
  words: jsdiff.diffWords,
  sentences: jsdiff.diffSentences,
  json: jsdiff.diffJson
};

export default function Diff({ inputA = "", inputB = "", type = "chars" }) {
  var diff = fnMap[type](inputA, inputB);
  var result = diff.map(function(part, index) {
    var spanStyle = {
      backgroundColor: part.added
        ? "lightgreen"
        : part.removed
        ? "salmon"
        : "lightgrey"
    };
    return (
      <span key={index} style={spanStyle}>
        {part.value}
      </span>
    );
  });
  return <pre className="diff-result">{result}</pre>;
}

Diff.propTypes = {
  inputA: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inputB: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.oneOf(["chars", "words", "sentences", "json"])
};
