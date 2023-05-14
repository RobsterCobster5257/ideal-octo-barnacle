function todaysDate() {
    var rightNow = new Date();
    document.getElementById("todaysDate").innerHTML = rightNow.toISOString().split('T')[0];
}

function styleTable() {
    var myTable = document.getElementById("my-table")
    myTable.style.color = "green";
    myTable.style.borderWidth = "0.3em";
    myTable.style.borderStyle = "dotted";
    myTable.style.borderColor = "yellow";
}