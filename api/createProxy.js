const createProxy = require('http-proxy-middleware');

const proxy = createProxy({
  target: '',
  pathRewrite: {
    '^/api': 'https://apiko-intensive-backend.herokuapp.com',
  },
  changeOrigin: true,
});

module.exports = (app) => {
  app.use('/api', proxy);
};
