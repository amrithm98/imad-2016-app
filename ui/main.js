var button = document.getElementById('counter');
button.onclick = function() {
    var request = new XMLHttpRequest(); //req made
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //make req
    request.open('GET', "http://localhost:8080/counter", true);
    request.send(null);
}

var submit = document.getElementById('Submit');
submit.onclick = function() {
    //make a req and send name
    //get list of names as response and put it to the unordered list
    var request = new XMLHttpRequest(); //req made
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i = 0; i < names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;

            }
        }
    };
    //make req
    var nameInput = document.getElementById('namein');
    var name = nameInput.value;
    request.open('GET', "http://localhost:8080/submit-name?name=" + name, true);
    request.send(null);
};
