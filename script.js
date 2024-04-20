// let video = document.getElementById("myVideo");
// let playPauseButton = document.getElementById("playPauseButton");
// let backwardButton = document.getElementById("backwardButton");
// let forwardButton = document.getElementById("forwardButton");
// let progressBar = document.getElementById("myProgressBar");
// let playingGif = document.getElementById("playingGif");
// let whyReedItem = document.getElementById("whyReed");
// window.onload = function() {
// alert("Welcome to my website! This is a responsive website.Still, Google is Prefered");
// };
// whyReedItem.addEventListener("click", function() {
// window.open("essay.html", "_blank");
// });
// playPauseButton.addEventListener("click", function() {
//     if (video.paused) {
//         video.play();
//         playPauseButton.classList.remove("fa-circle-play");
//         playPauseButton.classList.add("fa-pause-circle");
//     } else {
//         video.pause();
//         playPauseButton.classList.remove("fa-pause-circle");
//         playPauseButton.classList.add("fa-circle-play");
//     }
// });

// backwardButton.addEventListener("click", function() {
//     video.currentTime -= 10; 
// });

// forwardButton.addEventListener("click", function() {
//     video.currentTime += 10; 
// });

// video.addEventListener("timeupdate", function() {
//     let currentTime = video.currentTime;
//     let duration = video.duration;
//     let progress = (currentTime / duration) * 100;
//     progressBar.value = progress;
// });

// progressBar.addEventListener("input", function() {
//     let value = progressBar.value;
//     let duration = video.duration;
//     let time = (value / 100) * duration;
//     video.currentTime = time;
// });

// playingGif.style.opacity = 0;


// video.addEventListener("play", function() {
//     playingGif.style.opacity = 1;
// });

// video.addEventListener("pause", function() {
//     playingGif.style.opacity = 0;
// });
// video.addEventListener("ended", function() {
// alert("Thank you for watching! Click 'Why Reed?' to learn more.");
// });