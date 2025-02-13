// theme-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Fonction pour mettre à jour le thème
    const updateTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      
      // Mettre à jour l'icône du bouton
      const darkIcon = themeToggle.querySelector('.dark-icon');
      const lightIcon = themeToggle.querySelector('.light-icon');
      
      if (theme === 'dark') {
        darkIcon.style.display = 'inline-block';
        lightIcon.style.display = 'none';
      } else {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline-block';
      }
    };
    
    // Vérifier la préférence sauvegardée ou utiliser la préférence système
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      updateTheme(savedTheme);
    } else {
      updateTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }
    
    // Gérer le clic sur le bouton
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      updateTheme(newTheme);
    });
    
    // Écouter les changements de préférence système
    prefersDarkScheme.addListener((e) => {
      if (!localStorage.getItem('theme')) {
        updateTheme(e.matches ? 'dark' : 'light');
      }
    });
  });