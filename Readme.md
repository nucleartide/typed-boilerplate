# typed-boilerplate

This is a simple React / Redux boilerplate that emphasizes static type checking with [Flow](https://flow.org/). It is based heavily on the [todos-flow](https://github.com/reactjs/redux/tree/721a5fab87071b336a2106a28a9165da3e630175/examples/todos-flow) example in the Redux repo, but has some modifications for using Flow more effectively:

- We ignore the `node_modules` directory in favor of `flow-typed` definitions.
- Reducers use algebraic data types and perform [exhaustiveness checking](https://github.com/nucleartide/typed-boilerplate/blob/1b9c5ac3b748ec15f8377f8b7f8071afa413c530/src/reducers/index.js).
- We enable `all=true` in `.flowconfig`, so you don't have to annotate your files with `// @flow`.
- We use Parcel.

## Use

Clone the repo, `npm install`, and hack away!

You might also want to ensure that your editor has properly configured Flow integration.

## Example

See the example todo app at the [`todo`](https://github.com/nucleartide/typed-boilerplate/tree/1b9c5ac3b748ec15f8377f8b7f8071afa413c530) tag.
