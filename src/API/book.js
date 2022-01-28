const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const getBooksAPI = async () => {
  const data = await fetch(`${baseURL}/apps/3xKGPN8wvt2l4bzR1CtY/books`)
    .then((responce) => responce.json());
  return data;
};

export const addBookAPI = async (book) => {
  const response = await fetch(`${baseURL}/apps/3xKGPN8wvt2l4bzR1CtY/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });

  const data = await response.text();
  return data;
};
