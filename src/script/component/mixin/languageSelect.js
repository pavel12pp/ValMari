document.addEventListener('DOMContentLoaded', function () {
  const select = document.querySelector('.header__languages');
  const optionsContainer = select.querySelector('.header__languages-wrapper');
  const button = select.querySelector('.header__languages-button');
  const choosedOption = select.querySelector('.choosed');



  // Функция для открытия/закрытия списка опций
  button.addEventListener('click', (event) => {
    select.classList.toggle('open');
    event.preventDefault()
  });

  // Обработка выбора опции
  optionsContainer.addEventListener('click', function (event) {
    if (event.target.closest('.header__language')) {
      const selectedOption = event.target.closest('.header__language');
      select.querySelector('.choosed').classList.remove('choosed');
      selectedOption.classList.add('choosed')
      optionsContainer.prepend(selectedOption);
      select.classList.remove('open');
    }
  });

  // Закрытие списка при клике вне его области
  document.addEventListener('click', function (event) {
    if (!select.contains(event.target)) {
      select.classList.remove('open');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const select = document.querySelector('.burger__languages');
  const optionsContainer = select.querySelector('.burger__languages-wrapper');
  const button = select.querySelector('.burger__languages-button');
  const choosedOption = select.querySelector('.choosed');



  // Функция для открытия/закрытия списка опций
  button.addEventListener('click', (event) => {
    select.classList.toggle('open');
    event.preventDefault()
  });

  // Обработка выбора опции
  optionsContainer.addEventListener('click', function (event) {
    if (event.target.closest('.burger__language')) {
      const selectedOption = event.target.closest('.burger__language');
      select.querySelector('.choosed').classList.remove('choosed');
      selectedOption.classList.add('choosed')
      optionsContainer.prepend(selectedOption);
      select.classList.remove('open');
    }
  });

  // Закрытие списка при клике вне его области
  document.addEventListener('click', function (event) {
    if (!select.contains(event.target)) {
      select.classList.remove('open');
    }
  });
});