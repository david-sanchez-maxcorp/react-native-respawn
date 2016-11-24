import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param {Object} response - A response from a network requests
 *
 * @returns {Object} The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {Object} response - A response from a network request
 *
 * @return {Object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url - The URL we want to request
 * @param  {Object} [options] - The options we want to pass to "fetch"
 *
 * @return {Object} The response data
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
