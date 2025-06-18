// Activities menu logic
document.addEventListener('DOMContentLoaded', () => {
	const activitiesContainer = document.querySelector('.activities-menu');

	activitiesContainer.addEventListener('click', (e) => {
		const activitySelected = e.target.closest('.menu-option');
		if (!activitySelected) return;

		if (activitySelected.classList.contains('active')) return;

		// toggle which menu item is actively selected
		activitySelected.classList.toggle('active');

		// Deselect other menu items
		const activityName = activitySelected.textContent;
		const otherOptions = activitiesContainer.querySelectorAll('.menu-option');

		otherOptions.forEach((otherOption) => {
			if (otherOption != activitySelected) {
				otherOption.classList.remove('active');
			}
		});

		// get selected activity group
		const activitiesContent = document.querySelector('.activities-content');
		let selectedGroup = null;
		switch (activityName) {
			case 'Variety':
				selectedGroup = activitiesContent.querySelector('.variety');
				console.log(selectedGroup);
				break;
			case 'Bookstores':
				selectedGroup = activitiesContent.querySelector('.bookstores');
				console.log(selectedGroup);
				break;
			case 'Outdoors':
				selectedGroup = activitiesContent.querySelector('.outdoors');
				console.log(selectedGroup);
				break;
			case 'Theater':
				selectedGroup = activitiesContent.querySelector('.theater');
				console.log(selectedGroup);
				break;
			case 'Restaurants':
				selectedGroup = activitiesContent.querySelector('.restaurants');
				console.log(selectedGroup);
				break;
			case 'Museums':
				selectedGroup = activitiesContent.querySelector('.museums');
				console.log(selectedGroup);
				break;
			case 'Movies':
				selectedGroup = activitiesContent.querySelector('.movies');
				console.log(selectedGroup);
				break;
			default:
				break;
		}

		if (!selectedGroup) return;

		// show selected activity group
		selectedGroup.classList.toggle('open');

		// hide non-selected activity groups
		const otherActivityGroups =
			activitiesContent.querySelectorAll('.activities-group');
		otherActivityGroups.forEach((activityGroup) => {
			if (activityGroup != selectedGroup) {
				activityGroup.classList.remove('open');
			}
		});
	});
});
