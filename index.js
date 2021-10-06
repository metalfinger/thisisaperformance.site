$(document).ready(function() {

    var currentScroll = 0;
    var currentState = 11;


    $(window).resize(function() {
        currentScroll = returnTheHook().position().top;

        $(".container").css("top", -currentScroll);
    });

    function returnTheHook() {
        var currentHook = currentState.toString();
        console.log(currentHook, currentHook.length);
        if (currentHook.length == 3) {
            if ((currentHook != "612") && (currentHook != "613")) {
                currentHook = currentHook.substring(0, currentHook.length - 1);
            }
        }
        return $(".h" + currentHook);
    }



    //!!Physics
    // var body = document.querySelector(".physics");

    // // Engine.run(engine);

    // var Engine = Matter.Engine,
    //     Render = Matter.Render,
    //     World = Matter.World,
    //     Bodies = Matter.Bodies;

    // var engine = Engine.create();

    // var render = Render.create({
    //     element: body,
    //     engine: engine,
    //     options: {
    //         width: 600,
    //         height: 400,
    //         wireframes: false,
    //         background: '#e5e7ca'
    //     }
    // });

    // render.canvas.width = document.documentElement.clientWidth;
    // render.canvas.height = document.documentElement.clientHeight;

    // var canvasWidth = document.documentElement.clientWidth;
    // var canvasHeight = document.documentElement.clientHeight;

    // var arc1 = Bodies.fromVertices(canvasWidth * 5 / 8, canvasHeight / 2, [
    //     { x: 0, y: 0 },
    //     { x: canvasWidth / 3, y: -10 },
    //     { x: 0, y: canvasWidth / 6 },
    //     { x: canvasWidth / 3, y: canvasWidth / 6 + 10 }
    // ], { render: { fillStyle: '#172430' } });

    // var arc2 = Bodies.fromVertices(canvasWidth * 4.33 / 8, canvasHeight / 2 + (canvasWidth * 2.6 / 16), [
    //     { x: 0, y: 0 },
    //     { x: canvasWidth / 6, y: 0 },
    //     { x: 0, y: canvasWidth / 6 },
    //     { x: canvasWidth / 6, y: canvasWidth / 6 }
    // ], { render: { fillStyle: '#52262b' } });

    // // var arc3 = Bodies.fromVertices(600, 500, [
    // //     { x: 0, y: 0 },
    // //     { x: canvasWidth / 3, y: 0 },
    // //     { x: 0, y: canvasWidth / 6 },
    // //     { x: canvasWidth / 3, y: canvasWidth / 6 }
    // // ], { render: { fillStyle: '#172430' } });

    // // var arc4 = Bodies.fromVertices(600, 500, [
    // //     { x: 0, y: 0 },
    // //     { x: canvasWidth / 3, y: 0 },
    // //     { x: 0, y: canvasWidth / 6 },
    // //     { x: canvasWidth / 3, y: canvasWidth / 6 }
    // // ], { render: { fillStyle: '#172430' } });

    // // var arc5 = Bodies.fromVertices(600, 500, [
    // //     { x: 0, y: 0 },
    // //     { x: canvasWidth / 3, y: 0 },
    // //     { x: 0, y: canvasWidth / 6 },
    // //     { x: canvasWidth / 3, y: canvasWidth / 6 }
    // // ], { render: { fillStyle: '#172430' } });

    // var ground = Bodies.rectangle(render.canvas.width / 2, render.canvas.height, render.canvas.width, 60, { isStatic: true });

    // World.add(engine.world, [arc2, arc1, ground]);

    // // Engine.run(engine);

    // Render.run(render);

    //!!New Audio Code

    var mainAudio = document.getElementById("mainAudioID");

    mainAudio.onended = function() {
        console.log("Audio Ended ->", currentState);

        if (currentState == 11) {
            console.log("Shift to -> h12");
            unloadAudio();
            h12ScrollTo();
        } else if (currentState == 12) {
            console.log("Shift to -> nowhere - handeled by arrow scroll");
        } else if (currentState == 21) {
            console.log("Shift to -> ");
            unloadAudio();
            h212DisplayHide();
        } else if (currentState == 22) { //!!Covered
            unloadAudio();
            h31ScrollTo();
        } else if (currentState == 31) {
            console.log("Shift to -> ");
            unloadAudio();
            h312DisplayHide();
        } else if (currentState == 41) {
            console.log("Shift to -> ");
            unloadAudio();

            hideh4VideoPlayer();
            pauseh4VideoPlayer();

            if (h41TimerRunning) {
                h41TimerRunning = false;
                clearInterval(h41Interval);
            }

            console.log("Scroll to h51");
            h51ScrollTo();
        } else if (currentState == 512) {
            console.log("Shift to -> ");
            unloadAudio();
            h513Display();
        } else if (currentState == 612) {
            console.log("Shift to -> ");
            console.log("SCroll to h613 ");
            unloadAudio();

            unloadh6VideoPlayer();
            pauseh6VideoPlayers();

            h613ScrollTo();
        } else if (currentState == 71) {

            console.log("Shift to -> ");
        }

    };

    var audioPlaying = false;
    var audioLoaded = false;

    function playAudio() {
        if (!audioPlaying) {
            audioPlaying = true;
            mainAudio.play();
        }
    }

    function loadAudio(loopBool) {


        pauseAudio();

        var audioSource = "none";
        audioLoaded = true;

        if (currentState == 11) { //!!Covered
            audioSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618400637/Act%201/audio_1_m1ux6m.mp3";
        } else if (currentState == 12) { //!!Covered
            audioSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618400637/Act%201/audio_1_m1ux6m.mp3";
        } else if (currentState == 21) { //!!Covered
            audioSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618400637/Act%201/audio_1_m1ux6m.mp3";
        } else if (currentState == 22) { //!!Covered
            audioSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618400637/Act%201/audio_1_m1ux6m.mp3";
        } else if (currentState == 31) {
            audioSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618400637/Act%201/audio_1_m1ux6m.mp3";
        } else if (currentState == 41) {
            audioSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618400637/Act%201/audio_1_m1ux6m.mp3";
        } else if (currentState == 512) {
            audioSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618400637/Act%201/audio_1_m1ux6m.mp3";
        } else if (currentState == 612) {
            audioSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618400637/Act%201/audio_1_m1ux6m.mp3";
        } else if (currentState == 71) {
            audioSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618400637/Act%201/audio_1_m1ux6m.mp3";
        } else {
            audioLoaded = false;
        }

        if (audioSource != "none") {
            mainAudio.setAttribute('src', audioSource);
            mainAudio.load();
            playAudio();
            mainAudio.loop = loopBool;
            console.log("Audio played -> ", currentState);
        }

    }

    function unloadAudio() {
        console.log("Audio Unloaded ", currentState);
        audioLoaded = false;
    }

    function pauseAudio() {
        if (audioPlaying) {
            audioPlaying = false;
            mainAudio.pause();
        }
    }


    //!!New Video Code

    var videoPlaying = false;
    var videoLoaded = false;

    var mainVideoSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405007/Act%202/act2-warmupvideo_edzdxj.webm";

    var videoElm = document.getElementById('testVideo');
    videoElm.addEventListener("ended", function() {

        videoPlaying = false;
        console.log("Video had Ended  -> " + currentState.toString());

        if (currentState == 212) {
            unloadAudio();
            h213Display();
        } else if (currentState == 312) {
            unloadAudio();
            h313Display();
        } else if (currentState == 314) {
            unloadAudio();
            h315Display();
        } else if (currentState == 511) {
            unloadAudio();
            h512Display();
        } else if (currentState == 513) {
            unloadAudio();
            h514Display();
        } else if (currentState == 515) {
            unloadAudio();
            h61ScrollTo();
        } else if (currentState == 613) {
            unloadAudio();
            h71ScrollTo(); //removed
        } else if (currentState == 812) {
            unloadAudio();
            h813Display();
        }
    });

    var videoElm = document.getElementById('testVideo');
    var videoSourceElm = document.getElementById('testVideoSource');

    function loadVideo() { //videoSource, type) {

        videoLoaded = true;

        if (currentState == 212) {
            $('#testVideo').css('background-color', '#e5e7ca');
            mainVideoSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405007/Act%202/act2-warmupvideo_edzdxj.webm";
        } else if (currentState == 312) {
            $('#testVideo').css('background-color', '#e5e7ca');
            mainVideoSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405156/Act%203/act3-cheering_video_st80wk.webm";
        } else if (currentState == 314) {
            $('#testVideo').css('background-color', '#e5e7ca');
            mainVideoSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405031/Act%203/act3-cardboard-video_uwmjcj.webm";
        } else if (currentState == 511) {
            $('#testVideo').css('background-color', '#182330');
            mainVideoSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405431/Act%205/dressingup1_utcxkm.webm";
        } else if (currentState == 513) {
            $('#testVideo').css('background-color', '#93b4c8');
            mainVideoSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405631/Act%205/TIHYMT_Lauren_Ankit_Warm-up_1_ctnsit.webm";
        } else if (currentState == 515) {
            $('#testVideo').css('background-color', '#93b4c8');
            mainVideoSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405488/Act%205/dressup-2_m893k8.webm";
        } else if (currentState == 613) {
            //h71ScrollTo(); //removed
        } else if (currentState == 812) {
            $('#testVideo').css('background-color', '#481c21');
            mainVideoSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618408021/Act%208/park-video_r9mnxr.webm";
        } else {
            videoLoaded = false;
        }

        mainVideoSource = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405187/Act%204/Act_4_1_FINAL_pdyom7.webm";


        videoElm = document.getElementById('testVideo');
        videoSourceElm = document.getElementById('testVideoSource');

        if (!videoElm.paused) {
            videoElm.pause();
        }

        videoSourceElm.src = mainVideoSource;
        videoSourceElm.type = 'video/webm';

        console.log("Play Video -> ", currentState);

        videoElm.load();
        playVideo();
    }

    function unloadVideo() {
        console.log("Video Unloaded ", currentState);
        videoLoaded = false;
    }

    function playVideo() {
        if (!videoPlaying) {
            videoPlaying = true;
            videoElm.play();
        }
    }

    function pauseVideo() {
        if (videoPlaying) {
            videoPlaying = false;
            if (!videoElm.paused) {
                videoElm.pause();
            }
        }
    }

    //!h4 Video Player

    var h4VideoPlayerStatus = -1;
    var h4CurrentVideo = -1;
    var videoBank = [
        "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405187/Act%204/Act_4_1_FINAL_pdyom7.webm",
        "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405187/Act%204/Act_4_2_FINAL_qbxhes.webm",
        "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405187/Act%204/Act_4_3_FINAL_wbjohb.webm",
        "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405188/Act%204/Act_4_4_FINAL_qjnepw.webm",
        "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405193/Act%204/Act_4_5_FINAL_fo6jzx.webm"
    ];

    var videoElmh4 = document.getElementById('h41Video');
    videoElmh4.addEventListener("ended", function() {
        if (h4VideoPlayerStatus == 0) {
            if (h4CurrentVideo == 0) {
                h4CurrentVideo = 1;
                playh4VideoPlayer();
            } else {
                h4CurrentVideo = 0;
                playh4VideoPlayer();
            }
        } else if (h4VideoPlayerStatus == 1) {
            if (h4CurrentVideo == 2) {
                h4CurrentVideo = 3;
                playh4VideoPlayer();
            } else if (h4CurrentVideo == 3) {
                h4CurrentVideo = 4;
                playh4VideoPlayer();
            } else if (h4CurrentVideo == 4) {
                h4CurrentVideo = 2;
                playh4VideoPlayer();
            }
        } else if (h4VideoPlayerStatus == 2) {
            playh4VideoPlayer();
        }
    });

    function inith4Player() {
        if (h4VideoPlayerStatus == 0) {
            h4CurrentVideo = 0;
            playh4VideoPlayer();
        }
        if (h4VideoPlayerStatus == 1) {
            h4CurrentVideo = 2;
            playh4VideoPlayer();
        }
        if (h4VideoPlayerStatus == 2) {
            h4CurrentVideo = 1;
            playh4VideoPlayer();
        }
    }

    function playh4VideoPlayer() {
        var videoElmh4 = document.getElementById('h41Video');
        var videoSourceElmh4 = document.getElementById('h41VideoSource');

        if (!videoElmh4.paused) {
            videoElmh4.pause();
        }

        var videoSourceLink = videoBank[h4CurrentVideo];
        console.log(h4CurrentVideo);

        videoSourceElmh4.src = videoSourceLink;
        videoSourceElmh4.type = 'video/webm';

        videoElmh4.load();
        videoElmh4.play();
    }

    function pauseh4VideoPlayer() {
        var videoElmh4 = document.getElementById('h41Video');
        var videoSourceElmh4 = document.getElementById('h41VideoSource');

        if (!videoElmh4.paused) {
            videoElmh4.pause();
        }
    }

    function showh4VideoPlayer() {
        $('.h41-video-holder').css("display", "block");
        anime({
            targets: '.h41-video-holder',
            opacity: 1,
            duration: 500,
            easing: 'linear',
            complete: function(anim) {

            }
        });
    }

    function hideh4VideoPlayer() {
        anime({
            targets: '.h41-video-holder',
            opacity: 0,
            duration: 500,
            easing: 'linear',
            complete: function(anim) {
                $('.h41-video-holder').css("display", "none");
            }
        });
    }


    //

    function showVideo() {
        $('.main-video').css("display", "block");
        anime({
            targets: '.main-video',
            opacity: 1,
            duration: 500,
            easing: 'linear',
            complete: function(anim) {

            }
        });
    }

    function hideVideo() {
        anime({
            targets: '.main-video',
            opacity: 0,
            duration: 500,
            easing: 'linear',
            complete: function(anim) {
                $('.main-video').css("display", "none");
            }
        });
    }

    function showNewsText() {
        console.log("SHOW");
        $('.news-text-holder').css("display", "block");
        anime({
            targets: '.news-text-holder',
            opacity: 1,
            duration: 500,
            easing: 'linear',
            complete: function(anim) {

            }
        });
    }

    function hideNewsText() {
        console.log("HIDE News Text ");
        anime({
            targets: '.news-text-holder',
            opacity: 0,
            duration: 500,
            easing: 'linear',
            complete: function(anim) {
                $('.news-text-holder').css("display", "none");
            }
        });
    }

    var videoElmh61 = document.getElementById('h61Video');
    var videoSourceElmh61 = document.getElementById('h61VideoSource');
    var videoElmh62 = document.getElementById('h62Video');
    var videoSourceElmh62 = document.getElementById('h62VideoSource');
    var videoElmh63 = document.getElementById('h63Video');
    var videoSourceElmh63 = document.getElementById('h63VideoSource');
    var videoElmh64 = document.getElementById('h64Video');
    var videoSourceElmh64 = document.getElementById('h64VideoSource');
    var videoElmh65 = document.getElementById('h65Video');
    var videoSourceElmh65 = document.getElementById('h65VideoSource');
    var videoElmh66 = document.getElementById('h66Video');
    var videoSourceElmh66 = document.getElementById('h66VideoSource');

    //!!ACT - 6 Videos
    var h6VideoLoaded = false;

    function loadh6VideoPlayers() {
        // if (!videoElmh61.paused) {
        //     videoElmh61.pause();
        // }

        videoSourceElmh61.src = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618407005/Act%206/TIHYMT_Grid_Uncle_1_rz5f4y.webm";
        videoSourceElmh61.type = 'video/webm';
        videoSourceElmh62.src = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618406591/Act%206/TIHYMT_Grid_Sickofit_1_womlzo.webm";
        videoSourceElmh62.type = 'video/webm';
        videoSourceElmh63.src = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618406398/Act%206/TIHYMT_Grid_Pandeyji_1_wa5gjl.webm";
        videoSourceElmh63.type = 'video/webm';
        videoSourceElmh64.src = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618406173/Act%206/TIHYMT_Grid_Millenial_1_nuvu7q.webm";
        videoSourceElmh64.type = 'video/webm';
        videoSourceElmh65.src = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618406002/Act%206/TIHYMT_Grid_Fixer_1_lo9kbw.webm";
        videoSourceElmh65.type = 'video/webm';
        videoSourceElmh66.src = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618405787/Act%206/TIHYMT_Grid_Bhakt_1_ntanzu.webm";
        videoSourceElmh66.type = 'video/webm';

        h6VideoLoaded = true;
        videoElmh61.load();
        videoElmh62.load();
        videoElmh63.load();
        videoElmh64.load();
        videoElmh65.load();
        videoElmh66.load();

        playh6VideoPlayers();
    }

    function playh6VideoPlayers() {

        videoElmh61.play();
        videoElmh62.play();
        videoElmh63.play();
        videoElmh64.play();
        videoElmh65.play();
        videoElmh66.play();
    }

    function unloadh6VideoPlayer() {
        h6VideoLoaded = false;
    }

    function pauseh6VideoPlayers() {
        var videoElmh61 = document.getElementById('h61Video');
        var videoElmh62 = document.getElementById('h62Video');
        var videoElmh63 = document.getElementById('h63Video');
        var videoElmh64 = document.getElementById('h64Video');
        var videoElmh65 = document.getElementById('h65Video');
        var videoElmh66 = document.getElementById('h66Video');

        if (!videoElmh61.paused) {
            videoElmh61.pause();
        }
        if (!videoElmh62.paused) {
            videoElmh62.pause();
        }
        if (!videoElmh63.paused) {
            videoElmh63.pause();
        }
        if (!videoElmh64.paused) {
            videoElmh64.pause();
        }
        if (!videoElmh65.paused) {
            videoElmh65.pause();
        }
        if (!videoElmh66.paused) {
            videoElmh66.pause();
        }

    }

    //!!ACT - 6 Follow Video

    var videoElmh6Follow = document.getElementById('h6VideoFollowID');
    videoElmh6Follow.addEventListener("ended", function() {
        h71ScrollTo();
    });

    var h6FollowVideoLoaded = false;

    function loadh6FollowVideoPlayer() {
        var videoElmh6Follow = document.getElementById('h6VideoFollowID');
        var videoSourceElmh6Follow = document.getElementById('h6VideoFollowSource');

        // if (!videoElmh6Follow.paused) {
        //     videoElmh6Follow.pause();
        // }

        videoSourceElmh6Follow.src = "https://res.cloudinary.com/dfclyyinf/video/upload/v1618407051/Act%206/urvi_t3ms5g.webm";
        videoSourceElmh6Follow.type = 'video/webm';

        videoElmh6Follow.load();
        h6FollowVideoLoaded = true;
        playh6FollowVideoPlayer();
    }

    function unloadh6FollowVideoPlayer() {
        h6FollowVideoLoaded = false;
    }

    function playh6FollowVideoPlayer() {
        videoElmh6Follow.play();

    }

    function pauseh6FollowVideoPlayer() {
        if (!videoElmh6Follow.paused) {
            videoElmh6Follow.pause();
        }
    }



    //!!Rest of the code



    $("#h11ButtonID").click(function() { //});
        console.log("PLAY");
        currentState = 11;
        loadAudio(false);

        anime({
            targets: '#h11ButtonID',
            opacity: 0,
            duration: 500,
            easing: 'linear'
        });
    });

    function h11ScrollTo() {

        anime({
            targets: '#h11ButtonID',
            opacity: 0,
            duration: 500,
            easing: 'linear'
        });



        currentState = 11;
        currentScroll = $(".h11").position().top;

        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            easing: 'linear',
            complete: function(anim) {
                currentState = 11;
                loadAudio(false);
            }
        });


    }

    function h12ScrollTo() {
        currentState = 12;
        currentScroll = $(".h12").position().top;

        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            easing: 'linear',
            complete: function(anim) {
                currentState = 12;
                loadAudio(true);

                // h12Audio.play();
                // h12LoopingScroll();
            }
        });
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
                currentState = 21;
                loadAudio(false);
            }
        });
    }

    function h212DisplayHide() {
        currentState = 212;
        showVideo();
        loadVideo();
    }

    function h213Display() {

        currentState = 213;
        anime({
            targets: '.h213',
            opacity: 1,
            duration: 1000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                hideVideo(); //!!HIDE VIDEO HERE

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
                currentState = 22;
                loadAudio(false);
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
                loadAudio(false);
            }
        });
    }

    function h312DisplayHide() {

        pauseAudio();

        currentState = 312;
        showVideo();
        loadVideo();

        // h312Video.play(); //!!CHANGE THIS FUNCTIONALITY
    }

    function h313Display() {
        hideVideo();
        currentState = 312;

        anime({
            targets: '.h313',
            opacity: 1,
            duration: 500,
            delay: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Display h314 with delay");
                h314DisplayHide();
            }
        });
    }
    var h314NewsText; //!!---------------Deal with this later
    var h314NewsTextRunning = false;

    function h314DisplayHide() {
        showVideo();
        showNewsText();
        currentState = 314;
        loadVideo();

        h314NewsTextRunning = true;

        h314NewsText = anime({
            targets: '.news-text-holder',
            left: '-1500%',
            duration: 200000,
            easing: 'linear',
        });

    }

    function h315Display() {
        hideVideo();
        hideNewsText();

        if (h314NewsTextRunning) {
            h314NewsTextRunning = false;
            h314NewsText.pause();
        }

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


    var h41Interval;
    var h41TimerRunning = false;

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
                currentState = 41;
                loadAudio(false);
                h41TimerRunning = true;
                h41Interval = setInterval(function() {
                    var h41CurrentTime = mainAudio.currentTime;
                    console.log(h41CurrentTime);

                    if (Math.floor(h41CurrentTime) == 55) {
                        $('.h41-text1-holder').css('opacity', "1");
                    } else if (Math.floor(h41CurrentTime) == 86) {
                        $('.h41-text1-holder').css('opacity', "0");
                        $('.h41-text2-holder').css('opacity', "1");
                    } else if (Math.floor(h41CurrentTime) == 99) {
                        $('.h41-text2-holder').css('opacity', "0");
                        $('.h41-text3-holder').css('opacity', "1");
                    } else if (Math.floor(h41CurrentTime) == 104) {
                        $('.h41-text3-holder').css('opacity', "0");
                        showh4VideoPlayer();
                        h4VideoPlayerStatus = 0;
                        inith4Player();
                    } else if (Math.floor(h41CurrentTime) == 155) {
                        hideh4VideoPlayer();
                        pauseh4VideoPlayer();
                        $('.h41-text4-holder').css('opacity', "1");
                    } else if (Math.floor(h41CurrentTime) == 159) { //
                        $('.h41-text4-holder').css('opacity', "0");
                        showh4VideoPlayer();
                        h4VideoPlayerStatus = 1;
                        inith4Player();
                    } else if (Math.floor(h41CurrentTime) == 300) {
                        hideh4VideoPlayer();
                        pauseh4VideoPlayer();
                        $('.h41-text5-holder').css('opacity', "1");
                    } else if (Math.floor(h41CurrentTime) == 305) { //
                        $('.h41-text5-holder').css('opacity', "0");
                        showh4VideoPlayer();
                        h4VideoPlayerStatus = 2;
                        inith4Player();
                    }

                }, 1000);

            }
        });
    }




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
                currentState = 511;
                showVideo();
                loadVideo();
                // h511Video.play();
            }
        });
    }

    function h512Display() {
        currentState = 512;
        hideVideo();
        anime({
            targets: '.h512',
            opacity: 1,
            duration: 500,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Play 512 Audio and start Typing Animation");
                currentState = 512;
                loadAudio(false);
            }
        });
    }

    function h513Display() {
        currentState = 513;
        anime({
            targets: '.h513',
            opacity: 1,
            duration: 500,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Play Video 513");
                currentState = 513;
                showVideo();
                loadVideo();
                // h513Video.play();
            }
        });
    }

    function h514Display() {
        currentState = 514;
        hideVideo();
        anime({
            targets: '.h514',
            opacity: 1,
            duration: 500,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                console.log("Display h515 with delay in next function");
                h515Display();
            }
        });
    }

    function h515Display() {
        currentState = 515;
        anime({
            targets: '.h515',
            opacity: 1,
            duration: 500,
            delay: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                currentState = 515;
                showVideo();
                loadVideo();
                // h515Video.play();
            }
        });
    }


    //!!ACT - 6
    function h61ScrollTo() {
        hideVideo();
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
                currentState = 612;
                loadAudio(false);
                loadh6VideoPlayers();
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
                loadh6FollowVideoPlayer();


                // currentState = 613;
                // showVideo();
                // loadVideo();
            }
        });
    }

    function h71ScrollTo() {
        // hideVideo();
        unloadh6FollowVideoPlayer();
        pauseh6FollowVideoPlayer();

        currentState = 71;
        currentScroll = $(".h71").position().top;

        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                // h71LoopingScroll();

                loadAudio(true);


            }
        });
    }

    function h81ScrollTo() {
        pauseAudio();

        currentState = 81;
        currentScroll = $(".h81").position().top;

        anime({
            targets: '.container',
            top: -currentScroll,
            duration: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                pauseAudio();
                console.log("sHOW H812 Video after delayed function");
                h812Display();
            }
        });
    }

    function h812Display() {
        anime({
            targets: '.h812',
            opacity: 1,
            duration: 500,
            delay: 2000,
            easing: 'easeInOutExpo',
            complete: function(anim) {
                currentState = 812;
                console.log("Show Video");
                showVideo();
                loadVideo();
                // h812Video.play();
            }
        });
    }

    function h813Display() {
        hideVideo();
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

    function stopEverything() {
        onPause = false;

        if (audioLoaded) {
            pauseAudio();
        }
        if (videoLoaded) {
            pauseVideo();
        }

        if (currentState == 612) {
            if (h6VideoLoaded) {
                pauseh6VideoPlayers();
            }
        }

        if (currentState == 613) {
            if (h6FollowVideoLoaded) {
                pauseh6FollowVideoPlayer();
            }
        }

        pauseVideo();
        hideVideo();

        hideNewsText();

        if (h314NewsTextRunning) {
            h314NewsTextRunning = false;
            h314NewsText.pause();
        }

        if (h41TimerRunning) {
            h41TimerRunning = false;
            clearInterval(h41Interval);
        }
    };

    //!!Navigation Dummy Code
    $("#BtnAct1").click(function() {
        stopEverything();
        h11ScrollTo();
    });

    $("#BtnAct2").click(function() {
        stopEverything();
        h21ScrollTo();
    });

    $("#BtnAct3").click(function() {
        stopEverything();
        h31ScrollTo();
    });

    $("#BtnAct4").click(function() {
        stopEverything();
        h41ScrollTo();
    });

    $("#BtnAct5").click(function() {
        stopEverything();
        h51ScrollTo();
    });

    $("#BtnAct6").click(function() {
        stopEverything();
        h61ScrollTo()
    });

    $("#BtnAct7").click(function() {
        stopEverything();
        h71ScrollTo();
    });

    $("#BtnAct8").click(function() {
        stopEverything();
        h81ScrollTo();
    });

    //!!Keyboard Inpuit
    var insideScrollArea = true;
    var scrollInProgress = false;
    var onPause = false;

    function scrollDown(proPosed) {
        if (!scrollInProgress) {
            scrollInProgress = true;

            anime({
                targets: '.container',
                top: proPosed,
                duration: 500,
                easing: 'linear',
                complete: function(anim) {
                    scrollInProgress = false;
                }
            });
        }
    }

    function scrollUp(proPosed) {
        if (!scrollInProgress) {
            scrollInProgress = true;

            anime({
                targets: '.container',
                top: proPosed,
                duration: 500,
                easing: 'linear',
                complete: function(anim) {
                    scrollInProgress = false;
                }
            });
        }
    }

    $(".body").bind('keydown', function(e) { //onkeydown
        console.log(e.keyCode, currentState); //115 119

        if (e.keyCode == 38) //Left
        {
            if (!scrollInProgress) {
                if (currentState == 12) {
                    var proPosed = parseInt($('.container').css("top").slice(0, -1)) + $(window).height() / 2
                    var topLimit = -returnTheHook().position().top;

                    if (proPosed < topLimit) {
                        scrollUp(proPosed);
                    } else {
                        scrollUp(topLimit);
                    }
                }

                if (currentState == 71) {
                    var proPosed = parseInt($('.container').css("top").slice(0, -1)) + $(window).height() / 2
                    var topLimit = -returnTheHook().position().top;

                    if (proPosed < topLimit) {
                        scrollUp(proPosed);
                    } else {
                        scrollUp(topLimit);
                    }
                }
            }

        } else if (e.keyCode == 40) //Right
        {

            if (!scrollInProgress) {
                if (currentState == 12) {
                    var proPosed = parseInt($('.container').css("top").slice(0, -1)) - $(window).height() / 2
                    var bottomLimit = -$(".h21").position().top + (2 * $(window).height());
                    console.log(proPosed, bottomLimit, (proPosed > bottomLimit));
                    if (proPosed > bottomLimit) {
                        scrollDown(proPosed);
                    } else {
                        scrollInProgress = true;
                        console.log("BOOTOM");
                        // scrollDown(bottomLimit);
                        //!!Scroll 12 Ends here!!
                        anime({
                            targets: '.container',
                            top: bottomLimit,
                            duration: 500,
                            easing: 'linear',
                            complete: function(anim) {
                                anime({
                                    targets: '.first-text.first-center',
                                    color: '#e5e7ca',
                                    duration: 300,
                                    delay: 2000,
                                    easing: 'linear'
                                });
                                anime({
                                    targets: '.h12',
                                    backgroundImage: 'linear-gradient(150deg, #481c21, #481c21)',
                                    duration: 300,
                                    easing: 'linear',
                                    delay: 2000,
                                    complete: function(anim) {
                                        console.log("h12 Scrolled. Scroll to h21");
                                        unloadAudio();
                                        h21ScrollTo();
                                    }
                                });
                            }
                        });
                    }
                }

                if (currentState == 71) {
                    var proPosed = parseInt($('.container').css("top").slice(0, -1)) - $(window).height() / 2
                    var bottomLimit = -$(".h81").position().top + $(window).height();
                    console.log(proPosed, bottomLimit, (proPosed > bottomLimit));
                    if (proPosed > bottomLimit) {
                        scrollDown(proPosed);
                    } else {
                        scrollInProgress = true;
                        console.log("BOOTOM");
                        // scrollDown(bottomLimit);
                        //!!Scroll 12 Ends here!!
                        anime({
                            targets: '.container',
                            top: bottomLimit,
                            duration: 500,
                            easing: 'linear',
                            complete: function(anim) {
                                console.log("h71 Scrolled. Scroll to h81");
                                unloadAudio();
                                h81ScrollTo();
                            }
                        });
                    }
                }
            }


        } else if (e.keyCode == 32) //Space
        {

            if (
                (currentState != 12) &&
                (currentState != 71)
            ) {
                if (
                    (audioLoaded == true) ||
                    (videoLoaded == true) ||
                    (h6VideoLoaded == true) ||
                    (h6FollowVideoLoaded == true)
                ) {

                    if (onPause) {
                        onPause = false;
                        if (audioLoaded) {
                            playAudio();
                        }
                        if (videoLoaded) {
                            playVideo();
                        }

                        if (currentState == 612) {
                            if (h6VideoLoaded) {
                                playh6VideoPlayers();
                            }
                        }

                        if (currentState == 613) {
                            if (h6FollowVideoLoaded) {
                                playh6FollowVideoPlayer();
                            }
                        }
                    } else {
                        console.log("Paused ", currentState);
                        onPause = true;
                        if (audioLoaded) {
                            pauseAudio();
                        }
                        if (videoLoaded) {
                            pauseVideo();
                        }

                        if (currentState == 612) {
                            if (h6VideoLoaded) {
                                pauseh6VideoPlayers();
                            }
                        }

                        if (currentState == 613) {
                            if (h6FollowVideoLoaded) {
                                pauseh6FollowVideoPlayer();
                            }
                        }

                    }
                }
            }
        }
    });
});