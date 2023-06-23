import { PrimaryB, InfoB, WarningB, DangerB, LinkB } from "../../utils/buttons/buttons";


export const Seed = () => {
    return (
      <div className="wallet-seed-container">
        <div>
          <h2>Confirm your seed phrase</h2>
          <p>Please select each word it was presented to you</p>
        </div>
        <div className="wallet-seed-list">
          <div className="seed">Tall</div>
          <div className="seed">Police</div>
          <div className="seed">Kill</div>
          <div className="seed">Again</div>
          <div className="seed">End</div>
          <div className="seed">Alpha</div>
          <div className="seed">Brew</div>
          <div className="seed">Beta</div>
          <div className="seed">Divine</div>
          <div className="seed">Today</div>
          <div className="seed">Banger</div>
          <div className="seed">Brew</div>
        </div>
        <PrimaryB
          text="Confirm Seed Phrase"
          className=""
          icon=""
          click={() => console.log("Confirm Seed Phrase")}
        />
      </div>
    );
  };