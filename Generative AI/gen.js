const handleUserInput = () => {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    if (userInput === "") return; // Ignore empty input
    appendMessage("You", userInput, "user-message");
    fetchBotResponse(userInput);
          document.getElementById("user-input").value = "";
  };

  const fetchBotResponse = (userInput) => {
    setTimeout(() => {
      const botResponse = generateBotResponse(userInput);
      typeResponseWithEffect(botResponse, "chat-container", "bot-message");
    }, 500); // Simulate 0.5 seconds delay
  };

  const generateBotResponse = (userInput) => {
    const responses = {
      "hello": "Hi there! How can I help you today?",
      "how are you?": "As an AI, I don't have feelings or emotions like humans do, but I'm here and ready to assist you with any questions or tasks you have. How can I help you today?",
      "hey": "Hey!   What can I do for you today?  Is there anything you'd like to ask me or have me do?",
      "how are you?": "I'm doing well, thank you! What can I assist you with?",
      "how are you?": "I'm doing well, thank you! What can I assist you with?",
      "how are you?": "I'm doing well, thank you! What can I assist you with?",
      "how are you?": "I'm doing well, thank you! What can I assist you with?",
      "how are you?": "I'm doing well, thank you! What can I assist you with?",

      // Add more response mappings here
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
        messageText.textContent += responseText[i];
        i++;
        targetElement.scrollTop = targetElement.scrollHeight;
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



// Function to scroll main-view div to top
function scrollToTop() {
  const mainViewDiv = document.getElementById('main-view');
  if (mainViewDiv) {
      mainViewDiv.scrollTop = 0;
  }
}

// Observer to detect changes in main-view div's height
const mainViewDiv = document.getElementById('main-view');
if (mainViewDiv) {
  const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
          if (entry.target === mainViewDiv) {
              scrollToTop(); // Scroll to top when height changes
          }
      }
  });

  observer.observe(mainViewDiv);
}