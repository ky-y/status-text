# @ky-y./status-text

## Install

```zsh
$ npm install @ky-y./status-text
$ yarn add @ky-y./status-text
```

- Not `@ky-y/status-text` But `@ky-y./status-text`.
- Support TypeScript

## Usage

```typescript
import { HTTP200, HTTP405 } from "@ky-y./status-text";

console.log(HTTP200); // => "OK"
console.log(HTTP405); // => "Method Not Allowed"



import { statusText } from "@ky-y./status-text";

console.log(statusText(200)); // => "OK"
console.log(statusText(405)); // => "Method Not Allowed"
console.log(statusText(999)); // => "Unknown Status"
```

## License

MIT License

## Acknowledgment

- [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231)

## Links

- [ky-y.](https://ky-y.dev/)
- [@ky-y./status-text @ npm](https://www.npmjs.com/package/@ky-y./status-text)