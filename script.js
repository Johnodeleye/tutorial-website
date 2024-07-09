const continueBtn = document.getElementById('continue-btn');
const tasks = document.querySelectorAll('.task');

tasks.forEach((task) => {
  const taskLink = task.querySelector('a');
  taskLink.addEventListener('click', () => {
    task.dataset.completed = true;
  });
});

continueBtn.addEventListener('click', (e) => {
  const allTasksCompleted = Array.from(tasks).every((task) => {
    return task.dataset.completed === 'true';
  });

  if (allTasksCompleted) {
    window.location.href = 'form.html';
  } else {
    alert('Please complete all tasks before continuing!');
  }
});



const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent the form from submitting normally
  alert('Congratulations! You have successfully registered for the free web development tutorials.');
  // You can also add code here to send the form data to your server or perform other tasks
});