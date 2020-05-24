module.exports = {
  isMac: () => {
    return process.platform === 'darwin' ? true : false;
  },
  isDev: () => {
    return process.env.NODE_ENV !== 'production' ? false : true;
  },
};
