export function retry({retries = 5,interval = 2000,randomRtries = false} = {}) {
  let delay = randomRtries ? Math.random() * 5000 : interval
  let count = 0
  return async function exec(fn, cb) {
    await fn()
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        if (count < retries) {
          setTimeout(function() {
            console.log('retries')
            count += 1
            exec(fn, cb)
          }, delay)
        }
      })
  }
}

