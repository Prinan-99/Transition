const indexItems = document.querySelectorAll('.scrollable-index li');
indexItems.forEach(item => {
  item.addEventListener('click', () => {
    // Example action: scroll to item or display more details
    console.log(item.textContent);
  });
});
