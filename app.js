let subtract = document.getElementById("subtract");
let add = document.getElementById("add");

subtract.addEventListener("click", function() {
    let output = document.getElementById("output");
    let result = Number(output.innerHTML) -1;

    if ( result < 0) {
        return 0;
    }

    output.innerHTML = result;

});

add.addEventListener("click", function () {
    let output = document.getElementById("output");
    let result = Number(output.innerHTML) + 1;

    if (result > 10) {
        return 0;
    }

    output.innerHTML = result;
});
