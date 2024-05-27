document.getElementById('attendance-form').addEventListener('submit', function(event) {
event.preventDefault();
  const BOT_TOKEN = '6784104621:AAEVRyReTRmVtL_eGnFIZLbYm3FGkI0zF9M';
  const CHAT_ID = '7120969628';
  const name = document.getElementById('name').value;
  const department = document.getElementById('department').value;
  const password = document.getElementById('password').value;
  
  if (password === '12345') {
    const currentTime = new Date().toLocaleString();
    const message = `${name} dari ${department} telah hadir rapat pada waktu ${currentTime}`;
    
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`)
      .then(response => {
        if (response.ok) {
          window.location.href = 'terimakasih.html';
        } else {
          alert('Gagal mengirim data. Silakan coba lagi.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
      });
  } else {
    alert('Password rapat salah. Silakan coba lagi.');
  }
});
