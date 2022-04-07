const res = { status: 200, body: 'Success' };
/**
 *
 * @param {promise} promise
 */
export default function handleResponseFromAPI(promise) {
  promise.then(() => res)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
