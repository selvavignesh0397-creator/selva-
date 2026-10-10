const startButton = document.getElementById('start-calculator');

startButton.addEventListener('click', function () {
  const subject1 = Number(prompt('Enter marks for Subject 1:'));
  const subject2 = Number(prompt('Enter marks for Subject 2:'));
  const subject3 = Number(prompt('Enter marks for Subject 3:'));
  const subject4 = Number(prompt('Enter marks for Subject 4:'));
  const subject5 = Number(prompt('Enter marks for Subject 5:'));

  const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
  const averageMarks = totalMarks / 5;

  let grade;

  if (averageMarks >= 90) {
    grade = 'A+';
  } else if (averageMarks >= 80) {
    grade = 'A';
  } else if (averageMarks >= 70) {
    grade = 'B';
  } else if (averageMarks >= 60) {
    grade = 'C';
  } else if (averageMarks >= 50) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  alert(
    'Total Marks: ' + totalMarks + '\n' +
    'Average Marks: ' + averageMarks.toFixed(2) + '\n' +
    'Grade: ' + grade
  );
});
