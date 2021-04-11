function h12ScrollTo() {
    currentState = 12;
    currentScroll = $(".h12").position().top;

    anime({
        targets: '.container',
        top: -currentScroll,
        duration: 2000,
        easing: 'easeInOutExpo',
        complete: function(anim) {
            h12Audio.play();
            h12LoopingScroll();
        }
    });
}
var h12ScrollSpeed = 1;
$(".h12controllerbutton.double").click(function() {
    console.log("Double");
    if ((h12ScrollSpeed * 2) < 5) {
        h12ScrollSpeed *= 2;
        $(".h12controller-text").text(h12ScrollSpeed.toString());
    }
});

$(".h12controllerbutton.half").click(function() {
    console.log("Half");
    if ((h12ScrollSpeed / 2) > 0.24) {
        h12ScrollSpeed /= 2;
        $(".h12controller-text").text(h12ScrollSpeed.toString());
    }
});


function h12LoopingScroll() {

    var h12Start = $(".h12").position().top;
    var h12End = $(".h12").height() + h12Start - $(window).height();
    if ((currentScroll + (200 * h12ScrollSpeed)) < h12End) {
        currentScroll += (200 * h12ScrollSpeed);
        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 1000,
            easing: 'linear',
            complete: function(anim) {
                h12LoopingScroll();
            }
        });
    } else {
        anime({
            targets: '.container',
            top: -h12End,
            duration: 500,
            easing: 'linear',
            complete: function(anim) {
                anime({
                    targets: '.first-text.first-center',
                    color: '#e5e7ca',
                    duration: 200,
                    easing: 'linear'
                });
                anime({
                    targets: '.h12',
                    backgroundImage: 'linear-gradient(150deg, #481c21, #481c21)',
                    duration: 200,
                    easing: 'linear',
                    complete: function(anim) {
                        console.log("h12 Scrolled. Scroll to h21");
                        h21ScrollTo();
                    }
                });
            }
        });
    }
}

function h21ScrollTo() {
    currentState = 21;
    currentScroll = $(".h21").position().top;
    anime({
        targets: '.container',
        top: -currentScroll,
        duration: 2000,
        delay: 2000,
        easing: 'easeInOutExpo',
        complete: function(anim) {
            h12Audio.pause();
            h21Audio.play();
            h21Audio.onended = function() {
                console.log("Hide h211 and show h212");
                h212DIsplay();
            };
        }
    });
}

function h212DIsplay() {
    anime({
        targets: '.h212',
        opacity: 1,
        duration: 500,
        easing: 'easeInOutExpo',
    });
    h21Video.play();
}

function h213Display() {
    anime({
        targets: '.h213',
        opacity: 1,
        duration: 1000,
        easing: 'easeInOutExpo',
        complete: function(anim) {
            anime({
                targets: '.h213',
                backgroundColor: "#481c21",
                duration: 1000,
                delay: 1000,
                easing: 'easeInOutExpo',
                complete: function(anim) {

                }
            });

            anime({
                targets: '.h213-text',
                color: "#d6d9ab",
                duration: 1000,
                delay: 1000,
                easing: 'easeInOutExpo',
                complete: function(anim) {
                    console.log("Go to h22");
                    h22ScrollTo();
                }
            });
        }
    });

    console.log("Display h213 and hide h212");
}

function h22ScrollTo() {
    currentState = 22;
    currentScroll = $(".h22").position().top;

    anime({
        targets: '.container',
        top: -currentScroll,
        duration: 2000,
        delay: 2000,
        easing: 'easeInOutExpo',
        complete: function(anim) {

            h22Audio.play();
            h22Audio.onended = function() {
                console.log("Scroll to h31 - YAAY");
                h31ScrollTo();
            };
        }
    });
}

function h31ScrollTo() {
    currentState = 31;
    currentScroll = $(".h31").position().top;

    anime({
        targets: '.container',
        top: -currentScroll,
        duration: 2000,
        delay: 2000,
        easing: 'easeInOutExpo',
        complete: function(anim) {

            h31Audio.play();
            h31Audio.onended = function() {
                console.log("Scroll to h312 - YAAY");

                h312Display();
            };
        }
    });
}

function h312Display() {
    anime({
        targets: '.h312',
        opacity: 1,
        duration: 500,
        easing: 'easeInOutExpo',
    });

    h312Video.play();
}

function h313Display() {
    anime({
        targets: '.h313',
        opacity: 1,
        duration: 500,
        easing: 'easeInOutExpo',
        complete: function(anim) {
            console.log("Display h314 with delay");
            h314Display();
        }
    });
}
var h314NewsText;

function h314Display() {
    anime({
        targets: '.h314',
        opacity: 1,
        duration: 500,
        delay: 2000,
        easing: 'easeInOutExpo',
    });
    h314NewsText = anime({
        targets: '.news-text-holder',
        left: '-1500%',
        duration: 200000,
        delay: 2000,
        easing: 'linear',
    });
    h314Video.play();
}

function h315Display() {
    h314NewsText.remove();
    anime({
        targets: '.h315',
        opacity: 1,
        duration: 500,
        easing: 'easeInOutExpo',
        complete: function(anim) {
            console.log("Display h41");
        }
    });
}