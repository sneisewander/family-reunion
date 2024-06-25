$("#back-to-top").on("click", () => {
    $('#main-content').animate({
        scrollTop: $("#main-content").offset().top
    },'slow')
})

$(".m3-nav-drawer .text-button").on("click", (e) => {
    $('#main-content').stop(true,false).animate({
        // Finds the distance between the top and the target, then the distance between the top and the current position, then scrolls the difference between those two.
        // Also substracts 14 pixels to adjust for padding.
        scrollTop: $(`#main-content #${e.target.id}`).offset().top
        + $('#main-content').scrollTop()
        - $('#main-content').offset().top
        - 14
    },'slow')
})

$("button").on("animationend", (e) => {
    $(e.target).blur() // blur method unfocuses an element. this makes the animation repeatable on a single element multiple times in succession. 
})

//Settings

let colorMode = 'light'
let contrastModes = ['', '-medium-contrast', '-high-contrast']
let contrastIndex = 0

try {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        $('#toggle-color-mode span').text('dark_mode')
        colorMode = 'dark'
        $('#logo').css('content', 'url(assets/RAYNORWWWHITE.png)')
    }
    if (window.matchMedia && window.matchMedia('(prefers-contrast: less)').matches) contrastIndex = 1
    else if (window.matchMedia && window.matchMedia('(prefers-contrast: less)').matches) contrastIndex = 2
} catch (error) {
    console.warn('Media preferences could not be fetched.')
}


$('body').removeClass().addClass(`${colorMode}${contrastModes[contrastIndex]}`)

$("#toggle-color-mode").on("click", () => {
    console.log($('#toggle-color-mode span').text())
    switch ($('#toggle-color-mode span').text()) {
        case "light_mode":
            $('#toggle-color-mode span').text('dark_mode')
            colorMode = 'dark'
            $('#logo').css('content', 'url(assets/RAYNORWWWHITE.png)')
            break
        case "dark_mode":
            $('#toggle-color-mode span').text('light_mode')
            colorMode = 'light'
            $('#logo').css('content', 'url(assets/RAYNORWW1COLOR.png)')
            break
    }

    $('body').removeClass().addClass(`${colorMode}${contrastModes[contrastIndex]}`)
})

$("#toggle-contrast-mode").on("click", () => {
    console.log($('#toggle-color-mode span').text())
    if (contrastIndex >= contrastModes.length - 1) contrastIndex = 0
    else contrastIndex++
    $('body').removeClass().addClass(`${colorMode}${contrastModes[contrastIndex]}`)
})

