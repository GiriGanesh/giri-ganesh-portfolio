const search = document.getElementById('search');
const cards = [...document.querySelectorAll('.card')];
const filters = [...document.querySelectorAll('.filters button')];
let activeFilter = 'all';
function applyFilters(){
  const term = search.value.toLowerCase();
  cards.forEach(card => {
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
    const textMatch = card.textContent.toLowerCase().includes(term);
    card.classList.toggle('hide', !(categoryMatch && textMatch));
  });
}
filters.forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filters button.active').classList.remove('active');
  button.classList.add('active'); activeFilter = button.dataset.filter; applyFilters();
}));
search.addEventListener('input', applyFilters);
