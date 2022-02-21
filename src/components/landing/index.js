import '../../css/landing/Landing.scss';
import CTA from './CTA';
import Summary from './Summary';
import Overview from './Overview';
import Blockchain from './Blockchain';
import AppMarketPlace from './AppMarketplace';
import ContactUs from './ContactUs';
import Team from './Team';
import Mission from './Mission';


const Landing = ({ landing: { cta, summary, overview, blockchain, appMarketplace, team, mission, contact}, socialLinks }) => {
    return (
        <div className='xln-landing-page'>
            <CTA cta={cta} socialLinks={socialLinks} />
            <Summary summary={summary} />
            <Overview overview={overview} />
            <Blockchain blockchain={blockchain} />
            <AppMarketPlace appMarketplace={appMarketplace} />
            <Team team={team} />
            <Mission mission={mission} />
            <ContactUs contact={contact} socialLinks={socialLinks} />
        </div>
    )
}

export default Landing;