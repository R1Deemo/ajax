function data() {
    var row = []
    for (var k in data) {
        var str = k + '=' + data[k]
        row.push(str)

    }
    row.join('&')
    return row


}

var a = data()
console.log(a)