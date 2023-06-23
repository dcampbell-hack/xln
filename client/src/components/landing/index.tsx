import React from 'react'
import '../../css/landing/Landing.scss';
import { socialLinks } from '../../data/nav';
import CTA from './CTA';
import Summary from './Summary';
import Overview from './Overview';
import Blockchain from './Blockchain';
import TokenAllocation from './TokenAllocation';
import ContactUs from './ContactUs';
import Team from './Team';
import Roadmap from './Roadmap';
import DownloadWhitepaper from './DownloadWhitepaper';
import Timer from './Timer';

import { LandingProps } from '../../types/landing';


const Landing: React.FC<LandingProps> = ({ landing: { cta, summary, overview, timer, blockchain, tokenAllocation, downloadWhitepaper, team, roadMap, contact} }) => {
    return (
        <div className='xln-landing-page'>
            <CTA cta={cta} socialLinks={socialLinks} />
            <Summary summary={summary} />
            <Overview overview={overview} />
            <Timer timer={timer} />
            <Blockchain blockchain={blockchain} />
            <TokenAllocation tokenAllocation={tokenAllocation} />
            <Roadmap roadMap={roadMap} /> 
            <Team team={team} />
            <DownloadWhitepaper downloadWhitepaper={downloadWhitepaper} />
            <ContactUs contact={contact} socialLinks={socialLinks} />
        </div>
    )
}

export default Landing;