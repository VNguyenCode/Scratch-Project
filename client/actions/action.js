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

export const addURLNow = (url) => {
  fetch('http://localhost:3000/main/addURL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(url),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // const urlObj = {
      //   url,
      //   status: data.status,
      //   url_Id: data.url_Id,
      // };
    })
    .then(() => this.props.dispatchCheckStatus(statusObj))
    .catch((err) => {
      console.error(err.messsage);
    });
};
