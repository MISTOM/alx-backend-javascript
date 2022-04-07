import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p = uploadPhoto();
  const u = createUser();

  return Promise.all([p, u]).then((data) => {
    console.log(data[0].body, data[1].firstName, data[1].lastName);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
