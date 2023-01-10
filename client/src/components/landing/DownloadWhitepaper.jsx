import FormatLayout from "../layout";

const DownloadWhitepaper = ({ downloadWhitepaper: { type, options} }) => {

  return(
      <div className="xln-download-whitepaper panel-padding">
          <FormatLayout key="1" type={type} options={options}  />
      </div>
  );
}

export default DownloadWhitepaper;