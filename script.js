// script.js

document.addEventListener('DOMContentLoaded', function () {
    const criticalityButtons = document.querySelectorAll('.criticality-btn');

    criticalityButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Handle button click (you can access the selected criticality using button.value)
            alert('Selected Criticality: ' + button.value);
        });
    });

    document.getElementById('saveButton').addEventListener('click', function () {
        // You can add code here to handle the form submission, for example, using AJAX to send data to the server.
        alert('Issue saved!');
    });
});
