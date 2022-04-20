// export default
// What is array of json(aoj)

// array of json
const aoj = [{ a: 1, b: 4 }, { a: 2, b: 5, c: 6 }, { a: 3 }];

// json of array
const joa = {
  a: [1, 2, 3],
  b: [4, 5],
  c: [undefined, 6],
};

// export function 列表的表列( aoj: Record<any, any>[]){
//     const obj = {}

//     aoj.map(j=>{

//     })
//     // Object.fromEntries(aoj)([k, v])
// };
export function joa2aoj(joa: Record<PropertyKey, any[]>) {
  const aoj = [];
  Object.entries(joa).map(([键, 列]) => {
    列.map?.((v, i) => {
      aoj[i] = Object.assign(aoj[i] || {}, {});
    });
  });
  return aoj
}
joa2aoj(joa).map(e=>e)