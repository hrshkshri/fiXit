class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Hi, I am bot created by Harsh, I am not jarvis but I might help you with web development."
    );
    this.setChatbotMessage(greetingMessage);
  }
  setChatbotMessage(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
  question1() {
    const message = this.createChatBotMessage(
      "Question 1: What is web development?",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }

  question2() {
    const message = this.createChatBotMessage(
      "Question 2: What is full stack development?",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }

  question3() {
    const message = this.createChatBotMessage(
      "Question 3: What is front end development?",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }

  question4() {
    const message = this.createChatBotMessage(
      "Question 4: What is back end development?",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }

  question5() {
    const message = this.createChatBotMessage(
      "Question 5: What is a website?",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }

  question6() {
    const message = this.createChatBotMessage(
      "Question 6: What is a web application?",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }

  question7() {
    const message = this.createChatBotMessage(
      "Question 7: What is a web server?",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }

  question8() {
    const message = this.createChatBotMessage(
      "Question 8: What is a web client?",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }

  again() {
    const message = this.createChatBotMessage(
      "Do you want to ask more questions?, say hello to start again",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }

  answer1() {
    const message = this.createChatBotMessage(
      "Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }
  answer2() {
    const message = this.createChatBotMessage(
      "Full stack development refers to the development of both front end(client side) and back end(server side) portions of web application. Full stack web developers have the ability to design complete web application and websites. They work on the frontend, backend, database and debugging of web application or websites.",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }
  answer3() {
    const message = this.createChatBotMessage(
      "Front end development is the development of those elements of a website that the user interacts with directly. It is a combination of programming skills (knowing which program to choose) and aesthetics (understanding element arrangements on the screen, the color and font choices).",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }
  answer4() {
    const message = this.createChatBotMessage(
      "Back end development refers to the server side of an application and everything that communicates between the database and the browser. Back end developers are most focused on a site's responsiveness and speed.",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }
  answer5() {
    const message = this.createChatBotMessage(
      "A website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }
  answer6() {
    const message = this.createChatBotMessage(
      "A web application is application software that runs on a web server, unlike computer-based software programs that are run locally on the operating system of the device.",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }
  answer7() {
    const message = this.createChatBotMessage(
      "A web server is server software, or hardware dedicated to running said software, that can satisfy World Wide Web client requests. A web server can, in general, contain one or more websites. A web server processes incoming network requests over HTTP and several other related protocols.",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }
  answer8() {
    const message = this.createChatBotMessage(
      "A web client is a piece of computer hardware or software that accesses a service made available by a server. The server is often (but not always) on another computer system, in which case the client accesses the service by way of a network.",
      {
        widget: "options",
      }
    );

    this.setChatbotMessage(message);
  }
}
export default ActionProvider;
