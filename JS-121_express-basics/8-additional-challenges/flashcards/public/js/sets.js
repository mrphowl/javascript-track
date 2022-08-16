const setItem = document.querySelectorAll('.set-item');
const updaterForm = document.getElementById('updater');

const handleSetItemClick = event => {
  const itemId = event.target.dataset.id;
  const selectedItem = document.getElementById('set-name');

  selectedItem.value = itemId;
  updaterForm.submit();
};

setItem.forEach(item => {
  item.addEventListener('click', handleSetItemClick);
});