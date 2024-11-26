document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('#searchForm');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        alert(`Searching for ${name}...`);
        // TODO: Implement grave-finding logic here
    });
});
