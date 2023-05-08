const btn = document.getElementById('show_btn');
const toasts = document.getElementById('toast');

const notification_messages = [
    'This is message Notification from friend',
    'This is message Notification  family',
    'This is message Notification  Best friend',
    'This is message Notification Sister',
];

const notification_type = ['info', 'success', 'error'];

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification(
    notification_messages = null,
    notification_type = null,
) {
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.classList.add(
        notification_type ? notification_type : getRandomType(),
    );

    notification.innerText = notification_messages
        ? notification_messages
        : getRandomMessage();

    toasts.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 4000);
}

function getRandomType() {
    return notification_type[
        Math.floor(Math.random() * notification_messages.length)
    ];
}
function getRandomMessage() {
    return notification_messages[
        Math.floor(Math.random() * notification_messages.length)
    ];
}
