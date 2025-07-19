// Tangkap elemen input dan semua tabel searchable
const searchInput = document.getElementById('searchInput');
const tables = document.querySelectorAll('table.searchable');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();

  tables.forEach(table => {
    const rows = table.tBodies[0].rows; // hanya tbody
    for (let row of rows) {
      const text = row.textContent.toLowerCase();
      // sembunyikan baris jika tidak cocok
      row.classList.toggle('hidden', query !== '' && !text.includes(query));
    }
  });
});
