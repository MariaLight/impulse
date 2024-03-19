window.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.functional-tab__btn');
    let tabsContent = document.querySelectorAll('.functional-tab__pane');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            resetTabs(tabs, tabsContent);
            tabs[i].classList.add('active');
            let contentId = tabs[i].getAttribute('data-target-id');
            let contentBlock = document.querySelector('[data-id="' + contentId + '"]');
            contentBlock.classList.add('active');
        })
        let innerTabs = tabsContent[i].querySelectorAll('.inner-tabs__btn');
        let innerTabsContent = tabsContent[i].querySelectorAll('.inner-tabs__pane');
        for (let i = 0; i < innerTabs.length; i++) {

            innerTabs[i].addEventListener('click', function (e) {
                resetTabs(innerTabs, innerTabsContent);
                innerTabs[i].classList.add('active');
                let contentId = innerTabs[i].getAttribute('data-inner-target-id');
                let contentBlock = document.querySelector('.functional-tab__pane.active').querySelector('[data-inner-id="' + contentId + '"]');
                contentBlock.classList.add('active');
            })
        }
    }



    function resetTabs(btns, blocks) {
        btns.forEach(btn => {
            btn.classList.remove('active');
        });
        blocks.forEach(block => {
            block.classList.remove('active');
        });
    }

})