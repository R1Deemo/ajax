function getList() {
    $.ajax({
        method: 'get',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            console.log(res)
        }
    })
}

getList()