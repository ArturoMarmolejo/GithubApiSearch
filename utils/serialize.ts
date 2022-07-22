const serialize = (params: { [key: string]: any }) => {
  var str = [];
  for (var key in params)
    if (params.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
    }
  return str.join("&");
}

export default serialize;