

function mark_system(subject, mark) {
    if (mark >= 0 && mark < 35) {
        alert(subject + ": You got F");
    } else if (mark >= 35 && mark < 45) {
        alert(subject + ": You got S");
    } else if (mark >= 45 && mark < 65) {
        alert(subject + ": You got C");
    } else if (mark >= 65 && mark < 75) {
        alert(subject + ": You got B");
    } else if (mark >= 75 && mark <= 100) {
        alert(subject + ": You got A");
    } else {
        alert("Invalid marks for " + subject);
    }
}

function calculateResult() {
    var subjects = ["English", "Tamil", "Mathematics", "Science", "Religion", "Civic", "Geography", "History", "I.C.T", "Art"];
    subjects.forEach(function(subject) {
        var inputElement = document.getElementById(subject);
        var mark = parseInt(inputElement.value);
        if (!isNaN(mark)) {
            mark_system(subject, mark);
        } else {
            alert("Invalid input for " + subject);
        }
    });
}
