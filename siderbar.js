function gotoToday() {
    window.location.href = "today.html";
}

function gotoRemaining() {
    window.location.href = "remaining.html";
}

function gotoAdd() {
    window.location.href = "add.html";
}

function setActiveSidebar() {

    var currentPath = window.location.pathname;
    var page = currentPath.substring(currentPath.lastIndexOf('/') + 1);


    var bars = document.querySelectorAll('.bar');
    bars.forEach(function(bar) {
        bar.classList.remove('active');
    });

    if (page === "today.html") {
        document.querySelector('.to').classList.add('active');
    } else if (page === "add.html") {
        document.querySelector('.add').classList.add('active');
    } else if (page === "remaining.html") {
        document.querySelector('.remaining').classList.add('active');
    }
}

window.onload = setActiveSidebar;
