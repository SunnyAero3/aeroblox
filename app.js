
/* ===============================
   AEROBLOX GLOBAL THEME SYSTEM (FIXED)
   =============================== */

function applyTheme(theme) {
  var link = document.getElementById("themeStylesheet");

  if (link) {
    link.href = theme;
  }

  try {
    localStorage.setItem("aeroblox_theme", theme);
  } catch (e) {}
}

function loadTheme() {
  var saved = null;

  try {
    saved = localStorage.getItem("aeroblox_theme");
  } catch (e) {}

  var link = document.getElementById("themeStylesheet");

  if (saved && link) {
    link.href = saved;
  }
}

/* RUN AS EARLY AS POSSIBLE */
document.addEventListener("DOMContentLoaded", function () {
  loadTheme();
});

/* fallback for older browsers */
window.onload = function () {
  loadTheme();
};
