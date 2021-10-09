export const timeFormat = (time: string | number | Date, format = 'yyyy/MM/dd hh:mm:ss') => {
  let date = new Date();
  const reg = /^[1-9]\d{3}[-|/](0[1-9]|1[0-2])[-|/](0[1-9]|[1-2][0-9]|3[0-1])([\s+](20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d)?$/i;
  if (time instanceof Date) {
    date = time;
  } else if (/^\d{10}$/.test(`${time}`)) {
    // 1592531554 s
    date = new Date(<number>time * 1000);
  } else if (/^\d{13}$/.test(`${time}`)) {
    // ms
    date = new Date(<number>time - 0);
  } else if (reg.test(`${time}`)) {
    // 2020-09-09 | 2020/09/09 | 2020-09-09 12:12:12 | 2020/09/09 12:12:12
    date = new Date(`${time}`.replace(/-/g, '/')); // IOS兼容
  } else if (!Number.isNaN(+new Date(time))) {
    // 强制转换一下, 验证是否为合法时间字符串
    // 其他情况，包括 2020-02-07T03:56:17.000Z, Wed Jul 01 2020 14:46:51 GMT+0800
    date = new Date(time);
  } else {
    console.error('时间格式不正确', time);
  }
  if (format === 's') return Math.ceil(date.getTime() / 1000);
  if (format === 'ms') return date.getTime();
  const o = {
    'M+': `${date.getMonth() + 1}`, // month
    'd+': `${date.getDate()}`, // day
    'h+': `${date.getHours()}`, // hour
    'm+': `${date.getMinutes()}`, // minute
    's+': `${date.getSeconds()}`, // second
    'q+': `${Math.floor((date.getMonth() + 3) / 3)}`, // quarter
    S: `${date.getMilliseconds()}`, // millisecond
  };
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
  // eslint-disable-next-line no-restricted-syntax
  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      const v: string = o[k];
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? v : `00${v}`.substr(`${v}`.length));
    }
  }
  return format;
};

export const test = '';
