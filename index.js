$(document).ready(function() {
    var currentScroll = 0;
    var currentState = 11;
    var h11Audio = document.getElementById("h11AudioID");
    var h12Audio = document.getElementById("h12AudioID");
    var h21Audio = document.getElementById("h21AudioID");
    var h22Audio = document.getElementById("h22AudioID");
    var h31Audio = document.getElementById("h31AudioID");
    var h41Audio = document.getElementById("h41AudioID");
    //!!Newly Added h511Audio
    var h512Audio = document.getElementById("h512AudioID");
    var h612Audio = document.getElementById("h612AudioID");
    var h71Audio = document.getElementById("h71AudioID");

    //VIDEO
    var h21Video = videojs("h21VideoID");
    h21Video.ready(function() {
        h21Video.on("ended", function() {
            h213Display();
        });
    });
    var h312Video = videojs("h312VideoID");
    h312Video.ready(function() {
        h312Video.on("ended", function() {
            console.log("Display h313");
            h313Display();
        });
    });
    var h314Video = videojs("h314VideoID");
    h314Video.ready(function() {
        h314Video.on("ended", function() {
            console.log("Display h315");
            h315Display();
        });
    });

    var h41Video = videojs("h41VideoID");
    var h42Video = videojs("h42VideoID");
    var h43Video = videojs("h43VideoID");
    var h44Video = videojs("h44VideoID");
    var h45Video = videojs("h45VideoID");

    //!!Act 5
    var h511Video = videojs("h511VideoID");
    h511Video.ready(function() {
        h511Video.on("ended", function() {
            console.log("h511Video ended  ->  Display h512");
            h512Display();
        });
    });

    var h513Video = videojs("h513VideoID");
    h513Video.ready(function() {
        h513Video.on("ended", function() {
            console.log("h513Video ended  ->   Display h514");
            h514DIsplay();

        })
    });

    var h515Video = videojs("h515VideoID");
    h515Video.ready(function() {
        h515Video.on("ended", function() {
            console.log("h515Video ended");
            h61ScrollTo();
        });
    });

    //!!Act 6
    var h6121Video = videojs("h6121VideoID");
    h6121Video.ready(function() {
        h6121Video.on("ended", function() {
            console.log("h6121Video ended");
        });
    });
    var h6122Video = videojs("h6122VideoID");
    h6122Video.ready(function() {
        h6122Video.on("ended", function() {
            console.log("h6122Video ended");
        });
    });
    var h6123Video = videojs("h6123VideoID");
    h6123Video.ready(function() {
        h6123Video.on("ended", function() {
            console.log("h6123Video ended");
        });
    });
    var h6124Video = videojs("h6124VideoID");
    h6124Video.ready(function() {
        h6124Video.on("ended", function() {
            console.log("h6124Video ended");
        });
    });
    var h6125Video = videojs("h6125VideoID");
    h6125Video.ready(function() {
        h6125Video.on("ended", function() {
            console.log("h6125Video ended");
        });
    });
    var h6126Video = videojs("h6126VideoID");
    h6126Video.ready(function() {
        h6126Video.on("ended", function() {
            console.log("h6126Video ended");
        });
    });

    var h613Video = videojs("h613VideoID");
    h613Video.ready(function() {
        h613Video.on("ended", function() {
            console.log("h613Video ended -> Scroll to h71");
            h71ScrollTo();
        });
    });


    //!!ACT - 8
    var h812Video = videojs("h812VideoID");
    h812Video.ready(function() {
        h812Video.on("ended", function() {
            console.log("h812Video ended -> Show h813");
            h813DIsplay();
        });
    });



    $("#h11ButtonID").click(function() { //});
        console.log("PLAY");
        // h31ScrollTo();
        // h41ScrollTo();
        h51ScrollTo();
        //h61ScrollTo();
        // h71ScrollTo();

        h12Audio.play();
        h12Audio.pause();

        h21Audio.play();
        h21Audio.pause();

        h31Audio.play();
        h31Audio.pause();

        h41Audio.play();
        h41Audio.pause();

        h21Video.play();
        h21Video.pause();

        h312Video.play();
        h312Video.pause();

        h314Video.play();
        h314Video.pause();

        h41Video.play();
        h41Video.pause();

        h42Video.play();
        h42Video.pause();

        h43Video.play();
        h43Video.pause();

        h44Video.play();
        h44Video.pause();

        h45Video.play();
        h45Video.pause();

        h512Audio.play();
        h512Audio.pause();

        h511Video.play();
        h511Video.pause();

        h513Video.play();
        h513Video.pause();

        h515Video.play();
        h515Video.pause();

        //!!ACT 6 
        h612Audio.play();
        h612Audio.pause();

        h6121Video.play();
        h6121Video.pause();
        h6122Video.play();
        h6122Video.pause();
        h6123Video.play();
        h6123Video.pause();
        h6124Video.play();
        h6124Video.pause();
        h6125Video.play();
        h6125Video.pause();
        h6126Video.play();
        h6126Video.pause();

        h613Video.play();
        h613Video.pause();

        //!!ACT 6 
        h812Video.play();
        h812Video.pause();

        // h71Audio.play();
        // h71Audio.pause();

        // h11Audio.play();
        // h11Audio.onended = function() {
        //     console.log("Shift to h12");
        //     currentState = 12;
        //     h12ScrollTo();
        // };
    });

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
        h314NewsText.pause();
        anime({
            targets: '.h315',
            opacity: 1,
            duration: 500,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Display h41");
                h41ScrollTo();
            }
        });
    }



    function h41ScrollTo() {
        currentState = 41;
        currentScroll = $(".h41").position().top;
        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            delay: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                h41Audio.play();
                var h41Interval = setInterval(function() {
                    var h41CurrentTime = h41Audio.currentTime;
                    console.log(h41CurrentTime);

                    if (Math.floor(h41CurrentTime) == 1) //58
                    {
                        h41video12Loop_Start();
                    }

                    // if (Math.floor(h41CurrentTime) == 58) //58
                    // {
                    //     $('.h41-text1-holder').css('opacity', "1");
                    // } else if (Math.floor(h41CurrentTime) == 89) {
                    //     $('.h41-text1-holder').css('opacity', "0");
                    //     $('.h41-text2-holder').css('opacity', "1");
                    // } else if (Math.floor(h41CurrentTime) == 102) {
                    //     $('.h41-text2-holder').css('opacity', "0");
                    //     $('.h41-text3-holder').css('opacity', "1");

                    // } else if (Math.floor(h41CurrentTime) == 110) { //!!Video 1 and 2 are in LOOP
                    //     h41video12LoopStart();
                    // } else if (Math.floor(h41CurrentTime) == 18) {
                    //     $('.h41-video4-holder').css('opacity', "1");
                    //     h312Video.on("ended", function() {
                    //         console.log("h41 Ended");
                    //         $('.h41-video4-holder').css('opacity', "0");
                    //         $('.h41-text4-holder').css('opacity', "1");
                    //     });
                    //     h44Video.play();
                    // }

                }, 1000);
                h41Audio.onended = function() {
                    h41video12Loop_End();
                    clearInterval(h41Interval);
                    console.log("Scroll to h51");
                    h51ScrollTo();
                };
            }
        });
    }

    //!!h41 Text x Video Timer Starts
    var h41video12_Counter = 0;

    function h41video12Loop_Start() {
        h41video12Loop_Video1();
    }

    function h41video12Loop_Video1() {
        console.log("Play video 1");
        $('.h41-video1-holder').css('opacity', "1");
        $('.h41-video2-holder').css('opacity', "0");
        h41video12_Counter = 1;
        h41Video.load();
        h41Video.play();
        h41Video.on("ended", h41video12Loop_Video1_Ended);
    }

    function h41video12Loop_Video1_Ended() {
        console.log("h41 - Switch to h42 Video");
        // h41Video.removeEventListener('ended', h41video12Loop_Video1_Ended);
        h41video12Loop_Video2();
    }

    function h41video12Loop_Video2() {
        console.log("Play video 1");
        $('.h41-video1-holder').css('opacity', "0");
        $('.h41-video2-holder').css('opacity', "1");
        h41video12_Counter = 2;
        h42Video.load();
        h42Video.play();
        h42Video.on("ended", h41video12Loop_Video2_Ended);
    }

    function h41video12Loop_Video2_Ended() {
        console.log("h41 - Switch to h41 Video");
        // h42Video.removeEventListener('ended', h41video12Loop_Video1_Ended);
        h41video12Loop_Video1();
    }

    function h41video12Loop_End() {
        $('.h41-video1-holder').css('opacity', "0");
        $('.h41-video2-holder').css('opacity', "0");
        h42Video.pause();
        h41Video.pause();
    }

    //!!h41 Text x Video Timer Ends



    function h51ScrollTo() {
        currentState = 51;
        currentScroll = $(".h51").position().top;

        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("h511 Video Play");
                h511Video.play();
            }
        });
    }

    function h512Display() {
        anime({
            targets: '.h512',
            opacity: 1,
            duration: 500,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Play 512 Audio and start Typing Animation");
                h12Audio.play();
                h12Audio.onended = function() {
                    console.log("Display h513");
                    h513DIsplay();
                };
            }
        });
    }

    function h513DIsplay() {
        anime({
            targets: '.h513',
            opacity: 1,
            duration: 500,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Play Video 513");
                h513Video.play();
            }
        });
    }

    function h514DIsplay() {
        anime({
            targets: '.h514',
            opacity: 1,
            duration: 500,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Display h515 with delay in next function");
                h515DIsplay();
            }
        });
    }

    function h515DIsplay() {
        anime({
            targets: '.h515',
            opacity: 1,
            duration: 500,
            delay: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                h515Video.play();
            }
        });
    }


    //!!ACT - 6
    function h61ScrollTo() {
        currentState = 61;
        currentScroll = $(".h61").position().top;
        console.log(currentScroll);

        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Scroll to h612 with Delay Here");
                h612ScrollTo();
            }
        });
    }

    function h612ScrollTo() {
        currentState = 612;
        currentScroll = $(".h612").position().top;

        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            delay: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Play 6 grid videos here with time stamps");
                h612Audio.play();
                h612Audio.onended = function() {
                    console.log("SCroll to h613 ");
                    h613ScrollTo();
                };
            }
        });
    }

    function h613ScrollTo() {
        currentState = 613;
        currentScroll = $(".h613").position().top;

        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Play 613 MOUSE FOLLOWING - Video");
                h613Video.play();
            }
        });
    }

    function h71ScrollTo() {
        currentState = 71;
        currentScroll = $(".h71").position().top;

        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Text Scrolling with Audio and other timestamp effects");
                h71Audio.play();
                h71Audio.onended = function() {
                    console.log("SCroll to h81 ");
                    h81ScrollTo();
                };
            }
        });
    }

    function h81ScrollTo() {
        currentState = 81;
        currentScroll = $(".h81").position().top;

        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("sHOW H812 Video after delayed function");
                h812DIsplay();
            }
        });
    }

    function h812DIsplay() {
        anime({
            targets: '.h812',
            opacity: 1,
            duration: 500,
            delay: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                h812Video.play();
            }
        });
    }

    function h813DIsplay() {
        anime({
            targets: '.h813',
            opacity: 1,
            duration: 500,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Yaay");
            }
        });
    }


});