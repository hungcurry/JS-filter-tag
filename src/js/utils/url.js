const getParams = () => {
  const params = new URLSearchParams(window.location.search);
  return params;
};

const queryParse = (query) => {
  const { search } = window.location; // tag=frontEnd
  const [queryKey, queryValue] = query.split("=");
  // console.log("queryValue", queryValue);

  // 目前網址沒有 query
  if (search === "") {
    return `?${query}`;
  }

  // 目前有重複的參數 指改變value的部分
  if (window.location.search.includes(queryKey)) {
    const params = getParams().get(queryKey);
    if (params) {
      return window.location.search.replace(`${queryKey}=${params}`, query);
    }
    // 處理 params 為 null 或空的情況
    return `${window.location.search}&${query}`;
  }

  // 目前網址有其他的參數,把新的參數加上去
  return `${window.location.search}&${query}`;
};

const parseFindNewQuery = (params, fist) => {
  const { search } = window.location;
  const symbol = search[fist - 1] 
  const query = getParams().get(params);

  console.log("search", search); // ?tag=backEnd&child=javascript
  console.log("params", params); // child
  console.log("fist", fist); // 13
  console.log("symbol", symbol); // &
  console.log("query", query);  //  javascript

  let newQuery = "";
  if (symbol === "&") {
    newQuery = search.replace(`${symbol}${params}=${query}`, "");
    console.log("newQuery", newQuery);
  }
  // 發生狀況 
  // ?child=javascript&tag=backEnd
  // 或 ?child=javascript
  if (symbol === "?") {
    const str = search.includes("&") ? `${params}=${query}&` : `?${params}=${query}`;
    newQuery = search.replace(str, "");
  }
  return newQuery;
};

// 添加 query 參數 push
const routerQueryPush = (params) => {
  const { pathname } = window.location;
  const query = queryParse(params);
  window.history.pushState({}, "", `${pathname}${query}`);
};

// 添加 query 參數 replace
const routerQueryReplace = (params) => {
  const { pathname } = window.location; // 取得當前路徑 /
  const query = queryParse(params);
  window.history.replaceState({}, "", `${pathname}${query}`);
};

// 刪除 query 參數 push
const routerQueryRemove = (params) => {
  const { search } = window.location;
  const { pathname } = window.location;
  const first = search.indexOf(params);
  const symbol = search[first - 1] 

  if (["?", "&"].includes(symbol)) {
    const newQuery = parseFindNewQuery(params, first);
    window.history.pushState({}, "", `${pathname}${newQuery}`);
  }
};

// 刪除 query 參數 replace
const routerQueryReplaceRemove = (params) => {
  const { search } = window.location;
  const { pathname } = window.location;
  const first = search.indexOf(params);
  const symbol = search[first - 1]

  if (["?", "&"].includes(symbol)) {
    const newQuery = parseFindNewQuery(params, first);
    window.history.replaceState({}, "", `${pathname}${newQuery}`);
  }
};

export { 
  routerQueryPush, 
  routerQueryReplace, 
  routerQueryRemove, 
  routerQueryReplaceRemove, 
  getParams  
};
