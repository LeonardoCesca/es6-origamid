export default function initDropDown() { }

const dropdownMenu = document.querySelectorAll('[data-dropdown]');
dropdownMenu.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
    })
})

function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('active');
    });
}

function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleOutSideClick);
        })
        element.setAttribute(outside, '');
    }

    function handleOutSideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside);
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutSideClick);
            })
            callback();
        }
    }
}