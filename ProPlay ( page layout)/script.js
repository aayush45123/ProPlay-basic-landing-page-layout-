const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('sideNav');

hamburger.addEventListener('click', function () {
    sideNav.classList.toggle('active');
});


// const accessReq = document.getElementById('access-req');

// const applyButtons = document.querySelectorAll('.access-req');

// applyButtons.forEach((button) => {
//     button.addEventListener('click', function () {
//         button.textContent = 'Application Sent';
//         button.disabled = true; 
//     });
// });


  const form = document.getElementById('subscriptionForm');
  const closeBtn = document.getElementById('close');
  const applyButtons = document.querySelectorAll('.access-req');

  applyButtons.forEach(button => {
    button.addEventListener('click', () => {
      form.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    form.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === form) {
      form.style.display = 'none';
    }
  });


