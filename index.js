const {ipcRenderer, shell} = require('electron')
const RemineUrl = 'http://pm.sld.kiev.ua/issues/';

document.addEventListener('click', (event) => {
  if (event.target.href) {
    // Open links in external browser
    shell.openExternal(event.target.href)
    event.preventDefault()
  } else if (event.target.classList.contains('js-quit-action')) {
    window.close()
  }
})



const sendNotification = (message) => {
  let notification = new Notification('Attantion', {
    body: message
  })
}

const openIssue = () => {
  const number = document.querySelector('.number')
  shell.openExternal(`${RemineUrl}${number.value}`);
  number.value = '';
}


const start = () => {
  // sendNotification('test')
  const link = document.querySelector('.go')
  const number = document.querySelector('.number')
  link.onclick = (e) => {
    openIssue()
  }

  number.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        openIssue();
    }
});
}

// Update initial weather when loaded
document.addEventListener('DOMContentLoaded', start)
