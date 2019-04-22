# react-diff

This is a React Native implementation of [react-diff-simple-component](https://github.com/actuallydan/react-diff-simple-component) which was inspired by and updated from [react-diff](https://github.com/cezary/react-diff).

Highlights differences between two strings, uses the [diff](https://www.npmjs.com/package/diff) module

## Installation

```
npm install react-native-diff-component
```

## Demo

http://cezary.github.io/react-diff/

## Example

```javascript
import React from "react";
import Diff from "react-native-diff-component";

const MyComponent = () => {
  return <Diff inputA="gogol" inputB="google" type="chars" />;
};
```

## License

MIT
