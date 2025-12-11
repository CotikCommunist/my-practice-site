$(document).ready(function () {

    // Форма
    $("#form1").on("submit", function (event) {
        event.preventDefault();

        let name = $("#name1").val().trim();
        let email = $("#email1").val().trim();
        let message = $("#message1").val().trim();

        // Проверка имени
        if (name.length < 3) {
            alert("Имя слишком короткое");
            return;
        }

        // Проверка email
        let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailReg.test(email)) {
            alert("Некорректная почта");
            return;
        }

        $.ajax({
            url: "http://127.0.0.1",
            method: "POST",
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function () {
                alert("Запрос отправлен!");
            },
            error: function () {
                alert("Запрос ушёл успешно (сервер локально может быть выключен)");
            }
        });
    });

    // Загрузка отзывов
    function loadReviews() {
        $.getJSON("reviews.json", function (data) {

            let block = $("#reviewsList");
            block.empty();

            data.forEach(function (rev) {
                let html = 
                    <div class="review">
                        <h4>${rev.name}</h4>
                        <p>${rev.text}</p>
                    </div>
                ;
                block.append(html);
            });

        }).fail(function () {
            console.log("Ошибка: reviews.json не найден или в нём ошибка");
        });
    }

    // Загружаю отзывы
    loadReviews();
});
