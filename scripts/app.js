/* eslint-disable no-undef */
function saveTask () {
  console.log('saveTask')
}
function changeIcon () {
  const nonImportant = 'fa-solid fa-folder'
  const important = 'fa-solid fa-mug-hot'
  const icon = $('#iImportant')
  if (icon.hasClass(nonImportant)) {
    icon.removeClass(nonImportant).addClass(important)
  } else {
    icon.removeClass(important).addClass(nonImportant)
  }
}

function init () {
  console.log('init')

  // hook events
  $('#btnSave').click(saveTask)
  $('#iImportant').click(changeIcon)
}

window.onload = init
