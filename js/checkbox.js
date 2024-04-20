// Custom checkboxes
const _checkboxes = document.querySelectorAll('input[type="checkbox"]');
_checkboxes.forEach(checkbox => {
    const newCheckbox = document.createElement('div');
    newCheckbox.classList.add('checkbox');
    checkbox.insertAdjacentElement('afterend', newCheckbox);
    checkbox.classList.add('hidden');
    if (checkbox.checked) {
        newCheckbox.dataset.checked = "true";
    }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) newCheckbox.dataset.checked = "true";
        else newCheckbox.dataset.checked = "false";
    })

    newCheckbox.addEventListener('click', () => {
        if (newCheckbox.dataset.checked === "true") {
            newCheckbox.dataset.checked = "false";
            checkbox.checked = false;
        }
        else {
            newCheckbox.dataset.checked = "true";
            checkbox.checked = true;
        }
    })
})