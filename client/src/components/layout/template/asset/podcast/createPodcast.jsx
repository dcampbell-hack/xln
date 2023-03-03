const CreatePodcast = ({ options, setActionType }) => {
  
    return (
      <div className="ai-chat-container">
        <div className="chat-sidebar">
            <button>Go to podcast</button>
            <button>Invite Link</button>
            <button>All Podcasts</button>
            <button>Settings</button>
        </div>
        <div className="podcast-container">
            <div className="podcast-header">
                <div className="session">
                   <button><i className="fas fa-caret-left"></i></button>   
                   <h2>Podcast session</h2>                 
                </div>
                <div className="buttons">
                    <button><i className="fas fa-link"></i></button>
                    <button><i className="fas fa-link"></i> Invite to podcast</button>
                    <button><i className="fas fa-link"></i> Go to podcast</button>                    
                </div>
            </div>
            <div className="podcast-list-container">

                <div className="podcast-item">
                    <div className="podcast-cover">
                         <span className="badge">01:07:50</span>
                    </div>
                    <div className="podcast-base">
                        <h4>Title</h4>
                        <p>Date</p>
                    </div>
                </div>

                <div className="podcast-item">
                    <div className="podcast-cover">
                         <span className="badge">01:07:50</span>
                    </div>
                    <div className="podcast-base">
                        <h4>Title</h4>
                        <p>Date</p>
                    </div>
                </div>

                <div className="podcast-item">
                    <div className="podcast-cover">
                         <span className="badge">01:07:50</span>
                    </div>
                    <div className="podcast-base">
                        <h4>Title</h4>
                        <p>Date</p>
                    </div>
                </div>

                <div className="podcast-item">
                    <div className="podcast-cover">
                         <span className="badge">01:07:50</span>
                    </div>
                    <div className="podcast-base">
                        <h4>Title</h4>
                        <p>Date</p>
                    </div>
                </div>

                <div className="podcast-item">
                    <div className="podcast-cover">
                         <span className="badge">01:07:50</span>
                    </div>
                    <div className="podcast-base">
                        <h4>Title</h4>
                        <h4>Date</h4>
                    </div>
                </div>

                <div className="podcast-item">
                    <div className="podcast-cover">
                         <span className="badge">01:07:50</span>
                    </div>
                    <div className="podcast-base">
                        <h4>Title</h4>
                        <p>Date</p>
                    </div>
                </div>

            </div>
        </div>
      </div>
    );
  };

  export default CreatePodcast