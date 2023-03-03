import { useState, useEffect } from 'react'

// Components
import ProfileView from './profileView'

const Home = () => {

    const [ isVideoplaying, setIsVideoPlaying ] = useState(false)
  
    return(
      <div className="profile-home">
         <div className="featured-content">
            { isVideoplaying ?
                    <ProfileView max={false} />
                  :
                  <ProfileView max={true} />
  }
  
          <div className="profile-xln-balance">
            <img src="/uploads/xln/asset/images/xln_logo.png" width="50px" height="auto" />
            <h4>350,000 XLN</h4>
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