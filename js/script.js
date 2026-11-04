// ===== Функция 1: мобильное меню =====

// Находим кнопку и меню на странице по их id
var menuBtn = document.getElementById("menuBtn");
var nav = document.getElementById("nav");

// Когда нажимаем на кнопку...
menuBtn.addEventListener("click", function () {
  // ...добавляем или убираем у меню класс "open" (в CSS он показывает меню)
  nav.classList.toggle("open");
});

// Когда нажимаем на ссылку в меню, меню закрывается
var links = nav.querySelectorAll("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    nav.classList.remove("open");
  });
}


// ===== Функция 2: проверка формы =====

// Находим форму и все нужные поля
var form = document.getElementById("form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

// Когда пользователь нажимает «Отправить»...
form.addEventListener("submit", function (event) {
  // ...останавливаем обычную отправку, страница не перезагрузится
  event.preventDefault();

  // Сначала считаем, что ошибок нет
  var ok = true;

  // Очищаем старые сообщения
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("success").textContent = "";

  // Проверка имени: trim() убирает пробелы по краям
  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").textContent = "Введите имя";
    ok = false;
  }

  // Проверка почты: в ней должен быть знак @
  if (emailInput.value.indexOf("@") === -1) {
    document.getElementById("emailError").textContent = "Введите почту с символом @";
    ok = false;
  }

  // Проверка сообщения: минимум 5 символов
  if (messageInput.value.trim().length < 5) {
    document.getElementById("messageError").textContent = "Напишите сообщение, минимум 5 символов";
    ok = false;
  }

  // Если ошибок нет, показываем успех и очищаем форму
  if (ok === true) {
    document.getElementById("success").textContent = "Спасибо! Сообщение заполнено верно.";
    form.reset();
  }
});


// ===== Функция 3: тёмная и светлая тема =====

var themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  // Добавляем или убираем класс "dark" у всей страницы (body)
  document.body.classList.toggle("dark");

  // Меняем надпись на кнопке в зависимости от темы
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Светлая тема";
  } else {
    themeBtn.textContent = "Тёмная тема";
  }
});


// ===== Функция 4: фильтр навыков =====

var filterButtons = document.querySelectorAll(".filter-btn");
var skills = document.querySelectorAll(".skill");

// Для каждой кнопки фильтра ставим обработчик нажатия
for (var f = 0; f < filterButtons.length; f++) {
  filterButtons[f].addEventListener("click", function () {
    // Какой фильтр выбрали: all, tech или personal
    var chosen = this.getAttribute("data-filter");

    // У всех кнопок убираем выделение, а нажатой добавляем
    for (var b = 0; b < filterButtons.length; b++) {
      filterButtons[b].classList.remove("active");
    }
    this.classList.add("active");

    // Проходим по карточкам и решаем, показать или спрятать
    for (var k = 0; k < skills.length; k++) {
      var type = skills[k].getAttribute("data-type");
      if (chosen === "all" || chosen === type) {
        skills[k].classList.remove("hidden");
      } else {
        skills[k].classList.add("hidden");
      }
    }
  });
}
