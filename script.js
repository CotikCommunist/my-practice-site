$(document).ready(function () {

    // Форма 
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

        alert("Запрос отправлен!");
    });

    // Загрузка отзывов
    function loadReviews() {
        $.getJSON("reviews.json", function (data) {

            let container = $("#reviewsList");
            container.empty();

            data.forEach(r => {

                let item = 
                <div class="col-md-4">
                    <div class="p-3 shadow-sm rounded bg-white">
                        <h5>${r.name}</h5>
                        <p class="text-muted">${r.text}</p>
                    </div>
                </div>
                ;

                container.append(item);
            });

        }).fail(function () {
            console.log("Ошибка загрузки reviews.json");
        });
    }

    loadReviews();


});
