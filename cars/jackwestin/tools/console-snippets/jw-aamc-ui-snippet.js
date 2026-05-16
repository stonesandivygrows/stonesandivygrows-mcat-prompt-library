/*
Jack Westin / AAMC-style UI snippet (from a saved JW script excerpt).

Source: "Pasted text (2).txt" (user-provided). This is an excerpt, not guaranteed to be the full script.
Use: paste into Chrome DevTools Console on a Jack Westin MCAT-style test page.
*/

// Hide Statistics toggle (cookie-backed)
var statisticsStatus = fetchCookie('jw-hide-statistics')
if (!statisticsStatus) {
  statisticsStatus = 0;
}
if (toggleStatistics) {
  if (statisticsStatus == 1) {
    toggleStatistics.setAttribute('checked', true);
  } else {
    toggleStatistics.removeAttribute('checked');
  }
  window.showStatistics = statisticsStatus;
  toggleStatistics.onclick = function () {
    statisticsStatus = fetchCookie('jw-hide-statistics')
    if (!statisticsStatus) {
      statisticsStatus = 0;
    }
    statisticsStatus = (statisticsStatus == 1) ? 0 : 1;
    window.showStatistics = statisticsStatus;
    storeCookie('jw-hide-statistics', statisticsStatus, 365);
    if (statisticsStatus == 1) {
      toggleStatistics.setAttribute('checked', true);
    } else {
      toggleStatistics.removeAttribute('checked');
    }
  }
}

function toggleDarkClasses() {
  const is_dat = false;
  if (!is_dat) {
    bodyElement.classList.toggle('dark');
    aamcConfig.classList.toggle('dark');
    increase.classList.toggle('btn-dark');
    normal.classList.toggle('btn-dark');
    decrease.classList.toggle('btn-dark');
  }
}

var darkMode = fetchCookie('dark-mode');
if (darkMode) {
  if (darkMode == 1) {
    toggleDarkClasses();
    sun.classList.toggle('disable');
    moon.classList.toggle('disable');
    darkModeBtn.querySelector('span').innerText = 'Light mode';
  } else {
    darkModeBtn.querySelector('span').innerText = 'Dark mode';
  }
}

darkModeBtn.onclick = function (e) {
  toggleDarkMode();
}

function toggleDarkMode() {
  toggleDarkClasses();
  sun.classList.toggle('disable');
  moon.classList.toggle('disable');
  if (darkMode == 1) {
    darkMode = 0;
    darkModeBtn.querySelector('span').innerText = 'Dark mode'
    storeCookie('dark-mode', darkMode, 365);
  } else {
    darkMode = 1;
    darkModeBtn.querySelector('span').innerText = 'Light mode'
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
  if (btn) {
    btn.classList.toggle('opened');
    btn.setAttribute('aria-expanded', btn.classList.contains('opened'))
  }
  document.querySelector('#aamc-configuration').classList.toggle('active');
  overly.classList.toggle('hide');
}
if (btn) {
  btn.onclick = toggleConfiguration;
}
overly.onclick = toggleConfiguration;

increase.onclick = function () {
  let elements = document.querySelectorAll(
    'div[ref="base"] > div p, div[ref="base"] > div, label span, #correct-answer p');
  // NOTE: excerpt ends here in the source file.
}
