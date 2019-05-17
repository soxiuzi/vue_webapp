// 对localStorage操作的封装

/**
 * locaStorage - 添加
 * @DateTime 2018-10-25
 * @param  {String}   key   键值名
 * @param  {String|object}   content 键值
 * @param  {Number}  expireTime 过期时间 天数
 */
export function setLocalStorage(key, content, expireTime = 0) {
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  localStorage.setItem(key, content)
  if(expireTime && !isNaN(parseInt(expireTime))) {
    const _expire = parseInt(expireTime) * 24 * 60 * 60
    const timeout = parseInt(new Date().getTime() / 1000)
    localStorage.setItem(`${key}_expire`, timeout + _expire)
  }
}

/**
 * 获取localStorage的值
 * @DateTime 2018-10-25
 * @param    {String}   key   键值名
 */
export function getLocalStorage(key) {
  const content = localStorage.getItem(key)
  const _expire = localStorage.getItem(`${key}_expire`)
  if(_expire) {
    const now = parseInt(new Date().getTime() / 1000)
    if(now > _expire) {
      return
    }
  }
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    return localStorage.getItem(key)
  }
}

/**
 * localStorage - 删除
 * @DateTime 2018-10-25
 * @param    {String}   key   键值名
 */
export function removeLocalStorage(key) {
  localStorage.removeItem(key)
  localStorage.removeItem(`${key}_expire`)
}

/**
 * 清空localStorage
 * @DateTime 2018-10-25
 */
export function initialLocalStorage() {
  localStorage.clear()
}
