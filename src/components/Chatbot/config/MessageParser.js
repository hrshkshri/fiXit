class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hi") || lowercase.includes("hello")) {
      this.actionProvider.greet();
      this.actionProvider.question1();
      this.actionProvider.question2();
      this.actionProvider.question3();
      this.actionProvider.question4();
      this.actionProvider.question5();
      this.actionProvider.question6();
      this.actionProvider.question7();
      this.actionProvider.question8();
      this.actionProvider.again();
    }
    if (lowercase.includes("1") || lowercase.includes("web development")) {
      this.actionProvider.answer1();
      this.actionProvider.again();
    }
    if (
      lowercase.includes("2") ||
      lowercase.includes("full stack development")
    ) {
      this.actionProvider.answer2();
      this.actionProvider.again();
    }
    if (
      lowercase.includes("3") ||
      lowercase.includes("front end development")
    ) {
      this.actionProvider.answer3();
      this.actionProvider.again();
    }
    if (lowercase.includes("4") || lowercase.includes("back end development")) {
      this.actionProvider.answer4();
      this.actionProvider.again();
    }
    if (lowercase.includes("5") || lowercase.includes("website")) {
      this.actionProvider.answer5();
      this.actionProvider.again();
    }
    if (lowercase.includes("6") || lowercase.includes("web application")) {
      this.actionProvider.answer6();
      this.actionProvider.again();
    }
    if (lowercase.includes("7") || lowercase.includes("web server")) {
      this.actionProvider.answer7();
      this.actionProvider.again();
    }
    if (lowercase.includes("8") || lowercase.includes("web client")) {
      this.actionProvider.answer8();
      this.actionProvider.again();
    }
  }
}

export default MessageParser;
