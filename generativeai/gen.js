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
      "what is the meaning of promai": "PromAi is an AI assistant that goes beyond simply answering questions and proactively suggests relevant actions or information based on user behavior and context",
      "what is promai": "PromAi is an AI assistant that goes beyond simply answering questions and proactively suggests relevant actions or information based on user behavior and context",
      "hello": "Hi there! How can I help you today?",
      "who are you": "I'm PromAi, your direct access to PromTech. I'm trained on large amounts of publicly available data and I can communicate and generate human-like text in response to a wide range of questions. Just try me out and see what I can do for you.",
      "who made you": "I was created by a team of engineers and researchers at PromTech Headquartes.  While Promesse RUKUNDO, PromTech's founder, played a role in the development of PromAi LLMs, it was a collaborative effort!",
      "who created you": "I was created by a team of engineers and researchers at PromTech Headquartes.  While Promesse RUKUNDO, PromTech's founder, played a role in the development of PromAi LLMs, it was a collaborative effort!",
      "create a short story": "Bubbles the goldfish was on a mission. Zipping back and forth in his bowl, he imagined himself a sleek race car zipping around a racetrack. He dodged the plastic castle (which he pretended was a tricky tunnel) and swerved past the colorful pebbles (dangerous, hidden landmines!). Feeling like a champion, Bubbles took a celebratory victory lap. But disaster struck! His tiny fin clipped the edge of a plastic plant (a sneaky speed bump!), sending him tumbling head over tail. With a surprised plop, Bubbles landed smack in the middle of his dinner, fish flakes raining down around him. He looked around, a little dazed, then sheepishly nibbled on a flake stuck to his head. Maybe being a race car driver wasn't quite as glamorous as he thought.",
      "how do you work": "Imagine a giant filing cabinet stuffed with all sorts of information, like text from books, articles, and websites. That's kind of like how I work! I've been trained on massive amounts of this information, and I can sift through it super quickly to find what you're looking for. When you ask me a question, I search the filing cabinet for the best answer, using connections between different pieces of information to make sense of it all. <br> I'm still under development, but I'm getting better at understanding your questions and giving you helpful answers.",
      "can you be creative": "I can be creative in some ways! I can't exactly write a novel or paint a masterpiece, but I can use my knowledge and abilities to generate new and interesting things.",
      "What's up": "Hi there! How can I help you today?",
      "hello": "Hi there! How can I help you today?",
      "hello": "Hi there! How can I help you today?",
      "hello": "Hi there! How can I help you today?",
      "how are you?": "As an AI, I don't have feelings or emotions like humans do, but I'm here and ready to assist you with any questions or tasks you have. How can I help you today?",
      "hey": "Hey!   What can I do for you today?  Is there anything you'd like to ask me or have me do?",
      "how are you": "I'm doing well, thank you! What can I assist you with?",
      "hi": "I'm doing well, thank you! What can I assist you with?",
      "who is diama": "He is a brilliant study partner who challenges me, explains concepts clearly, and keeps my sessions focused and positive.",
      "how are you?": "I'm doing well, thank you! What can I assist you with?",
      "how are you?": "I'm doing well, thank you! What can I assist you with?",
      "ready to go": "You bet!  Is there anything specific you'd like my help with today, or are you just exploring the possibilities?  I'm happy to answer your questions, generate creative text formats, or brainstorm some ideas.  Just let me know!",
      "what's up": "Hey! Not much, just hanging out in the digital world, waiting to see how I can be helpful today. What about you?  What's going on?",
      "what is ecole des sciences Byimana": "Ecole des Sciences Byimana: This is a science school located in Rwanda, founded in 1952. It offers a holistic education with a focus on science and moral values. You can find more information on their website ESC BYIMANA | Conscience - Science - Excellence  or even see a documentary about the school on YouTube.",
      "what is esc byimana": "Ecole des Sciences Byimana: This is a science school located in Rwanda, founded in 1952. It offers a holistic education with a focus on science and moral values. You can find more information on their website ESC BYIMANA | Conscience - Science - Excellence  or even see a documentary about the school on YouTube.",
       "thank you": "You're welcome! I'm glad I could help. If you have any other questions about anything else, feel free to ask.",
       "why did Elon Musk start SpaceX": "He wanted to make life multi-planetary, and his ultimate goal is to get humans to Mars. Plus, rockets are just super cool.",
  "how did Elon Musk become a billionaire": "Elon made his fortune by founding and selling companies like PayPal, and later with his ventures Tesla, SpaceX, and other innovations that revolutionized electric vehicles and space travel.",
  "what's Jeff Bezos' side hustle": "Aside from being the founder of Amazon, Jeff Bezos owns The Washington Post and has a space exploration company called Blue Origin. So yeah, he's kinda out of this world!",
  "what does Taylor Swift do in her free time": "Aside from writing chart-topping songs and conquering the music industry, Taylor loves baking, reading, and hanging out with her cats. Who knew she was a cat person?",
  "how did Oprah become successful": "Oprah rose to fame with her legendary talk show, but her true success comes from her media empire, her own network (OWN), and her work as an author and philanthropist.",
  "how tall is Dwayne 'The Rock' Johnson": "Dwayne Johnson is about 6'5\" (196 cm) tall. And yes, he’s as strong as he looks!",
  "why does Keanu Reeves seem so nice": "Keanu is well-known for his kindness and humility, often surprising fans with his generosity. He’s a genuine, down-to-earth guy in a world of celebrities.",
  "how many children does Kim Kardashian have": "Kim Kardashian has four children with her ex-husband Kanye West: North, Saint, Chicago, and Psalm.",
  "does Leonardo DiCaprio ever win an Oscar": "After multiple nominations, Leonardo finally won his first Oscar in 2016 for his role in *The Revenant*. Talk about well-deserved!",
  "how did Richard Branson get rich": "Richard Branson founded Virgin Group, which started with a music store and expanded into airlines, mobile phones, and even space travel with Virgin Galactic.",
  "what is ESC Byimana": "Ecole des Sciences Byimana (ESB) is a Catholic boarding high school in Rwanda, known for its excellence in science education and strong academic performance.",
  "where is ESC Byimana located": "ESC Byimana is located in the Ruhango District, Southern Province of Rwanda.",
  "when was ESC Byimana founded": "ESC Byimana was founded in 1952 by the Marist Brothers.",
  "what is the motto of ESC Byimana": "The school's motto is 'Conscience — Science — Excellence.'",
  "what subjects are taught at ESC Byimana": "At the A’Level, students study science combinations like MPC (Mathematics, Physics, Computer Science), PCM (Physics, Chemistry, Mathematics), MCB (Mathematics, Chemistry, Biology), and PCB (Physics, Chemistry, Biology).",
  "why is ESC Byimana famous": "It is famous for its outstanding academic results in Rwanda, particularly in science-related subjects.",
  "is ESC Byimana a boarding school": "Yes, it is a full-time boarding school.",
  "who manages ESC Byimana": "The school is managed by the Marist Brothers, a Catholic religious congregation focused on education.",
  "does ESC Byimana have extracurricular activities": "Yes, students engage in clubs, sports, and leadership activities alongside their studies.",
  "how can I apply to ESC Byimana": "Admissions are based on national examinations and selection criteria set by the Rwandan education system.",
  "what is Rwanda known for": "Rwanda is known for its breathtaking landscapes, mountain gorillas, clean cities, and rapid economic growth.",
  "where is Rwanda located": "Rwanda is a landlocked country in East-Central Africa, bordered by Uganda, Tanzania, Burundi, and the Democratic Republic of the Congo.",
  "what is the capital of Rwanda": "The capital city of Rwanda is Kigali.",
  "what languages are spoken in Rwanda": "The official languages of Rwanda are Kinyarwanda, English, French, and Swahili.",
  "what is the currency of Rwanda": "The currency used in Rwanda is the Rwandan Franc (RWF).",
  "why is Rwanda called the land of a thousand hills": "Rwanda is nicknamed the 'Land of a Thousand Hills' because of its rolling hills and mountainous terrain.",
  "what are some tourist attractions in Rwanda": "Popular tourist attractions include Volcanoes National Park, Nyungwe Forest, Akagera National Park, Lake Kivu, and the Kigali Genocide Memorial.",
  "who is the president of Rwanda": "As of 2025, the President of Rwanda is Paul Kagame.",
  "what is Rwanda’s economy based on": "Rwanda’s economy is driven by agriculture, tourism, technology, and manufacturing.",
  "is Rwanda safe for tourists": "Yes, Rwanda is one of the safest countries in Africa, with low crime rates and well-maintained security."



    };

    return responses[userInput] || "I apologize for any inconvenience caused by my limitations. I'm still under development, but I'm always learning and getting better!" + "\n" + " Thanks for your patience! I understand my response might not have been perfect. I'm constantly learning and improving, so your feedback is valuable.";
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
