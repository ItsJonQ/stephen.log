const methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'log', 'profile', 'table', 'time', 'timeStamp', 'trace', 'warn'];

const stephen = methods.reduce((Stephen, method) => {
  Stephen[method] = (...args) => console[method](`Stephen ${method}s:`, ...args);
  return Stephen;
}, {});

module.exports = stephen;