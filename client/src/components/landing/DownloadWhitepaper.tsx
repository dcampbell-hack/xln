import React from "react";
import FormatLayout from "../layout";

import { DownloadWhitepaperProps } from "../../types/landing";

interface DownloadWrap{
  downloadWhitepaper: DownloadWhitepaperProps
}

const DownloadWhitepaper: React.FC<DownloadWrap> = ({ downloadWhitepaper: { type, options} }) => {

  return(
      <div className="xln-download-whitepaper panel-padding">
          <FormatLayout key="1" type={type} options={options}  />
      </div>
  );
}

export default DownloadWhitepaper;