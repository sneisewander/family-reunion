console.log('hello world')

$("#back-to-top").on("click", (e) => {
    console.log('hello world')
    $('#main-content').animate({
        scrollTop: $("#main-content").offset().top
    },'slow')
})