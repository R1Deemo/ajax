$(function() {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()
        // 为发送按钮绑定鼠标点击事件
    $('#btnSend').on('click', function() {
        var text = $('#ipt').val().trim()
        if (text.length <= 0)
            return $('#ipt').val('')

        // 如果输入内容，追加进记录
        $('.talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
        $('#ipt').val('')
            // 重置滚动条位置
        resetui()
    })
})

function getMsg(text) {
    $.ajax({
        type: 'get',
        url: 'http://ajax.frontend.itheima.net:3006/api/robot',
        data: {
            spoken: text
        },
        success: function(res) {
            if (res.message == success)
                var msg = res.data.info.text
            $('.talk_list').append(' <li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
            resetui()
        }
    })
}