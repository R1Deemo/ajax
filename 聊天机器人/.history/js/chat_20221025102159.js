$(function() {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()
        // 为发送按钮绑定鼠标点击事件
    $('#btnSend').on('click', function() {
        var text = $('#ipt').val().trim()
        if (text.length <= 0)

            return $('#ipt').val('')
    })
})