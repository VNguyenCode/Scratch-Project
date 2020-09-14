import * as types from "../actions/action";

const initialState = {
  urlList: [
    { username: "Joon", url: "www.google.com", status: 200, url_Id: 75 },
    { username: "Lucy", url: "www.yahoo.com", status: 400, url_Id: 80 },
    { username: "Chris", url: "www.coinbase.com", status: 400, url_Id: 81 },
    { username: "Joon", url: "www.facebook.com", status: 400, url_Id: 90 },
  ],
  newEndpoint: "",
  status: "",
  currentUser: "Joon the goon",
  // graphData(maybe time/)
};

const outputReducer = (state = initialState, action) => {
  // ensure we make it to the reducer
  // console.log('made it to the reducer');
  switch (action.type) {
    // case types.enterTypeHere:
    //...initialstate
    // urlList: [{obj1}, {obj2}],
    // newEndpoint: '',
    // status: undefined,
    case types.ADD_URL:
      // add the new response obj to urlList via payload
      // obj will contain prop of url and status as seen in InputBox.jsx
      // update the status prop
      const newURLobj = action.payload;
      let copyUrlList = state.urlList.slice();
      copyUrlList.push(newURLobj);

      const newStatus = action.payload.status;

      return {
        ...state,
        urlList: copyUrlList,
        status: newStatus,
      };

    //case check now
    //iterate through urlList, look for element where urllist[i].url = the url we're looking for, then change status to most current status, then return modified urllist
    case types.CHECK_NOW:
      const newStatusObj = action.payload;

      copyUrlList = state.urlList.slice();

      copyUrlList.forEach(function (item) {
        if (item.url_Id === newStatusObj.url_Id) {
          item.status = newStatusObj.status;
        }
      });

      return {
        ...state,
        urlList: copyUrlList,
      };

    default:
      return state;
  }
};

export default outputReducer;
