$("#back-to-top").on("click", () => {
    $('#main-content').animate({
        scrollTop: $("#main-content").offset().top
    },'slow')
})

$(".m3-nav-drawer .text-button").on("click", (e) => {
    $('#main-content').stop(true,false).animate({
        scrollTop: $(`#main-content #${e.target.id}`).offset().top
        + $('#main-content').scrollTop()
        - $('#main-content').offset().top
    },'slow')
})

$("button").on("animationend", (e) => {
    $(e.target).blur()
})