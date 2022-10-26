/**
   * 获取常用的日期区间范围
   * @param {String} type 需要获取的日期区间范围类型
   * @param {String} separator 返回的分隔符
   * @returns {Array} [startDate, endDate]
   */
  export const getRangeDate =  function (type, separator) {
    if (type == '') return ['', ''];
    separator = separator || '-';
    var now = new Date();
    var year = now.getFullYear(), month = now.getMonth() + 1, date = now.getDate();
    var handler = new Map();
    var prefix = function (num) {
      return num.toString().padStart(2, 0);
    };
    var calc = function (date, num) {
      return new Date(date.getTime() - num).format().split('-');
    };

    // 今天
    handler.set('today', function () {
      return [
        [year, month, date],
        [year, month, date],
      ];
    });

    // 昨天
    handler.set('yesterday', function (date) {
      return [calc(date, 24 * 60 * 60 * 1000), calc(date, 24 * 60 * 60 * 1000)];
    });

    // 本周
    handler.set('week', function (date) {
      return [
        calc(date, ((date.getDay() || 7) - 1) * 24 * 60 * 60 * 1000),
        calc(date, -((7 - (date.getDay() || 7)) * 24 * 60 * 60 * 1000))
      ];
    });

    // 上周
    handler.set('lastWeek', function (date) {
      return handler.get('week').call(this, new Date(date - 7 * 24 * 60 * 60 * 1000));
    });

    // 本月
    handler.set('month', function () {
      return [
        [year, month, 1],
        [year, month, date]
      ];
    });

    // 上月
    handler.set('lastMonth', function () {
      var prevYear = month === 1 ? year - 1 : year;
      var prevMonth = month === 1 ? 12 : month - 1;
      var prevDate = new Date(prevYear, prevMonth, 0).getDate();
      return [
        [prevYear, prevMonth, 1],
        [prevYear, prevMonth, prevDate]
      ];
    });

    // 今年
    handler.set('year', function () {
      return [
        [year, 1, 1],
        [year, 12, 31]
      ];
    });

    // 去年
    handler.set('lastYear', function () {
      return [
        [year - 1, 1, 1],
        [year - 1, 12, 31]
      ];
    });
    return handler.get(type) // 获取对应的方法
      .call(this, now) // 执行
      .map(function (item) {
        return item.map(function (num) {
          return prefix(num);
        }).join(separator);
      }); // 格式化
  }

  export const stringConvert = (_string)=>{
    return _string.split('\n')[0];
  }

  //防抖
export const ashakExtends = (callback,awaitor)=>{
  let timer = null;// 使用闭包，多次调用都能访问到同一个变量，而不是生成新的变量
  return function(){
      clearTimeout(timer);
      timer = setTimeout(() => {
          callback.apply(this,arguments);//执行防抖需要执行的回调函数
      }, awaitor);
  }
}

//节流
export const throttleExtends = (callback,awaitor)=>{
  let timer = null;//使用闭包
  return function(){
      if(timer) return;
      timer = setTimeout(() => {
          callback.apply(this,arguments);
          timer = null;
      }, awaitor);
  }
}