function validateForm() {
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

    if (name === '') {
        document.getElementById('nameError').textContent = 'Nama harus diisi.';
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email harus diisi.';
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'Format email tidak valid.';
        isValid = false;
    }

    const phonePattern = /^[0-9]+$/;
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Nomor telepon harus diisi.';
        isValid = false;
    } else if (!phone.match(phonePattern)) {
        document.getElementById('phoneError').textContent = 'Nomor telepon hanya boleh berisi angka.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Pesan harus diisi.';
        isValid = false;
    }

    return isValid;
}
