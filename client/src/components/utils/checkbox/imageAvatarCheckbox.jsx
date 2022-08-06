const ImageAvatarCheckbox = ({ id, username, asset_name, avatar, cover, checkbox, setCheckbox }) => {
    return(
        <div key={id} style={{ background: `url(/uploads/${username}/asset/${cover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="checkbox-item asset">
        <div className="permission-checkbox">
           <input type="checkbox" onChange={() => setCheckbox({ ...checkbox, id, username, asset_name, avatar, cover })} />
        </div>
        
        <div className="permission-label-container">
        <div className="permission-label">
            <img src={`/uploads/${username}/avatar/${avatar}`} width="100%" height="auto" />
        </div>  
        </div>
         
        </div>
    )
}

export default ImageAvatarCheckbox;