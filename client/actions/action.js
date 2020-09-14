
export const ADD_URL = 'ADD CARD';
export const CHECK_NOW = 'CHECK_NOW';

export const addURL = (urlObj) => ({
  type: ADD_URL,
  payload: urlObj,
});

export const checkNow = (statusObj) => ({
  type: CHECK_NOW,
  payload: statusObj,
});

export const postToDo = (url) => {
  console.log('I fired');
  fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(url),
  })
    .then((res) => res.json())
    .then((data) => {
      const urlObj = {
        url,
        status: data.status,
        url_Id: data.url_Id,
      };
    })
    .then(() => this.props.dispatchCheckStatus(statusObj))
    .catch((err) => {
      console.error(err.messsage);
    });
};
