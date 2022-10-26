function getList() {
    var that = this
    $.ajax({
        method: 'get',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            console.log(res.data)
                // $('#list-group').
            that.list = res.data
            console.log(this.list)


        }
    })
}

getList()