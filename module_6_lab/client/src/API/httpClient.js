const ajax = (method, url, args, auth_token) => (
  new Promise((resolve, reject) => {
    const client = new XMLHttpRequest();
    let uri = url;
    let params;
    // TRIBUTE: https://plainjs.com/javascript/ajax/send-ajax-get-and-post-requests-47/
    if (method === 'POST' || method === 'PUT') {
      params = typeof args == 'string' ? args : Object.keys(args).map(
        (k) => (encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
      ).join('&');
    }
    client.open(method, uri);
    if (method === 'POST' || method === 'PUT') {
      client.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      client.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    if (auth_token) {
      client.setRequestHeader('Authorization', `Bearer ${auth_token}`);
    }
    client.onload = (event) => {
      if(event.target.status === 200){
        const result = JSON.parse(event.target.response);
        resolve(result);
      }else{
        resolve(event.target.responseText);
      }
    };
    client.onerror = (event) => {
      const result = JSON.parse(event.target.responseText);
      reject(result);
    };
    if (method === 'POST' || method === 'PUT') {
      client.send(params);
    } else {
      client.send();
    }
  })
);

export const httpClient = {
  'get': (url, args, auth_token) => ajax('GET', url, args, auth_token),
  'post': (url, args, auth_token) => ajax('POST', url, args, auth_token),
  'put': (url, args, auth_token) => ajax('PUT', url, args, auth_token),
};