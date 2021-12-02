$().ready(function() {
    var comments = [
        "Account / Access Activities",
        "Adhoc Calls / Meetings",
        "Annual / Required Training",
        "Assessment Activities",
        "Build Activities",
        "Configuration Activities",
        "Coordination and Collaboration Activities",
        "Deployment / Release / Implementation Activities",
        "Design Activities",
        "Documentation Activities",
        "Knowledge Transfer / Training",
        "Scheduled / Regular Meeting(s)",
        "Project Management Duties",
        "QA Activities",
        "Sr. Leadership Activities",
        "Test Activities",
        "Trouble Ticket / Troubleshooting Activities",
        "Tech Lead Activities"
    ];

    for (var comment of comments) {
        $('#comments-list').append(
            $(`<li class="list-group-item">${comment}</li>`)
        );
    }

    $('#comments-list').click(function() {
        document.execCommand('copy');
    })
})