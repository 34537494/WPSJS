const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "https://www.aidocx.com/index.php/",
      secure: false,
      changeOrigin: true,
      //ws: true,
      // pathRewrite: {
      //     "^/index.php": "/index.php"
      //   }
    })
  );
  app.use(
    "/vstoapi/",
    createProxyMiddleware({
      target: "http://localhost/index.php/",
      secure: false,
      changeOrigin: true,
      //ws: true,
      // pathRewri0te: {
      //     "^/index.php": "/index.php"
      //   }
    })
  );
};
