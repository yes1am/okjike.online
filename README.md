## 基于 [即刻 web 版](https://web.okjike.com/) 做一些事情

## 1. 如何使用

1. `npm install`
2. 在根目录新建 `config.js` 文件，内容如下:

```json
module.exports = {
  xJikeRefreshToken: 'cookie x-jike-refresh-token 的值',
  xJikeAccessToken: 'cookie x-jike-access-token 的值',
  username: 'xxxx-xxxx-xxxx-xxxx-xxxx',  // 个人主页，operationName: UserFeeds 的 graphql 的 username 参数
};

```

3. `node app.js`