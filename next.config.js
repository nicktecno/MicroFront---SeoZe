const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const withImages = require("next-images");

module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  webpack(config, options) {
    return config;
  },
});

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: pluginOptions.options,
        },
      ],
    });

    return config;
  },
};

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack: (config, options) => {
    const { isServer } = options;

    config.experiments = {
      topLevelAwait: true,
      asyncWebAssembly: true,
      layers: true,
    };
    config.plugins.push(
      new NextFederationPlugin({
        name: "shop",
        remotes: {
          layout: `layout@https://micro-front-layout.vercel.app/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          homePage: `homePage@https://micro-front-home.vercel.app/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          loginPage: `loginPage@https://micro-front-login.vercel.app/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          profilePage: `profilePage@https://micro-front-profile.vercel.app/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          profileAddressesPage: `profileAddressesPage@https://micro-front-profile-addresses.vercel.app/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          addPaymentMethodPage: `addPaymentMethodPage@https://micro-front-add-payment-method.vercel.app//_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,

          orders: `orders@https://micro-front-orders.vercel.app//_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          photobookPage: `photobookPage@https://micro-front-photobook.vercel.app//_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          wishlist: `wishlist@https://micro-front-wishlist.vercel.app//_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          likesPage: `likesPage@https://micro-front-likes.vercel.app//_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          registerPage: `registerPage@https://micro-front-register.vercel.app//_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          inspirePage: `inspirePage@https://micro-front-inspire.vercel.app//_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          findPromotersPage: `findPromotersPage@https://micro-front-find-promoters.vercel.app//_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },

        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
