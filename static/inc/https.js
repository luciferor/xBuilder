const md5 = require('./md5');
const Https = {
  https: function (_url, _params, _method){
    let timeTem = new Date().getTime();
    return new Promise((resolve, reject) => {
      if (_url && _params && _method) {
        uni.request({
          url: _url,
          data: _params,
          method: _method,
          header: {
            'Device-Code': 'wechat',
            'Client-Type': getApp().apiConfigs.systemInfos.model,
            'Token-Code': getApp().apiConfigs.session_key,
            'Encrypted-Code':extengEncrypted(_params,timeTem),
            'Time-Rubbing': timeTem
          },
          success: function (res) {
            if (res.statusCode === 200) {
              resolve(res) // 接收res并传到then的参数中去
            } else {
              reject()
            }
          },
          error: function (e) {
            reject(e)
          }
        })
      }
    })
   }
}
function extengEncrypted(params, timestr, arr = [], _res = '') {
  Object.keys(params).forEach(key => { arr.push(key.charAt(0).toUpperCase() + key.slice(1)) });
  arr = [...arr.sort(function(item1, item2) { return item1.localeCompare(item2) })];
  arr.forEach(ele => { _res += ele });
  return md5.hexMD5(timestr + _res + timestr + 'Dias Software Inc.');
}
module.exports={
  https: Https.https
}