// let video = document.getElementById("myVideo");
// let playPauseButton = document.getElementById("playPauseButton");
// let backwardButton = document.getElementById("backwardButton");
// let forwardButton = document.getElementById ("forwardButton");
// let progressBar = document.getElementById("myProgressBar");
// let playingGif = document.getElementById("playingGif");
// let whyReedItem = document.getElementById("whyReed");
// let extracurricular = document.getElementById("activities");
// let about = document.getElementById("about");

// window.onload = function() {
//     let lastVisit = localStorage.getItem('lastVisit');
//     let currentTime = new Date().getTime();
//     let oneHour = 60 * 60 * 1000;

//     if (!lastVisit || (currentTime - lastVisit) >= oneHour) {
//         displayWelcomeAlert();
//         localStorage.setItem('lastVisit', currentTime);
//     }
// };

// function displayWelcomeAlert() {
//     alert("Welcome to my website! While this site is responsive, it's best experienced on larger devices like PCs. Please be aware that some scrolling might be required to access buttons.");
// }

// whyReedItem.addEventListener("click", function() {
//     window.open("essay.html", "_blank");
// });

// extracurricular.addEventListener("click", function() {
//     window.location.href = "activities.html";
// });

// about.addEventListener("click", function() {
//     window.location.href = "about.html";
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
//     displayVideoEndAlert();
// });

// function displayVideoEndAlert() {
//     alert("Thank you for watching! Click on the navigation items such as Achievements, 'Why Reed?', and About me to learn more.");
// }




// document.addEventListener('DOMContentLoaded', function() {
//     let video = document.getElementById("myVideo");
//     let playPauseButton = document.getElementById("playPauseButton");
//     let backwardButton = document.getElementById("backwardButton");
//     let forwardButton = document.getElementById("forwardButton");
//     let progressBar = document.getElementById("myProgressBar");
//     let playingGif = document.getElementById("playingGif");
//     let about = document.getElementById("about");

//     // Display welcome alert on first visit or after one hour
//     let lastVisit = localStorage.getItem('lastVisit');
//     let currentTime = new Date().getTime();
//     let oneHour = 60 * 60 * 1000;

//     if (!lastVisit || (currentTime - lastVisit) >= oneHour) {
//         displayWelcomeAlert();
//         localStorage.setItem('lastVisit', currentTime);
//     }

//     function displayWelcomeAlert() {
//         alert("Welcome to my website! While this site is responsive, it's best experienced on larger devices like PCs. Please be aware that some scrolling might be required to access buttons.");
//     }

//     // Navigate to 'About' page when 'About me' is clicked
//     about.addEventListener("click", function() {
//         window.location.href = "about.html";
//     });

//     // Play/Pause button functionality
//     playPauseButton.addEventListener("click", function() {
//         togglePlayPause();
//     });

//     // Add click listener on the video itself to toggle play/pause
//     video.addEventListener("click", function() {
//         togglePlayPause();
//     });

//     // Function to toggle play/pause
//     function togglePlayPause() {
//         if (video.paused) {
//             video.play();
//             playPauseButton.classList.remove("fa-circle-play");
//             playPauseButton.classList.add("fa-pause-circle");
//         } else {
//             video.pause();
//             playPauseButton.classList.remove("fa-pause-circle");
//             playPauseButton.classList.add("fa-circle-play");
//         }
//     }

//     // Rewind video by 10 seconds when backward button is clicked
//     backwardButton.addEventListener("click", function() {
//         video.currentTime -= 10;
//     });

//     // Fast-forward video by 10 seconds when forward button is clicked
//     forwardButton.addEventListener("click", function() {
//         video.currentTime += 10;
//     });

//     // Update the progress bar as the video plays
//     video.addEventListener("timeupdate", function() {
//         let currentTime = video.currentTime;
//         let duration = video.duration;
//         let progress = (currentTime / duration) * 100;
//         progressBar.value = progress;
//     });

//     // Allow user to scrub through the video using the progress bar
//     progressBar.addEventListener("input", function() {
//         let value = progressBar.value;
//         let duration = video.duration;
//         let time = (value / 100) * duration;
//         video.currentTime = time;
//     });

//     // Show/hide the playing gif based on video state
//     playingGif.style.opacity = 0;

//     video.addEventListener("play", function() {
//         playingGif.style.opacity = 1;
//     });

//     video.addEventListener("pause", function() {
//         playingGif.style.opacity = 0;
//     });

//     // Alert when the video ends
//     video.addEventListener("ended", function() {
//         setTimeout(function() {
//             displayVideoEndAlert();
//         }, 1000);
//     });

//     // function displayVideoEndAlert() {
//     //     alert("Thank you for watching! To learn more about me please click on 'About Me'.");
//     // }

// });


document.addEventListener('DOMContentLoaded', function() {
    let video = document.getElementById("myVideo");
    let playPauseButton = document.getElementById("playPauseButton");
    let backwardButton = document.getElementById("backwardButton");
    let forwardButton = document.getElementById("forwardButton");
    let progressBar = document.getElementById("myProgressBar");
    let playingGif = document.getElementById("playingGif");
    let about = document.getElementById("about");

    // Display welcome alert on first visit or after one hour
    let lastVisit = localStorage.getItem('lastVisit');
    let currentTime = new Date().getTime();
    let oneHour = 60 * 60 * 1000;

    if (!lastVisit || (currentTime - lastVisit) >= oneHour) {
        displayWelcomeAlert();
        localStorage.setItem('lastVisit', currentTime);
    }

    function displayWelcomeAlert() {
        alert("Welcome to my website! While this site is responsive, it's best experienced on larger devices like PCs. Please be aware that some scrolling might be required to access buttons.");
    }

    // Navigate to 'About' page when 'About me' is clicked
    about.addEventListener("click", function() {
        window.location.href = "about.html";
    });

    // Play/Pause button functionality
    playPauseButton.addEventListener("click", function() {
        togglePlayPause();
    });

    // Add click listener on the video itself to toggle play/pause
    video.addEventListener("click", function() {
        togglePlayPause();
    });

    // Function to toggle play/pause
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseButton.classList.remove("fa-circle-play");
            playPauseButton.classList.add("fa-pause-circle");
        } else {
            video.pause();
            playPauseButton.classList.remove("fa-pause-circle");
            playPauseButton.classList.add("fa-circle-play");
        }
    }

    // Rewind video by 10 seconds when backward button is clicked
    backwardButton.addEventListener("click", function() {
        video.currentTime -= 10;
    });

    // Fast-forward video by 10 seconds when forward button is clicked
    forwardButton.addEventListener("click", function() {
        video.currentTime += 10;
    });

    // Update the progress bar as the video plays
    video.addEventListener("timeupdate", function() {
        let currentTime = video.currentTime;
        let duration = video.duration;

        // Update progress bar
        let progress = (currentTime / duration) * 100;
        progressBar.value = progress;

        // Prevent the video from playing past 4 seconds before the end
        if (currentTime >= duration - 4.5) {
            video.currentTime = duration - 4.5;  // Stop 4 seconds before the end
            if (!video.paused) {
                video.pause(); // Pause the video to prevent it from playing those last 4 seconds
                playPauseButton.classList.remove("fa-pause-circle");
                playPauseButton.classList.add("fa-circle-play");
                displayThankYouMessage(); // Show the message immediately
            }
        }
    });

    // Allow user to scrub through the video using the progress bar
    progressBar.addEventListener("input", function() {
        let value = progressBar.value;
        let duration = video.duration;
        let time = (value / 100) * duration;
        video.currentTime = time;
    });

    // Show/hide the playing gif based on video state
    playingGif.style.opacity = 0;

    video.addEventListener("play", function() {
        playingGif.style.opacity = 1;
    });

    video.addEventListener("pause", function() {
        playingGif.style.opacity = 0;
    });

    // Function to display the "Thank you for watching" message
    function displayThankYouMessage() {
        alert("Thank you for watching! I hope you liked it :)");
    }

});
