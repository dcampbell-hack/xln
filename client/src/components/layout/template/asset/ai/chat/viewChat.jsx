const ViewChat = ({ options, setActionType }) => {
  
    return (
      <div className="ai-chat-container">
        <div className="chat-sidebar">
            <button>+ New Chat</button>
        </div>
        <div className="chat-input-container">
            <div className="chat-output"></div>
            <div className="chat-input">
                <input type="text" placeholder="Ask Question" />
                <button>Chat + </button>
            </div>
        </div>
      </div>
    );
  };

  export default ViewChat