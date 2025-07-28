document.addEventListener('DOMContentLoaded', () => {
  const drawerInput = document.getElementById('drawer_input');
  const navLinks = document.querySelectorAll('.nav_list a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawerInput.checked = false;
    });
  });
});

