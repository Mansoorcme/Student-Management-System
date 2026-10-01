
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('courseError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;

    let isValid = true;

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Age
    if (isNaN(age) || age < 16 || age > 100) {
        document.getElementById('ageError').textContent = 'Please enter a valid age between 16 and 100.';
        isValid = false;
    }

    // Validate Email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Course selection
    if (course === '') {
        document.getElementById('courseError').textContent = 'Please select a course.';
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        const formData = {
            name: name,
            age: age,
            email: email,
            course: course
        };

        console.log('Form Submitted Successfully:', formData);
        alert('Registration successful!\n\nSubmitted Data:\n' + JSON.stringify(formData, null, 2));

        // Reset form inputs after successful submission
        this.reset();
    }
});