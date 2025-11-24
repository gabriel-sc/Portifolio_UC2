// Busca filmes da API e injeta em #lista-filmes
fetch('api/filmes.php')
  .then(r => r.json())
  .then(filmes => {
      const container = document.querySelector('#lista-filmes');
      if (!container) return;
      filmes.forEach(f => {
          const thumb = document.createElement('div');
          thumb.className = 'card';
          thumb.innerHTML = `
              <img src="${f.imagem}" class="poster" alt="${f.titulo}">
              <h3>${f.titulo}</h3>
              <p>${f.descricao}</p>
              <span class="cat">${f.categoria || ''}</span>
          `;
          container.appendChild(thumb);
      });
  })
  .catch(err => {
      console.error('Erro ao carregar filmes:', err);
  });
