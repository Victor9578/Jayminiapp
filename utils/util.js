const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${[year, month, day].map(formatNumber).join('-')}`
}

const formatTime1 = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()

  return `${[hour,minute].map(formatNumber).join(':')}`
}

const formatTime2 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${[month, day].map(formatNumber).join('.')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime,
  formatTime1,
  formatTime2
}
