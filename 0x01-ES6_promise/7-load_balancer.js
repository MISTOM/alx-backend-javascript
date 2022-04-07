/**
 *
 * @param {Promise} chinaDownload
 * @param {Promise} USDownload
 * @returns Value returned by the promise that resolved the first
 */
export default function loadBalancer(chinaDownload, USDownload) {
  const ch = chinaDownload();
  const us = USDownload();

  return Promise.race([ch, us]).then((result) => result);
}
