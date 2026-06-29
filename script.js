

var burgerBtn  = document.getElementById('burgerBtn');
var mobileMenu = document.getElementById('mobileMenu');
var mobileLinks = document.querySelectorAll('.mobile-link');

burgerBtn.addEventListener('click', function() {

  burgerBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');

});

mobileLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    burgerBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});



var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

});



var scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {

  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }

});

scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



var tabButtons = document.querySelectorAll('.tab-btn');
var tabPanels  = document.querySelectorAll('.tab-panel');

tabButtons.forEach(function(button) {
  button.addEventListener('click', function() {

    var tabName = button.getAttribute('data-tab');

    tabButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    tabPanels.forEach(function(panel) {
      panel.classList.remove('active');
    });

    button.classList.add('active');

    var targetPanel = document.getElementById('tab-' + tabName);
    targetPanel.classList.add('active');

  });
});



var fadeItems = document.querySelectorAll('.fade-in');

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

fadeItems.forEach(function(item) {
  observer.observe(item);
});



var myForm = document.getElementById('myForm');

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


function showError(id, show) {
  var errorEl = document.getElementById('err-' + id);
  if (show) {
    errorEl.classList.add('show');
  } else {
    errorEl.classList.remove('show');
  }
}

function markField(input, isValid) {
  if (isValid) {
    input.classList.remove('has-error');
    input.classList.add('has-success');
  } else {
    input.classList.add('has-error');
    input.classList.remove('has-success');
  }
}


function checkFirstName() {
  var input = document.getElementById('firstName');
  var value = input.value.trim();
  var isValid = value.length >= 2;
  markField(input, isValid);
  showError('firstName', !isValid);
  return isValid;
}

function checkLastName() {
  var input = document.getElementById('lastName');
  var value = input.value.trim();
  var isValid = value.length >= 2;
  markField(input, isValid);
  showError('lastName', !isValid);
  return isValid;
}

function checkEmail() {
  var input = document.getElementById('email');
  var value = input.value.trim();
  var isValid = emailPattern.test(value);
  markField(input, isValid);
  showError('email', !isValid);
  return isValid;
}

function checkTeam() {
  var input = document.getElementById('favTeam');
  var isValid = input.value !== '';
  if (isValid) {
    input.classList.remove('has-error');
    input.classList.add('has-success');
  } else {
    input.classList.add('has-error');
    input.classList.remove('has-success');
  }
  showError('favTeam', !isValid);
  return isValid;
}

function checkPassword() {
  var input = document.getElementById('password');
  var isValid = passwordPattern.test(input.value);
  markField(input, isValid);
  showError('password', !isValid);
  return isValid;
}

function checkConfirmPassword() {
  var password = document.getElementById('password').value;
  var input    = document.getElementById('confirmPassword');
  var isValid  = input.value.length > 0 && input.value === password;
  markField(input, isValid);
  showError('confirmPassword', !isValid);
  return isValid;
}


document.getElementById('firstName').addEventListener('blur', checkFirstName);
document.getElementById('lastName').addEventListener('blur', checkLastName);
document.getElementById('email').addEventListener('blur', checkEmail);
document.getElementById('favTeam').addEventListener('change', checkTeam);
document.getElementById('password').addEventListener('blur', checkPassword);
document.getElementById('confirmPassword').addEventListener('blur', checkConfirmPassword);


myForm.addEventListener('submit', function(e) {
  e.preventDefault(); 
  var ok1 = checkFirstName();
  var ok2 = checkLastName();
  var ok3 = checkEmail();
  var ok4 = checkTeam();
  var ok5 = checkPassword();
  var ok6 = checkConfirmPassword();

  if (ok1 && ok2 && ok3 && ok4 && ok5 && ok6) {

    var name = document.getElementById('firstName').value.trim();
    localStorage.setItem('fanName', name);

    myForm.style.display = 'none';
    document.getElementById('successMessage').classList.add('show');
  }

});



document.getElementById('eyeBtn1').addEventListener('click', function() {
  var input = document.getElementById('password');
  var icon  = document.getElementById('eyeIcon1');

  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fa fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fa fa-eye';
  }
});

document.getElementById('eyeBtn2').addEventListener('click', function() {
  var input = document.getElementById('confirmPassword');
  var icon  = document.getElementById('eyeIcon2');

  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fa fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fa fa-eye';
  }
});



var cookieBanner = document.getElementById('cookieBanner');
var cookieBtn    = document.getElementById('cookieBtn');

if (localStorage.getItem('cookiesAccepted') === 'yes') {
  cookieBanner.classList.add('hidden');
}

cookieBtn.addEventListener('click', function() {
  localStorage.setItem('cookiesAccepted', 'yes');
  cookieBanner.classList.add('hidden');
});