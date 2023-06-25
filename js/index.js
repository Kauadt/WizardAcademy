// Navigation

$("#btnStart").click(() => {
    $("#gameBar").css("display", "none");
    $("#gameScene").css("display", "block");
    $("footer").css("top", 0);
    $("#soundtrack")[0].play()
    $("#soundtrack")[0].volume = 0.04;
})

var sceneWidth = $("#gameScene").width();
var wizardX = 0

$("#caracther").css({
    left: wizardX + 'px'
});

$("#btnPlayAgain").click(() => {
    wizardX = 0
    $("#caracther").css({
        left: wizardX + 'px'
    });
    $("#finishScreen").css("display", "none");
    $("#gameScene").css("display", "block");
    $("footer").css("top", 0);
    $("#soundtrack")[0].play()
    $("#soundtrack")[0].volume = 0.04;
})


/* Moves */

runLeft = () => {
    $("#caracther").css("transform", "scaleX(-1)");
    var currentClass = $("#caracther").attr('class');
    $("#caracther").removeClass(currentClass);
    setTimeout(() => {
        $("#caracther").addClass("run");
    }, 10);


    if (wizardX != 0) {
        wizardX -= 50
        $("#caracther").animate({ left: wizardX + 'px' }, { duration: 500 })
    } else {}
}

runRight = () => {
    $("#caracther").css("transform", "scaleX(1)");
    var currentClass = $("#caracther").attr('class');
    $("#caracther").removeClass(currentClass);
    setTimeout(() => {
        $("#caracther").addClass("run");
    }, 10);
 
    if (wizardX < sceneWidth - 360) {
        wizardX += 50
        $("#caracther").animate({ left: wizardX + 'px' }, { duration: 500 })
    } else {
        $("#gameScene").css("display", "none");
        $("#finishScreen").css("display", "flex");

    }
}

jump = () => {
    var currentClass = $("#caracther").attr('class');
    $("#caracther").removeClass(currentClass)
    setTimeout(() => {
        $("#jumping")[0].play()
        $("#jumping")[0].volume = 1;
        $("#caracther").addClass("jump");
    }, 10);
}

atack = () => {
    var currentClass = $("#caracther").attr('class');
    $("#caracther").removeClass(currentClass);
    setTimeout(() => {
        $("#slice")[0].play()
        $("#slice")[0].volume = 0.3;
        $("#caracther").addClass("atack");
    }, 10);
}

fireball = () => {
    var currentClass = $("#caracther").attr('class');
    $("#caracther").removeClass(currentClass);
    setTimeout(() => {
        $("#caracther").addClass("fireball");
    }, 10);
}

flameJet = () => {
    var currentClass = $("#caracther").attr('class');
    $("#caracther").removeClass(currentClass);
    setTimeout(() => {
        $("#fireMagic")[0].play()
        $("#fireMagic")[0].volume = 0.3;
        $("#caracther").addClass("flameJet");
    }, 10);
}

// Controls

$(document).ready(function () {
    $(document).keyup(function (e) {
        if (e.which === 65 || e.which === 37) {
            runLeft();
        } else if (e.which === 68 || e.which === 39) {
            runRight();
        } else if (e.which === 32) {
            jump();
        } else if (e.which === 69) {
            fireball()
        } else if (e.which === 81) {
            flameJet()
        }
    });

    $("#gameScene").click(() => {
        atack();
    })
});



