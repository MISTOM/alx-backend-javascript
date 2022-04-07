/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {Promise}
 */
export default function signUpUser(firstName, lastName) {
  // eslint-disable-next-line new-cap
  return new Promise.resolve({ firstName, lastName });
}
