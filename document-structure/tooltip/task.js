const tooltipActivateClass = 'tooltip_active';
const link = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');
const gap4tip = 5;
const hideTipOnSceoll = true;
const position = 'bottom'
// const position = 'top'
// const position = 'left'
// const position = 'right'

function showTooltip(el) {
    let rectHasTip = el.currentTarget.getBoundingClientRect();
    tooltip.textContent = el.currentTarget.title;
    tooltip.setAttribute('data-position', el.currentTarget.pos);
    tooltip.classList.add(tooltipActivateClass);
    let rectTip = tooltip.getBoundingClientRect();
    switch (tooltip.dataset.position) {
        case 'bottom' : if (window.innerHeight - rectHasTip.top - rectHasTip.height - rectTip.height - gap4tip >= 0) {
                            tooltip.style.left = rectHasTip.left + 'px';
                            tooltip.style.top = rectHasTip.top + Number(rectHasTip.height.toFixed()) + gap4tip + 'px';
                        }
                        else {
                            tooltip.classList.remove(tooltipActivateClass);
                            console.log('tip out of visible area')
                        }
                        break;
        case 'top' :    if (rectHasTip.top - rectHasTip.height - rectTip.height - gap4tip >= 0) {
                            tooltip.style.left = rectHasTip.left + 'px';
                            tooltip.style.top = rectHasTip.top - Number(rectTip.height.toFixed()) - gap4tip + 'px';
                        }
                        else {
                            tooltip.classList.remove(tooltipActivateClass);
                            console.log('tip out of visible area')
                        }
                        break;
        case 'left' :       if (rectHasTip.left - rectTip.width - gap4tip >= 0) {
                                tooltip.style.left = rectHasTip.left - rectTip.width - gap4tip + 'px';
                                tooltip.style.top = rectHasTip.top + 'px';
                            }
                            else {
                                tooltip.classList.remove(tooltipActivateClass);
                                console.log('tip out of visible area')
                            }
                            break;
        case 'right' :      if (window.innerHeight - rect.top - rect.height - rectTip.height - gap4tip >= 0) {
                                tooltip.style.left = rect.left + 'px';
                                tooltip.style.top = rect.top + Number(rect.height.toFixed()) + gap4tip + 'px';
                            }
                            else {
                                tooltip.classList.remove(tooltipActivateClass);
                                console.log('tip out of visible area')
                            }
    }
    tooltip.style.zIndex = '99'
};

link.forEach((el) => {
    el.addEventListener('click', showTooltip, false)
    el.title = el.title;
    el.pos = position;
})

window.addEventListener("scroll", () => {
    if (hideTipOnSceoll) {
        tooltip.classList.remove(tooltipActivateClass);
    }
});