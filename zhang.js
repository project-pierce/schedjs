function showCourse(course,check){
    var checkBox = document.getElementById(check);
    var cells = document.getElementsByClassName(course);
    for (var cell = 0; cell < cells.length; cell++){
        if (checkBox.checked == true){
          cells[cell].style.display = "block";
        } else {
           cells[cell].style.display = "none";
        }
    }
}

function colorCourse(course,color){
    var cellColor = document.getElementById(color);
    var cells = document.getElementsByClassName(course);
    for (var cell = 0; cell < cells.length; cell++){
        cells[cell].style.background = cellColor.value;
    }
}
