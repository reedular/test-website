// Activities menu logic
document.addEventListener('DOMContentLoaded', () => {
  const activitiesContainer = document.querySelector('.activities-menu');

  activitiesContainer.addEventListener('click', (e) => {
    const activitySelected = e.target.closest('.menu-option');
    console.log(activitySelected);
  });
});