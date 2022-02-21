import Logo from '../assets/medallion_xln_logo.png';

// Employees
import CEO from '../assets/CEO-Executive.jpg';
import COO from '../assets/COO-Executive.jpg';
import CAM from '../assets/CAM-Executive.jpg';
import CTO from '../assets/CTO-Executive.jpg';
import CMO from '../assets/CMO-Executives.jpg';
import CFO from '../assets/CFO-Executive.jpg';

// Site Assets
import XLNForm from '../assets/xln-form.jpg';
import CTAMission from '../assets/xln-cta-2.png';
import AssetSecurity from '../assets/xln-asset-security.png'


const date = new Date();

export const header = {
    logo: Logo,
    links: {
        logoLink: "/",
        buttons: {
            buyXLN: {
              text: "Buy XLN",
              to: "/kyc",
              icon: "",
              show: true,
              external: false
            },
            XLNWhitepaper: {
                text: "XLN Whitepaper",
                to: "/whitepaper",
                icon: "",
                show: true,
                external: false
            }
        }
    }
}

export const footer = {
    logo: Logo,
    copyright: 'Copyright Medallion ©',
    year: date.getFullYear(),

}

export const socialLinks = [
    ['Follow on Twitter', 'https://twitter.com/MedallionXln', 'fab fa-twitter'],
    ['Join on Discord', 'https://discord.gg/jbaWqhvp', 'fab fa-discord'],
    ['Join on Reddit', 'https://www.reddit.com/r/medallionxln', 'fab fa-reddit-alien'],
    ['Follow on LinkedIn', 'https://www.linkedin.com/company/medallion-xln', 'fab fa-linkedin'],
    ['Follow on Tumblr', 'https://medallionxln.tumblr.com/', 'fab fa-tumblr-square'],
    ['github', 'https://github.com/medallion-xln', 'fab fa-github'],
]

export const landing = {
        cta: {
            mission: "Medallion Smart Chain secures intellectual & real property with a decentralized app marketplace.",
            image: CTAMission,
            url: {
                text: 'Join the community',
                icon: 'fas fa-users',
                to: '#',
                show: true
            }
        },
        summary: {
            content: 'Medallion solves asset management on the blockchain by creating a programmable smart chain that tracks the ownership of shares throughout the lifecycle of the asset. Our core technology empowers users to own their data and the app marketplace gives developers the opportunity to build apps based on whatever design scheme they envision.',
            url: {
                text: 'Read our announcement',
                icon: 'fas fa-arrow-alt-circle-right',
                to: '#',
                show: true
            }
        },
        overview: [
            {
                type: "panel-image-text",
                options: {
                    id: '1',
                    standard: true,
                    title: 'Asset Security',
                    description: 'Medallion does not allow access to digital assets unless the owner authorizes a sale for a share in the asset .  The owner will always be in control of who has access to their asset. Once a user owns a share in an asset they have the option to resell that share for a higher price but the owner will always get paid their base price for the asset. Every asset will therefore become it’s own marketplace.',
                    image: AssetSecurity
                }
            },
            {
                type: "panel-image-text",
                options: {
                id: '2',
                standard: false,
                title: 'App Marketplace',
                description: 'Medallion leverages it’s core asset security smart chain to apply to any industry problem. Every industry uses digital assets but never in the same way. The app marketplace is used by the public to develop solutions for their business similar to Apple’s App Store. Medallion will also be building apps on it’s smart chain and create reusable components that will allow developers to ship faster.',
                image: 'foo.jpg'
                }
            },
            {
                type: "panel-image-text",
                options: {
                id: '3',
                standard: true,
                title: 'Incentive Structure',
                description: 'Owner receives 97% of each transaction that allows access to their asset. The 3% fee is split between the 2% developer fund and the community of shareholders in the asset who get 1%. The developer fund contribute to the development , management, promotion, infrastructure and maintenance of the protocol.',
                image: 'foo.jpg'
                }
            }
        ],
        blockchain: {
            header: 'How Medallion Smartchain Works',
            smartchain: [
                {
                    type: "panel-image-text",
                    options: {
                        id: '1',
                        standard: false,
                        title: '',
                        description: 'Medallion’s core technology secures a user asset and guarantees the owner will always receive a payment everytime the asset is accessed. Users have the ability to set permissions on their assets that control what possible actions shareholders can make. Whether a shareholder can resell shares, use asset in other assets, or distribute it on other marketplaces without explicit permission from the owner. Assets also have the ability to store dependencies that distribute to all the addresses involved in the asset creation. Dependencies can be other user accounts or even other assets. Asset owners can either accept all incoming offers automatically or manually accept or reject offers for shares. The shareholders receive 1% of the fee in each transaction for an asset that is equally distributed amongst them.',
                        image: 'foo.jpg'
                    }
                },
                {
                    type: "panel-image-text",
                    options: {
                        id: '2',
                        standard: false,
                        title: '',
                        description: 'Medallion allows assets to be used in other ways that compound the function and access permissions of the asset along with other assets to create complex assets that can resemble a movie with multiple dependencies such as actors, producers, directors, cinematographers, etc… that can receive a percentage of each sale. An interested user can purchase their desired asset which will send an offer to the owner who will have the option to accept or decline the offer. The accepted offer will initiate the transaction which will then be submitted to the blockchain and the interested user will become a shareholder in the asset. The rejected block will be discarded. The status of shareholder given to the new owner of a share in the asset will allow the shareholder to promote, and compound that aset with other assets if the owner’s permission allows it. The shareholder can even resell his share at a higher price than that of the owner’s original price as long as the owner is able to receive the value he expects on every transaction.',
                        image: 'foo.jpg'
                    }
                },
                {
                    type: "panel-image-text",
                    options: {
                        id: '3',
                        standard: false,
                        title: '',
                        description: 'On each transaction there will be a 3% fee that goes towards the development , management & promotion of the Medallion network while 1% will be distributed to all the shareholders in the asset. The other 97% goes to the owner of the asset. In the scenario where the asset has many dependencies the 97% will be distributed based on the designated percentage for each dependent. In each transaction 97% of the price paid will go to the owner or group of owners, 3% will go towards the fee. The fee will be split with 1% that goes to all the shareholders in an asset & 2% that goes toward Administration. When the transaction does not include an asset transfer the 1% goes toward a supernode & masternode pool that incentivizes the security and promotion of the network by rewarding the top users. The admin fee is divided by development 0.75%, management 0.75%, promotion 0.25% & acquisition 0.25%. Development is responsible for the development & maintenance of the infrastructure both online & in the real world. The development pool goes towards developers, project managers, work spaces & contractors. The management pool goes toward maintaining & recruiting management staff. Promotion pool is used to incentivize the marketing of the Medallion Smart Chain by the staff & users. The acquisition pool is used to help further build out features that are popular with the public. ',
                        image: 'foo.jpg'
                    }
                }
            ]
        },
        appMarketplace: {
            header: 'Medallion App Store Is Our Core Feature',
            icons: ['fas fa-mobile', 'fas fa-brain', 'fas fa-chart-bar', 'fas fa-basketball-ball', 'fas fa-street-view', 'fas fa-lock', 'fas fa-plane-departure', 'far fa-lightbulb', 'fas fa-cookie-bite', 'fas fa-dice', 'fas fa-dna'],
            body: 'The app marketplace is designed to apply the core technology described above and gives developers the tools to build different implementations. There is no way to know the  full potential of the Medallion Smart Chain unless numerous applications are built and the strength of the network is tested. Medallion aims to provide a secure asset management experience regardless of platform it’s accessed from. The app also facilitates simple to use plugins for popular interfaces such as web, mobile app, VR, AR, digital billboards and any new technology discovered in the future. We aim to be the premier marketplace across all platforms & interfaces from now to the future. The Medallion company will be building apps to contribute to the marketplace fully componentized so that developers can simply import a feature they like into their own app and deploy as soon as possible.',
            button: {
               text: 'Submit An Idea'
            }
        },
        team: { 
            header: 'Medallion Team Members',
            members: [
            {
                image: CEO,
                name: "Dwayne Campbell",
                position: "Chief Executive Officer (CEO) / Founder",
                bio: "Dwayne has been a Software Engineer for over a decade building software infrastructure for companies such as  Equinix, Dropbox, Gap & Freedom Financial. He first got interested in the blockchain & asset management in 2017 when WikiLeaks sold crypto kitty's to fund their organization. His responsibilities are to define the vision and momentum of Medallion.",
                responsibilities: "Drive the momentum of the company. Make key decisions. Define company vision & public image. Manage all executives.",
                manages: "COO, CTO, CBO, CFO, CMO, Product Manager"
            },
            {
                image: COO,
                name: "Allan Del Castillo",
                position: "Chiecf Operating Officer (COO) / Co-Founder",
                bio: "Allan has over 20 years of experience in the investment industry working with small boutique financial firms to large Turnkey Asset Management Programs.  Allan has held leadership roles in operations, service, learning & development, and internal communications.  His interest in blockchain & asset management space in 2019 as an investor in cryptocurrencies.",
                responsibilities: "Promotes the tone, public image & makes sure the company runs as efficiently as possible. Designs & implements plans to carry out vision. Is able to predict and solve company problems.",
                manages: "Vice President of Operations, Business Analyst, Operations Manager"
            },
            {
                image: CAM,
                name: "Gary Robinson",
                position: "Client Acquisions Manager (CAM)",
                bio: "Gary has been a Sales & Customer Service Professional and Creative Talent for over 30 years. He has help onboard clients for ABC Television, The CW Network, Proctor & Gamble and Scandinavian Designs.",
                responsibilities: " Onboard new clients, build relationships and maintain connections through dialog and written communication. Gary’s focus at Medallion XLN will be to connect with then onboard Small Business and global Enterprises  to use Medallion XLN’s Smartchain as their Asset Management Blockchain.",
                manages: "Sales Manager, Sales personnel, Customer Service representatives"           
            },
            {
                image: CTO,
                name: "Vitalik Buterin",
                position: "Chief Technical Officer (CTO)",
                bio: "N/A",
                responsibilities: "Oversees the development and dissemination of technology for external customers, vendors, and other clients to help improve and increase business. Keeps pace with the accelerated rate of change in technology. Offers innovative solutions to the company. They may also deal with internal IT operations if a company is small and doesn't have a Chief Information Officer.                ",
                manages: "Engineering Manager, Front End Developer, Lead Software Engineer, Machine Learning Engineer, QA Engineer, Senior Software Engineer, Software Engineer"
            },
            {
                image: CMO,
                name: "Jane Doe",
                position: "Chief Marketing Officer (CMO)",
                bio: "N/A",
                responsibilities: "Creates marketing strategy and is responsible for advertising, branding & client acquisition for the company. Must have a deep understanding about how to leverage social media to create an army of followers. Stay up to date with the latest trends, defining and attracting a loyal and passionate user base. Construct marketing plans to meet customers & business partners alike.",
                manages: "Brand Manager, Director of Marketing, SEO Manager, Social Media Manager, Email Marketing Manager"
             },
            {
                image: CFO,
                name: "John Doe",
                position: "CFO",
                bio: "N/A",
                responsibilities: " In charge of overall finances for the company. Oversees budgeting, accounting, payroll & forecasting. Predict the company’s gains & losses to plan out the where and how to spend the money.",
                manages: "Vice President of Finance, Financial Analyst, Accountant, Budget Analyst"
            }
        ]
    },
    mission: {
        header: 'Mission',
        content: `Medallion is a blockchain based app marketplace that uses its core smart chain technology to secure intellectual & real property. Medallion’s  smart chain protocol seeks to expand the functionalities introduced by Non-Fungible Tokens (NFT), creating a programmable asset management blockchain. Our unique approach gives an owner of an asset the option to sell shares in their asset that then gives the shareholder the permission to access the owner’s asset. This prevents unauthorized piracy of the owner’s asset but also creates a marketplace around each unique asset. Our competitive advantage sets the pace for innovation by creating a newly minted market around securing intellectual property & real estate. The application of Medallion’s technology secures personal data in a way that is widely applicable with an easy to use interface. The industries that can be disrupted with this technology includes any section of Arts & Entertainment that uses royalty mechanisms. Particularly music, television & movies. The Medallion technology allows multiple assets to be compounded to allow multiple data points to be covered. For example if a movie is made, the owner of the movie sets the value of 5 XLN (Medallion) then the dependencies of the camera man, director, & actors with the agreed royalty distribution percentage and everytime that movie is watched, the owner and all the dependencies of the asset get paid simultaneously. Other industries that will be revolutionized by Medallion include video streaming, video games, asset management & real estate.
        Medallion’s growth strategy includes leveraging key web3 technologies such as Augmented Reality, Virtual Reality & Artificial Intelligence to build infrastructure & incentives around our lead applications & contributors.`,
        phases: [
            {
                id: 0,
                title: "Product Introduction",
                description: "Medallion’s initial target audience will be the creator economy. Influencers, artists, cinematographers, content creators and more. Medallion will build apps that validate our core mission of securing digital & real world assets. Apps that restructure how assets are transferred, art is sold, royalties are distributed, contributors receive payments, and how live events are interfaced with."
            },
            {
                id: 1,
                title: "Product Growth",
                description: "The 2nd phase of Medallion will find us continuing to build out the creator economy but also shifting to the financial industry. Medallion will introduce apps to manage real world assets such as fiat, gold & real estate. In this phase we will introduce wearables, smart locks and other hardware that can be interacted with through Medallion’s smart chain. The hardware that is introduced will allow for a more decentralized model of ownership to come into fruition. Groups of investors can trustlessly own and run real properties, shareholders can buy & sell their shares and have their access rights to the properties changed to reflect that status. Medallion will build Meta Cafes & data centers to support the growth of the ecosystem that can scale transaction throughput, secure transactions & assets as well as premier the latest innovations in the space."
            },
            {
                id: 2,
                title: "Product Maturity",
                description: "Our vision for this phase sees our technology evolving to be able to autonomously run smart cities & factories. Medallion will be widely distributed and be used by governments across the globe to secure assets & infrastructure. Medallion will pioneer decentralized manufacturing that allows anyone to create real world instances of their digital assets."
            },
            {
                id: 3,
                title: "Product Decline",
                description: "Medallion will extend its use case to critical infrastructure such as roads, bridges, dams, airports and more that will receive tolls to run completely autonomously. In this phase our aim is to be a stealth layer 1 that processes all transactions. Our Research & Development would have analyzed the market for a pivot to allow Medallion to focus on its strengths and improve on its weaknesses."
            }
        ]
    },
    contact: {
        header: 'Build Medallion With Us',
        content: 'Join our community of leaders, builders & marketers to build the future of asset management on the blockchain.',
        contacts: [
            [ 'Join Discord', '#', 'fab fa-discord'],
            ['Get Newsletter', '#', 'far fa-envelope']
        ]
    }
    }



export const register = {
    type: "panel-image-form",
    options: {
        standard:"Standard",
        title:"Create your account",
        description:"You need it to buy our token on the ICO",
        image: XLNForm,
        formData: {
            action: "/action_page.php", 
            method: "post", 
            submit: {
                label: "Sign Up",
                className: "btn btn-block btn-info"
            },
            fields: [
                { 
                    type: "input",
                    attributes: {
                        label: { 
                            show: true, 
                            labelText: "Enter Email", 
                            forId: "kyc-email" 
                        },
                        input: { 
                            type: "email", 
                            id: "kyc-email", 
                            className: "", 
                            name: "email", 
                            value: "", 
                            onChange: "", 
                            placeholder: "Email *" 
                        },
                        aria: {}
                    }
                },
                { 
                    type: "input",
                    attributes: {
                        label: { 
                            show: true, 
                            labelText: "Enter Password", 
                            forId: "kyc-password" 
                        },
                        input: { 
                            type: "password", 
                            id: "kyc-password", 
                            className: "", 
                            name: "password", 
                            value: "", 
                            onChange: "", 
                            placeholder: "Password *" 
                        },
                        aria: {}
                    }
                },
                { 
                    type: "input",
                    attributes: {
                        label: { 
                            show: true, 
                            labelText: "Confirm Password", 
                            forId: "kyc-password-2" 
                        },
                        input: { 
                            type: "password", 
                            id: "kyc-password-2", 
                            className: "", 
                            name: "password", 
                            value: "", 
                            onChange: "", 
                            placeholder: "Confirm Password *" 
                        },
                        aria: {}
                    }
                }
            ]
        },
    }
}
