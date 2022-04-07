/**
 *
 * @param {Promise} chinaDownload
 * @param {Promise} USDownload
 * @returns Value returned by the promise that resolved the first
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((result) => result);
}
