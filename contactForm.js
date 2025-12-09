document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = e.target;
    const data = {
        access_key: form.querySelector('[name="access_key"]').value,
        name: form.querySelector('[name="name"]').value,
        email: form.querySelector('[name="email"]').value,
        message: form.querySelector('[name="message"]').value
    };

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
           const msg = document.getElementById('form-success');
    msg.classList.remove('show'); // reset if it was already shown
    void msg.offsetWidth; // force reflow so animation restarts
    msg.classList.add('show');
    setTimeout(() => {
        msg.classList.remove('show');
    }, 4000);
    form.reset();
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    } catch (err) {
        console.error(err);
        alert('An error occurred. Please try again later.');
    }
});
