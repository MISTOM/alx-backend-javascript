import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p = uploadPhoto();
  const u = createUser();

  Promise.all([p, u]).then((res) => {
    console.log(res[0].body, res[1].firstName, res[1].lastName);
  }).catch(() => new Error('Signup system offline'));
}
