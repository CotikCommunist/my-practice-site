$(document).ready(function () {

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
