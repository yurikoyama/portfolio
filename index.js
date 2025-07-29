document.addEventListener('DOMContentLoaded', () => {
  const drawerInput = document.getElementById('drawer_input');
  const navLinks = document.querySelectorAll('.nav_list a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawerInput.checked = false;
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion-toggle');

  accordions.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const box = toggle.closest('.service-box');
      const isOpen = box.classList.contains('active');

      // 他のアコーディオンを全部閉じる（必要なら）
      document.querySelectorAll('.service-box').forEach(box => {
        box.classList.remove('active');
      });

      // 今押したやつだけ開く／閉じる
      // if (!isOpen) {
      //   box.classList.add('active');
      // }
    });
  });
});


