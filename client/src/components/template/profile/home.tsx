import React, { useState, useEffect } from 'react'

// Components
import ProfileView from './profileView'

const Home: React.FC = ({ users: { avatar, cover, id } }) => {

    const [ isVideoplaying, setIsVideoPlaying ] = useState(false)
    
    return(
      <div className="profile-home">
         <div className="featured-content" style={{ backgroundImage: `url(/uploads/${id}/cover/${cover})`, backgroundColor: 'rgba(250, 250, 250, 0.5)'}}>
            <div className="translucent-filter">
            { isVideoplaying ?
                    <ProfileView max={false} avatar={avatar} id={id} />
                  :
                  <ProfileView max={true} avatar={avatar} id={id} />
  }
  
          <div className="profile-xln-balance">
            <img src="/uploads/xln/asset/images/xln_logo.png" width="50px" height="auto" />
            <h4>350,000 XLN</h4>
          </div>
          </div>
          </div>

          <h4>Top performing assets: $75m</h4>
          <div className="asset-items">
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
          </div>
          <h4>Top shareholder assets: $15m</h4>
          <div className="asset-items-poster">
          <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
          </div>
          <h4>Top shareholder assets: $15m</h4>
          <div className="asset-items">
          <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
          </div>
          <h4>Top shareholder assets: $15m</h4>
          <div className="asset-top-asset">
          <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>

            <div className='asset'>
                 Cover, Name
            </div>
          </div>
      <h4>Top shareholder assets: $15m</h4>
      <div className="asset-items">
      <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
            <div className='asset'>
                 Cover, Name
            </div>
      </div>
      </div>
    )
  }

  export default Home;