const handleUserInput = () => {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    if (userInput === "") return; 
    appendMessage("You", userInput, "user-message");
    fetchBotResponse(userInput);
          document.getElementById("user-input").value = "";
  };

  const fetchBotResponse = (userInput) => {
    setTimeout(() => {
      const botResponse = generateBotResponse(userInput);
      typeResponseWithEffect(botResponse, "chat-container", "bot-message");
    }, 500); 
  };

  const generateBotResponse = (userInput) => {
    const responses = {
      "hello": "Hi there! How can I help you today?",
      "how are you?": "As an AI, I don't have feelings or emotions like humans do, but I'm here and ready to assist you with any questions or tasks you have. How can I help you today?",
      "hey": "Hey!   What can I do for you today?  Is there anything you'd like to ask me or have me do?",
      "how are you": "I'm doing well, thank you! What can I assist you with?",
      "hi": "I'm doing well, thank you! What can I assist you with?",
      "how are you?": "I'm doing well, thank you! What can I assist you with?",
      "how are you?": "I'm doing well, thank you! What can I assist you with?",
      "how are you?": "I'm doing well, thank you! What can I assist you with?",

    };

    return responses[userInput] || "I'm sorry, I don't understand that question.";
  };

  function typeResponseWithEffect(responseText, targetElementId, className = "bot-message") {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) {
      console.error("Error: Target element not found!");
      return;
    }
    const message = document.createElement("div");
    message.classList.add("message", className);
    targetElement.appendChild(message);

    const messageSender = document.createElement("div");
    messageSender.classList.add("message-sender");
    messageSender.textContent = "PromAI";
    message.appendChild(messageSender);

    const messageText = document.createElement("div");
    messageText.classList.add("message-text", "typing");
    message.appendChild(messageText);

    let i = 0;
    const typingLoop = () => {
      if (i < responseText.length) {
        targetElement.scrollTop = targetElement.scrollHeight;
        messageText.textContent += responseText[i];
        i++;
        setTimeout(typingLoop, 50);
      } else {
        messageText.classList.remove("typing");
      }
    };

    typingLoop();
  }

  const appendMessage = (sender, text, className) => {
    const chatContainer = document.getElementById("chat-container");
    const message = document.createElement("div");
    message.classList.add("message", className);
    message.innerHTML = `
      <div class="message-sender">${sender}</div>
      <div class="message-text">${text}</div>
    `;
    chatContainer.scrollTop = chatContainer.scrollHeight
    chatContainer.appendChild(message);
   
  };

  document.getElementById("send-button").addEventListener("click", handleUserInput);
  document.getElementById("user-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleUserInput();
    }
  });




function scrollToTop() {
  const mainViewDiv = document.getElementById('chat-container');
  if (mainViewDiv) {
      mainViewDiv.scrollTop = 0;
  }
}

const mainViewDiv = document.getElementById('chat-container');
if (mainViewDiv) {
  const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
          if (entry.target === mainViewDiv) {
              
          }
      }
  });

  observer.observe(mainViewDiv);
}

const scrollToTopButton = document.getElementById('myBtn');
if (scrollToTopButton) {
  scrollToTopButton.addEventListener('click', () => {
      scrollToTop(); 
  });
}

mainViewDiv.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var button = document.getElementById("myBtn");
  if (mainViewDiv.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
