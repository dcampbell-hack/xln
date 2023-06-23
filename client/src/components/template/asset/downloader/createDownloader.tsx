import React from "react"
import FormLayout from "../../form/formLayout"

const CreateDownloader: React.FC = ({ options: { form }}) => {
  return(
    <div className="downloader">
        <FormLayout type={form.type} options={form} />
    </div>
  )
}

export default CreateDownloader