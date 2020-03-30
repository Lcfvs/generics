import toUTC from './toUTC.js'

export default function diff (min, max) {
  const dates = {
    max: toUTC(max),
    min: toUTC(min)
  }

  return {
    years: dates.max.getFullYear() - dates.min.getFullYear(),
    months: dates.max.getMonth() - dates.min.getMonth(),
    days: dates.max.getDate() - dates.min.getDate(),
    hours: dates.max.getHours() - dates.min.getHours(),
    minutes: dates.max.getMinutes() - dates.min.getMinutes(),
    seconds: dates.max.getSeconds() - dates.min.getSeconds(),
    milliseconds: dates.max.getMilliseconds() - dates.min.getMilliseconds()
  }
}
