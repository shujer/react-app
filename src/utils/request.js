import axios from 'axios'
import { stringify } from 'qs'

axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
/**
 * 超时请求方案：https://github.com/axios/axios/issues/164#issuecomment-327837467
 */
axios.defaults.timeout = 4000
axios.defaults.retry = 1
axios.defaults.retryDelay = 1500
axios.interceptors.response.use(undefined, function axiosRetryInterceptor (err) {
  var config = err.config
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err)
  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0
  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err)
  }
  // Increase the retry count
  config.__retryCount += 1
  // Create new promise to handle exponential backoff
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })
  // Return the promise in which recalls axios to retry the request
  return backoff.then(function () {
    return axios(config)
  })
})

export function request (url, options) {
  return axios({ url, ...options })
    .then(({ data }) => data)
    .catch(err => ({ err }))
}

export function get (url, { params = {}, ...res } = {}) {
  return axios({
    method: 'get',
    url: `${url}?${stringify(params)}`,
    responseType: 'json',
    ...res
  })
    .then(response =>
      response.data && response.data.d ? response.data.d : response.data
    )
    .catch(err => {
      console.log(err)
    })
}

export function post (url, { data = {}, ...res } = {}, retry = false) {
  return axios({
    url,
    method: 'post',
    data,
    retry: 0,
    ...res
  })
    .then(response => response.data)
    .catch(err => {
      console.log(err)
    })
}

export function put (url, {...res } = {}) {
  return fetch(url, {
    method: 'put',
    retry: 0,
    ...res
  })
    .then(response =>
      response.data && response.data.d ? response.data.d : response.data
    )
    .catch(err => {
      console.log(err)
    })
}

export function delete_with_params (url, { params = {}, ...res } = {}) {
  return axios({
    method: 'delete',
    url: `${url}?${stringify(params)}`,
    retry: 0,
    ...res
  })
    .then(response =>
      response.data && response.data.d ? response.data.d : response.data
    )
    .catch(err => {
      console.log(err)
    })
}
/**
 * retry使用指南：默认config={retry:4,...res}，如果不需要重试请显式指明retry=0
 */
