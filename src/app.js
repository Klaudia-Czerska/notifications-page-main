const mark = document.querySelector('.header__mark');
const unread = document.querySelectorAll('.unread');
const unreadNumber = document.querySelector('.header__number');
const notifications = document.querySelectorAll('.notifications__notification');

const setNumber = (unreadList) => {
    unreadNumber.innerText = unreadList.length;
}

setNumber(unread);

mark.addEventListener('click', () => {
    const unreadList = document.querySelectorAll('.unread');
    unreadList.forEach((notification) => {
        notification.classList.remove('unread');
    })
    const newUnread = document.querySelectorAll('.unread');
    setNumber(newUnread);
})

notifications.forEach((notif) => {
    notif.addEventListener('click', () => {
        notif.classList.contains('unread') ? notif.classList.remove('unread') : notif.classList.add('unread');
        const newUnread = document.querySelectorAll('.unread');
        setNumber(newUnread);
    })
    
})