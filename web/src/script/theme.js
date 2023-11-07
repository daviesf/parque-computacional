export function theme() {
  document.addEventListener("DOMContentLoaded", function () {
      const themeIcon = document.getElementById('theme-icon')
      const theme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*=\s*([^;]*).*$)|^.*$/, "$1");
      const app = document.querySelector('.sidebar')
      const app1 = document.querySelector('body')
      if (theme) {
          if (theme == 'dark') {
              themeIcon.classList.replace('moon', 'sun')
              app.classList.add('dark-mode')
              app1.classList.add('dark-mode')
          } else if (theme == 'light') {
              themeIcon.classList.replace('sun', 'moon')
              app.classList.remove('dark-mode')
              app1.classList.remove('dark-mode')
          }
      }
  });
}
