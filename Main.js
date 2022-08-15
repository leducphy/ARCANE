const buyTk = document.querySelectorAll('.js-buy-tk')
const modal = document.querySelector('.js-modal')
const close = document.querySelector('.js-modal-close')


function showTk() {
    modal.classList.add('opend')
}

function hideTk() {
    modal.classList.remove('opend')
}

for (const i of buyTk) {
    i.addEventListener('click', showTk)
}

close.addEventListener('click', hideTk)

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// đóng mở menu khi click ra ngoài
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

//đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;

        }

    }
}