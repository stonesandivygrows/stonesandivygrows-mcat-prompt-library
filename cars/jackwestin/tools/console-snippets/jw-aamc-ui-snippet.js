/*
Jack Westin / AAMC-style UI snippet (from a saved JW script excerpt).

Source: "Pasted text (2).txt" (user-provided). This is an excerpt, not guaranteed to be the full script.
Use: paste into Chrome DevTools Console on a Jack Westin MCAT-style test page.
*/

function pageGlobal(name) {
  return (typeof window !== 'undefined' && window[name]) || null;
}

function toggleClassIfPresent(el, className) {
  if (el && el.classList) {
    el.classList.toggle(className);
  }
}

function setModeButtonText(button, text) {
  var label = button && button.querySelector ? button.querySelector('span') : null;
  if (label) {
    label.innerText = text;
  }
}

// Hide Statistics toggle (cookie-backed)
var statisticsStatus = fetchCookie('jw-hide-statistics')
if (!statisticsStatus) {
  statisticsStatus = 0;
}
var toggleStatisticsControl = pageGlobal('toggleStatistics');
if (toggleStatisticsControl) {
  if (statisticsStatus == 1) {
    toggleStatisticsControl.setAttribute('checked', true);
  } else {
    toggleStatisticsControl.removeAttribute('checked');
  }
  window.showStatistics = statisticsStatus;
  toggleStatisticsControl.onclick = function () {
    statisticsStatus = fetchCookie('jw-hide-statistics')
    if (!statisticsStatus) {
      statisticsStatus = 0;
    }
    statisticsStatus = (statisticsStatus == 1) ? 0 : 1;
    window.showStatistics = statisticsStatus;
    storeCookie('jw-hide-statistics', statisticsStatus, 365);
    if (statisticsStatus == 1) {
      toggleStatisticsControl.setAttribute('checked', true);
    } else {
      toggleStatisticsControl.removeAttribute('checked');
    }
  }
}

function toggleDarkClasses() {
  const is_dat = false;
  if (!is_dat) {
    toggleClassIfPresent(pageGlobal('bodyElement') || document.body, 'dark');
    toggleClassIfPresent(pageGlobal('aamcConfig') || document.querySelector('#aamc-configuration'), 'dark');
    toggleClassIfPresent(pageGlobal('increase'), 'btn-dark');
    toggleClassIfPresent(pageGlobal('normal'), 'btn-dark');
    toggleClassIfPresent(pageGlobal('decrease'), 'btn-dark');
  }
}

var darkMode = fetchCookie('dark-mode');
var darkModeButton = pageGlobal('darkModeBtn');
var sunIcon = pageGlobal('sun');
var moonIcon = pageGlobal('moon');
if (darkMode) {
  if (darkMode == 1) {
    toggleDarkClasses();
    toggleClassIfPresent(sunIcon, 'disable');
    toggleClassIfPresent(moonIcon, 'disable');
    setModeButtonText(darkModeButton, 'Light mode');
  } else {
    setModeButtonText(darkModeButton, 'Dark mode');
  }
}

if (darkModeButton) {
  darkModeButton.onclick = function (e) {
    toggleDarkMode();
  }
}

function toggleDarkMode() {
  toggleDarkClasses();
  toggleClassIfPresent(sunIcon, 'disable');
  toggleClassIfPresent(moonIcon, 'disable');
  if (darkMode == 1) {
    darkMode = 0;
    setModeButtonText(darkModeButton, 'Dark mode')
    storeCookie('dark-mode', darkMode, 365);
  } else {
    darkMode = 1;
    setModeButtonText(darkModeButton, 'Light mode')
    storeCookie('dark-mode', darkMode, 365);
  }
}

function storeCookie(name, value, days2expire) {
  var date = new Date();
  date.setTime(date.getTime() + (days2expire * 24 * 60 * 60 * 1000));
  var expires = date.toUTCString();
  document.cookie = name + '=' + value + ';' + 'expires=' + expires + ';' + 'path=/;';
}

function fetchCookie(name) {
  var cookie_value = "",
    current_cookie = "",
    name_expr = name + "=",
    all_cookies = document.cookie.split(';'),
    n = all_cookies.length;
  for (var i = 0; i < n; i++) {
    current_cookie = all_cookies[i].trim();
    if (current_cookie.indexOf(name_expr) == 0) {
      cookie_value = current_cookie.substring(name_expr.length, current_cookie.length);
      break;
    }
  }
  return cookie_value;
}

function toggleConfiguration(event) {
  var configButton = pageGlobal('btn');
  var configPanel = document.querySelector('#aamc-configuration');
  var overlay = pageGlobal('overly');

  if (configButton) {
    configButton.classList.toggle('opened');
    configButton.setAttribute('aria-expanded', configButton.classList.contains('opened'))
  }
  toggleClassIfPresent(configPanel, 'active');
  toggleClassIfPresent(overlay, 'hide');
}
var configButton = pageGlobal('btn');
var overlay = pageGlobal('overly');
if (configButton) {
  configButton.onclick = toggleConfiguration;
}
if (overlay) {
  overlay.onclick = toggleConfiguration;
}

// NOTE: The saved source excerpt ends before the font-size handlers are complete.
// Do not install a partial `increase.onclick` handler, because that would replace
// the page's existing behavior with a no-op.
