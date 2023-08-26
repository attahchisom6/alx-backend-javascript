async function getPaymentTokenFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    const info =  { data: 'Successful response from the API' };

    if (!success) {
      return;
    }
    resolve(info);
  });
  return promise;
};

module.exports = getPaymentTokenFromAPI;
