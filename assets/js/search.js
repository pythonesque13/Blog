// search.js
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const noResults = document.getElementById('no-results');
  const posts = document.querySelectorAll('.post-card');
  let searchTimeout;

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let foundResults = false;
    
    // Afficher/cacher le bouton clear
    searchClear.classList.toggle('visible', searchTerm.length > 0);
    
    // Si le terme de recherche est vide, tout afficher
    if (searchTerm === '') {
      posts.forEach(post => {
        post.classList.remove('hidden');
      });
      noResults.classList.remove('visible');
      return;
    }
    
    // Rechercher dans les posts
    posts.forEach(post => {
      const title = post.querySelector('h2').textContent.toLowerCase();
      const content = post.querySelector('p').textContent.toLowerCase();
      const isVisible = title.includes(searchTerm) || content.includes(searchTerm);
      
      if (isVisible) {
        foundResults = true;
        post.classList.remove('hidden');
      } else {
        post.classList.add('hidden');
      }
    });
    
    // Afficher/cacher le message "not found"
    noResults.classList.toggle('visible', !foundResults);
  }

  // Event listener pour l'input avec debounce
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(performSearch, 300);
  });

  // Event listener pour le bouton clear
  searchClear.addEventListener('click', function() {
    searchInput.value = '';
    searchClear.classList.remove('visible');
    noResults.classList.remove('visible');
    posts.forEach(post => {
      post.classList.remove('hidden');
    });
    searchInput.focus();
  });
});