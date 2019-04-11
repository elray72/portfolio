const webpackMerge = require('webpack-merge');
const webpackCommon = require('./config/webpack/webpack.common');

const envs = {
	development: 'dev',
	production: 'prod',
};

/* eslint-disable */
const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./config/webpack/webpack.${env}.js`);
module.exports = webpackMerge(webpackCommon, envConfig);