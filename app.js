document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.todo').forEach((container) => {
    todo(container);
  });
});

function todo(container) {
  container.innerHTML = `
    <h2>Todo</h2>
    <ul></ul>
    <h3>0 Done</h3>
    <form>
      <input type="text" name="text" />
      <button type="submit">Add</button>
    </form>
    `;

  const form = container.querySelector('form');
  const list = container.querySelector('ul');
  const done = container.querySelector('h3');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.elements['text'];
    addItem(input.value);
    form.reset();
  });

  function addItem(itemText) {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(itemText));

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.addEventListener('change', () => recount());
    item.appendChild(check);

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Delete';
    button.addEventListener('click', () => {
      list.removeChild(item);
      recount();
    });
    item.appendChild(button);

    list.appendChild(item);
  }

  function recount() {
    const count = list.querySelectorAll('input:checked').length;
    done.textContent = `${count} Done`;
  }
}
