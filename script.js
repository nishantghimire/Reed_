let video = document.getElementById("myVideo");
let playPauseButton = document.getElementById("playPauseButton");
let backwardButton = document.getElementById("backwardButton");
let forwardButton = document.getElementById ("forwardButton");
let progressBar = document.getElementById("myProgressBar");
let playingGif = document.getElementById("playingGif");
let whyReedItem = document.getElementById("whyReed");
let extracurricular = document.getElementById("activities");
let about = document.getElementById("about");

window.onload = function() {
    let lastVisit = localStorage.getItem('lastVisit');
    let currentTime = new Date().getTime();
    let oneHour = 60 * 60 * 1000;

    if (!lastVisit || (currentTime - lastVisit) >= oneHour) {
        displayWelcomeAlert();
        localStorage.setItem('lastVisit', currentTime);
    }
};

function displayWelcomeAlert() {
    alert("Welcome to my website! While this site is responsive, it's best experienced on larger devices like PCs");
}

whyReedItem.addEventListener("click", function() {
    window.open("essay.html", "_blank");
});

extracurricular.addEventListener("click", function() {
    window.location.href = "activities.html";
});

about.addEventListener("click", function() {
    window.location.href = "about.html";
});

playPauseButton.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        playPauseButton.classList.remove("fa-circle-play");
        playPauseButton.classList.add("fa-pause-circle");
    } else {
        video.pause();
        playPauseButton.classList.remove("fa-pause-circle");
        playPauseButton.classList.add("fa-circle-play");
    }
});

backwardButton.addEventListener("click", function() {
    video.currentTime -= 10; 
});

forwardButton.addEventListener("click", function() {
    video.currentTime += 10; 
});

video.addEventListener("timeupdate", function() {
    let currentTime = video.currentTime;
    let duration = video.duration;
    let progress = (currentTime / duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener("input", function() {
    let value = progressBar.value;
    let duration = video.duration;
    let time = (value / 100) * duration;
    video.currentTime = time;
});

playingGif.style.opacity = 0;

video.addEventListener("play", function() {
    playingGif.style.opacity = 1;
});

video.addEventListener("pause", function() {
    playingGif.style.opacity = 0;
});

video.addEventListener("ended", function() {
    displayVideoEndAlert();
});

function displayVideoEndAlert() {
    alert("Thank you for watching! Click on the navigation items such as Achievements, About me, and 'Why Reed?' to learn more.");
}