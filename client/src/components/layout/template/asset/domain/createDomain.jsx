const CreateDomain = () => {
    return (
      <div className="domain-container">
        <h2>You Own the Following Domains</h2>
        <div className="domain-text-num-container">
          <input type="text" placeholder="domain.eth" disabled />
          <input type="number" placeholder="0.5 XLN" min="0" step=".01" />
          <button className="btn btn-outline">List ENS</button>
        </div>
      </div>
    );
  };

  export default CreateDomain