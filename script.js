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
