export default {
    // 对数值进群精简操作
    getNum(num) {
        if (num < 1000) {
            return num
        } else if (num >= 1000 && num < 10000) {
            num = (num / 1000).toFixed(1) + 'k'
            return num
        } else if (num >= 10000 && num < 100000) {
            num = (num / 10000).toFixed(1) + 'w'
            return num
        } else if (num >= 100000) {
            return '10w+'
        }
    },

    // 多功能时间戳转时间格式
    myDate(value, type = 0) {
        var time = new Date(value * 1000)
        var year = time.getFullYear()
        var month = time.getMonth() + 1
        var date = time.getDate()
        var hour = time.getHours()
        var minute = time.getMinutes()
        var second = time.getSeconds()
        month = month < 10 ? '0' + month : month
        date = date < 10 ? '0' + date : date
        hour = hour < 10 ? '0' + hour : hour
        minute = minute < 10 ? '0' + minute : minute
        second = second < 10 ? '0' + second : second
        var arr = [
            year + '-' + month + '-' + date,
            year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second,
            year + '年' + month + '月' + date,
            year + '年' + month + '月' + date + ' ' + hour + ':' + minute + ':' + second,
            hour + ':' + minute + ':' + second
        ]
        return arr[type]
    }
}