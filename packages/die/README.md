# Die

Just like PHP's `DIE('REASON')`, Simple function while doing functional dev

## Usage

```js
import DIE from '@snomiao/die'
const token = process.env.TOKEN ?? DIE("Missing Token")

console.log(token)

```

## Impl

```ts
export function DIE(reason?: string | Error): never {
    if (typeof reason === "string") {
        const err = new Error(reason);
        throw err.stack;
    }
    throw reason;
}
```