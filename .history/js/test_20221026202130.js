function data(data) {
    var row = []
    for (var k in data) {
        var str = k + '=' + data[k]
        row.push(str)

    }

    return row.join('&')


}

var a = data({ zs: '123', ls: '123' })
console.log(a)