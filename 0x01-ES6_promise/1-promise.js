export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-unused-expressions
    success
      ? resolve(
        {
          status: 200,
          body: 'success',
        },
      )
      : reject(new Error('The fake API is not working currently'));
  });
}
