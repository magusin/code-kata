function humanReadable (seconds) {
    let h = Math.floor(seconds / 3600)
    let m = Math.floor((seconds % 3600) / 60)
    let s = Math.floor((seconds % 3600) % 60)
    return time = (h < 10 ? '0' + h + ':' : h + ':') +
    (m < 10 ? '0' + m + ':' : m + ':') + 
    (s < 10 ? '0' + s : s);
  }

    console.log(humanReadable(0)) // '00:00:00'
    console.log(humanReadable(5)) // '00:00:05'
    console.log(humanReadable(60)) // '00:01:00'
    console.log(humanReadable(86399)) // '23:59:59'
    console.log(humanReadable(359999)) // '99:59:59'