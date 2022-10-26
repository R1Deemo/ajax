function data(data) {
    var row = []
    for (var k in data) {
        var str = k + '=' + data[k]
        row.push(str)

    }

    return row.join('&')


}

// var a = data({ zs: '123', ls: '123' })
// console.log(a)

function request(option) {
    var xhr = new XMLHttpRequest
    var da = data(option.data)

    if (option.mathod.toUpperCase() === 'GET') {
        xhr.open('get')
        xhr.send(da)
    } else if (
        option.mathod.toUpperCase() === 'POST') {

    }


    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            option.success(result)
        }
    }


}