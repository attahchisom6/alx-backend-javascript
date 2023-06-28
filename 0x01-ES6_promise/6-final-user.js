import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  const promises = [signUpUser(firstname, lastname), uploadPhoto(filename)];
  return Promise.allSettled(promises)
    .then((values) => {
      const result = [];
      values.forEach((value) => {
        result.push({
          status: value.status,
          value: value.status === 'fulfilled' ? value.value : String(value.reason),
        });
      });
      return result;
    });
}
