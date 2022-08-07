const cookieParser = (cookieKey) => {
  if (document.cookie === '') {
    return null;
  } else {
    const cookies = document.cookie
      .split(';')
      .map(v => v.split('='))
      .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      }, {});
    return JSON.parse(cookies[cookieKey]);
  }
}

export default cookieParser;