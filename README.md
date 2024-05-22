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

## Acknowledgments

- [RFC 7231 - Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content](https://datatracker.ietf.org/doc/html/rfc7231)
- [RFC 2295 - Transparent Content Negotiation in HTTP](https://datatracker.ietf.org/doc/html/rfc2295)
- [RFC 3229 - Delta encoding in HTTP](https://datatracker.ietf.org/doc/html/rfc3229)
- [RFC 6585 - Additional HTTP Status Codes](https://datatracker.ietf.org/doc/html/rfc6585)
- [RFC 7725 - An HTTP Status Code to Report Legal Obstacles](https://datatracker.ietf.org/doc/html/rfc7725)
- [RFC 8470 - Using Early Data in HTTP](https://datatracker.ietf.org/doc/html/rfc8470)
- [RFC 4918 - HTTP Extensions for Web Distributed Authoring and Versioning (WebDAV)](https://datatracker.ietf.org/doc/html/rfc4918)
- [RFC 5842 - Binding Extensions to Web Distributed Authoring and Versioning (WebDAV)](https://datatracker.ietf.org/doc/html/rfc5842)


## Links

- [ky-y.](https://ky-y.dev/)
- [@ky-y./status-text @ npm](https://www.npmjs.com/package/@ky-y./status-text)