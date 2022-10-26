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

    if (option.method.toUpperCase() === 'GET') {
        xhr.open(option.method, option.url + '?' + da)
        xhr.send()
    } else if (option.method.toUpperCase() === 'POST') {
        xhr.open(option.method, option.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoder')
        xhr.send(da)
    }


    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            option.success(result)
        }
    }


}