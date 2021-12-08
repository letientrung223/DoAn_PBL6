import { API_URL } from './config'
export const SERVER_ADDRESS = API_URL;

const getParam = (method, data, headers) => {
  return {
    method: method,
    headers,
    body: JSON.stringify(data),
  };
};

export const request = async (
  endpoint,
  method,
  body,
  upload = false,
  onProgress,
  controller,
) => {
  let token = await AUTH_STORAGE.GET_TOKEN();
  let api = SERVER_ADDRESS + endpoint;
  let headers = {};

  if (token) {
    headers = { ...headers, Authorization: `${token}` };
  }

  if (upload) {
    let response = await futch(
      api,
      {
        method,
        headers: {
          Authorization: token,
        },
        body: body,
      },
      onProgress,
    );
    return handleError(JSON.parse(response._response), endpoint);
  }

  headers = {
    ...headers,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return fetch(api, {
    ...getParam(method, body, headers),
    signal: controller && controller.signal,
  })
    .then(res => {
      try {
        return res.json();
      } catch (e) {
        throw e;
      }
    })
    .then(data => {
      return handleError(data, endpoint);
    });
};

const futch = (url, opts = {}, onProgress) => {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open(opts.method || 'get', url);
    for (let k in opts.headers || {}) {
      xhr.setRequestHeader(k, opts.headers[k]);
    }
    xhr.onload = e => res(e.target);
    xhr.onerror = rej;
    if (xhr.upload && onProgress) {
      xhr.upload.onprogress = onProgress;
    } // event.loaded / event.total * 100 ; //event.lengthComputable
    xhr.send(opts.body);
  });
};

const handleError = (response, endpoint) => {
  if (check_response_message(response.message)) {
    return response;
  }

  if (!response.error && response.message === 'success') {
    return response;
  } else {
    throw new Error(response.message);
  }
};
