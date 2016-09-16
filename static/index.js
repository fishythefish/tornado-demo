window.addEventListener("DOMContentLoaded", function() {
    var ws = new WebSocket("ws://localhost:8888/websocket");

    ws.onopen = function() {
        console.log("WebSocket opened");

        var form = document.getElementById("form");
        var text = document.getElementById("text");
        var button = document.getElementById("button");

        button.addEventListener("click", function() {
            ws.send(text.value);
        });
    };

    ws.onmessage = function(message) {
        alert(message.data);
    };
});
