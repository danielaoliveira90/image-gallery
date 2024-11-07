document.addEventListener('DOMContentLoaded', function () {

    // array of images:
    const images = [
        { thumbnail: 'images/flowers-pink-small.jpg', large: 'images/flowers-pink-large.jpg', description: 'Beautiful garden with pink Dahlias' },
        { thumbnail: 'images/flowers-white-small.jpg', large: 'images/flowers-white-large.jpg', description: 'Peaceful garden with white Daffodils' },
        { thumbnail: 'images/flowers-purple-small.jpg', large: 'images/flowers-purple-large.jpg', description: 'Bucolic Bluebell garden' },
        { thumbnail: 'images/flowers-red-small.jpg', large: 'images/flowers-red-large.jpg', description: 'Romantic garden with red Poppy flowers' },
        { thumbnail: 'images/flowers-yellow-small.jpg', large: 'images/flowers-yellow-large.jpg', description: 'Energetic Sunflower garden' },

    ];

    const gallery = document.querySelector('#gallery');
    const featuredImage = document.querySelector('figure img');
    const figCaption = document.querySelector('figure figcaption');
    const thumbnailList = document.createElement('ul');

    // Build the thumbnail list
    images.forEach((image, index) => {
        const listItem = document.createElement('li');
        const thumbnailImage = document.createElement('img');
        
        thumbnailImage.src = image.thumbnail;
        thumbnailImage.alt = image.description;
        thumbnailImage.dataset.largeSrc = image.large;  // Store large image source in data attribute
        thumbnailImage.dataset.description = image.description; // Store description in data attribute

        // Add event listener to update featured image on click
        thumbnailImage.addEventListener('click', function () {
            // Update the featured image and figcaption
            featuredImage.src = thumbnailImage.dataset.largeSrc;
            featuredImage.alt = thumbnailImage.alt;
            figCaption.textContent = thumbnailImage.dataset.description;

            // Update CSS class to highlight the active thumbnail
            document.querySelectorAll('ul li img').forEach(img => img.classList.remove('active'));
            thumbnailImage.classList.add('active');
        });

        // Append thumbnail to the list item and list item to the list
        listItem.appendChild(thumbnailImage);
        thumbnailList.appendChild(listItem);

        // Set the first image as the default featured image
        if (index === 0) {
            featuredImage.src = image.large;
            featuredImage.alt = image.description;
            figCaption.textContent = image.description;
            thumbnailImage.classList.add('active');  // Set the first thumbnail as active
        }
    });

    // Append the list of thumbnails to the gallery
    gallery.appendChild(thumbnailList);
});
