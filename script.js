document.addEventListener("DOMContentLoaded", function() {
    const imagePreviews = document.querySelectorAll(".image-preview");
    const fullScreenModal = document.createElement("div");
    fullScreenModal.classList.add("full-screen-modal");
    
    const fullScreenImage = document.createElement("img");
    fullScreenImage.classList.add("full-screen-image");
    
    const closeButton = document.createElement("button");
    closeButton.classList.add("full-screen-close");
    closeButton.innerHTML = "&times;";
    
    fullScreenModal.appendChild(fullScreenImage);
    fullScreenModal.appendChild(closeButton);
    document.body.appendChild(fullScreenModal);
    
    imagePreviews.forEach(image => {
        image.addEventListener("click", function() {
            fullScreenImage.src = image.dataset.fullScreenImage;
            fullScreenModal.style.display = "flex";
        });
    });
    
    closeButton.addEventListener("click", function() {
        fullScreenModal.style.display = "none";
    });
    
    fullScreenModal.addEventListener("click", function(event) {
        if (event.target !== fullScreenImage) {
            fullScreenModal.style.display = "none";
        }
    });

    // Search bar dropdown logic
    const searchInput = document.getElementById("search-input");
    const searchSuggestions = document.querySelector(".search-suggestions");
    const imageCards = document.querySelectorAll(".image-card");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        imageCards.forEach(card => {
            const title = card.querySelector(".image-title").textContent.toLowerCase();
            const author = card.querySelector(".image-author").textContent.toLowerCase();
            if (title.includes(query) || author.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    searchInput.addEventListener("click", function() {
        searchSuggestions.style.display = "block";
    });

    document.addEventListener("click", function(event) {
        if (!searchInput.contains(event.target) && !searchSuggestions.contains(event.target)) {
            searchSuggestions.style.display = "none";
        }
    });

    searchSuggestions.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            searchInput.value = event.target.textContent;
            searchSuggestions.style.display = "none";
            const query = searchInput.value.toLowerCase();
            imageCards.forEach(card => {
                const title = card.querySelector(".image-title").textContent.toLowerCase();
                const author = card.querySelector(".image-author").textContent.toLowerCase();
                if (title.includes(query) || author.includes(query)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        }
    });
});
