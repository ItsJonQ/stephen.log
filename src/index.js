const methods = [
  'assert',
  'clear',
  'count',
  'debug',
  'dir',
  'dirxml',
  'error',
  'exception',
  'group',
  'groupCollapsed',
  'groupEnd',
  'log',
  'profile',
  'table',
  'time',
  'timeStamp',
  'trace',
  'warn'
]

const stephen = methods.reduce((Stephen, method) => {
  Stephen[method] = (message) => console[method](`Stephen ${method}s: ${message}`)
  return Stephen
}, {})

module.exports = stephen
