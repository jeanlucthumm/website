$(document).ready(function () {
    $('#content').load('projects-content.html');
    $('#home').click(function () {
        $('#content').load('home-content.html');
    });
    $('#projects').click(function () {
        $('#content').load('projects-content.html');
    });
    $('#aboutMe').click(function () {
        $('#content').load('aboutMe-content.html');
    });
    $('#goalsAndNews').click(function () {
        $('#content').load('goalsAndNews-content.html');
    });
    $('#resume').click(function () {
        $('#content').load('resume-content.html');
    });
});