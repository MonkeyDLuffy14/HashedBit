function toggleVisibility() {
    // Get the paragraph element by its ID
    const paragraph = document.getElementById('useless-paragraph');

    // Check if the paragraph is currently visible
    if (paragraph.style.display === 'none') {
        // If hidden, make it visible
        paragraph.style.display = 'block';
    } else {
        // If visible, hide it
        paragraph.style.display = 'none';
    }
}
