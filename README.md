# mybot-ui

> Fully Customizable Ui Library for Chats and ChatBots,

[![NPM](https://img.shields.io/badge/my--botui-my--botui-blue.svg)](https://www.npmjs.com/package/my-botui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save my-botui
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'mybot-ui'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Contribute

1.) Install all the dependencies.
```bash
yarn
```
### Storybook
```bash
yarn start:story
```

### External Project
2.) Inside `my-botui` 
```bash
yarn link
```
3.) Inside your project 
```bash
yarn link my-botui
```
4.) 
```bash
yarn start:watch
```

## License

ISC © [Prafull Singh](https://github.com/Prafull37)
