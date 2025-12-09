document.getElementById('email-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = e.target;
    const data = {
        access_key: form.querySelector('[name="access_key"]').value,
        email: form.querySelector('[name="email"]').value,
        subject: "New Mailing List Signup",
        message: `A new user joined the mailing list: ${form.querySelector('[name="email"]').value}`
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
            const msg = document.getElementById('email-success');
            msg.classList.remove('show'); // reset if already shown
            void msg.offsetWidth; // force reflow
            msg.classList.add('show');
            form.reset();
            setTimeout(() => {
        msg.classList.remove('show');
    }, 4000);
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    } catch (err) {
        console.error(err);
        alert('An error occurred. Please try again later.');
    }
});