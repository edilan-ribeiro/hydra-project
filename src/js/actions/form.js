function formActions() {
  const sendButton = document.getElementById('send-button')
  const formItems = document.querySelectorAll('.input')
  const successDiv = document.querySelector('.success')
  const formSectionTopItems = document.querySelectorAll('.form-section-top')

  sendButton.addEventListener("click", function(event) {
    const regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm

    event.preventDefault()

    formItems.forEach(function(item) {
      const error = item.nextElementSibling
      error.classList.add('hide')
    })

    let isValid = true
    let emptyItems = []

    formItems.forEach(function(item) {
      const value = item.value.trim()
      const error = item.nextElementSibling

      if (value === '') {
        error.classList.remove('hide')
        isValid = false
        emptyItems.push(item)
      } else if (item.classList.contains('first-name') || item.classList.contains('last-name')) {
        if (value.length < 3) {
          error.classList.remove('hide')
          isValid = false
        }
      } else if (item.classList.contains('email')) {
        if (!regexMail.test(value)) {
          error.classList.remove('hide')
          isValid = false
        }
      } else if (item.classList.contains('phone')) {
        if (!regexPhone.test(value)) {
          error.classList.remove('hide')
          isValid = false
        }
      } else if (item.classList.contains('subject') || item.classList.contains('message')) {
        if (value.length < 3) {
          error.classList.remove('hide')
          isValid = false
        }
      }
    })

    if (isValid) {
      formItems.forEach(function(item) {
        item.style.transform = 'scale(0)'
      })

      setTimeout(function() {
        formItems.forEach(function(item) {
          item.style.display = 'none'
        })
        successDiv.classList.remove('none')
        successDiv.classList.remove('hide')
        animateSuccessMessage()

        formSectionTopItems.forEach(function(item) {
          item.style.display = 'none'
        })

        sendButton.style.display = 'none'
      }, 200)
    } else {
      emptyItems.forEach(function(item) {
        const error = item.nextElementSibling
        error.classList.remove('hide')
      })
    }
  })

  function animateSuccessMessage() {
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const successMessage1 = document.querySelector('.sucess-text1')
    const successMessage2 = document.querySelector('.success p:nth-child(2)')
    const welcomeMessage = `Welcome to HYDRA agent ${firstName} ${lastName}!`
    const missionMessage = 'Your first mission will arrive in your mail soon.'
    let index1 = 0
    let index2 = 0

    function typeWriter1() {
      if (index1 < welcomeMessage.length) {
        successMessage1.textContent += welcomeMessage.charAt(index1)
        index1++
        setTimeout(typeWriter1, 70)
      } else {
        setTimeout(typeWriter2, 200)
      }
    }

    function typeWriter2() {
      if (index2 < missionMessage.length) {
        successMessage2.textContent += missionMessage.charAt(index2)
        index2++
        setTimeout(typeWriter2, 70)
      }
    }

    setTimeout(typeWriter1, 200)
  }
}


  
  

export {formActions}