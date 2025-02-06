document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-order');
    const brandCards = document.querySelectorAll('.brand-card');

    // Filtrado
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            brandCards.forEach(card => {
                card.style.display = (filter === 'all' || card.dataset.status === filter) 
                    ? 'block' 
                    : 'none';
            });
        });
    });

    // Ordenamiento
    sortSelect.addEventListener('change', () => {
        const container = document.querySelector('.brands-grid');
        const cards = Array.from(container.children);
        
        cards.sort((a, b) => {
            const nameA = a.querySelector('h2').textContent.toLowerCase();
            const nameB = b.querySelector('h2').textContent.toLowerCase();
            
            return sortSelect.value === 'asc' 
                ? nameA.localeCompare(nameB) 
                : nameB.localeCompare(nameA);
        });

        container.innerHTML = '';
        cards.forEach(card => container.appendChild(card));
    });
});