// Function to handle user input and generate bot response
const handleUserInput = () => {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    if (userInput === "") return; // Ignore empty input
  
    // Create user message element
    appendMessage("User", userInput, "user-message");
  
    // Fetch bot response
    fetchBotResponse(userInput);
  
    // Clear input field
    document.getElementById("user-input").value = "";
  };
  
  // Function to fetch bot response from backend
  const fetchBotResponse = (userInput) => {
    fetch('http://localhost:3000/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userInput })
    })
    .then(response => response.json())
    .then(data => {
      const botResponse = data.response;
      typeResponseWithEffect(botResponse, "chat-container", "bot-message");
    })
    .catch(error => {
      console.error('Error fetching bot response:', error);
      typeResponseWithEffect("Sorry, there was an error processing your request.", "chat-container", "bot-message");
    });
  };
  
  // Function to type response with effect
  function typeResponseWithEffect(responseText, targetElementId, className = "bot-message", speed = 50) {
    let i = 0;
    const responseLength = responseText.length;
    const chatContainer = document.getElementById(targetElementId);
    if (!chatContainer) {
      console.error("Error: Target element not found!");
      return;
    }
  
    // Create the bot message element
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", className);
    botMessage.innerHTML = `
      <div class="message-sender">ChatBot</div>
      <div class="message-text"></div>
      <div class="message-timestamp">${getCurrentTime()}</div>
    `;
  
    chatContainer.appendChild(botMessage);
    const messageTextElement = botMessage.querySelector('.message-text');
  
    const typingLoop = () => {
      if (i < responseLength) {
        messageTextElement.textContent += responseText[i];
        i++;
        setTimeout(typingLoop, speed);
      }
    };
  
    typingLoop();
  }
  
  // Function to append a message to the chat container
  const appendMessage = (sender, text, className) => {
    const chatContainer = document.getElementById("chat-container");
    const message = document.createElement("div");
    message.classList.add("message", className);
    message.innerHTML = `
      <div class="message-sender">${sender}</div>
      <div class="message-text">${text}</div>
      <div class="message-timestamp">${getCurrentTime()}</div>
    `;
    chatContainer.appendChild(message);
  
    // Scroll to bottom of chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };
  
  // Function to get current timestamp
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  
  // Attach event listener to send button
  document.getElementById("send-button").addEventListener("click", handleUserInput);
  
  // Optional: Attach event listener to input field for pressing Enter key
  document.getElementById("user-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleUserInput();
    }
  });
  