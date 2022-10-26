function getList() {
    var app = new Vue({
        el: 'app',
        data: {

        },
        methods: {}
    })
    $.ajax({
        method: 'get',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            console.log(res.data)
                // $('#list-group').

        }
    })
}

getList()