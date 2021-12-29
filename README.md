<h1 align="center">Vecti</h1>


<p align="center">
    A tiny TypeScript library for 2D vector math.
</p>

<p align="center">
  <a href="https://github.com/DerYeger/vecti/actions/workflows/ci.yml">
    <img alt="CI" src="https://img.shields.io/github/workflow/status/DerYeger/vecti/CI?label=ci&logo=github&color=#4DC71F">
  </a>
  <a href="https://www.npmjs.com/package/vecti">
    <img alt="NPM" src="https://img.shields.io/npm/v/vecti?logo=npm">
  </a>
  <a href="https://codecov.io/gh/DerYeger/vecti">
    <img alt="Coverage" src="https://codecov.io/gh/DerYeger/vecti/branch/master/graph/badge.svg?token=p35W6u2noe">
  </a>
  <a href="https://lgtm.com/projects/g/DerYeger/vecti">
    <img alt="LGTM Grade" src="https://img.shields.io/lgtm/grade/javascript/github/DerYeger/vecti?logo=lgtm">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="MIT" src="https://img.shields.io/npm/l/vecti?color=%234DC71F">
  </a>
  <a href="https://bundlephobia.com/package/vecti">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/vecti">
  </a>
</p>

## Features

- 🧮 Addition, subtraction, multiplication and division
- ✨ Dot & cross product
- 📏 Length & normalization
- 📐 Rotation by radians and degrees
- 🪨 Immutable data structure encourages chaining
- 💾 Tiny and typed

## Installation

```bash
# yarn
$ yarn add vecti

# npm
$ npm install vecti
```

## Usage

```typescript
import { Vector } from 'vecti'

const vector = new Vector(-5, 0)
  .normalize()
  .rotateByDegrees(180)
  .add(Vector.of([0, 1]))
  .multiply(42)
console.log(vector.x) // 42
console.log(vector.y) // 42
```

## Development

```bash
# install dependencies
$ yarn install

# build for production
$ yarn build

# lint project files
$ yarn lint

# run tests
$ yarn test
```

## License

[MIT](./LICENSE) - Copyright &copy; Jan Müller
