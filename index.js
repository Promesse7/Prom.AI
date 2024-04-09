const johnSelectorBtn = document.querySelector('#john-selector')
const janeSelectorBtn = document.querySelector('#jane-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button') 


const messages = JSON.parse(localStorage.getItem('messages')) || []

const createChatMessageElement = (message) => `
       <div class="message ${messageSender === 'John' ? 'blue-bg' : 'gray-bg'}">
       <div class="message-sender">${messageSender}</div>
       <div class="message-text">${message.text}</div>
       <div class="message-timestamp">${message.timestamp}</div>
       </div>
`

window.onload = () => {
    messages.forEach((message) => {
        chatMessages.innerHTML += createChatMessageElement(message)
    });
}

let messageSender = 'John'
const updateMessageSender = (name) =>{
    messageSender = name
    chatHeader.innerText = `${messageSender} chatting...` 
    chatInput.placeholder = `Type here, ${messageSender}...`

    if (name === 'John') {
        johnSelectorBtn.classList.add('active-person')
        janeSelectorBtn.classList.remove('active-person')
    }
    if (name === 'Jane') {
        johnSelectorBtn.classList.remove('active-person')
        janeSelectorBtn.classList.add('active-person')
    }
    chatInput.focus()
}

johnSelectorBtn.onclick = () => updateMessageSender('John')
janeSelectorBtn.onclick = () => updateMessageSender('Jane') 

const sendMessage = (e) =>{
    e.preventDefault();

    const timestamp = new Date().toLocaleString('en-US', { hour:'numeric', minute:'numeric', hour12:true })
    const message = {
        send: messageSender,
        text:chatInput.value,
        timestamp,
    }
    chatMessages.innerHTML += createChatMessageElement(message)
    
    messages.push(message)
    localStorage.setItem('messages', JSON.stringify(messages))
    chatInputForm.reset()
    chatMessages.scrollTop = chatMessages.scrollHeight
}

chatInputForm.addEventListener('submit', sendMessage)

clearChatBtn.addEventListener('click', () =>{
    localStorage.clear()
    chatMessages.innerHTML = ''
})