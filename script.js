function showSection(section) {

  const sections = document.querySelectorAll('.section');
  sections.forEach(s => {
    s.classList.remove('active');
  });

  const activeSection = document.getElementById(`section-${section}`);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}

window.onload = function() {
  showSection('home');
};

window.onload = function() {
  
  const tg = window.Telegram.WebApp;

  showSection('home');

  if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    document.getElementById('username').innerText = user.first_name + (user.last_name || '');
    document.getElementById('user-id').innerText = user.id;
  } else {
    document.getElementById('username').innerText = "Unknown";
    document.getElementById('user-id').innerText = "N/A";
  }
};
