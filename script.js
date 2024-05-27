document.getElementById('absenForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const password = document.getElementById('password').value;
    
    // Token Bot Telegram dan ID Chat
    const token = 'YOUR_TELEGRAM_BOT_TOKEN';
    const chatId = 'YOUR_TELEGRAM_CHAT_ID';
    
    // Kirim data ke bot Telegram
    const message = `username=${nama} telah datang rapat jam ${new Date().toLocaleTimeString()}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;
    
    // Kirim pesan ke bot Telegram
    fetch(url)
        .then(response => {
            if (response.ok) {
                // Redirect ke halaman terima kasih jika pesan terkirim
                window.location.href = 'terimakasih.html';
            } else {
                alert('Gagal mengirim pesan ke bot Telegram. Silakan coba lagi.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan. Silakan coba lagi.');
        });
});
