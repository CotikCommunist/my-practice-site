$(document).ready(function () {

    // Отзывы
    function loadReviews() {
        $.getJSON("reviews.json", function (data) {

            let container = $("#reviewsList");
            container.empty();

            data.forEach(r => {
                container.append(
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="p-3 border rounded h-100">
                            <div class="d-flex align-items-center mb-2">
                                <span style="font-size:22px; margin-right:10px;">ℹ️</span>
                                <h5 class="mb-0">${r.name}</h5>
                            </div>
                            <p class="text-muted">${r.text}</p>
                        </div>
                    </div>
                );
            });

        }).fail(function () {
            console.error("Ошибка: не удалось загрузить reviews.json");
        });
    }

    // Загрузка отзывов
    loadReviews();



    // Условия первой и второй формы
    $("#form1").on("submit", function (e) {
        e.preventDefault();
        
        let name = $("#name1").val().trim();
        let email = $("#email1").val().trim();
        let message = $("#message1").val().trim();
        
        if (name.length < 3) {
            alert("Имя должно содержать минимум 3 символа");
            return;
        }

        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailReg.test(email)) {
            alert("Введите корректную почту");
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
                alert("Запрос ушёл успешно (локальный сервер может не работать)");
            }
        });
    });

});
