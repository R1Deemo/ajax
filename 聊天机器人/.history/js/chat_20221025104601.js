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
        getMsg(text)
    })
})

function getMsg(text) {
    $.ajax({
        method: 'get',
        url: 'https://api.ownthink.com/bot',
        data: {
            spoken: text
        },
        success: function(res) {
            // console.log(res.message)
            if (res.message == 'success')
                var msg = res.data.info.text
            $('.talk_list').append(' <li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
            resetui()
        }
    })
}