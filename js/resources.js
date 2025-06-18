// Accordion logic
document.addEventListener('DOMContentLoaded', () => {
  const accordionContainer = document.querySelector('.accordion-content');

  accordionContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.accordion-group-header');
    console.log(groupHeader);
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.accordion-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of group body
    groupBody.classList.toggle('open');

    // Close other open group bodies
    const otherGroups = accordionContainer.querySelectorAll('.accordion-group');
    otherGroups.forEach((otherGroup) => {
      if (otherGroup != group) {
        const otherGroupBody = otherGroup.querySelector('.accordion-group-body');
        const otherGroupIcon = otherGroup.querySelector('.accordion-group-header i');

        otherGroupBody.classList.remove('open');
        otherGroupIcon.classList.remove('fa-minus');
        otherGroupIcon.classList.add('fa-plus');
      }
    });
  });
});