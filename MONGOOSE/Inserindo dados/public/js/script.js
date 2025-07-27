document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('productForm');
  const successMessage = document.getElementById('successMessage');

  // Foco automático no primeiro campo
  const firstInput = document.querySelector('input[name="name"]');
  if (firstInput) {
    setTimeout(() => {
      firstInput.focus();
    }, 400);
  }

  // Validação em tempo real
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', function () {
      if (this.value.trim() !== '') {
        this.classList.add('has-value');
      } else {
        this.classList.remove('has-value');
      }
    });
  });

  // Simulação de envio do formulário
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulação de requisição AJAX
    setTimeout(() => {
      successMessage.style.display = 'block';
      form.reset();

      // Resetar animação
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
    }, 800);
  });

  // Animação de hover no card
  const formCard = document.querySelector('.form-card');
  formCard.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.15)';
  });

  formCard.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  });
});
