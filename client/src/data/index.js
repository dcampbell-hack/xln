import Logo from "../assets/logo/medallion_xln_logo.png";

// Employees
import CEO from "../assets/founders/CEO-Executive.png";
import COO from "../assets/founders/COO-Executive.png";
import CAO from "../assets/founders/CAO-Executive.png";
import CTO from "../assets/founders/CTO-Executive.png";
import CMO from "../assets/founders/CMO-Executive.png";
//import CFO from "../assets/founders/CFO-Executive.png";
import CBO from "../assets/founders/CBO-Executive.jpg";
import XPO from "../assets/founders/XPO-Executive.png";
import XRO from "../assets/founders/XRO-Executive.png";
//import SPS from "../assets/founders/SPS-Executive.png";

// Site Assets
import CTAMission from "../assets/corporate-art/xln-demo.png";
import CTAContact from "../assets/corporate-art/xln-cta.png";
import AssetSecurity from "../assets/corporate-art/asset-security-1.png";
import AssetSecurity2 from "../assets/corporate-art/asset-security-2.png";
import SurfApps from "../assets/corporate-art/surfing-apps.png";
import GuardDog from "../assets/corporate-art/decentralized_guard.png";
import CityAds from "../assets/corporate-art/city-ads.png";
import Stadium from "../assets/corporate-art/interactive-stadium.png";
import PulpFiction from "../assets/corporate-art/pulp-fiction_metaverse.png";
import DownloadWhitepaper from "../assets/corporate-art/whitepaper.jpg";

const date = new Date();

export const header = {
  logo: Logo,
  links: {
    logoLink: "/",
    isAuthenticated: [
      {
        text: "Wallet",
        to: "/xln",
        icon: "",
        show: true,
        external: false,
      },
      {
        text: "Assets",
        to: "/assets",
        icon: "",
        show: true,
        external: false,
      },
      {
        text: "Shares",
        to: "/shares",
        icon: "",
        show: true,
        external: false,
      },
    ],
    crowd: [
      {
        text: "Buy XLN",
        to: "/register",
        icon: "",
        show: true,
        external: false,
      },
      {
        text: "Whitepaper",
        to: "/whitepaper",
        icon: "",
        show: true,
        external: false,
      },
    ],
  },
};

export const footer = {
  logo: Logo,
  copyright: "Copyright Medallion XLN ©",
  year: date.getFullYear(),
};

export const socialLinks = [
  ["Follow on Twitter", "https://twitter.com/MedallionXln", "fab fa-twitter"],
  ["Join on Discord", "https://discord.gg/D8KzQ83vqV", "fab fa-discord"],
  [
    "Join on Reddit",
    "https://www.reddit.com/r/medallionxln",
    "fab fa-reddit-alien",
  ],
  [
    "Follow on LinkedIn",
    "https://www.linkedin.com/company/medallion-xln",
    "fab fa-linkedin",
  ],
  [
    "Follow on Tumblr",
    "https://medallionxln.tumblr.com/",
    "fab fa-tumblr-square",
  ],
  ["github", "https://github.com/medallion-xln", "fab fa-github"],
];

export const landing = {
  systemChecks: {
    showHeader: true,
  },
  cta: {
    mission:
      "Medallion XLN Smart Chain secures intellectual & real property with a decentralized app marketplace.",
    image: CityAds,
    url: {
      text: "Join the community",
      icon: "fas fa-users",
      to: "https://medallionxln.substack.com/",
      show: true,
      external: true,
    },
  },
  summary: {
    content:
      "Medallion XLN solves asset management on the blockchain by creating a programmable smart chain that tracks the ownership of shares throughout the lifecycle of the asset. Our core technology empowers users to own their data and the app marketplace gives developers the opportunity to build apps based on whatever design scheme they envision.",
    url: {
      text: "Read our announcement",
      icon: "fas fa-arrow-alt-circle-right",
      to: "https://medallionxln.substack.com/",
      show: true,
      external: true,
    },
  },
  overview: [
    {
      type: "panel-image-text-col",
      options: {
        id: "1",
        standard: false,
        title: "Reclaiming Digital Sovereignty",
        description:
          "The advertising model is responsible for minting many billionaire in the last decade. Unless an entrepreneur sold goods and services online there was no way to monetize their website. Banner ads needed to be placed all over their website so that the entrepreneur could generate a few pennies per impression and even more pennies per click. Soon platforms such as Twitter & Facebook were able to gather billions of users on their platform which allowed them to generate billions of dollars from clicks and impressions. The centralized platforms got wise and created their own advertising platforms which allowed their users to advertise to other users with similar interests. All those users gathered in one place created an attack vector for hackers to gather valuable information on the platform’s users. We now live in a dystopian hellscape where platforms monetize our every move without our consent and they can be hacked any at moment which can lead to millions of identities being stolen. What else can you expect when you don’t pay for a product. You become the product. We have all become the product.",
        image: AssetSecurity,
      },
    },
    {
      type: "panel-image-text-col",
      options: {
        id: "1a",
        standard: true,
        title: "Asset Security",
        description:
          "Medallion XLN seeks to restore our digital sovereignty by tokenizing every aspect of our digital interactions. The links we click, text we write, and images we upload can all be assetized with a set amount of customized permissions that determine who  can access that information.  Our contribution to the token economy is threefold; securing user data, monetizing user data and, interoperability through a cross chain application marketplace. Securing data begins by adding a value to each owner generated asset. Before that asset can be accessed, users much pay the requested value. This payment purchases a share in the user asset which grants the approved user access to the asset. Based on the the permissions set on the asset by the owner,  the approved user can share the asset or even collaborate with that asset with their own asset. For example, if the permissions allow it, the approved user can attach the owners music asset to their video asset. When another users accesses this new complex asset, the payment will compensate both the original owner and the approved user.",
        image: AssetSecurity2,
      },
    },
    {
      type: "panel-image-text-col",
      options: {
        id: "2",
        standard: false,
        title: "App Marketplace",
        description:
          "Medallion XLN provides functionality that on its own is very useful. There will be use cases that come about that no matter how much forethought is put into our product, we will simply not account for it. App marketplaces allow for edge case solutions to be developed and maintained by the community. They create an ecosystem of talent that create an up to date infrastructure which scales beyond intended uses. Medallion XLN provides multiple interfaces that developers can innovate upon; Links, Text, Images, Videos, Blogs, Live Events, Real Estate and the Metaverse.",
        image: SurfApps,
      },
    },
    {
      type: "panel-image-text-col",
      options: {
        id: "3",
        standard: true,
        title: "Incentive Structure",
        description:
          "97% of every transaction goes to the owner of the asset. In the scenario where a complex asset has many dependencies the 97% will be distributed based on the designated percentage for each dependent. In each transaction 97% of the price paid will go to the owner or group of owners. The 3% fee is split  2% towards an Admin fee and 1% that goes towards the community of shareholders in the asset. The admin fee contributes to the development , management, promotion, infrastructure and maintenance of the protocol.  When the transaction does not include a shareholder, the 1% portion goes toward a supernode & masternode pool that incentivizes the security and promotion of the network by rewarding the top users. The 2% Admin fee is divided by development 0.75%, management 0.75%, promotion 0.25% & acquisition 0.25%. Development is responsible for the development & maintenance of the infrastructure both online & in the real world. The development pool goes towards developers, project managers, work spaces & contractors. The management pool goes toward maintaining & recruiting management staff. Promotion pool is used to incentivize the marketing of the Medallion XLN Smart Chain by the staff & users. The acquisition pool is used to help further build out features that are popular with the public.",
        image: GuardDog,
      },
    },
  ],
  blockchain: {
    header: "",
    smartchain: [
      {
        type: "panel-image-text-row",
        options: {
          id: "3",
          standard: true,
          title: "Medallion XLN's Metaverse",
          description:
            "What is the Metaverse? The latest Silicon Valley buzzword is a merger of core technologies advanced in the previous decade. It is a combination of the Internet Of Things, Artificial Intelligence, Blockchain, Augmented Reality, Virtual Reality, 5G & Moore’s Law. The metaverse isn’t just a buzzword, it is the inevitable evolution of the internet. It’s more than NFTs and VR goggles, it’s the shift in how we communicate using technology.  Moore’s Law guarantees that technology will continue to get smaller and more powerful. What looks like a Janky headset today becomes Ray-Ban sunglasses tomorrow and contact lenses the day after. The role Medallion XLN plays in this industry will be securing and monetizing user assets. Medallion XLN is a decentralized pipeline that allows users to access their assets from any platform or interface. We plan to streamline the ability for a user to access the same asset from various metaverse platforms. Build asset once and reuse it in different interfaces or sell shares in those assets to other users to use as an avatar, clothes or a weapon.",
          image: PulpFiction,
        },
      },
      {
        type: "panel-image-text-row",
        options: {
          id: "2",
          standard: true,
          title: "Decentralized Live Events",
          description:
            "Concerts, Sports & Performances have 2 main dimensions to consider. The first is defining in-person access to the event or tickets. The other is viewing the live event from a different location and a different time. Live events are a capsule of that moment in time. Medallion XLN’s use case as a  ticket seeks to allow user wallets to only authenticate during the time period of the live events. After the event attendees can sell their experience as an asset. Attendees tag the main event to any asset they produce during that time period to create an ecosystem around that event. The owner of the event will receive a fee for every transaction that takes place from that event.",
          image: Stadium,
        },
      },
      {
        type: "panel-image-text-row",
        options: {
          id: "1",
          standard: true,
          title: "The Intersection between Real Estate & The Metaverse",
          description:
            "As the Metaverse expands, the intersection between the real world and the metaverse will merge into a singularity.  What you buy in the metaverse will be placed in your real life. Real Estate in particular will be affected. Multiple people can form themselves into one entity; buy a building then rent each apartment. Each time the tenets makes a payment, all shareholders will be credited with an agreed upon amount. Medallion XLN inherently provides the ability to divide assets between multiple shareholders. As land is bought in the metaverse, land will be bought in the real world. We plan to build an interface that provide deeds, contractors, real world quotes and time estimates on any design to be built out in the real world.",
          image: CTAMission,
        },
      },
    ],
  },
  tokenAllocation: {
    header: "The XLN Token Allocation",
    type: "panel-chart-table",
    options: {
      standard: false,
      chart: {
        type: "pie",
      },
      table: {
        type: "table",
      },
      chartData: {
        label: "XLN Token Distribution",
        totalSupply: 5444444671,
        percentageArr: [],
        allocationArr: [],
        allocation: ["Allocation", "Percentage", "Amount"],
        distribution: [
          {
            allocation: "Investors",
            percentage: 0.30,
            color: "rgba(0, 150, 255, 0.5)",
          },
          {
            allocation: "War Chest",
            percentage: 0.30,
            color: "rgba(156, 0, 255, 0.5)",
          },
          {
            allocation: "Liquidity",
            percentage: 0.125,
            color: "rgba(255, 156, 0, 0.5)",
          },
          {
            allocation: "Founders",
            percentage: 0.10,
            color: "rgba(255, 205, 86, 0.5)",
          },
          {
            allocation: "Team",
            percentage: 0.10,
            color: "rgba(255, 99, 132, 0.5)",
          },
          {
            allocation: "Advisors",
            percentage: 0.05,
            color: "rgba(109, 248, 81, 0.5)",
          },
          {
            allocation: "Air Drop",
            percentage: 0.025,
            color: "rgba(255, 156, 0, 0.5)",
          },
        ],
      },
    },
    icons: [
      "fas fa-mobile",
      "fas fa-brain",
      "fas fa-chart-bar",
      "fas fa-basketball-ball",
      "fas fa-street-view",
      "fas fa-lock",
      "fas fa-plane-departure",
      "far fa-lightbulb",
      "fas fa-cookie-bite",
      "fas fa-dice",
      "fas fa-dna",
    ],
    body: "Medallion XLN is a very ambitious project. Any large idea can be broken down into small reusable components that scale across the organization. We intend for this product to be built in collaboration with our core team and the community. Ou core team will be providing all the necessary tools for the community to get the maximum potential out of the product Our technology department aims to provide a secure asset management experience regardless of the interface it is accessed from. The technology department includes a portion dedicated to Blockchain and Extended Reality. The blockchain provides transparency and trust in the application. The extended reality allows Medallion XLN to have a presence is all interfaces. Our Operations department will identify where we are missing a construct then develop the best strategy to address it.",
    button: {
      text: "Submit An Idea",
    },
  },
  roadMap: {
    header: 'XLN Roadmap',
    roadmaps: [
      {
        timePeriod: "Current State",
        months: "June 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
      },
      {
        timePeriod: "4 Months",
        months: "July - October 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
      },
      {
        timePeriod: "6 Months",
        months: "November - April 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
      },
      {
        timePeriod: "1 Year",
        months: "May 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
      },
      {
        timePeriod: "3 Years",
        months: "May 2027",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
      },
    ]
  },
  team: {
    header: "Medallion XLN | Team Members",
    members: [
      {
        image: CEO,
        avatar: 'CEO-Executive.png',
        name: "Dwayne",
        position: "Chief Executive Officer (CEO) / Founder",
        bio: "Bio: Dwayne has been a Software Engineer for over a decade building software infrastructure for companies such as  Equinix, Dropbox, Gap & Freedom Financial. He first got interested in the blockchain & asset management in 2017 when WikiLeaks sold crypto kitty's to fund their organization. His responsibilities are to define the vision and momentum of Medallion XLN.",
        responsibilities:
          "Tasks: Drive the momentum of Medallion XLN. Make key decisions. Define company vision & public image. Manage all executives.",
        manages: "Manages: COO, CTO, CBO, CFO, CMO, XRO, XPO",
      },
      {
        image: COO,
        avatar: 'COO-Executive.png',
        name: "Allan",
        position: "Chief Operating Officer (COO)",
        bio: "Bio: Allan has over 20 years of experience in the investment industry working with small boutique financial firms to large Turnkey Asset Management Programs.  Allan has held leadership roles in operations, service, learning & development, and internal communications.  His interest in blockchain & asset management space in 2019 as an investor in cryptocurrencies.",
        responsibilities: "Tasks: Promotes the tone, public image & makes sure the company runs as efficiently as possible. Designs & implements plans to carry out vision. Is able to predict and solve company problems.",
        manages:
          "Manages: Vice President of Operations, Business Analyst, Operations Manager",
      },
      {
        image: CMO,
        avatar: 'CMO-Executive.png',
        name: "Sophie",
        position: "Chief Marketing Officer (CMO)",
        bio: "Bio:  Kushner Sophia , an American entrepreneur who was born and raised in Canada, I am one of many entrepreneurs who has taken her talents to the digital space by minting and selling non-fungible tokens, or NFTs, on digital marketplaces. Prior to minting and selling non- fungible tokens I also have a career in crypto where back in 2020 I started off my ROI (Return on investments) the success rate was 90% for myself and others who invested and has moved further up to hold coins on Public. Kushner Sophia is a principal body under Arenalive a United Kingdom based company charged with promoting economic programs and national public-private partnerships to advance innovation and entrepreneurship.",
        responsibilities: "Tasks: Creates marketing strategy and is responsible for advertising, branding & client acquisition for the company. Must have a deep understanding about how to leverage social media to create an army of followers. Stay up to date with the latest trends, defining and attracting a loyal and passionate user base. Construct marketing plans to meet customers & business partners alike.",
        manages:
          "Brand Manager, Director of Marketing, SEO Manager, Social Media Manager, Email Marketing Manager",
      },
      {
        image: XPO,
        avatar: 'XPO-Executive.png',
        name: "Ana",
        position: "Executive Program Officer (XPO)",
        bio: "Bio: Ana is an accomplished Digital leader with 15 years of experience, offering a unique blend of Program Management, Technology, and Marketing expertise. She also offers an exceptional record of strategic planning/execution, while building high-performing cross-functional teams, coaching/developing talent, and ensuring operational excellence.",
        responsibilities: "Executive Program Officer oversee the fulfillment of larger organizational goals. They coordinate activities between multiple projects without directly managing them. Instead, they manage the main program, giving detailed attention to program strategy, project delegation, and program implementation.",
        manages:
          "As an Executive Program Officer, you will be communicating, coordinating, and collaborating with cross functional teams daily. Working most closely with the Engineering and Product Management teams, you will be influencing all aspects of the product delivery process.",
      },
      {
        image: CTO,
        avatar: 'CTO-Executive.png',
        name: "Gaurav",
        position: "Chief Technology Officer (CTO)",
        bio: "Bio: Gaurav Kumar, Chief Technology Officer (CTO)  Meet GK our CTO | ex PayPal, ex eBay, he has more than a decade experience in building core technologies and shipping stellar user experiences to millions of users. GK holds a BS, MS degrees in Computer Science. Based out of San Francisco Bay Area, when he is not in a Nerd mode, he spends time with his friends and family.",
        responsibilities: "Oversees the development and dissemination of technology for external customers, vendors, and other clients to help improve and increase business. Keeps pace with the accelerated rate of change in technology. Offers innovative solutions to the company. They may also deal with internal IT operations if a company is small and doesn't have a Chief Information Officer.                ",
        manages:
          "Engineering Manager, Front End Developer, Lead Software Engineer, Machine Learning Engineer, QA Engineer, Senior Software Engineer, Software Engineer",
      },
      {
        image: CAO,
        avatar: 'CAO-Executive.png',
        name: "Gary",
        position: "Client Acquisions Officer (CAO)",
        bio: "Gary has been a Sales & Customer Service Professional and Creative Talent for over 30 years. He has help onboard clients for ABC Television, The CW Network, Proctor & Gamble and Scandinavian Designs.",
        responsibilities: "Onboard new clients, build relationships and maintain connections through dialog and written communication. Gary’s focus at Medallion XLN will be to connect with then onboard Small Business and global Enterprises  to use Medallion XLN’s Smartchain as their Asset Management Blockchain.",
        manages:
          "Sales Manager, Sales personnel, Customer Service representatives",
      },
      {
        image: XRO,
        avatar: 'XRO-Executive.png',
        name: "Ptah `ArtCrazy` Quammie",
        position: "Experience Reality (XRO)",
        bio: "N/A",
        responsibilities: "Oversees the development and dissemination of technology for external customers, vendors, and other clients to help improve and increase business. Keeps pace with the accelerated rate of change in technology. Offers innovative solutions to the company. They may also deal with internal IT operations if a company is small and doesn't have a Chief Information Officer.                ",
        manages: "Engineering Manager, Front End Developer, Lead Software Engineer, Machine Learning Engineer, QA Engineer, Senior Software Engineer, Software Engineer"
    },
      {
          image: CBO,
          avatar: 'CBO-Executive.jpg',
          name: "Tom",
          position: "Chief Blockchain Officer (CBO)",
          bio: "N/A",
          responsibilities: "As a Site Reliability Engineer (SRE), you'll help build a meaningful engineering discipline, combining software and systems to develop creative engineering solutions to operations problems. Much of our support and software development focuses on optimizing existing systems, building infrastructure, and reducing work through automation. You'll join a team of curious problem solvers with a diverse set of perspectives who are thinking big and taking risks. In this environment, you'll take the lead on relevant projects, supported by an organization that provides the support and mentorship you need to learn and grow. As an SRE, you'll be focused on running better production applications and systems. ",
          manages: "Engineering Manager, Front End Developer, Lead Software Engineer, Machine Learning Engineer, QA Engineer, Senior Software Engineer, Software Engineer"
      },
      // {
      //     image: CFO,
      //     name: "John Doe",
      //     position: "CFO",
      //     bio: "N/A",
      //     responsibilities: " In charge of overall finances for the company. Oversees budgeting, accounting, payroll & forecasting. Predict the company’s gains & losses to plan out the where and how to spend the money.",
      //     manages: "Vice President of Finance, Financial Analyst, Accountant, Budget Analyst"
      // }
    ],
  },
  downloadWhitepaper: {
      type: "panel-image-text-col",
      options: {
        id: "1",
        standard: true,
        title: "Download Whitepaper",
        description: "A whitepaper is an informational document usually issued by a company to highlight the features of a solution that it offers or plans to offer. Medallion XLN’s whitepaper will educate our community regarding the Digital Resource Management industry. Medallion XLN’s many use cases and implementations will be highlighted. Medallion XLN is creating a technology that has the potential to give birth to many new industries in a decentralized ecosystem. The whitepaper will provide our vision, values, implementation strategy, and provide a theoretical & practical approach to Asset Management.",
        image: DownloadWhitepaper,
        minimizeImage: true,
        clickable: true,
        charLimit: 1000,
        button: {
          text: "Download Whitepaper",
          icon: "fa-solid fa-file-lines",
          to: "whitepaper",
          show: true,
          external: false,
        },
      },
    },
  mission: {
    header: "Mission",
    content: `Medallion is a blockchain based app marketplace that uses its core smart chain technology to secure intellectual & real property. Medallion’s  smart chain protocol seeks to expand the functionalities introduced by Non-Fungible Tokens (NFT), creating a programmable asset management blockchain. Our unique approach gives an owner of an asset the option to sell shares in their asset that then gives the shareholder the permission to access the owner’s asset. This prevents unauthorized piracy of the owner’s asset but also creates a marketplace around each unique asset. Our competitive advantage sets the pace for innovation by creating a newly minted market around securing intellectual property & real estate. The application of Medallion’s technology secures personal data in a way that is widely applicable with an easy to use interface. The industries that can be disrupted with this technology includes any section of Arts & Entertainment that uses royalty mechanisms. Particularly music, television & movies. The Medallion technology allows multiple assets to be compounded to allow multiple data points to be covered. For example if a movie is made, the owner of the movie sets the value of 5 XLN (Medallion) then the dependencies of the camera man, director, & actors with the agreed royalty distribution percentage and everytime that movie is watched, the owner and all the dependencies of the asset get paid simultaneously. Other industries that will be revolutionized by Medallion include video streaming, video games, asset management & real estate.
        Medallion’s growth strategy includes leveraging key web3 technologies such as Augmented Reality, Virtual Reality & Artificial Intelligence to build infrastructure & incentives around our lead applications & contributors.`,
    phases: [
      {
        id: 0,
        title: "Product Introduction",
        description:
          "Medallion’s initial target audience will be the creator economy. Influencers, artists, cinematographers, content creators and more. Medallion will build apps that validate our core mission of securing digital & real world assets. Apps that restructure how assets are transferred, art is sold, royalties are distributed, contributors receive payments, and how live events are interfaced with.",
      },
      {
        id: 1,
        title: "Product Growth",
        description:
          "The 2nd phase of Medallion will find us continuing to build out the creator economy but also shifting to the financial industry. Medallion will introduce apps to manage real world assets such as fiat, gold & real estate. In this phase we will introduce wearables, smart locks and other hardware that can be interacted with through Medallion’s smart chain. The hardware that is introduced will allow for a more decentralized model of ownership to come into fruition. Groups of investors can trustlessly own and run real properties, shareholders can buy & sell their shares and have their access rights to the properties changed to reflect that status. Medallion will build Meta Cafes & data centers to support the growth of the ecosystem that can scale transaction throughput, secure transactions & assets as well as premier the latest innovations in the space.",
      },
      {
        id: 2,
        title: "Product Maturity",
        description:
          "Our vision for this phase sees our technology evolving to be able to autonomously run smart cities & factories. Medallion will be widely distributed and be used by governments across the globe to secure assets & infrastructure. Medallion will pioneer decentralized manufacturing that allows anyone to create real world instances of their digital assets.",
      },
      {
        id: 3,
        title: "Product Decline",
        description:
          "Medallion will extend its use case to critical infrastructure such as roads, bridges, dams, airports and more that will receive tolls to run completely autonomously. In this phase our aim is to be a stealth layer 1 that processes all transactions. Our Research & Development would have analyzed the market for a pivot to allow Medallion to focus on its strengths and improve on its weaknesses.",
      },
    ],
  },
  contact: {
    header: "Build Medallion With Us",
    content:
      "Join our community of leaders, builders & marketers to build the future of asset management on the blockchain.",
   image: CTAContact,
      contacts: [
      ["Join Discord", "#", "fab fa-discord"],
      ["Get Newsletter", "#", "far fa-envelope"],
    ],
  },
};

export const register = {
  type: "form",
  options: {
    standard: "Standard",
    title: "Let's get started!",
    warning: "If you are already registered click here to",
    description:
      "Your account will introduce you to the brave new world of Smart Contracts.",
    warningLink: {
      text: "login",
      to: "/login",
      icon: "",
      show: true,
      external: false,
    },
    image: Stadium,
    formData: {
      action: "register",
      method: "post",
      submit: {
        label: "Sign Up",
        className: "btn btn-block btn-info",
      },
      fields: [
        {
          type: "input",
          attributes: {
            label: {
              show: false,
              labelText: "Enter First Name",
              forId: "kyc-first-name",
            },
            input: {
              type: "text",
              id: "kyc-first-name",
              className: "",
              name: "firstname",
              value: {},
              onChange: "",
              placeholder: "First Name *",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              show: false,
              labelText: "Enter Last Name",
              forId: "kyc-last-name",
            },
            input: {
              type: "text",
              id: "kyc-last-name",
              className: "",
              name: "lastname",
              value: {},
              onChange: "",
              placeholder: "Last Name *",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              show: false,
              labelText: "Enter Username",
              forId: "kyc-username",
            },
            input: {
              type: "text",
              id: "kyc-username",
              className: "",
              name: "username",
              value: {},
              onChange: "",
              placeholder: "Username *",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              show: false,
              labelText: "Enter Email",
              forId: "kyc-email",
            },
            input: {
              type: "email",
              id: "kyc-email",
              className: "",
              name: "email",
              value: {},
              onChange: "",
              placeholder: "Email *",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              show: false,
              labelText: "Enter Password",
              forId: "kyc-password",
            },
            input: {
              type: "password",
              id: "kyc-password",
              className: "",
              name: "password",
              value: {},
              onChange: "",
              placeholder: "Password *",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              show: false,
              labelText: "Confirm Password",
              forId: "kyc-password-2",
            },
            input: {
              type: "password",
              id: "kyc-password-2",
              className: "",
              name: "password2",
              value: {},
              onChange: "",
              placeholder: "Confirm Password *",
            },
            aria: {},
          },
        },
      ],
    },
  },
};

export const login = {
  type: "form",
  options: {
    standard: "Standard",
    title: "Log in to your account.",
    warning: "Click here to",
    description: "Access features that are exclusive to Medallion XLN",
    warningLink: {
      text: "register",
      to: "/register",
      icon: "",
      show: true,
      external: false,
    },
    image: CTAMission,
    formData: {
      action: "login",
      method: "post",
      submit: {
        label: "Login",
        className: "btn btn-block btn-info",
      },
      fields: [
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Enter Email",
              forId: "kyc-email",
            },
            input: {
              type: "email",
              id: "kyc-email",
              className: "",
              name: "email",
              value: {},
              onChange: "",
              placeholder: "Email *",
            },
            aria: {},
          },
        },
        {
          type: "input",
          attributes: {
            label: {
              error: false,
              inverse: false,
              show: false,
              labelText: "Enter Password",
              forId: "kyc-password",
            },
            input: {
              type: "password",
              id: "kyc-password",
              className: "",
              name: "password",
              value: {},
              onChange: "",
              placeholder: "Password *",
            },
            aria: {},
          },
        },
      ],
    },
  },
};

export const xln = {
  infura: "68eb211506c141e78162043b7b0df69a",
  systemChecks: {
    showHeader: false,
  },
  authentication: {
    userChecks: [
      {
        id: "123qd",
        path: ["auth"],
        avatar: "rocket.gif",
        to: "/",
        action: {},
        show: true,
        type: false,
        select: {
          metamask: false,
          coinbase: false,
          authenticated: false,
        },
        error: {
          button: {
            link: false,
            alert: "danger",
            action: null,
            label: "Connect Wallet",
          },
          header: "Authenticate Metamask Wallet",
          detailed:
            "Connect with one of our available wallet providers or create a new one.",
        },
      },
      
      {
        id: "123q9a",
        path: ["auth"],
        avatar: "social-media.gif",
        to: "/xln/:username",
        action: {},
        show: true,
        type: false,
        select: {
          count: 0,
          data: [],
        },
        error: {
          button: {
            link: true,
            alert: "danger",
            label: "Go to Profile",
          },
          header: "Visit Your Profile",
          detailed: "You have 10 shareholders",
        },
      },
      {
        id: "123fb",
        path: ["auth"],
        avatar: "money-bag.gif",
        to: "/assets/create",
        action: {},
        show: true,
        type: false,
        select: {
          assetCreated: true,
        },
        error: {
          button: {
            link: true,
            alert: "danger",
            label: "Create Asset",
          },
          header: "Create Asset",
          detailed: "Create your first asset",
        },
      },
      {
        id: "123fw",
        path: ["auth"],
        avatar: "share.gif",
        to: "/shares/:id/buy",
        action: {},
        show: true,
        type: false,
        select: {
          count: 0,
          data: [],
        },
        error: {
          button: {
            link: true,
            alert: "danger",
            label: "Buy Share",
          },
          header: "Buy your first share",
          detailed: "You have 0 shares",
        },
      },
      {
        id: "123fs",
        path: ["auth"],
        avatar: "target.gif",
        to: "/register",
        action: {},
        show: true,
        type: false,
        select: {
          isRegistered: [],
        },
        error: {
          button: {
            link: true,
            alert: "danger",
            label: "Register",
          },
          header: "Register User",
          detailed: "Your account must be registered before further use",
        },
      },
    ],
  },
};

export const whitepaper = {
     header: 'Whitepaper',
     image: DownloadWhitepaper,
     description: "A whitepaper is an informational document usually issued by a company to highlight the features of a solution that it offers or plans to offer. Medallion XLN’s whitepaper will educate our community regarding the Digital Resource Management industry. Medallion XLN’s many use cases and implementations will be highlighted. Medallion XLN is creating a technology that has the potential to give birth to many new industries in a decentralized ecosystem. The whitepaper will provide our vision, values, implementation strategy, and provide a theoretical & practical approach to Asset Management.",
     options: {
     tableLabel: 'Table Of Contents',
     sections: [
       {
         id: '1',
         title: 'Definitions',
         content: {
           list: true,
           details: [],
           lists: [
             {
               label: "Blockchain",
               content: "A system in which a record of transactions made in cryptocurrency and are maintained across several computers that are linked in a peer-to-peer network."
             },
             {
               label: "Smart Contract",
               content: "Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met."
             },
             {
              label: "Decentralized Finance (Defi)",
              content: "Decentralized finance (DeFi) refers to the infrastructure, processes, and technologies used to democratize financial transactions."
            },
            {
              label: "Non-Fungible Token (NFT)",
              content: "A Non-Fungible Token (NFT) is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded."
            },
            {
              label: "Initial Coin offering (ICO)",
              content: "A process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company."
            },
            {
             label: "Assets",
             content: "A digital asset is anything that is stored digitally and is uniquely identifiable that organizations can use to realize value."
           },
           {
             label: "Asset Management",
             content: "Digital asset management (DAM) is both a business process and an information management technology, which creates a centralized system for organizations to organize and access their media assets."
           },
           {
            label: "Interplanetary File System (IPFS)",
            content: "IPFS is a peer-to-peer (p2p) storage network. Content is accessible through peers located anywhere in the world, that might relay information, store it, or do both. IPFS knows how to find what you ask for using its content address rather than its location."
          },
           ]
         }
       },
       {
        id: '2',
        title: 'Overview',
        content: {
          list: false,
          details: [
            'Medallion XLN is creating a programmable blockchain that provides the ability to assetize all forms of user generated data. This streamlined process allow users to monetize and secure their data. Permissions provide creators the ability to customize access to that data in ways that allow collaboration with other creators while guaranteeing that each participant will be compensated for their contribution. Along with the core functionality of the blockchain, Medallion XLN also includes an App marketplace or a component asset library that allows data to be decentralized from any platform. The reusable components are fully equipped with the features that allow full monetization and distribution of their asset on any platform. ',
            'The advent of the internet created a plethora of activities that users could engage in. This also created the opportunity for companies to use those activities to figure out how to best advertise to new and existing customers. In a way, this benefits us because we get advertisements that are relevant to our interests. The inverse, of course, is that feeling of being violated. Our information is harvested without our permission. Even worse, someone else made money from our data and did not give us a cut. Can we really blame them? There is no infrastructure that provides the ability for those companies to track us down and pay us for exploiting our data. This is the problem that Medallion XLN seeks to solve using blockchain & smart contracts.'
          ],
          lists: []
        }
      },
      {
        id: '3',
        title: 'Abstract',
        content: {
          list: true,
          details: [
            "Medallion XLN creates a Blockchain that exclusively focuses on asset management. Meaning that intellectual property is always owned & monetized by the creator who has exclusive permissions to determine who can access that asset. Medallion XLN recognizes that data itself needs a transaction ledger so that large corporations are not the only ones who can monetize from their users' online activities. As the internet continues to evolve and create new ways to connect with others, it is important for the individual to have sovereignty over their online activities.",
            "Medallion XLN’s programmable blockchain creates the ability for users to actually own their data for the first time in history. Only once the permissions set by the owner of the asset are met will access to the asset be granted. Shifting the power from Big Data tech companies to the individual owner of that asset. The true value of blockchain’s decentralization will be demonstrated by the amount of market share Medallion XLN can take from big tech companies."
          ],
          lists: [
            {
              label: "Data ownership",
              content: "Medallion XLN aims to provide individuals, groups, companies and corporations the ability to own and monetize every aspect of their data. Tools are built with the intention of providing full control of who can access this data, how it will be shared and if other users can collaborate with that data."
            },
            {
              label: "Monetization",
              content: "Adam Smith’s Wealth of Nations asserts that value is derived by the amount of effort required in developing a product from inception to customer. Content creators put an unlimited amount of effort into producing videos, text and images to provide entertainment for the internet only to put it out for free. According to the founder of capitalism, these digital products should be viewed as assets and therefore be monetized in a way that rewards the creator for the amount of effort that was put into its development."
            },
            {
              label: "Collaboration",
              content: "In an effort to remain consistent to the internet’s favorite past time of collaborating with each other. Medallion XLN protocol provides collaboration as a built in feature. Users love to collaborate and create massive impact with their efforts so it makes sense to have that feature when creating assets. Content creators can collaborate with each other and determine how incoming funds are split."
            },
            {
              label: "Interoperability",
              content: "The promise of web3 is to become entirely decentralized from platforms. Currently that is being demonstrated with extensions such as metamask that store your data then provides verification and authentication to other apps when necessary. Medallion XLN’s goal is to provide a similar experience with digital assets. If any user ops out of paying a creator then they simply will not see that creator’s work. When enough creators participate in this system, eventually the only way to access creator content will be by paying for it. As long as the content is priced in a reasonable enough way, then both users and creators will work and profit together in symbiosis."
            },
          ]
        }
      },
      {
        id: '4',
        title: 'Introduction',
        content: {
          list: false,
          details: [
            "To understand Medallion XLN and the problem we solve, let us trace our ancestry through key events in the blockchain space. In 2009, Satoshi Nakamoto released the Bitcoin Whitepaper, then launched the Bitcoin Blockchain a few months later. The technology revolutionized finance and successfully created a tamper proof decentralized ledger that has its use case as a currency. The next big evolution in the blockchain space was Ethereum. Ethereum built upon the core features introduced by Bitcoin but added the ability to program smart contracts. Since Ethereum’s launch of Smart Contracts, they have been used to create a variety of industries such as Defi, Non-Fungible Tokens, identity management, and Initial Coin Offerings. Ethereum and its many applications have a tremendous impact on many people’s lives. Although, the Achilles heel of Ethereum is the ability to only perform 15 transactions per second.  This limitation presents a challenge as demand grows.",
            "Ethereum is a robust juggernaut that does it all, which presents a problem. It’s many use cases provide a bottleneck for industries that want to focus on one thing. Medallion XLN’s focus is on decentralized Asset Management on a programmable Blockchain. Particularly empowering users to securely track their assets across various applications. Our unique advantage is our focus of allowing creators to trustlessly monetize their assets, set permissions on what can be done with that asset, and compound the asset with other assets to create Complex assets. This idea is so important because billion dollar companies have been built on the backs of the data they receive from our daily online interactions. This use of our data would be tolerated if the creators received a portion of the money generated from their activities. Tech giants continue to be greedy and expand themselves at a ferocious rate. Who can blame them? Similar to oil barons of the Industrial Revolution, as long as there is oil in the ground, they will drain the land. Medallion XLN reverses this trend by building a Smart Chain that allows us to track, secure, and monetize our data. We choose who gets access to our various activities. Who can view your content such as images, videos, blog posts, etc., monetizing these interactions through each stage of it’s lifecycle. Medallion XLN views all our interactions online as individual assets. Where once, we were unable to monetize on a centralized platform, Medallion XLN now provides the infrastructure to securely monetize that data."
          ],
          lists: []
        }
      },
      {
        id: '5',
        title: 'Use Cases',
        content: {
          list: true,
          details: [
            "Medallion XLN’s asset management on a programmable Smart Chain has many use cases. Initially, Medallion XLN aimed to create a monetization solution for movies. The idea was to track all personnel involved in creating the movie; actors, cinematographers, directors, scriptwriters, etc. Then create a process that allows the viewer to access the video only once they have bought a share in the video for an amount that would be distributed to the creators of the film. This idea is revolutionary, but why stop at movies when all asset types could benefit from having access to this kind of infrastructure? This section maps out how the various assets types will be monetized on Medallion XLN."
          ],
          lists: [
            {
              label: "Monetize Text",
              content: "The most prevalent asset type for daily use is by far text. Text is used for blogs, social media post and all kinds of content. There are instances where users create a new phrase and want to create an exclusive pipeline to access it. Medallion XLN provides a way to monetize quotes, poetry, blog post, font types…etc. Text provide advertisers a way to parse out your interests and hobbies so they can develop a strategy to sell stuff to you. By securing access to text, we enable users to control & monetize off the concepts they type. Quotes are what could benefit the most from monetization. Web2 users see a barrage of quotes on their timelines which are sometimes not from the person it says it’s from. More so, because of how viral quotes can be, an opportunity is created where users can monetize their quotes and create a direct reference point to the person who actually said the quote."
            },
            {
              label: "Monetize Images",
              content: "A picture is worth a thousand words. Many photographers & artist have no recourse when their art is saved off the internet. Many artist put hours into rendering their work only to have it swiped. Not even the NFT market could solve this problem. Although the NFT feature on many blockchains gave their work a unique address on the blockchain that could be monetized, the image asset itself could still be downloaded without the artist’s consent. Medallion XLN is built exclusively to secure a creator’s image assets in a way that cannot be saved or screenshot."
            },
            {
              label: "Monetize Blogs",
              content: "Blogs are important because they represent the beginning of web 2.0 infrastructure. Without blogs there is no MySpace, Facebook or Tumblr. A common problem all blogs have is monetization. In recent years there has been subscription models specifically for blogs such as medium. The only issue is that these models require that you centralize your content on a brand that you don’t own. Medallion XLN is a decentralized solution that allows you to monetize you your blogs without diluting your brand by being forced to centralize your content on another site."
            },
            {
              label: "Monetize Videos",
              content: "Videos on the internet are a product of the 2010s, before that videos took up too much bandwidth to be streamed on outdated infrastructure and the viewer experienced endless buffers. Nevertheless, Youtube monetization drove improvements to viewing videos on the internet and now we can all watch bufferless videos. Through this medium came the rise of “influencers” and “content creators” who amassed enormous followings. Currently, their best case scenario to monetize their content is to receive a portion of the ad revenue that Youtube gives them to continue producing content. This content, needs to fit an ad friendly constraint which limits the content creators ability to express their creativity. The content creator then has to rely on outside platforms such as Patreon and monthly subscribers to monetize private videos. Medallion XLN’s protocol is built to take advantage of network effects and maximizes both following and the ability to monetize on content with the additional bonus of no censorship."
            },
            {
              label: "Monetize Music",
              content: "The 2010’s was an interesting decade for music. Piracy was at an all time high and record labels were hemorrhaging album profits. The ringtone era was coming to a close and the music industry needed a way to fight piracy. Apple’s Itunes store had been going strong for the previous decade and gave audiences a way to legally download music for $0.99 to $1.50 but that wasn’t enough. The solution presented itself when the Spotify streaming service began to blow up in the west and started to onboard more and more artist, giving them a way to monetize their music. Spotify’s model was not to sell the song for a download but to store the song on their platform and charge the user each time they listened to it as a stream. This strategy did work to curb piracy by presenting a solution that was low cost enough to allow consumer to enjoy all the songs they wanted legally. It also gave musicians a direct way to monetize their songs. Fast forward to a decade later and many musicians are not happy getting paid only $0.003 per stream while a NFT.jpeg sells for millions of dollars. This presents an opportunity for Medallion XLN to provide musicians with a better deal, and siphon disgruntled artist to the decentralized asset management platform that we offer as a solution."
            },
            {
              label: "Live Events",
              content: "Concerts, Sports & Performances have 2 main dimensions to consider. The first is defining in-person access to the event or tickets. The other is viewing the live event from a different location and a different time. Live events are a capsule of that moment in time. Medallion XLN’s use case as a  ticket seeks to allow user wallets to only authenticate during the time period of the live events. After the event attendees can sell their experience as an asset. Attendees tag the main event to any asset they produce during that time period to create an ecosystem around that event. The owner of the event will receive a fee for every transaction that takes place from that event."
            },
            {
              label: "Metaverse",
              content: "What is the Metaverse? The latest Silicon Valley buzzword is a merger of core technologies advanced in the previous decade. It is a combination of the Internet Of Things, Artificial Intelligence, Blockchain, Augmented Reality, Virtual Reality, 5G & Moore’s Law. The metaverse isn’t just a buzzword, it is the inevitable evolution of the internet. It’s more than NFTs and VR goggles, it’s the shift in how we communicate using technology.  Moore’s Law guarantees that technology will continue to get smaller and more powerful. What looks like a Janky headset today becomes Ray-Ban sunglasses tomorrow and contact lenses the day after. The role Medallion XLN plays in this industry will be securing and monetizing user assets. Medallion XLN is a decentralized pipeline that allows users to access their assets from any platform or interface. We plan to streamline the ability for a user to access the same asset from various metaverse platforms. Build asset once and reuse it in different interfaces or sell shares in those assets to other users to use as an avatar, clothes or a weapon."
            },
            {
              label: "Real Estate Interoperability",
              content: "As the Metaverse expands, the intersection between the real world and the metaverse will merge into a singularity.  What you buy in the metaverse will be placed in your real life. Real Estate in particular will be affected. Multiple people can form themselves into one entity; buy a building then rent each apartment. Each time the tenets makes a payment, all shareholders will be credited with an agreed upon amount. Medallion XLN inherently provides the ability to divide assets between multiple shareholders. As land is bought in the metaverse, land will be bought in the real world. We plan to build an interface that provide deeds, contractors, real world quotes and time estimates on any design to be built out in the real world."
            },
            {
              label: "Looking towards the future",
              content: "In all of the above scenarios there is always an interaction between the owner, his asset and the interested party. The owner never loses ownership of his asset but grants access to it by selling shares. The share bought by the interested party allows them to access the asset and depending on the permissions set by the owner, combine the asset with another asset. For example if the owner is a musician, and the interested party wants to incorporate the music asset into a painting as background music. The shareholder that buys this new complex asset would have to pay the sum of the musician & painters assigned value of each asset. The permission the owner sets on his asset determines if when his asset is included in a complex asset, whether to distribute payment evenly to all parties or to an pay agreed upon portion to each party. Different use cases for various scenarios."
            },
          ]
        }
      },
      {
        id: '6',
        title: 'Token Metrics',
        content: {
          list: true,
          details: [
            "Name: Medallion XLN",
            "Symbol: XLN",
            "Total Supply: 5,444,444,671"
          ],
          lists: [
            {
              label: "Overview of ICO",
              content: "Initial funds will be raised by ICO. 70% of the token supply will go towards the crowdsale while 30% will be retained by Medallion XLN to be used for funding. Medallion XLN’s portion of the crowdfund will be distributed 10% for the founders as a sign on bonus and to acquire top tier talent. The other 20% will go toward funding the company. Company funds will be divided by Executives and Technology. The Executive fund is used by the company to hire team members, acquire property and supply the needs of each department. The technology fund will be used to set up an effective technology and engineering department and buy equipment for the whole company. Key checkpoints include hiring a systems architect, 1 staff engineer, 3 frontend engineers, 3 backend engineers, 2 solidity developers, 1 quality assurance engineer & 2 Extended Reality Specialist. A portion of Technology funds will be set aside to acquire failing companies with complementary technology, subscription services that will speed up development & partnerships with complementary brands."
            },
            {
              label: "ICO breakdown ",
              content: ""
            }
          ]
        }
      },
      {
        id: '8',
        title: 'Product',
        content: {
          list: true,
          details: ["Medallion uses a traditional blockchain data structure to decentralize, transfer, secure and mine transactions. We diverge by building an asset management system on top of the blockchain that specifies if the transaction is transferring assets or value. The asset creation process requires the owner of the asset to upload the file or data which will be tracked and stored on the IPFS (Interplanetary File System). The user will then assign a value and set various permissions on the asset that will determine what shareholders of the asset can do with it before submitting the transaction, which will track the address of the owner and assign the asset its own address. Users determine the value of their asset based on personal perspective, but Medallion can provide data on what the average asset is selling for. From this point, only users who pay the value of the asset can access the asset in various use cases. "],
          lists: [
            {
              label: "Smartchain",
              content: "Medallion’s smart chain aims to provide an interface that allows multiple ways to monetize an asset. A core feature of the smart chain will be to compound assets or allow unique assets to depend on each other. For example, a video asset can use a music asset as the background sound, but when the video is accessed, both assets will receive payments. Owners can set the permissions on their asset to determine how that asset should be compounded. To build complex assets which use a variety of assets as dependencies is the optimal use case for Medallion smart chain. It’s not enough to monetize an asset but to reach an asset’s max potential value by encouraging collaboration with other assets. When a complex asset is created, the sum of all the asset values will be the price of the new asset, allowing all owners to be paid. Another option if the aim is to prevent the price of the asset from getting too expensive is to set the permissions on each asset to take a percentage of the overall value, ensuring flexibility on how users can monetize.. An interested user can purchase their desired asset, which will send an offer to the owner who will accept or decline the offer. The accepted offer will initiate the transaction which will then be submitted to the blockchain and the interested user will become a shareholder in the asset. The rejected offer will be discarded. The status of shareholder given to the new owner of a share in the asset will allow the shareholder to promote, and compound that asset with other assets if the owner’s permission allows it. The shareholder can even resell his share at a higher price than that of the owner’s original price as long as the owner can receive the value he expects on every transaction. "
            },
            {
              label: "Fee Structure",
              content: "On each transaction there will be a 3% fee that goes towards the development , management & promotion of the Medallion network, which includes 1% that will be distributed to all the shareholders in the asset. The other 97% gets paid to the owner of the asset. In the scenario where the asset has many dependencies, the 97% will be distributed based on the designated percentage for each dependent. In each transaction 97% of the price paid will go to the owner or group of dependents and 3% will go towards the fee. The fee will be split with 1% going to all the shareholders in an asset & 2% that goes toward administration. When the transaction does not include an asset transfer the 1% goes toward a supernode & masternode pool that incentivizes the security and promotion of the network by rewarding the top users. The admin fee is divided by a development pool 0.75%, management pool 0.75%, promotion pool 0.25% & acquisition pool 0.25%. Development is responsible for the development & maintenance of the infrastructure both online & in the real world. The development pool goes towards developers, project managers, work spaces & contractors. The management pool goes toward maintaining & recruiting management staff. Promotion pool is used to incentivize the marketing of the Medallion Smart Chain by the staff & users. The acquisition pool is used to help further build out features that are popular with the public. "
            },
            {
              label: "App Marketplace",
              content: "The app marketplace is designed to apply the core technology described above and gives developers the tools to build different implementations. There is no way to know the full potential of the Medallion Smart Chain unless numerous applications are built and the strength of the network is tested. Medallion aims to provide a secure asset management experience regardless of platform. The app also facilitates simple to use plugins for popular interfaces such as web, mobile app, VR, AR, digital billboards and any new front-end technology discovered in the future. We aim to be the premier marketplace across all platforms & interfaces for decentralized asset management apps. The Medallion company will be building apps to contribute to the marketplace that is fully componentized so that developers can simply import a feature they like into their own app and deploy as soon as possible."
            },
            {
              label: "",
              content: ""
            },
            {
              label: "",
              content: ""
            },
          ]
        }
      },
      {
        id: '9',
        title: 'Product Roadmap',
        content: {
          list: true,
          details: [],
          lists: [
            {
              label: "Introduction",
              content: "Medallion’s initial target audience will be the creator economy. Influencers, artists, cinematographers, content creators and more. Medallion will build apps that validate our core mission of securing digital & real world assets. These apps will restructure how assets are transferred. Key focus points will work on how art is sold & royalties are distributed. Our asset dependency model will innovate  on how multiple contributors can receive compensation for their work. Apps surrounding live events  will also be a priority during this period."
            },
            {
              label: "Growth",
              content: "The 2nd phase of Medallion will find us continuing to build out the creator economy but also shifting to the financial industry. Medallion will introduce apps to manage real world assets such as fiat, gold, & real estate. In this phase we will introduce wearables, smart locks and other hardware that can be interacted with Medallion’s smart chain. The hardware that is introduced will allow for a more decentralized model of ownership to come into fruition. Groups of investors can trustlessly own and run real properties. Shareholders can buy & sell their shares and have their access rights to the properties changed to reflect that status. Medallion will build Meta Cafes & data centers to support the growth of the ecosystem that can scale transaction throughout, secure transactions & assets and premier the latest innovations in the space."
            },
            {
              label: "Maturity",
              content: "Our vision for this phase sees our technology evolving to be able to autonomously run smart cities & factories. Governments will widely distribute and use medallion across the globe to secure assets & infrastructure. Medallion will pioneer decentralized manufacturing that allows anyone to create real world instances of their digital assets."
            },
            {
              label: "Decline",
              content: "Medallion will extend its use case to critical infrastructure such as roads, bridges, dams, airports and more that will receive tolls to run completely autonomously. In this phase, our aim is to be a stealth layer 1 that processes all transactions. Our Research & Development would have analyzed the market for a pivot to allow Medallion to focus on its strengths and improve on its weaknesses."
            },
          ]
        }
      },
      {
        id: '10',
        title: 'Asset Permissions',
        content: {
          list: true,
          details: [
            "Asset permission gives creators great control over who can access their data. A creator will have various intentions on who can access their data and what they can do with it. For example, a creator could want his work to be private but only accessed in collaboration with other assets. This section highlights the most prominent use-cases for asset permissions. "
          ],
          lists: [
            {
              label: "Permissions",
              content: "Creator monetize asset from all potential buyers"
            },
          ]
        }
      },
      {
        id: '11 ',
        title: 'Architecture',
        content: {
          list: false,
          details: [
            "Medallion XLN is built on the Node.js infrastructure. The overall goal of the Medallion XLN infrastructure is to provide both a centralized access hub and decentralized asset management protocol. The centralized access hub provides tools to further decentralize your asset that include landing page templates for your various assets that you can then embed on your social media or website. The central access hub also allows Medallion XLN users to interact with the App Marketplace. All Medallion XLN features, implementations will be available for sale and ready to be reused for new implementations."
          ],
          lists: []
        }
      }
     ]
    }
  };