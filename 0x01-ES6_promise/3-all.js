import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const utilsInfo = [uploadPhoto(), createUser()];
  const promise = Promise.all(utilsInfo);
  return promise
    .then((utilsInfo) => console.log(`${utilsInfo[0].body}, ${utilsInfo[1].firstName}, ${utilsInfo[1].lastName}`))
    .catch(() => console.log('Signup system offline '));
}
