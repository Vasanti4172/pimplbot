class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("pustules")) {
        this.actionProvider.handlePustules();
      } else if (lowerCaseMessage.includes("blackheads")) {
        this.actionProvider.handleBlackheads();
      } else if (lowerCaseMessage.includes("whiteheads")) {
        this.actionProvider.handleWhiteheads();
      } else if (lowerCaseMessage.includes("nodules")) {
        this.actionProvider.handleNodules();
      } else {
        this.actionProvider.handleUnknown();
      }
    }
  }
  
  export default MessageParser;
  
  