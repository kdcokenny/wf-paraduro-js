// This code formats an input field with ID "Birthdate" as a date (DD/MM/YYYY) by automatically adding slashes (/) at positions 2 and 5. It also allows users to use the backspace key to delete characters in the input field, including the added slashes.

const dateInputElement = document.getElementById('Birthdate');

dateInputElement.addEventListener('input', function (event) {
    const target = event.target;
    const value = target.value;

    // Automatically add a slash (/) at positions 2 and 5
    if (value.length === 2 || value.length === 5) {
        if (value[value.length - 1] !== '/') {
            target.value = value + '/';
        }
    }
});

dateInputElement.addEventListener('keydown', function (event) {
    const target = event.target;
    const value = target.value;

    // Allow users to backspace
    if (event.key === 'Backspace') {
        if (value.length === 3 || value.length === 6) {
            if (value[value.length - 1] === '/') {
                event.preventDefault(); // prevent the default backspace behavior
                target.value = value.slice(0, -1);
            }
        }
    }
});
