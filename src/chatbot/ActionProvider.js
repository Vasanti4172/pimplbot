class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handlePustules = () => {
      const message = this.createChatBotMessage("Pustules are red, inflamed pimples with pus. Cleanse your skin and use a mild antibacterial cream.");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    handleBlackheads = () => {
      const message = this.createChatBotMessage("Blackheads are clogged pores. Exfoliate regularly and avoid oily skincare products.");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    handleWhiteheads = () => {
      const message = this.createChatBotMessage("Whiteheads are closed clogged pores. Use gentle exfoliation and non-comedogenic moisturizers.");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    handleNodules = () => {
      const message = this.createChatBotMessage("Nodules are deep acne that may require dermatologist consultation.");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    handleUnknown = () => {
      const message = this.createChatBotMessage("I'm not sure, but I can help with acne issues!");
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  }
  
  export default ActionProvider;
  