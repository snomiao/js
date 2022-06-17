# sno-mongo-ku

Simplify the use of mongodb with typescript, Without db.collection("your collection").findOne()

## Usage

```typescript
const db = await snoMongoKu(mongo_connect_url);

await db.myAnyCollection.findOne({ a: 1 }); // Magic!
// it is just same as
// await mongoClient.db(...).collection("your collection").findOne()

await db.myAnyCollection.upsertMany(
  [
    { email: "snomiao@gmail.com", name: "snomiao" },
    { email: "example@example.com", name: "example" },
  ],
  { email: 1 },
); // Upsert many with index!

await db.myAnyCollection.upsertMany([
  { _id: "n9MidAL5SGhpm1jf", email: "snomiao@gmail.com", name: "snomiao" },
  { _id: "n9MidAL5SGhpm1jf", email: "example@example.com", name: "example" },
]); // Upsert many with _id.
```

## About

### License

GPLv3 - [The GNU General Public License v3.0 - GNU Project - Free Software Foundation](https://www.gnu.org/licenses/gpl-3.0.en.html)

### Author

Author: snomiao <snomiao@gmail.com>
Website: [snomiao.com](https://snomiao.com)

### Sponsors

- None yet.

Claim your sponsorship by donating snomiao <[Email: snomiao@gmail.com](mailto:snomiao@gmail.com)>

### Contribute

The main repo is in [here](https://github.com/snomiao/js#readme), any issue and PR's welcome.
