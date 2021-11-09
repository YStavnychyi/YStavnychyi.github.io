$(".main-menu li:first").addClass("active");

const showSection = function showSection(section, isAnimate) {
    let direction = section.replace(/#/, ""),
    reqSection = $(".section").filter(
        '[data-section="' + direction + '"]'
    ),
    reqSectionPos = reqSection.offset().top - 0;

    if (isAnimate) {
    $("body, html").animate(
        {
        scrollTop: reqSectionPos
        },
        800
    );
    } else {
    $("body, html").scrollTop(reqSectionPos);
    }
};

const checkSection = function checkSection() {
    $(".section").each(function() {
    const $this = $(this),
        topEdge = $this.offset().top - 80,
        bottomEdge = topEdge + $this.height(),
        wScroll = $(window).scrollTop();
    if (topEdge < wScroll && bottomEdge > wScroll) {
        const currentId = $this.data("section"),
        reqLink = $("a").filter("[href*=\\#" + currentId + "]");
        reqLink
        .closest("li")
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
    });
};

$(".main-menu").on("click", "a", function(e) {
    e.preventDefault();
    showSection($(this).attr("href"), true);
});

$(window).scroll(function() {
    checkSection();
});
