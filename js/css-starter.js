const layoutCheckbox = document.querySelector('#css-part-layout');
const animationsCheckbox = document.querySelector('#css-part-animations');
const inputsCheckbox = document.querySelector('#css-part-inputs');
const colorSchemeCheckbox = document.querySelector('#css-part-color-scheme');
const componentsCheckbox = document.querySelector('#css-part-components');

const checkboxes = document.querySelectorAll('.css-part-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('input', () => {
        if (checkbox.checked) checkbox.closest('.css-part').dataset.checked = "true";
        else checkbox.closest('.css-part').dataset.checked = "false";
    })
})