const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/TSMC-pet/" : "/",
  
    pwa: {
      name: 'My Vue App',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      manifestOptions: {
        background_color: '#ffffff'
      }
    }

  
});
