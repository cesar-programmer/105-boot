/* eslint-disable no-undef */
const tasks = []

function saveTask () {
  event.preventDefault()
  console.log('saveTask')
  const task = readFormData()
  tasks.push(task)
  clearForm()
  displayTask()
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

function readFormData () {
  const title = $('#title').val()
  const description = $('#description').val()
  const date = $('#date').val()
  const color = $('#color').val()
  const status = $('#status').val()
  const task = new Task(title, description, date, color, status)
  $.ajax({
    type: 'POST',
    url: 'http://fsdiapi.azurewebsites.net/api/tasks/',
    data: JSON.stringify(task),
    contentType: 'application/json',
    success: function (res) {
      console.log(res)
    },
    error: function (error) {
      console.log(error)
    }
  })
  return task
}

function clearForm () {
  $('#title').val('')
  $('#description').val('')
  $('#date').val('')
  $('#color').val('')
  $('#status').val('')
}

function displayTask () {
  const section2 = document.getElementById('section2')
  section2.innerHTML = tasks.map(task => {
    return `<div class="card mb-2" style="background-color: ${task.color};">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 class="card-title">${task.title}</h5>
          <p class="card-text">${task.description}</p>
          <p class="card-text"><small class="text-muted">${task.startDate}</small></p>
        </div>
        <div>
          <span class="badge bg-${task.status === 'complete' ? 'success' : 'warning'}">${task.status}</span>
          <button class="btn btn-danger btn-sm ml-2">Delete</button>
        </div>
      </div>
    </div>`
  }).join('')
}

function init () {
  console.log('init')

  // hook events
  $('#btnSave').click(saveTask)
  $('#iImportant').click(changeIcon)
}

window.onload = init
