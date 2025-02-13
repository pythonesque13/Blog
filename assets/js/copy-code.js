document.addEventListener('DOMContentLoaded', () => {
    // Créer le bouton de copie
    function createCopyButton() {
      const button = document.createElement('button');
      button.className = 'copy-code-button';
      button.innerHTML = 'Copier';
      return button;
    }
  
    // Ajouter le bouton à chaque bloc de code
    document.querySelectorAll('pre code').forEach((codeBlock) => {
      const container = codeBlock.parentNode;
      container.style.position = 'relative';
      
      const copyButton = createCopyButton();
      container.appendChild(copyButton);
  
      copyButton.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(codeBlock.textContent);
          copyButton.innerHTML = 'Copié !';
          setTimeout(() => {
            copyButton.innerHTML = 'Copier';
          }, 2000);
        } catch (err) {
          copyButton.innerHTML = 'Erreur !';
          setTimeout(() => {
            copyButton.innerHTML = 'Copier';
          }, 2000);
        }
      });
    });
  });