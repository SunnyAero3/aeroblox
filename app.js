
// ===============================
// AEROBLOX GLOBAL THEME SYSTEM
// ===============================

function applyTheme(theme) {
  var link = document.getElementById("themeStylesheet");
  if (link) {
    link.href = theme;
  }
  localStorage.setItem("aeroblox_theme", theme);
}

// Load saved theme on EVERY page
window.onload = function () {
  var saved = localStorage.getItem("aeroblox_theme");
  var link = document.getElementById("themeStylesheet");

  if (saved && link) {
    link.href = saved;
  }
};
