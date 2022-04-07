import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} fileName
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((vals) => {
    const resArr = [];
    vals.forEach((val) => {
      if (val.status === 'fulfilled') {
        resArr.push({ status: val.status, value: val.value });
      } else {
        resArr.push({ status: val.status, value: `Error: ${val.reason.message}` });
      }
    });
    return resArr;
  });
}
