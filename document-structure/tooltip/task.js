const hideTipOnSceoll = true;
const gap4tip = 5;
const position = 'bottom'
// const position = 'top'
// const position = 'left'
// const position = 'right'

function showTooltip(el) {
    console.log('show tip');
    console.log('textContent', document.querySelector('.tooltip').textContent.trim(),'current',el.currentTarget.title)
    if ((document.querySelector('.tooltip').textContent !== el.currentTarget.title) || !(document.querySelector('.tooltip').classList.contains('tooltip_active'))) {
        let rectHasTip = el.currentTarget.getBoundingClientRect();
        document.querySelector('.tooltip').textContent = el.currentTarget.title;
        document.querySelector('.tooltip').setAttribute('data-position', el.currentTarget.pos);
        document.querySelector('.tooltip').classList.add('tooltip_active');
        let rectTip = document.querySelector('.tooltip').getBoundingClientRect();
        console.log('position',document.querySelector('.tooltip').dataset.position);
        switch (document.querySelector('.tooltip').dataset.position) {
            case 'bottom' : if (window.innerHeight - rectHasTip.top - rectHasTip.height - rectTip.height - gap4tip >= 0) {
                                document.querySelector('.tooltip').style.left = rectHasTip.left + 'px';
                                document.querySelector('.tooltip').style.top = rectHasTip.top + Number(rectHasTip.height.toFixed()) + gap4tip + 'px';
                                console.log('top:',document.querySelector('.tooltip'));
                                console.log('top:',document.querySelector('.tooltip').style.top);
                            }
                            else {
                                document.querySelector('.tooltip').classList.remove('tooltip_active');
                                console.log('tip out of visible area')
                            }
                            break;
            case 'top' :    if (rectHasTip.top - rectHasTip.height - rectTip.height - gap4tip >= 0) {
                                document.querySelector('.tooltip').style.left = rectHasTip.left + 'px';
                                document.querySelector('.tooltip').style.top = rectHasTip.top - Number(rectTip.height.toFixed()) - gap4tip + 'px';
                            }
                            else {
                                document.querySelector('.tooltip').classList.remove('tooltip_active');
                                console.log('tip out of visible area')
                            }
                            break;
            case 'left' :       if (rectHasTip.left - rectTip.width - gap4tip >= 0) {
                                    document.querySelector('.tooltip').style.left = rectHasTip.left - rectTip.width - gap4tip + 'px';
                                    document.querySelector('.tooltip').style.top = rectHasTip.top + 'px';
                                }
                                else {
                                    document.querySelector('.tooltip').classList.remove('tooltip_active');
                                    console.log('tip out of visible area')
                                }
                                break;
            case 'right' :      if (window.innerHeight - rect.top - rect.height - rectTip.height - gap4tip >= 0) {
                                    document.querySelector('.tooltip').style.left = rect.left + 'px';
                                    document.querySelector('.tooltip').style.top = rect.top + Number(rect.height.toFixed()) + gap4tip + 'px';
                                }
                                else {
                                    document.querySelector('.tooltip').classList.remove('tooltip_active');
                                    console.log('tip out of visible area')
                                }
                            }
        document.querySelector('.tooltip').style.zIndex = '99'
    }
    else (
        document.querySelector('.tooltip').classList.toggle('tooltip_active')
    )
};

document.querySelectorAll('.has-tooltip').forEach((el) => {
    el.addEventListener('click', showTooltip, false)
    el.title = el.title;
    el.pos = position;
})

window.addEventListener("scroll", () => {
    if (hideTipOnSceoll) {
        document.querySelector('.tooltip').classList.remove('tooltip_active');
    }
});