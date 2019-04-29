import axios from 'axios'
import {stringify} from 'qs'

axios.defaults.baseURL = 'http://localhost:3000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export function request(url, options) {
  return axios({url, ...options})
    .then(checkStatus)
    .then(({data}) => (data))
    .catch(err => ({err}))
}

export function get(url, {params={}, ...res}={}) {
  return axios({
    method:'get',
    url:`${url}?${stringify(params)}`,
    responseType:'json',
    ...res
  })
    .then(checkStatus)
    .then(({data}) => (data))
    .catch(err => ({err}))
}

export function post(url, {data={}, ...res}={}) {
  return axios({
    url,
    method:'post',
    data,
    ...res
  })
    .then(checkStatus)
    .then(({data}) => (data))
    .catch(err => ({err}))
}

export function put(url, {...res}={}) {
  return fetch(url, {
    method: 'put',
    ...res
  })
    .then(checkStatus)
    .then(({data}) => (data))
    .catch(err => ({err}))
}