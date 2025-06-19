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
			case 'Bookstores':
				selectedGroup = activitiesContent.querySelector('.bookstores');
				break;
			case 'Outdoors':
				selectedGroup = activitiesContent.querySelector('.outdoors');
				break;
			case 'Theater':
				selectedGroup = activitiesContent.querySelector('.theater');
				break;
			case 'Restaurants':
				selectedGroup = activitiesContent.querySelector('.restaurants');
				break;
			case 'Museums':
				selectedGroup = activitiesContent.querySelector('.museums');
				break;
			case 'Movies':
				selectedGroup = activitiesContent.querySelector('.movies');
				break;
			case 'Variety':
				selectedGroup = activitiesContent.querySelector('.variety');
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
