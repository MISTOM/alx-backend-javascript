/**
 *
 * @param {promise} promise
 */
export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'success' };
  return promise
    .then(() => res)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}

// export default async function handleResponseFromAPI(promise) {
//   const res = { status: 200, body: 'success' };
//   try {
//     try {
//       await promise;
//       return res;
//     } catch {
//       return new Error();
//     }
//   } finally {
//     return console.log('Got a response from the API');
//   }
// }
