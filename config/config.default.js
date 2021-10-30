/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1632111171422_6113';

  // add your middleware config here
  config.middleware = [];
  // 天气接口配置
  config.weather = {
    appid: '16553262',
    appsecret: 'XHc9LA8Z',
  };
  // 测试 微信公众号
  config.weChat = {
    // appld: 'wxeb01b0c99f9c807f',
    // secret: '4d9c3142479a5786270b1d6fc456068c',
    appld: 'wx18ba6b7a8975a4b4',
    secret: '7b4103e47adccbc8403cfd9e6ec81433',
    // 用户的openid
    users: [
      // 'oDXss5hk4KjziQ5WUWHG7qY48zS8',
      'owLUz6NAZPlH4Xnn8I5tnzDF6Mv0',
    ],
    daily: 'FrhwKuamnEj67KrAX6UGAvMFizI9MsxuIcsHLgMx368', // 普通模板
    marry: 'FrhwKuamnEj67KrAX6UGAvMFizI9MsxuIcsHLgMx368', // 结婚纪念日模板
    wageDay: 'FrhwKuamnEj67KrAX6UGAvMFizI9MsxuIcsHLgMx368', // 工资日模板
    birthday: 'FrhwKuamnEj67KrAX6UGAvMFizI9MsxuIcsHLgMx368', // 生日模板
  };

  // 时间
  config.time = {
    wageDay: 5, // 工资日
    love: '2018-01-09', // 相爱日期
    marry: '2021-10-05', // 结婚纪念日
    // 生日配置
    // 老家过阴历生日，这里暂时写死
    birthday: {
      2021: '2021-04-21',
      // 2022: '2022-01-06',
      // 2023: '2023-02-25',
      // 2024: '2024-03-14',
      // 2025: '2025-04-03',
      // 2026: '2026-05-22',
    }, // 每年生日 阳历
    birthYear: 1995,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
