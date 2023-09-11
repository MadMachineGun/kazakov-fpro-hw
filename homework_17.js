document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const ghostDiv = document.getElementById('ghostDiv');

    if (textInput && ghostDiv) {
        ghostDiv.style.display = 'none';

        textInput.addEventListener('mouseenter', () => {
            ghostDiv.style.display = 'flex';
        });

        textInput.addEventListener('mouseleave', () => {
            ghostDiv.style.display = 'none';
        });
    }
});
