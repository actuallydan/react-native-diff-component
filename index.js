import PropTypes from "prop-types";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { diffChars, diffWords, diffSentences } from "diff";

const fnMap = {
  chars: diffChars,
  words: diffWords,
  sentences: diffSentences,
};

export default function Diff({
  inputA = "",
  inputB = "",
  type = "chars",
  textStyle = {},
  addedText = {},
  removedText = {},
  unchangedText = {},
  containerStyle = {},
}) {
  var diff = fnMap[type](inputA, inputB);
  var result = diff.map(function (part, index) {
    var spanStyle = part.added
      ? { ...styles.addedText, ...addedText }
      : part.removed
      ? { ...styles.removedText, ...removedText }
      : { ...styles.defaultText, ...unchangedText };

    return (
      <Text key={index} style={[styles.defaultText, spanStyle, textStyle]}>
        {part.value}
      </Text>
    );
  });
  return (
    <View style={[styles.defaultContainerStyle, containerStyle]}>{result}</View>
  );
}

Diff.propTypes = {
  inputA: PropTypes.oneOfType([PropTypes.string]),
  inputB: PropTypes.oneOfType([PropTypes.string]),
  type: PropTypes.oneOf(["chars", "words", "sentences"]),
  textStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  addedText: PropTypes.object,
  removedText: PropTypes.object,
  unchangedText: PropTypes.object,
};

var styles = StyleSheet.create({
  defaultText: {},
  addedText: {
    backgroundColor: "lightgreen",
    color: "#000000",
  },
  removedText: {
    backgroundColor: "salmon",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#000000",
  },
  defaultContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
});
