import './styles/app.scss';

document.addEventListener('DOMContentLoaded', () => {

    const product = document.querySelectorAll('.product-item');

    const testProductInfo = [
        {
            name: 'foieGras',
            amount: 3,
            selectedText: 'Печень утки разварная с артишоками.',
            disabledText: 'Печалька, с фуа-гра закончился.',
        },
        {
            name: 'fish',
            amount: 8,
            selectedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            disabledText: 'Печалька, с рыбой закончился.',
        },
        {
            name: 'chicken',
            amount: 0,
            selectedText: 'Филе из цыплят с трюфелями в бульоне.',
            disabledText: 'Печалька, с курой закончился.',
        },
    ];

    testProductInfo.forEach((itemsObj) => {
        let item = document.querySelector(`#${itemsObj.name}`);

        item.addEventListener('click', () => {
            if (itemsObj.amount <= 0) {
                handlePurchaseError(item, itemsObj.disabledText);
            } else {
                selectPurchase(item);
            }
        });
    })

    if (!isMobile() && !isTablet()) {
        Array.from(product).forEach((item) => {
            let currentElem = null;
            let target = item;
            item.onmouseover = function(event) {
                if (currentElem) return;
                let target = event.target.closest('.product-item');
                if (!target) return;

                currentElem = target;

                if (item.classList.contains('selected')) {
                    return;
                }
                target.classList.add('onmouseover');
                target.classList.remove('onmouseout');
            };

            item.onmouseout = function(event) {
                if (!currentElem) return;
                let relatedTarget = event.relatedTarget;

                while (relatedTarget) {
                    if (relatedTarget === target) return;
                    relatedTarget = relatedTarget.parentNode;
                }
                currentElem.classList.add('onmouseout');
                currentElem.classList.remove('onmouseover');
                currentElem = null;
            };
        });
    }
});

function selectPurchase(item) {
    item.classList.toggle('selected');
}

function handlePurchaseError(item, text) {
    item.classList.toggle('disabled');
    item.querySelector('.product-item__text').innerText = text;
}

function isMobile() {
    const navigator = window.navigator.userAgent || window.navigator.vendor || window.opera;
    const devicesArr = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return devicesArr.some((device) => {
        return navigator.match(device);
    });
}

function isTablet() {
    const navigator = window.navigator.userAgent || window.navigator.vendor || window.opera;
    return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.toLowerCase());
}
