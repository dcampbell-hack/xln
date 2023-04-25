import { useState, useEffect } from 'react'
import { InfoB, LinkB } from '../../../utils/buttons/buttons'


const ProfileView = ({ maxBoolean, avatar, id }) => {

    const [ max, setMax ] = useState(true)
    
        return (
            <div className='profile-view'>
                  {
                    max && 
                    <div className='profile-view-max' >
                            <img className="profile-view-symbol" src={`/uploads/${id}/avatar/${avatar}`} width="200px"  height="auto" />
                            { max &&
                            <div className='profile-view-panel'>
                                <div className='profile-view-panel-icon'>
                                <img src={`/uploads/${id}/avatar/${avatar}`} width="50px" height="50px" />
                                    <h3>#1 Asset with Shareholders Today</h3>
                                </div>
    
                                    <p className='profile-view-panel-text'>
                                        description of some sort.  description of some sort.  description of some sort.  description of some sort.
                                    </p>
                            </div>
                             }
                            <div className="profile-view-buttons">
                                 <InfoB
                                      text="Play"
                                      className=""
                                      icon="fas fa-play"
                                      click={() => console.log("Play Profile")}
                                 />
                                <LinkB
                                      text="More Info"
                                      className=""
                                      icon="fas fa-info"
                                      click={() => console.log("More Info")}
                                 />
                            </div>
                    </div>
                  }
            </div>
        )
    }

    export default  ProfileView;