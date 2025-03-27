document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const platformButtons = document.querySelectorAll('.platform-button');
    const contentSections = document.querySelectorAll('.content-section');

    // Load header and footer
    fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // Re-initialize theme toggle after header is loaded
            themeToggle = document.getElementById('theme-toggle');
            themeToggle.addEventListener('change', () => {
                body.classList.toggle('dark-mode');
            });
        });

    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });

    // Platform selection
    platformButtons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.getAttribute('data-platform');
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(`${platform}-section`).classList.add('active');
        });
    });

    // Dummy content loading (replace with actual content loading logic)
    const youtubeContent = [
        { title: 'Video 1', description: 'Description of Video 1' },
        { title: 'Video 2', description: 'Description of Video 2' },
    ];

    const instagramContent = [
        { title: 'Post 1', description: 'Description of Post 1' },
        { title: 'Post 2', description: 'Description of Post 2' },
    ];

    function loadContent(platform, content) {
        const contentList = document.querySelector(`#${platform}-section .content-list`);
        contentList.innerHTML = '';
        content.forEach(item => {
            const contentItem = document.createElement('div');
            contentItem.classList.add('content-item');
            contentItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="#" class="download-link">Download</a>
            `;
            contentList.appendChild(contentItem);
        });
    }

    loadContent('youtube', youtubeContent);
    loadContent('instagram', instagramContent);
});
