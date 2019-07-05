export default function initTooltip() {

}

const toolTips = document.querySelectorAll('[data-tooltip]');

toolTips.forEach((item) => {
    item.addEventListener('mouseover', onMouserOver);
})

function onMouserOver(event) {
    criarTooltipBox(this);
    console.log(event);
}

function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    console.log(element);
}