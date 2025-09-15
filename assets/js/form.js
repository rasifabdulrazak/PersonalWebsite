const form = document.getElementById('contactForm');
const loadingDiv = document.querySelector('.loading');
const errorDiv = document.querySelector('.error-message');
const successDiv = document.querySelector('.sent-message');
const submitBtn = form.querySelector('.btn');

// Your Google Apps Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbyzGhalkZYFfCU9EvrH5j9hmRO_fXmfBJhAfL7fu7FjTLPUKtuOhKp21BbB5gpBRjaizg/exec';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading
    loadingDiv.style.display = 'block';
    errorDiv.style.display = 'none';
    successDiv.style.display = 'none';
    submitBtn.disabled = true;

    try {
        const formData = new FormData(form);
        
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });

        console.log('Success!', response);

        if (response.ok) {
            // Success
            loadingDiv.style.display = 'none';
            successDiv.style.display = 'block';
            form.reset();
        } else {
            throw new Error('Failed to submit');
        }
    } catch (error) {
        // Error
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Something went wrong. Please try again.';
    } finally {
        submitBtn.disabled = false;
    }
});