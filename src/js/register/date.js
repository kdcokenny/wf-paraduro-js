const dateInputElement = document.getElementById('Birthdate');

if (dateInputElement) {
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
}
