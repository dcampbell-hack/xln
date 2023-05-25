// System Images
import Logo from "../system/image/xln-logo.png";
import NoPhoto from "../system/image/no-photo.jpeg";
import NoProfile from "../system/image/user.png";
import SettingProfile from "../system/image/user-profile.png";

// Employees
import CEO from "../system/founders/CEO-Executive.png";
import COO from "../system/founders/COO-Executive.png";
import CAO from "../system/founders/CAO-Executive.png";
import CTO from "../system/founders/CTO-Executive.png";
import CMO from "../system/founders/CMO-Executive.png";
//import CFO from "../system/founders/CFO-Executive.png";
import CBO from "../system/founders/CBO-Executive.jpg";
import XPO from "../system/founders/XPO-Executive.png";
import XRO from "../system/founders/XRO-Executive.png";
//import SPS from "../system/founders/SPS-Executive.png";

// Site Assets
import CTAMission from "../system/art/xln-demo.png";
import CTAContact from "../system/art/xln-cta.png";
import AssetSecurity from "../system/art/asset-security-1.png";
import AssetSecurity2 from "../system/art/asset-security-2.png";
import SurfApps from "../system/art/surfing-apps.png";
import GuardDog from "../system/art/decentralized_guard.png";
import CityAds from "../system/art/city-ads.png";
import Stadium from "../system/art/interactive-stadium.png";
import PulpFiction from "../system/art/pulp-fiction_metaverse.png";
import DownloadWhitepaper from "../system/art/whitepaper.jpg";
import ChessAvatar from "../system/art/metaverse_chess.png";
import SecuredAsset from "../system/art/secure_wallet.png";

// System Image
import ChatToAI from "../system/image/cover/chat_ai.png";
import ChatToHuman from "../system/image/cover/chat_human.png";
import ChatToGroup from "../system/image/cover/chat_group.png";
import ChatToResume from "../system/image/cover/chat_resume.png";

// Sentinel Bot
import Sentinel from '../system/image/avatar/sentinel.png'
import ChatGPT from '../system/image/avatar/chat_gpt.png'
import Flan from '../system/image/avatar/flan.png'
import Bloom from '../system/image/avatar/bloom.png'

export const infura = "68eb211506c141e78162043b7b0df69a";
const date = new Date();

export const documentation = {
  header: "Whitepaper",
  image: DownloadWhitepaper,
  description:
    "A whitepaper is an informational document usually issued by a company to highlight the features of a solution that it offers or plans to offer. Medallion XLN’s whitepaper will educate our community regarding the Digital Resource Management industry. Medallion XLN’s many use cases and implementations will be highlighted. Medallion XLN is creating a technology that has the potential to give birth to many new industries in a decentralized ecosystem. The whitepaper will provide our vision, values, implementation strategy, and provide a theoretical & practical approach to Asset Management.",
  options: {
    tableLabel: "Table Of Contents",
    sections: [
      {
        id: 1,
        title: "Definitions",
        image: {
          show: false,
          url: "",
        },
        content: {
          list: true,
          details: [],
          lists: [
            {
              label: "Blockchain",
              isArray: false,
              content:
                "A system in which a record of transactions is made in cryptocurrency and is maintained across several computers that are linked in a peer-to-peer network.",
            },
            {
              label: "Smart Contract",
              isArray: false,
              content:
                "Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met.",
            },
            {
              label: "Decentralized Finance (Defi)",
              isArray: false,
              content:
                "Decentralized finance (DeFi) refers to the infrastructure, processes, and technologies used to democratize financial transactions.",
            },
            {
              label: "Non-Fungible Token (NFT)",
              isArray: false,
              content:
                "A Non-Fungible Token (NFT) is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded.",
            },
            {
              label: "Initial Coin offering (ICO)",
              isArray: false,
              content:
                "A process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company.",
            },
            {
              label: "Assets",
              isArray: false,
              content:
                "A digital asset is anything that is stored digitally and is uniquely identifiable that organizations can use to realize value.",
            },
            {
              label: "Asset Management",
              isArray: false,
              content:
                "Digital Asset Management (DAM) is both a business process and an information management technology, which creates a centralized system for organizations to organize and access their media assets.",
            },
            {
              label: "Interplanetary File System (IPFS)",
              isArray: false,
              content:
                "IPFS is a peer-to-peer (p2p) storage network. Content is accessible through peers located anywhere in the world, who might relay information, store it, or do both. IPFS knows how to find what you ask for using its content address rather than its location.",
            },
            {
              label: "Artificial Intelligence (AI)",
              isArray: false,
              content:
                "The theory and development of computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.",
            },
            {
              label: "The Metaverse",
              isArray: false,
              content:
                "A virtual-reality space in which users can interact with a computer-generated environment and other users.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Introduction",
        image: {
          show: true,
          url: CityAds,
        },
        content: {
          list: false,
          details: [
            "With the advent of the internet, individuals were able to participate in a wide range of activities. This also gave huge organizations the option to use such activities to figure out the best way to market to new and existing clients. In some ways, this is beneficial to us because we receive adverts that are tailored to our preferences. Of course, the emotion of being violated is the polar opposite. Without our permission, our data is collected. Worse, someone else profited off our data without compensating us. Is it possible to blame them? There is no infrastructure in place to allow those firms to follow us down and compensate us for our data.",
            "Medallion XLN is developing a programmable Blockchain that will allow users to assetize any types of data generated by them. Users will be able to monetize and secure their data thanks to this simplified method. Permissions must be established on each asset, allowing developers to define who has access to the data. Permissions could be a means to keep such information secret or allow collaboration with other individuals while ensuring that everyone gets paid for their work. Through layer 2 scaling, Medallion XLN aims to expand the essential concepts of the Blockchain, such as security and decentralization. We act as an App Marketplace / Component Library, allowing users to access decentralized assetized data from any platform. The reusable components are completely equipped with features that enable the assets to be fully monetized, distributed, and interoperable across any platform.",
          ],
          lists: [],
        },
      },
      {
        id: 3,
        title: "Hypothesis",
        image: {
          show: false,
          url: "",
        },
        content: {
          list: false,
          details: [
            "Throughout the internet, many monetization models have been created. In the beginning, many fortunes were made with the E-Commerce model. Many websites became popular by selling their goods and services online.  Platforms such as Amazon and eBay became trusted marketplaces for sellers to find buyers. PayPal created a trusted intermediary to process payments between sellers and buyers. The next monetization model was advertising. As blogs became more popular, Advertisers paid pennies to bloggers per each user they reached. They paid even more per user for conversions. Popular blogs were able to generate thousands of dollars per post. Then platforms like Myspace & Facebook came along and redefined what a blogging site was supposed to be. These platforms created user account sites with millions of accounts that they were able to expose to a variety of advertisements, then receive millions in revenue. The advertising model evolved even further. Instead of showing every advertisement to every account, why not show only relevant advertisements to each account based on their interests? That is the current state of the advertising model. The Subscription model, popularized by Netflix and movie streaming apps, has gained popularity in recent years. Transitioning from just streaming apps to monthly loot boxes and business services. A new wave of online businesses has been leveraging the subscription model to create consistent monthly income by offering monthly services.",
            "Medallion XLN creates a brand-new monetization model that secures user-generated data as an asset (NFT). I hypothesize that linking each user-generated action to the core person’s digital representation (NFT avatar) will create a brand-new monetization model. The NFT avatar is interoperable within all user interfaces such as the web, mobile, and the metaverse. As the user interacts online as normal, each interaction is converted into an asset that the user can then sell to interested parties. Creatives who seek to monetize their content can create that content as an asset, whether that be Images, Videos, Audio, Text, Metaverse 3D objects, or an entire app. Each asset will always be owned by the user who created it. The owner of the asset will sell a collection of shares in the asset. This means assigning a value to the asset, then establishing the number of available shares. Once all the shares are bought at the base price, the shareholders in the asset can resell those shares at a higher price. The minimum requirement is that the owner of the asset always receives their portion of the resale.  This creates a decentralized marketplace around each asset, and the true value of the asset will be determined by the market. The owner sets permissions on the asset that determines how it can be accessed, promoted, or resold by the shareholders. The permissions also determine if the asset can be merged with other assets owned by different users to create a complex asset. This means a video asset merged with an audio asset. When multiple assets are merged, the permissions set determines how the funds from the sale of the complex asset are distributed. For example, owner A creates a video asset and then sets the distribution permission to 35%, owner B has an audio asset with a 20% distribution fee, and owner C has image assets set at 15% each. A new user comes along and wants to merge owners A, B & C’s assets to create a new complex asset. When this new complex asset is sold, whatever value was set on the asset will be distributed to all the dependencies (A, B & C) based on the distribution permission that was sold. Whatever percentage is left over after being distributed will go to the creator of the complex asset.",
            "This is the brand-new monetization model that Medallion XLN is pioneering. Everything else as far as the Metaverse…etc are applications of Medallion XLN’s core technology listed above.",
          ],
          lists: [],
        },
      },
      {
        id: 4,
        title: "Abstract",
        image: {
          show: true,
          url: CTAContact,
        },
        content: {
          list: true,
          details: [
            "Medallion XLN develops a Blockchain dedicated solely to asset management. That is, intellectual property is always owned and monetized by the creator, who has sole authority over who gets access to it. Medallion XLN understands that data need its transaction ledger, so huge organizations aren't the only ones who can profit from their customers' online actions. As the internet evolves and new ways of connecting with others emerge, it is becoming increasingly necessary for individuals to have control over their online actions.",
            "For the first time in history, Medallion XLN's programmable blockchain allows users to genuinely own their data. Access to the asset will be given once the permissions defined by the asset's owner have been met. Shifting control from Big Data tech corporations to the asset's owner. The amount of market share Medallion XLN can grab from giant IT businesses will reveal the genuine usefulness of Blockchain's decentralization philosophy.",
          ],
          lists: [
            {
              label: "Data ownership",
              isArray: false,
              content:
                "Medallion XLN aims to provide individuals, groups, companies and corporations the ability to own and monetize every aspect of their data. Tools are built with the intention of providing full control of who can access this data, how it will be shared and if other users can collaborate with that data.",
            },
            {
              label: "Monetization",
              isArray: false,
              content:
                "Adam Smith’s Wealth of Nations asserts that value is derived by the amount of effort required in developing a product from inception to customer. Content creators put an unlimited amount of effort into producing videos, text and images to provide entertainment for the internet only to put it out for free. According to the founder of capitalism, these digital products should be viewed as assets and therefore be monetized in a way that rewards the creator for the amount of effort that was put into its development.",
            },
            {
              label: "Collaboration",
              isArray: false,
              content:
                "In an effort to remain consistent to the internet’s favorite past time of collaborating with each other. Medallion XLN protocol provides collaboration as a built in feature. Users love to collaborate and create massive impact with their efforts so it makes sense to have that feature when creating assets. Content creators can collaborate with each other and determine how incoming funds are split.",
            },
            {
              label: "Interoperability",
              isArray: false,
              content:
                "The promise of web3 is to become entirely decentralized from platforms. Currently that is being demonstrated with extensions such as metamask that store your data then provides verification and authentication to other apps when necessary. Medallion XLN’s goal is to provide a similar experience with digital assets. If any user ops out of paying a creator then they simply will not see that creator’s work. When enough creators participate in this system, eventually the only way to access creator content will be by paying for it. As long as the content is priced in a reasonable enough way, then both users and creators will work and profit together in symbiosis.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Our Unique Approach",
        image: {
          show: false,
          url: CTAContact,
        },
        content: {
          list: true,
          details: [
            "Medallion XLN is divided into two halves. The central company and the decentralized community. The core company is working to extend the decentralized community's options. The main company functions similarly to a regular software firm, with employees and departments hired to build the app, lead marketing, form alliances, and acquire companies that offer various benefits. The decentralized community will have access to all of the core company's tools and resources, as well as complete autonomy over how they use those tools and resources to achieve their particular goals.",
            "The reasoning behind this kind of company structure is to be able to scale and compete with the top tech companies in the world, while simultaneously giving the decentralized community access to the tools we build. This may be a controversial opinion, but most fully decentralized blockchains fail within a short period. They lack the resources and organization needed to make important decisions and move fast to take advantage of incoming opportunities. Various personalities get involved in a power struggle and ruin the movement for everyone. Medallion XLN is akin to Bitcoin in the early days, Satoshi Nakamoto had to stick around for a few years to coach the decentralized community to understand the technology before they could understand the power of Bitcoin. Ethereum’s founders continue to steer the direction of its development. To guarantee success, Medallion XLN at least for the near future must have a leadership team, that opens doors and breaks down barriers to better foster innovation and growth within our decentralized community. The employees we hire must get paid a salary, receive healthcare, and various other amenities to enable us to move fast and break things than fix them again. The reason why information moves so fast currently is because Big Tech has been directly investing in the infrastructure of the web; buying servers, and replacing old wires with fiber optic cables so that data can move faster. The core company is responsible for building an infrastructure around asset management by all means available to us.",
            "Medallion XLN seeks to empower our decentralized community to build use-cases for themselves. The core company is responsible for building tools as various components that the decentralized community can use and apply to any goal that they have",
            "The only way to achieve our true vision for decentralization is to make it as easy as possible for many people to build their vision. There are so many talented painters, sketchers, graphic designers, video editors, directors, writers, and poets who simply do not code. Their contribution should not be invalidated, and therefore all components are created with accessibility in mind. Each component will be built similar to a Content Management System (CMS), that allows users to create and manage their assets from a User Interface (UI). The App Marketplace is designed to receive contributions from coders who have a vision for Medallion XLN, that the core team has not developed. While the core company builds the Blockchain, Smart Contracts, AI models, and various customizable UI components. The decentralized community will take those tools and build everything else. We provide extensive documentation that will allow the community to build their use case or combination of use cases, then instantly monetize it to the decentralized community. In the Web2 generation, many developers built amazing tools that were leveraged by billion-dollar corporations to earn great sums of money. These developers never received any compensation for their contribution, not even a “Thank- you” letter. Medallion XLN’s App Marketplace guarantees that the contributions made by developers in our community will be compensated and inherently be scaled to reflect the component’s usage. Another function that the core Medallion XLN company provides is to build on-ramps to traditional media outlets. For example, paying for the fees required for Sun dance so that filmmakers in the Medallion XLN community can have their films viewed by a mainstream audience. Paying for various radio stations to play songs from the Medallion XLN community. Paying fees for Art Galleries to feature the work of Medallion XLN artists. We seek to build leverage, then use that leverage to decentralize every aspect of the traditional media market.",
            "We'll go into more detail about our expansion strategy later, but we plan to conduct conferences, fashion runway displays, concerts, and other public events that involve a large number of decentralized community creators. The decentralized community will have the chance to own and create franchises as Medallion XLN grows. The primary corporation will establish a network of Metaverse Arcades & Cafés in the world's most populous cities. The community can then develop franchise concepts for their unique franchises, which the core firm can then develop. Medallion XLN plans to enter every traditional market conceivable over time.",
          ],
          lists: [],
        },
      },
      {
        id: 6,
        title: "Values",
        image: {
          show: false,
          url: SurfApps,
        },
        content: {
          list: true,
          details: [],
          lists: [
            {
              label: "Decentralization",
              isArray: false,
              content:
                "Ownership and Access for Everyone! Medallion XLN wants to make it as cheap and easy as possible to own your data and invest in the data of others. As we flourish as a community, we will empower each other to accomplish our hopes and dreams. As the core company builds new applications & components, we encourage the decentralized community to change the logos and color schemes, then use them to accomplish whatever goal they have in mind.",
            },
            {
              label: "Data ownership",
              isArray: false,
              content:
                "Medallion XLN aims to provide our decentralized community with the ability to own and monetize every aspect of their data. Tools are built to provide full control over who can access this data and how it will be shared, and if other users can collaborate with that data. Web2 was defined by what Tech Companies could do with your data, Medallion XLN will define Web3 by what each person can do with their data.",
            },
            {
              label: "Monetization",
              isArray: false,
              content:
                "Adam Smith’s Wealth of Nations asserts that value is derived from the amount of effort required in developing a product from inception to customer. Content creators put an unlimited amount of effort into producing videos, text, and images to provide entertainment for the internet only to put it out for free. They rely on the advertising model to provide pennies for monetization. According to the founder of capitalism, these digital products should be viewed as assets and therefore be monetized in a way that rewards the creator for the amount of effort that was put into its development.",
            },
            {
              label: "Collaboration",
              isArray: false,
              content:
                "To remain consistent with the internet’s favorite pastime of collaborating. Medallion XLN protocol provides collaboration as a built-in feature. Users love to collaborate and create massive impact with their efforts, so it makes sense to have that feature when creating assets. Content creators can collaborate and determine how incoming funds are split without ever knowing the person they are collaborating with.",
            },
            {
              label: "Interoperability",
              isArray: false,
              content:
                "Web3 promises to become entirely decentralized from platforms. Currently, that is being demonstrated with extensions such as Meta Mask & Wallet Connect that store your data and then provide verification and authentication to other apps when necessary. Medallion XLN’s goal is to provide a similar experience with digital assets. Imagine owning a profile picture (pfp) that can be imported into any metaverse, with a set of preprogrammed moves and abilities exclusive to only your profile picture. If any user ops out of paying a creator, then they simply will not see that creator’s work. When enough creators participate in this system, eventually the only way to access creator content will be by paying for it on Medallion XLN. As long as the content is priced in a reasonable enough way, then both users and creators will work and profit together in symbiosis.",
            },
            {
              label: "Censorship Resistance",
              isArray: false,
              content:
                "A free society needs the ability to think freely. There cannot be a centralized authority determining what is “Right Think” & “Wrong Think”. This of course is a double-edged sword because there are people who have ideas that a large portion of society believes are extremely dangerous. Ideas such as Racism, Nazism, and committing mass genocide. Although these ideas only represent a small portion of the population, these ideas can influence others to commit horrendous acts of violence. Therefore, it makes sense to give that power to censor individual content to the community. The community can filter content they individually find annoying for their taste or report it and the community can decide if they want to de-prioritize the content to the lowest value, which will make it extremely hard to find. We can’t completely delete it because the data is persisted on the blockchain. I think this is an honest conversation that needs to be had because No-Censorship can be just as harmful as censorship, so there should be a way for people to filter out what they are not comfortable being exposed to.	",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Overview",
        image: {
          show: true,
          url: AssetSecurity,
        },
        content: {
          list: false,
          details: [
            "Let us trace our forebears via significant events in the Blockchain space to better understand Medallion XLN and the challenge we tackle. Satoshi Nakamoto published the Bitcoin Whitepaper in October 2008, and the Bitcoin Blockchain was launched on January 3, 2009. The technology changed banking by creating a tamper-proof decentralized ledger with a monetary application. Ethereum was the next great step in the Blockchain sector, building on the key functionalities of Bitcoin while also allowing users to build smart contracts. Since Ethereum’s launch of Smart Contracts, they have been used to create a variety of industries such as Defi, Non-Fungible Tokens, identity management, and Initial Coin Offerings. Ethereum and its many applications have a tremendous impact on many people’s lives. Although, the Achilles heel of Ethereum is the ability to only perform 15 transactions per second. This limitation presents a challenge as demand grows. Fortunately, Ethereum will be updating their Layer 1 to use a Proof Of Stake consensus mechanism that shards . As of the writing of this Whitepaper, it remains to be seen how successful that effort will be.",
            "Ethereum is a robust juggernaut that does it all, which presents a problem. Its many use cases provide a bottleneck for industries that want to focus on one thing. Medallion XLN’s focus is on decentralized Asset Management on a programmable Blockchain. Particularly empowering users to securely track their assets across various applications. Our unique advantage is our focus on allowing creators to monetize their assets without trusting anyone else, set permissions on what can be done with that asset, and compound the asset with other assets to create complex assets. This idea is so important because billion-dollar corporations have been built on the backs of the data they receive from our daily online interactions. This use of our data would be tolerated if the creators received a portion of the money generated from their activities. Tech giants continue to be greedy and expand themselves at a ferocious rate. Who can blame them? Similar to oil barons of the Industrial Revolution, as long as there is oil in the ground, they will drain the land dry. The oil is a metaphor for your data. Medallion XLN reverses this trend by building a Smart Chain that allows us to track, secure, and monetize our data. Medallion XLN allows us to choose who gets access to our various activities. Who can view your content such as images, videos, blog posts, etc., monetizing these interactions through each stage of its lifecycle? Medallion XLN views all our interactions online as individual assets.",
          ],
          lists: [],
        },
      },
      {
        id: 8,
        title: "Utility",
        image: {
          show: true,
          url: AssetSecurity2,
        },
        content: {
          list: true,
          details: [
            "Medallion XLN’s asset management on a programmable Smart Chain has many use cases. Initially, Medallion XLN aimed to create a monetization solution for movies. The idea was to track all personnel involved in creating the movie; actors, cinematographers, directors, scriptwriters, etc. Then create a process that allows the viewer to access the video only once they have bought a share in the video for an amount that would be distributed to the creators of the film. This idea is revolutionary, but why stop at movies when all asset types could benefit from having access to this kind of infrastructure? This section maps out how the various asset types will be monetized on Medallion XLN.",
          ],
          lists: [
            {
              label: "Monetize Text",
              isArray: false,
              content:
                "The most prevalent asset type for daily use is by far text. Text is used for blogs, social media posts, and all kinds of content. There are instances where users create a new phrase and want to create an exclusive pipeline to access it. Medallion XLN provides a way to monetize quotes, poetry, blog post, font types...etc. The text provides advertisers with a way to parse out your interests and hobbies so that they can develop a strategy to sell stuff to you. By securing access to text, we enable users to control & monetize the concepts they type. Quotes are what could benefit the most from monetization. Web2 users see a barrage of quotes on their timelines, which are sometimes not from the person it says it’s from. More so, because of how viral quotes can be, an opportunity is created where users can monetize their quotes and create a direct reference point to the person who said the quote.",
            },
            {
              label: "Monetize Images",
              isArray: false,
              content:
                "A picture is worth a thousand words. Many photographers & artists have no recourse when their art is saved off the internet. Many artists put hours into rendering their work only to have it swiped. Not even the NFT market could solve this problem. Although the NFT feature on many blockchains gave their work a unique address on the blockchain that could be monetized, the image asset itself could still be downloaded without the artist’s consent. Medallion XLN is built exclusively to secure a creator’s image assets in a way that cannot be saved or screenshot.	",
            },
            {
              label: "Monetize Blogs",
              isArray: false,
              content:
                "Blogs are significant because they mark the start of the web 2.0 infrastructure. MySpace, Twitter, Facebook, and Tumblr would not exist without blogs. Monetization is a problem that all blogs face. Subscription models for blogs, such as Medium and Substack, have emerged in recent years. The main problem is that these models need you to focus your content on a brand that you don't control. Medallion XLN is a decentralized system that lets you monetize your blogs without having to centralize your material on another site, thereby diluting your brand.",
            },
            {
              label: "Monetize Videos",
              isArray: false,
              content:
                "Videos on the internet are a product of the 2010s; previously, videos required too much bandwidth to be transmitted on antiquated infrastructure, resulting in unending buffering for the viewer. Nonetheless, YouTube monetization has improved online video viewing, and we can now all watch buffer-free videos. As a result of this medium, 'influencers' and 'content creators' with large followings arose. Their best case scenario for monetizing their work right now is to earn a piece of the ad money that YouTube provides to continue generating content. This material must adhere to an ad-friendly limitation, which limits the ability of the content producer to express their creativity. To monetize private videos, the content creator must rely on third-party platforms such as Patreon and monthly subscribers. Medallion XLN's protocol is designed to take advantage of network effects, maximizing both follower numbers and the possibility to monetize content while also avoiding censorship.",
            },
            {
              label: "Monetize Music",
              isArray: false,
              content:
                "The 2010s were an interesting decade for music. Piracy was at an all-time high and record labels were hemorrhaging album profits. The ringtone era was coming to a close, and the music industry needed a way to fight piracy. Apple’s iTunes store had been going strong for the previous decade and gave audiences a way to legally download music for $0.99 to $1.50 but that wasn’t enough. The solution presented itself when the Spotify streaming service began to blow up in the west and started to onboard more and more artists, giving them a way to monetize their music. Spotify’s model was not to sell the song for a download but to store the song on their platform and charge the user each time they listened to it as a stream. This strategy did work to curb piracy by presenting a solution that was low-cost enough to allow a consumer to enjoy all the songs they wanted legally. It also gave musicians a direct way to monetize their songs. Fast-forward to a decade later and many musicians are not happy getting paid only $0.003 per stream while an NFT.jpeg sells for millions of dollars. This presents an opportunity for Medallion XLN to provide musicians with a better deal, and siphon disgruntled artists to the decentralized asset management platform that has an infrastructure built specifically for monetizing digital assets.",
            },
            {
              label: "Live Events",
              isArray: true,
              content: [
                {
                  image: Stadium,
                  type: "tools",
                  content: [
                    "There are two key elements to consider when it comes to concerts, sports, and performances. The first step is to define who has access to the event or tickets in person. The other option is to watch the live event from a different place and time. Live events are a snapshot of a specific point in time. The use case using Medallion XLN as a ticket aims to allow user wallets to only authenticate during the time of live events. Attendees can resell their experience as an asset after the event. To develop an ecosystem around the main event, attendees tag every asset they make during that period with the main event's tag. Every transaction that occurs as a result of the event will result in a charge being paid to the event's owner.",
                  ],
                },
              ],
            },
            {
              label: "Metaverse",
              isArray: true,
              content: [
                {
                  image: PulpFiction,
                  type: "tools",
                  content: [
                    "What is the Metaverse? The latest Silicon Valley buzzword is a merger of core technologies advanced in the previous decade. It is a combination of the Internet Of Things, Artificial Intelligence, Blockchain, Augmented Reality, Virtual Reality, 5G & Moore’s Law. The metaverse isn’t just a buzzword, it is the inevitable evolution of the internet. It’s more than NFTs and VR goggles, it’s the shift in how we communicate using technology. Moore’s Law guarantees that technology will continue to get smaller and more powerful. What looks like a Janky headset today becomes Ray-Ban sunglasses tomorrow and contact lenses the day after. The role Medallion XLN plays in this industry will be securing and monetizing user assets. Medallion XLN is a decentralized pipeline that allows users to access their assets from any platform or interface. We plan to streamline the ability for a user to access the same asset from various metaverse platforms. Build assets once and reuse them in different interfaces or sell shares in those assets to other users to use as an avatar, clothes, or a weapon.",
                  ],
                },
              ],
            },
            {
              label: "Real Estate",
              isArray: false,
              content:
                "The intersection of the physical world and the metaverse will merge into a singularity as the Metaverse expands. What you purchase in the metaverse will be implemented in your everyday life. The real estate market, in particular, will be impacted. Several persons can band together to form a single organization; buy a building and then rent out each flat. All shareholders will be credited with an agreed-upon amount each time the tenets make a payment. Medallion XLN has the potential to distribute assets among several shareholders by default. The land will be purchased in the actual world as it is in the metaverse. We intend to create a user interface that will provide deeds, contractors, real-world bids, and time estimates for any design that will be built in the real world.",
            },
            {
              label: "Synopsis",
              isArray: false,
              content:
                "In all of the above scenarios, there is always an interaction between the owner, his asset, and the interested party. The owner never loses ownership of his asset, but grants access to it by selling shares. The share bought by the interested party allows them to access the asset and, depending on the permissions set by the owner, combine the asset with another asset. For example, if the owner is a musician, the interested party could want to incorporate the music asset into a painting as background music. The shareholder that buys this new complex asset would have to pay the sum of the musician & painter’s assigned value of each asset. The permission the owner sets on his asset determines if, when his asset is included in a complex asset, whether to distribute payment evenly to all parties or a pay agreed upon portion to each party. Different use cases for various scenarios.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "Go To Market Strategy",
        image: {
          show: true,
          url: GuardDog,
        },
        content: {
          list: true,
          details: [
            "The first users, Medallion XLN will target are users who are already familiar with Non-Fungible Tokens (NFT). NFT collectors are already familiar with the technology and can easily transition to the Medallion XLN use case. They can bring their already existing NFTs to life with our Artificial Intelligence, which will convert them.JPEGs into fully interoperable 3D.GLF files that can be used in participating metaverse. On launch, Medallion XLN will have 40,000 mintable NFTs over 12 months. 10,000 NFTs every 3 months and 4 Virtual reality worlds are distributed once per quarter. ",
            "The next phase will roll out the Medallion XLN monetization model to influencers and content creators.  This target audience is the necessary bridge between NFT enthusiasts and a wider mainstream audience. The app marketplace can give users access to platforms similar to YouTube, Spotify, Blogs, and various metaverse objects and environments. This portion of the Go To Market strategy will set up online workshops facilitated through our substack that demonstrate how to leverage Medallion XLN’s new monetization model to benefit their duties as influencers. We need to reach a threshold with content creators where they start creating content on their onboarding of other creators. Once we reach that goal then we can move on to the next goal of onboarding businesses.",
            "The main selling point for businesses to use Medallion XLN is its ability to secure their intellectual property. Many organizations need an interface that allows them to easily generate and securely distribute access to their intellectual property. Medallion XLN’s Blockchain is dedicated solely to asset management. That is, intellectual property is always owned and monetized by the owner, who has sole authority over who gets access to it. Many institutions could leverage this technology to organize their assets in a highly secure way. They could also unsubscribe from expensive monthly fees from cyber security firms and completely secure their assets on Medallion XLN decentralized interface. Our robust app marketplace is another selling point. Businesses that choose to secure their assets on Medallion XLN can take advantage of the security tools built by the App Marketplace and opt in and out of software that leverages the core technology in innovative and trendy ways.",
          ],
          lists: [],
        },
      },
      {
        id: 10,
        title: "Token Metrics",
        image: {
          show: false,
          url: CTAMission,
        },
        content: {
          list: true,
          details: [
            "Name: Medallion XLN",
            "Symbol: XLN",
            "Total Supply: 5,444,444,671",
          ],
          lists: [
            {
              label: "Token Supply",
              isArray: false,
              content:
                "Medallion XLN prioritizes scalability and accessibility. We intend to become a top 10 market leader in the Blockchain Asset Management space. We never want the token to be too expensive to afford because the token is necessary to interact with the smart contract. As of the writing of this whitepaper, the number 10 positioned cryptocurrency is worth $11B which will make each XLN token worth only $2.00. Overtaking Ethereum will be a monstrous effort and probably unrealistic, but number 3 is achievable. The current number 3 position at the moment is worth $75B which will make each XLN token worth $13.00 each which is still affordable to the masses.",
            },
            {
              label: "ICO Overview",
              isArray: false,
              content:
                "Initial funds will be raised by ICO. 70% of the token supply will go towards the crowdsale while 30% will be retained by Medallion XLN to be used for funding. Medallion XLN’s portion of the crowdfund will be distributed 10% for the founders as a sign on bonus and to acquire top tier talent. The other 20% will go toward funding the company. Company funds will be divided by Executives and Technology. The Executive fund is used by the company to hire team members, acquire property and supply the needs of each department. The technology fund will be used to set up an effective technology and engineering department and buy equipment for the whole company. Key checkpoints include hiring a systems architect, 1 staff engineer, 3 frontend engineers, 3 backend engineers, 2 solidity developers, 1 quality assurance engineer & 2 Extended Reality Specialist. A portion of Technology funds will be set aside to acquire failing companies with complementary technology, subscription services that will speed up development & partnerships with complementary brands.",
            },
            {
              label: "ICO breakdown ",
              isArray: false,
              content:
                "Investors in the ICO will receive 30% of the total supply distributed to their wallets. Another 30% will be distributed to the War Chest. The War Chest will be used to acquire the necessary pieces to fully implement our vision for Medallion XLN. This includes securing an HQ, hiring employees, buying equipment, and more. The Liquidity portion is a pool of tokens that are locked in the ICO smart contract. The pool enables cryptocurrency trading by providing users with liquidity. The Founders got us to this point, this portion of the ICO rewards the people who put their sweat equity into helping build Medallion XLN to get to the point where we have enough infrastructure in place to start fundraising. The Team portion funds the vital departments in the company such as the Executives department which builds out the vision. The operations department applies constructs to allow the company to run more efficiently. The Acquisitions onboard companies onto Medallion XLN’s infrastructure so that they can secure their intellectual property rights. The technology builds our infrastructure for the User Interface, Blockchain, Artificial Intelligence & Metaverse. The Blockchain, Artificial Intelligence, and Metaverse are subsets of the Technology departments that require their funding to hire a specialist in those areas. The Marketing department is responsible for raising awareness about Medallion XLN in all forms of media. The Programs department structures organize and track all of Medallion XLN’s initiatives. The Finance department handles payroll, budget, and all documents required to stay compliant. The Advisors portion is set aside for everyone who invested monetarily in Medallion XLN and allowed us to get on our feet before the ICO.",
            },
            {
              label: "Team Members",
              isArray: true,
              content: [
                {
                  image: CEO,
                  type: "team",
                  content: [
                    "Dwayne Campbell, Chief Executive Officer CEO will define Medallion XLN’s overall vision, technology, user & client acquisition strategy. Dwayne will work with Executives to build each department most optimally and has the final say on all major company decisions. Dwayne manages the Executives and is responsible for providing them with the information and resources they need to best run their departments. Dwayne has over a decade of experience as a serial entrepreneur and senior software developer at various technology organizations and has been working on the vision for Medallion XLN for 5 years.",
                    "Compensation: $250,000 + 20% of Founders portion in ICO Manages access to Executive Initiatives & all company funds",
                  ],
                },
                {
                  image: COO,
                  type: "team",
                  content: [
                    "Allan, Chief Operation Officer (COO) receives the vision of the CEO and breaks them down into strategic achievable goals. Allan will be involved in all aspects of the company’s operation and will build constructs to improve the efficiency of each department. Allan has over 3 decades of experience working in the financial industry. His perspective will be key in building the infrastructure needed for our startup to IPO.",
                    "Compensation: $240,000 + 10% of Founders portion in ICO Co-manages access to Operations fund with CEO",
                  ],
                },
                {
                  image: XPO,
                  type: "team",
                  content: [
                    "Ana Guilbert, Executive Program Officer (XPO) oversees the planning and implementation of the entire organization. Ana’s responsibilities include budgeting, hiring team members for each department, sourcing suppliers, and planning each product release.",
                    "Compensation: $240,000 + 10% of Founders portion in ICO Co-manages access to Programs fund with CEO",
                  ],
                },
                {
                  image: CTO,
                  type: "team",
                  content: [
                    "GK, Chief Technology Officer (CTO) Meet GK our CTO | ex PayPal, ex eBay, he has more than a decade of experience in building core technologies and shipping stellar user experiences to millions of users. GK holds a BS and MS degrees in Computer Science. Based out of San Francisco Bay Area, when he is not in a Nerd mode, he spends time with his friends and family. GK leads the technology & engineering department. GK develops policies & procedures that allow our company to scale exponentially on mobile, web & XR platforms. His department will be building tools for both internal and external use. Gaurav has been a lead engineer at top payment companies such as eBay, Paypal & Venmo for over 15 years.",
                    "Compensation: [salary TBA] + 19% of Founders portion in ICO Co-manages access to Technology fund with CEO",
                  ],
                },
                {
                  image: CBO,
                  type: "team",
                  content: [
                    "Chief Blockchain Officer (CBO) works under the CTO to carve out a strategy for Medallion XLN’s token, smart contracts & blockchain. Seeking a visionary to fill this role. Someone that can predict emerging trends and position Medallion XLN to reap the rewards before our competition.",
                  ],
                },
                {
                  image: CAO,
                  type: "team",
                  content: [
                    "Gary Robinson, Chief Acquisitions Officer (CAO) leads the client acquisitions department and will be the first friendly face company that extends Medallion XLN’s features will interact with. Gary is responsible for leading a department that onboards as many companies as possible & maintaining that relationship. Gary has been a sales & customer service specialist for over 30 years.",
                    "Compensation: $240,000 + 10% of Founders portion in ICO Co-manages access to Acquisitions fund with CEO",
                  ],
                },
                {
                  image: XRO,
                  type: "team",
                  content: [
                    "Ptah “ArtCrazy” Quammie, Extended Reality Officer (XRO), Head photographer Ptah Quammie established ArtCrazy Photography in the early summer of 2010. Since then ArtCrazy has expanded its reach to Las Vegas, Miami, New York, California, the Caribbean, and abroad, to produce some of the most innovative concepts in photography. While providing a full range of photography needs, ArtCrazy and its affiliates have expanded to provide a full spectrum of media production including professional video and editing services. ArtCrazy specializes particularly in fashion editorial, artistic nudes, swimsuits, and portfolio development. Whether you are a newcomer to modeling or a seasoned vet, ArtCrazy will reshape and redefine you. Medallion XLN’s main selling point is asset ownership. XRO will work with CTO to design a Metaverse concept that allows various user-owned assets to be integrated into a Metaverse space.",
                  ],
                },
                {
                  image: CMO,
                  type: "team",
                  content: [
                    "Chief Marketing Officer (CMO) Kushner Sophia, an American entrepreneur who was born and raised in Canada, I am one of many entrepreneurs who has taken her talents to the digital space by minting and selling non-fungible tokens, or NFTs, on digital marketplaces. Before minting and selling non- fungible tokens I also have a career in crypto where back in 2020 I started my ROI (Return on investments) the success rate was 90% for myself and others who invested and has moved further up to hold coins on Public. Kushner Sophia is a principal body under Arenalive a United Kingdom-based company charged with promoting economic programs and national public-private partnerships to advance innovation and entrepreneurship.",
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 11,
        title: "Blockchain Tokenomics",
        image: {
          show: true,
          url: CTAMission,
        },
        content: {
          list: true,
          details: [
            "Medallion XLN leverages StarkNet’s Layer 2 ZK-RollUp to achieve fast transaction speeds and interoperability. StarkNet is a permissionless decentralized ZK-Rollup operating as an L2 network over Ethereum, where any dApp can achieve unlimited scale for its computation, without compromising Ethereum’s composability and security. Medallion XLN builds an asset management system using a Blockchain that specifies if the transaction is transferring assets or value. The asset creation process requires the owner of the asset to upload the file or data which will be tracked and stored on the IPFS (Interplanetary File System). The user will then assign a value and set various permissions on the asset that will determine what shareholders of the asset can do with it before submitting the transaction. This setup will track the address of the owner and assign the asset its address. Users determine the value of their assets based on personal perspective, but Medallion XLN can provide data on what the average asset is selling for. From this point, only users who pay the value of the asset can access the asset in various use cases.",
          ],
          lists: [
            {
              label: "Smartchain",
              isArray: false,
              content:
                "Medallion XLN’s smart chain aims to provide an interface that allows multiple ways to monetize an asset. A core feature of the smart chain will be to compound assets or allow unique assets to depend on each other. For example, a video asset can use a music asset as the background sound, but when the video is accessed, both asset owners will receive payment. Owners can set the permissions on their assets to determine how that asset should be compounded. Building complex assets that use a variety of assets as dependencies is the optimal use case for Medallion XLN’s smart chain. It’s not enough to monetize an asset but to reach an asset’s max potential value by encouraging collaboration with other assets. When a complex asset is created, the sum of all the asset values will be the price of the new asset, allowing all owners to be paid. Another option if the aim is to prevent the price of the asset from getting too expensive is to set the permissions on each asset to take a percentage of the overall value, ensuring flexibility on how users can monetize. An interested user can purchase their desired asset, which will send an offer to the owner, who will accept or decline the offer. The accepted offer will initiate the transaction, which will then be submitted to the blockchain, and the interested user will become a shareholder in the asset. The rejected offer will be discarded. The status of “shareholder” is given to the new owner of a share in the asset which will allow the shareholder to promote, and compound that asset with other assets if the asset owner’s permission allows it. The shareholder can even resell his share at a higher price than that of the owner’s original price, as long as the owner can receive the value he expects on every transaction.",
            },
            {
              label: "Fee Structure",
              isArray: false,
              content:
                "On each transaction, there will be a 3% fee that goes towards the development, management & promotion of the Medallion XLN network, which includes 1% that will be distributed to all the shareholders in the purchased asset. The other 97% gets paid to the owner of the asset. In the scenario where the asset has many dependencies, the 97% will be distributed based on the designated percentage for each dependent. In each transaction, 97% of the price paid will go to the owner or group of dependents and 3% will go towards the fee. The fee will be split, with 1% going to all the shareholders in an asset & 2% that goes toward administration. When the transaction does not include an asset transfer, the 1% goes toward a supernode & master node pool that incentivizes the security and promotion of the network by rewarding the top users. The admin fee is divided by a development pool which receives 0.75%, a management pool receives 0.75%, a promotion pool 0.25% & acquisition pool 0.25%. Development is responsible for the development & maintenance of the infrastructure both online & in the real world. The development pool goes towards developers, project managers, workspaces & contractors. The management pool goes toward maintaining & recruiting management staff. A promotion pool is used to incentivize the marketing of the Medallion XLN Smart Chain by the main company & decentralized community. The acquisition pool is used to help further build out features that are popular with the decentralized community. This means that if Medallion XLN finds a huge community in gaming, then we will put resources towards expanding that community which could include hosting game tournaments with grand prizes.",
            },
            {
              label: "App Marketplace",
              isArray: false,
              content:
                "The app marketplace is designed to apply the core technology described above and gives developers the tools to build different implementations. There is no way to know the full potential of the Medallion XLN Smart Chain unless numerous applications are built and the strength of the network is tested. Medallion XLN aims to provide a secure asset management experience regardless of platform. The app also facilitates simple-to-use plugins for popular interfaces such as web, mobile apps, VR, AR, digital billboards, and any new front-end technology discovered in the future. We aim to be the premier marketplace across all platforms & interfaces for decentralized asset management. The Medallion XLN company will be building apps to contribute to the marketplace that is fully components so that developers can simply import a feature they like into their app and deploy it as soon as possible.",
            },
            {
              label: "Interoperability",
              isArray: false,
              content:
                "One of the goals of Medallion XLN is interoperability. This means creating an asset once and then accessing it from any User Interface, Application, MMORPG, or Metaverse interface. To achieve this, Medallion XLN Assets will use a Graphics Language Transmission Format (.glTF), which is a programmable image format that is known as the JPEG of the 3D world. Most 3D Applications on major platforms use this image format. GLTFs can be used on the web in Three.js projects, Meta Quest VR Apps, Adobe Creative Suite, Unreal Engine, Google & Autodesk Maya. The .glTF image format can be programmed and be seamlessly imported into every metaverse application on the web or in-app. Data can be encoded in the models as JavaScript Object Notation (JSON) or Binary, which can reference external binary and texture resources. The Khronos Group created this image format as an open standard to be the JPEG of 3D. GLTF supports 3D geometry, appearance, scene graph hierarchy, and animation that embeds binary data as base64-encoded strings. The latest upgrades include sparse accessors and morph targets to allow for facial animations & schema tweaks. The GLFT file type in combination with Tensor Flow’s Face Landmarks AI library will allow us to apply realistic movements to Medallion XLN avatars.",
            },
            {
              label: "Artificial Intelligence",
              isArray: false,
              content: "",
            },
            {
              label: "Metaverse Implementation",
              isArray: false,
              content: "",
            },
          ],
        },
      },
      {
        id: 12,
        title: "Software Product Roadmap",
        image: {
          show: false,
          url: CTAMission,
        },
        content: {
          list: true,
          details: [],
          lists: [
            {
              label: "Introduction",
              isArray: false,
              content:
                "Medallion XLN’s initial target audience will be the creator economy. Influencers, artists, cinematographers, content creators, and more. Medallion XLN will build apps that validate our core mission of securing digital & real-world assets. These apps will restructure how assets are transferred. Key focus points will work on how art is sold & royalties are distributed. The first users, Medallion XLN will target are users who are already familiar with Non-Fungible Tokens (NFT). NFT collectors are already familiar with the technology and can easily transition to the Medallion XLN use case. They can bring their already existing NFTs to life with our Artificial Intelligence, which will convert them.JPEGs into fully interoperable 3D.GLF files that can be used in participating metaverse. On launch, Medallion XLN will have 40,000 mintable NFTs over 12 months. 10,000 NFTs every 3 months and 4 Virtual reality worlds are distributed once per quarter.",
            },
            {
              label: "Growth",
              isArray: false,
              content:
                "The 2nd phase of Medallion XLN will find us continuing to build out the creator economy but also shifting to the financial industry. Medallion XLN will introduce apps to manage real-world assets such as fiat, gold, & real estate. In this phase, we will introduce wearables, smart locks, and other hardware that can be interacted with Medallion XLN’s smart chain. The hardware that is introduced will allow for a more decentralized model of ownership to come into fruition. Groups of investors can trustlessly own and run real properties. Shareholders can buy & sell their shares and have their access rights to the properties changed to reflect that status. Medallion XLN will build Meta Cafes & data centers to support the growth of the ecosystem that can scale transactions throughout, secure transactions & assets, and premier the latest innovations in the space.",
            },
            {
              label: "Maturity",
              isArray: false,
              content:
                "Our vision for this phase sees our technology evolving to be able to autonomously run smart cities & factories. Governments will widely distribute and use Medallion XLN across the globe to secure assets & infrastructure. Medallion XLN will pioneer decentralized manufacturing that allows anyone to create real-world instances of their digital assets. The Kardashev scale is used to measure the technological advancement in a civilization based on the amount of energy it can use. The hypothetical scale was developed by Nikolai Kardashev to measure the consumption of energy on a cosmic level. From consuming local resources, continental resources, global resources, solar resources, galaxy resources, and universal resources. Type-3 is being able to use universal resources.",
            },
            {
              label: "Beyond",
              isArray: false,
              content:
                "Medallion XLN will extend its use case to critical infrastructure such as roads, bridges, dams, airports and more that will receive tolls to run completely autonomously. In this phase, we aim to be a stealth layer 1 that processes all transactions. Reaching a Type-2 civilization needs a scalable solution. Space colonies the size of Texas need to be stabilized away from Earth’s orbit. We will develop an industrial 3D printer that gathers the surrounded space dust. It will use Machine Learning to categorize the various elements then remotely print the entire space station. The 3D printer would need to know how to self replicate. We need about a 1000 between each planet so that spaceships can dock, run diagnostics checks and rest. We spread these colonies through out the entire solar system then harness the energy from the entire solar system. Then we begin our plan for Type-3. Medallion XLN is the future!",
            },
          ],
        },
      },
      {
        id: 13,
        title: "Asset Permissions",
        image: {
          show: false,
          url: CTAMission,
        },
        content: {
          list: true,
          details: [
            "Asset permission gives creators great control over who can access their data. A creator will have various intentions on who can access their data and what they can do with it. For example, a creator could want his work to be private but only accessed in collaboration with other assets. This section highlights the most prominent use-cases for asset permissions.",
          ],
          lists: [
            {
              label: "Permissions",
              isArray: false,
              content: "Creator monetize asset from all potential buyers",
            },
          ],
        },
      },
      {
        id: 14,
        title: "Architecture",
        image: {
          show: false,
          url: CTAMission,
        },
        content: {
          list: false,
          details: [
            "Medallion XLN is built on the Node.js infrastructure. The overall goal of the Medallion XLN infrastructure is to provide both a centralized access hub and a decentralized asset management protocol. The centralized access hub provides tools to further decentralize your asset that, including landing page templates for your various assets that you can then embed on your social media or website. The central access hub also allows Medallion XLN users to interact with the App Marketplace. All Medallion XLN features and implementations will be available for sale and ready to be reused for new implementations. ",
          ],
          lists: [],
        },
      },
    ],
  },
};

export const header = {
  logo: Logo,
  links: {
    logoLink: "/",
    isAuthenticated: [
      {
        text: "Profile",
        to: "/xln/profile",
        className: "nav-auth",
        icon: "fa-solid fa-user",
        show: true,
        external: false,
      },
      {
        text: "Activity",
        to: "/xln/assets/mint",
        className: "nav-auth",
        icon: "fa-solid fa-bolt",
        show: true,
        external: false,
      },
      {
        text: "Wallet",
        to: "/xln/wallet",
        className: "nav-auth",
        icon: "fa-solid fa-wallet",
        show: true,
        external: false,
      },
      {
        text: "Buy Tokens",
        to: "/xln/buy-tokens",
        className: "nav-auth",
        icon: "fa-solid fa-coins",
        show: true,
        external: false,
      },
    ],
    crowd: [
      {
        text: "Start",
        to: "/register",
        className: "nav-auth",
        icon: "",
        show: true,
        external: false,
      },
      {
        text: "Whitepaper",
        to: "/whitepaper",
        className: "nav-auth",
        icon: "",
        show: true,
        external: false,
      },
      {
        text: "Docs",
        to: "/docs",
        className: "nav-auth",
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
    formData: {
      action: "register",
      method: "post",
      expand: true,
      assetType: "Register User",
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
              disabled: false,
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
              disabled: false,
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
              disabled: false,
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
              disabled: false,
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
              disabled: false,
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
              disabled: false,
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
    warning: "If you do not have an account, click here to",
    description: "Access features that are exclusive to Medallion XLN",
    warningLink: {
      text: "register",
      to: "/register",
      icon: "",
      show: true,
      external: false,
    },
    forgotPassword: "Click here if you ",
    forgotPasswordLink: {
      text: "forgot password",
      to: "/forgot_password",
      icon: "",
      show: true,
      external: false,
    },
    formData: {
      action: "login",
      method: "post",
      expand: true,
      assetType: "Login User",
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
              className: "line_bottom",
              name: "email",
              value: {},
              onChange: "",
              placeholder: "Email *",
              disabled: false,
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
              className: "line_bottom",
              name: "password",
              value: {},
              onChange: "",
              placeholder: "Password *",
              disabled: false,
            },
            aria: {},
          },
        },
      ],
    },
  },
};

export const resetPassword = {
  type: "form",
  options: {
    standard: "Standard",
    title: "Reset password for your account?.",
    warning: "If you do not have an account, click here to",
    description: "lets resolve it here",
    warningLink: {
      text: "reset",
      to: "/resetpassword",
      icon: "",
      show: true,
      external: false,
    },
    resetPassword: "Click here if you ",
    resetPasswordLink: {
      text: "reset password",
      to: "/resetpassword",
      icon: "",
      show: true,
      external: false,
    },
    formData: {
      action: "resetPassword",
      method: "post",
      expand: true,
      assetType: "Reset Password",
      submit: {
        label: "Reset Password",
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
              labelText: "New Password",
              forId: "kyc-email",
            },
            input: {
              type: "password",
              id: "kyc-reset",
              className: "line_bottom",
              name: "email",
              value: {},
              onChange: "",
              placeholder: "New Password",
              disabled: false,
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
              labelText: "Confirm Password",
              forId: "kyc-email",
            },
            input: {
              type: "password",
              id: "kyc-reset",
              className: "line_bottom",
              name: "email",
              value: {},
              onChange: "",
              placeholder: "Confirm Password",
              disabled: false,
            },
            aria: {},
          },
        },
      ],
    },
  },
};

export const forgotPassword = {
  type: "form",
  options: {
    standard: "Standard",
    title: "Forgot password for your account?.",
    warning: "If you do not have an account, click here to",
    description: "lets resolve it here",
    warningLink: {
      text: "register",
      to: "/register",
      icon: "",
      show: true,
      external: false,
    },
    forgotPassword: "Click here if you ",
    forgotPasswordLink: {
      text: "forgot password",
      to: "/forgotpassword",
      icon: "",
      show: true,
      external: false,
    },
    formData: {
      action: "forgotPassword",
      method: "post",
      expand: true,
      assetType: "Forgot Password",
      submit: {
        label: "Forgot Password",
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
              className: "line_bottom",
              name: "email",
              value: {},
              onChange: "",
              placeholder: "Email *",
              disabled: false,
            },
            aria: {},
          },
        },
      ],
    },
  },
};

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
          "The advertising model is responsible for minting many billionaires on the internet. Unless an entrepreneur sold goods and services online, there was no way to monetize their website. Banner ads need to be placed all over their website so that the entrepreneur could generate a few pennies per impression and even more pennies per click. Soon platforms such as Twitter & Facebook were able to gather billions of users on their platform which allowed them to generate billions of dollars from clicks and impressions.  We now live in a dystopian hellscape where platforms monetize our every move without our consent. All of those accounts gathered in one place created an attack vector for hackers to gather valuable information on the platform’s users. Millions of identities can be stolen. There is no recourse for when the platform chooses to delete your account and the many connections with it. What else can you expect when you don’t pay for a product? You become the product. We have all become the product. Medallion XLN proposes a new monetization model that allows us to take back your digital sovereignty.",
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
          "Medallion XLN seeks to restore our digital sovereignty by tokenizing every aspect of our digital interactions. The links we click, the text we write, and the media assets we upload can all be assetized with a set amount of customized permissions that determine who can access that information. Our contribution to the token economy is threefold; securing user data, monetizing user data, and interoperability through a cross-chain application marketplace. Securing data begins by adding a value to each owner-generated asset. Before that asset can be accessed, users must pay the requested value. This payment purchases a share in the user asset which grants the approved user access to the asset. Based on the permissions set on the asset by the owner, the approved user can share the asset or even collaborate another user's asset with their asset. For example, if the permissions allow it, the approved user can attach the owners' music asset to their video asset. When another user accesses this new complex asset, the payment will compensate both the original owner and the approved user.",
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
          "Medallion XLN foresees that there will be use cases  that no matter how much forethought is put into our product, we will simply not account for it. App marketplaces allow for edge case solutions to be developed and maintained by the community. They create an ecosystem of talent that creates an up-to-date infrastructure that scales beyond intended uses. Medallion XLN provides multiple interfaces that developers can innovate upon; Links, Text, Images, Videos, Blogs, Live Events, Real Estate, and the Metaverse.",
        image: SurfApps,
      },
    },
    {
      type: "panel-image-text-col",
      options: {
        id: "3",
        standard: true,
        title: "Next Gen Monetization",
        description:
          "Medallion XLN creates a brand-new monetization model that secures user-generated data as an asset (NFT). I hypothesize that linking each user-generated action to the core person’s digital representation (NFT avatar) will create a brand-new monetization model. The NFT avatar is interoperable within all user interfaces such as the web, mobile, and the metaverse. As the user interacts online as normal, each interaction is converted into an asset that the user can then sell to interested parties. Creatives who seek to monetize their content can create that content as an asset, whether that be Images, Videos, Audio, Text, Metaverse 3D objects, or an entire app. Each asset will always be owned by the user who created it. The owner of the asset will sell a collection of shares in the asset. This means assigning a value to the asset, then establishing the number of available shares. Once all the shares are bought at the base price, the shareholders in the asset can resell those shares at a higher price. The minimum requirement is that the owner of the asset always receives their portion of the resale.",
        image: GuardDog,
      },
    },
  ],
  timer: {
    announcement: "Medallion XLN raising money with an ICO ",
    phases: [
      {
        active: true,
        label: "Phase 1",
        tokenPrice: 0.7,
      },
      {
        active: false,
        label: "Phase 2",
        tokenPrice: 0.33,
      },
      {
        active: false,
        label: "Phase 3",
        tokenPrice: 0.777,
      },
      {
        active: false,
        label: "Phase 4",
        tokenPrice: 1.11,
      },
    ],
    date: "January, 31  2023",
  },
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
            "What is the Metaverse? The latest Silicon Valley buzzword is a merger of core technologies advanced in the previous decade. It is a combination of the Internet Of Things, Artificial Intelligence, Blockchain, Augmented Reality, Virtual Reality, 5G & Moore’s Law. The metaverse isn’t just a buzzword, it is the inevitable evolution of the internet. It’s more than NFTs and VR goggles, it’s the shift in how we communicate using technology. Moore’s Law guarantees that technology will continue to get smaller and more powerful. What looks like a Janky headset today becomes Ray-Ban sunglasses tomorrow and contact lenses the day after. The role Medallion XLN plays in this industry will be securing and monetizing user assets. Medallion XLN is a decentralized pipeline that allows users to access their assets from any platform or interface. We plan to streamline the ability for a user to access the same asset from various metaverse platforms. Build assets once and reuse them in different interfaces or sell shares in those assets to other users to use as an avatar, clothes, or weapon.  Long-term goals for the metaverse involve taking metaverse market share from market leaders by building a 10x Mixed Reality (MR) headset. The headsets will follow a componentized assembly structure that will use generative NFTs to create 10,000 variations of the goggles per iteration. The lenses, the base, the cameras & the sensors will all be sold separately at varying levels of quality for as cheap as possible. Then it is up to the community to assemble the goggles how they see fit. Each item will have a QR code that will link to a tutorial and suggests different ways to build out the MR goggles. This strategy will usher in an era of uncanny metaverse innovation.",
          image: PulpFiction,
        },
      },
      {
        type: "panel-image-text-col",
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
            allocation: "Seed Sale",
            percentage: 0.13,
            color: "rgba(0, 150, 255, 0.5)",
          },
          {
            allocation: "War Chest",
            percentage: 0.3,
            color: "rgba(156, 0, 255, 0.5)",
          },
          {
            allocation: "Liquidity",
            percentage: 0.13,
            color: "rgba(255, 156, 0, 0.5)",
          },
          {
            allocation: "Founders",
            percentage: 0.12,
            color: "rgba(255, 205, 86, 0.5)",
          },
          {
            allocation: "Team",
            percentage: 0.12,
            color: "rgba(255, 99, 132, 0.5)",
          },
          {
            allocation: "Advisors",
            percentage: 0.09,
            color: "rgba(109, 248, 81, 0.5)",
          },
          {
            allocation: "Air Drop",
            percentage: 0.11,
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
    body: "Medallion XLN is a very ambitious project. Any large idea can be broken down into small reusable components that scale across the organization. We intend for this product to be built in collaboration with our core team and the community. Our core team will be providing all the necessary tools for the community to get the maximum potential out of the product Our technology department aims to provide a secure asset management experience regardless of the interface it is accessed from. The technology department includes a portion dedicated to Blockchain and Extended Reality. The blockchain provides transparency and trust in the application. The extended reality allows Medallion XLN to have a presence in all interfaces. Our Operations department will identify where we are missing a construct and then develop the best strategy to address it.",
    button: {
      text: "Submit An Idea",
    },
  },
  roadMap: {
    header: "XLN Roadmap",
    roadmaps: [
      {
        timePeriod: "Introduction",
        months: "November 2022 - January 2025",
        description:
          "Medallion XLN’s initial target audience will be the creator economy. Influencers, artists, cinematographers, content creators, and more. Medallion XLN will build apps that validate our core mission of securing digital & real-world assets. These apps will restructure how assets are transferred. Key focus points will work on how art is sold & royalties are distributed. The first users, Medallion XLN will target are users who are already familiar with Non-Fungible Tokens (NFT). NFT collectors are already familiar with the technology and can easily transition to the Medallion XLN use case. They can bring their already existing NFTs to life with our Artificial Intelligence, which will convert them.JPEGs into fully interoperable 3D.GLF files that can be used in participating metaverse. On launch, Medallion XLN will have 40,000 mintable NFTs over 12 months. 10,000 NFTs every 3 months and 4 Virtual reality worlds are distributed once per quarter.",
      },
      {
        timePeriod: "Growth",
        months: "January 2025 - December 2030",
        description:
          "The 2nd phase of Medallion XLN will find us continuing to build out the creator economy but also shifting to the financial industry. Medallion XLN will introduce apps to manage real-world assets such as fiat, gold, & real estate. In this phase, we will introduce wearables, vr headsets, smart locks, and other hardware that can be interacted with Medallion XLN’s smart contract. The hardware that is introduced will allow for a more decentralized model of ownership to come into fruition. Groups of investors can trustlessly own and run real properties. Shareholders can buy & sell their shares and have their access rights to the properties changed to reflect that status.",
      },
      {
        timePeriod: "Maturity",
        months: "January 2031 - December 2050",
        description:
          "Our vision for this phase sees our technology evolving to be able to autonomously run smart cities & factories. Governments will widely distribute and use Medallion XLN across the globe to secure assets & infrastructure. Medallion XLN will pioneer decentralized manufacturing that allows anyone to create real-world instances of their digital assets. The Kardashev scale is used to measure the technological advancement in a civilization based on the amount of energy it can use. The hypothetical scale was developed by Nikolai Kardashev to measure the consumption of energy on a cosmic level. From consuming local resources, continental resources, global resources, solar resources, galaxy resources, and universal resources. Type-3 is being able to use universal resources.",
      },
      {
        timePeriod: "Beyond",
        months: "May 2050 - Beyond",
        description:
          "Medallion XLN will extend its use case to critical infrastructure such as roads, bridges, dams, airports and more that will receive tolls to run completely autonomously. In this phase, we aim to be a stealth layer 1 that processes all transactions. Reaching a Type-2 civilization needs a scalable solution. Space colonies the size of Texas need to be stabilized away from Earth’s orbit. We will develop an industrial 3D printer that gathers the surrounded space dust. It will use Machine Learning to categorize the various elements then remotely print the entire space station. The 3D printer would need to know how to self replicate. We need about a 1000 between each planet so that spaceships can dock, run diagnostics checks and rest. We spread these colonies through out the entire solar system then harness the energy from the entire solar system. Then we begin our plan for Type-3.  Medallion XLN is the future!",
      },
    ],
  },
  team: {
    header: "Medallion XLN | Team Members",
    members: [
      {
        image: CEO,
        avatar: "CEO-Executive.png",
        name: "Dwayne",
        position: "Chief Executive Officer (CEO) / Founder",
        bio: "Bio: Dwayne will define Medallion XLN’s overall vision, technology, user & client acquisition strategy. Dwayne will work with Executives to build each department most optimally and has the final say on all major company decisions. Dwayne manages the Executives and is responsible for providing them with the information and resources they need to best run their departments. Dwayne has over a decade of experience as a serial entrepreneur and senior software developer at various technology organizations and has been working on the vision for Medallion XLN for 5 years.",
        responsibilities:
          "Tasks: Drive the momentum of Medallion XLN. Make key decisions. Define company vision & public image. Manage all executives.",
        manages: "Manages: COO, CTO, CBO, CFO, CMO, XRO, XPO",
      },
      {
        image: COO,
        avatar: "COO-Executive.png",
        name: "Allan",
        position: "Chief Operating Officer (COO)",
        bio: "Bio: Allan has over 20 years of experience in the investment industry working with small boutique financial firms to large Turnkey Asset Management Programs.  Allan has held leadership roles in operations, service, learning & development, and internal communications.  His interest in blockchain & asset management space in 2019 as an investor in cryptocurrencies.",
        responsibilities:
          "Tasks: Promotes the tone, public image & makes sure the company runs as efficiently as possible. Designs & implements plans to carry out vision. Is able to predict and solve company problems.",
        manages:
          "Manages: Vice President of Operations, Business Analyst, Operations Manager",
      },
      // {
      //   image: CMO,
      //   avatar: "CMO-Executive.png",
      //   name: "Sophie",
      //   position: "Chief Marketing Officer (CMO)",
      //   bio: "Bio:  Kushner Sophia , an American entrepreneur who was born and raised in Canada, I am one of many entrepreneurs who has taken her talents to the digital space by minting and selling non-fungible tokens, or NFTs, on digital marketplaces. Prior to minting and selling non- fungible tokens I also have a career in crypto where back in 2020 I started off my ROI (Return on investments) the success rate was 90% for myself and others who invested and has moved further up to hold coins on Public. Kushner Sophia is a principal body under Arenalive a United Kingdom based company charged with promoting economic programs and national public-private partnerships to advance innovation and entrepreneurship.",
      //   responsibilities:
      //     "Tasks: Creates marketing strategy and is responsible for advertising, branding & client acquisition for the company. Must have a deep understanding about how to leverage social media to create an army of followers. Stay up to date with the latest trends, defining and attracting a loyal and passionate user base. Construct marketing plans to meet customers & business partners alike.",
      //   manages:
      //     "Brand Manager, Director of Marketing, SEO Manager, Social Media Manager, Email Marketing Manager",
      // },
      {
        image: XPO,
        avatar: "XPO-Executive.png",
        name: "Ana",
        position: "Executive Program Officer (XPO)",
        bio: "Bio: Ana is an accomplished Digital leader with 15 years of experience, offering a unique blend of Program Management, Technology, and Marketing expertise. She also offers an exceptional record of strategic planning/execution, while building high-performing cross-functional teams, coaching/developing talent, and ensuring operational excellence.",
        responsibilities:
          "Executive Program Officer oversee the fulfillment of larger organizational goals. They coordinate activities between multiple projects without directly managing them. Instead, they manage the main program, giving detailed attention to program strategy, project delegation, and program implementation.",
        manages:
          "As an Executive Program Officer, you will be communicating, coordinating, and collaborating with cross functional teams daily. Working most closely with the Engineering and Product Management teams, you will be influencing all aspects of the product delivery process.",
      },
      {
        image: CTO,
        avatar: "CTO-Executive.png",
        name: "Gaurav",
        position: "Chief Technology Officer (CTO)",
        bio: "Bio: Gaurav Kumar, Chief Technology Officer (CTO)  Meet GK our CTO | ex PayPal, ex eBay, he has more than a decade experience in building core technologies and shipping stellar user experiences to millions of users. GK holds a BS, MS degrees in Computer Science. Based out of San Francisco Bay Area, when he is not in a Nerd mode, he spends time with his friends and family.",
        responsibilities:
          "Oversees the development and dissemination of technology for external customers, vendors, and other clients to help improve and increase business. Keeps pace with the accelerated rate of change in technology. Offers innovative solutions to the company. They may also deal with internal IT operations if a company is small and doesn't have a Chief Information Officer.                ",
        manages:
          "Engineering Manager, Front End Developer, Lead Software Engineer, Machine Learning Engineer, QA Engineer, Senior Software Engineer, Software Engineer",
      },
      {
        image: CAO,
        avatar: "CAO-Executive.png",
        name: "Gary",
        position: "Client Acquisions Officer (CAO)",
        bio: "Gary has been a Sales & Customer Service Professional and Creative Talent for over 30 years. He has help onboard clients for ABC Television, The CW Network, Proctor & Gamble and Scandinavian Designs.",
        responsibilities:
          "Onboard new clients, build relationships and maintain connections through dialog and written communication. Gary’s focus at Medallion XLN will be to connect with then onboard Small Business and global Enterprises  to use Medallion XLN’s Smartchain as their Asset Management Blockchain.",
        manages:
          "Sales Manager, Sales personnel, Customer Service representatives",
      },
      {
        image: XRO,
        avatar: "XRO-Executive.png",
        name: "ArtCrazy",
        position: "Experience Reality Officer (XRO)",
        bio: "Bio: Ptah “ArtCrazy” Quammie, Extended Reality Officer (XRO), Head photographer Ptah Quammie established ArtCrazy Photography in the early summer of 2010. Since then ArtCrazy has expanded its reach to Las Vegas, Miami, New York, California, the Caribbean, and abroad, to produce some of the most innovative concepts in photography. While providing a full range of photography needs, ArtCrazy and its affiliates have expanded to provide a full spectrum of media production, including professional video and editing services. ArtCrazy specializes particularly in fashion editorial, artistic nudes, swimsuits, and portfolio development. Whether you are a newcomer to modeling or a seasoned vet, ArtCrazy will reshape and redefine you. Medallion XLN’s main selling point is asset ownership. XRO will work with CTO to design a Metaverse concept that allows various user-owned assets to be integrated into a Metaverse space.",
        responsibilities:
          "Oversees the development and dissemination of technology for external customers, vendors, and other clients to help improve and increase business. Keeps pace with the accelerated rate of change in technology. Offers innovative solutions to the company. They may also deal with internal IT operations if a company is small and doesn't have a Chief Information Officer.                ",
        manages:
          "Engineering Manager, Front End Developer, Lead Software Engineer, Machine Learning Engineer, QA Engineer, Senior Software Engineer, Software Engineer",
      },
      // {
      //     image: CBO,
      //     avatar: 'CBO-Executive.jpg',
      //     name: "Tom",
      //     position: "Chief Blockchain Officer (CBO)",
      //     bio: "N/A",
      //     responsibilities: "As a Site Reliability Engineer (SRE), you'll help build a meaningful engineering discipline, combining software and systems to develop creative engineering solutions to operations problems. Much of our support and software development focuses on optimizing existing systems, building infrastructure, and reducing work through automation. You'll join a team of curious problem solvers with a diverse set of perspectives who are thinking big and taking risks. In this environment, you'll take the lead on relevant projects, supported by an organization that provides the support and mentorship you need to learn and grow. As an SRE, you'll be focused on running better production applications and systems. ",
      //     manages: "Engineering Manager, Front End Developer, Lead Software Engineer, Machine Learning Engineer, QA Engineer, Senior Software Engineer, Software Engineer"
      // },
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
      description:
        "A whitepaper is an informational document usually issued by a company to highlight the features of a solution that it offers or plans to offer. Medallion XLN’s whitepaper will educate our community regarding the Digital Resource Management industry. Medallion XLN’s many use cases and implementations will be highlighted. Medallion XLN is creating a technology that has the potential to give birth to many new industries in a decentralized ecosystem. The whitepaper will provide our vision, values, implementation strategy, and provide a theoretical & practical approach to Asset Management.",
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

export const create = {
  states: [
    "createAiArt",
    "createChat",
    "createAudio",
    "createBlog",
    "createDocument",
    "createDomain",
    "createDownloader",
    "createEnterprise",
    "createImage",
    "createLink",
    "createLive",
    "createMetaverse",
    "createMusic",
    "createPodcast",
    "createRealEstate",
    "createShop",
    "createText",
    "createVideo",
    "createWebsite",
  ],
  options: {
    type: "grid-one-center",
    standard: "Standard",
    content: {},
    templateData: [
      {
        type: "createAiArt",
        options: {
          action: "createAsset",
          method: "post",
          assetType: "AI Art",
          toggle: true,
          text: "aiArt",
          submit: {
            label: "Generate Art",
            className: "btn btn-block btn-info",
            icon: "",
            action: "aiArt",
          },
          fields: [
            {
              type: "dropdown",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Select Model",
                  forId: "model-list",
                },
                input: {
                  type: "text",
                  list: "ai-model-list",
                  id: "model-list",
                  className: "",
                  placeholder: "Choose AI Model",
                  name: "model",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                datalist: {
                  type: "model-list",
                  id: "ai-model-list",
                  className: "",
                  schema: {
                    types: [
                      "-- Choose AI Model --",
                      "andite/anything-v4.0",
                      "andite/hiten-diffusion",
                      "andite/mignon-diffusion",
                      "andite/mikapikazo-diffusion",
                      "andite/mashuu-diffusion",
                      "andite/pastel-mix",
                      "andite/piromizu-diffusion",
                      "darkstorm2150/Protogen_Eclipse_Official_Release",
                      "darkstorm2150/Protogen_Infinity_Official_Release",
                      "darkstorm2150/Protogen_Nova_Official_Release",
                      "darkstorm2150/Protogen_x3.4_Official_Release",
                      "darkstorm2150/Protogen_x5.3_Official_Release",
                      "darkstorm2150/Protogen_x5.8_Official_Release",
                      "eimiss/EimisAnimeDiffusion_1.0v",
                      "hakurei/artstation-diffusion",
                      "hakurei/waifu-diffusion",
                      "lambdalabs/dreambooth-avatar",
                      "lambdalabs/sd-pokemon-diffusers",
                      "lambdalabs/text-to-naruto",
                      "Linaqruf/anything-v3.0",
                      "nitrosocke/Arcane-Diffusion",
                      "nitrosocke/archer-diffusion",
                      "nitrosocke/classic-anim-diffusion",
                      "nitrosocke/elden-ring-diffusion",
                      "nitrosocke/Ghibli-Diffusion",
                      "nitrosocke/Nitro-Diffusion",
                      "nitrosocke/redshift-diffusion",
                      "nitrosocke/spider-verse-diffusion",
                      "prompthero/openjourney",
                      "prompthero/openjourney-v4",
                      "prompthero/openjourney-lora",
                      "prompthero/funko-diffusion",
                      "prompthero/linkedin-diffusion",
                      "prompthero/poolsuite-diffusion",
                      "midjourney",
                      "openai/dalle-2",
                      "stabilityai/stable-diffusion-2-base",
                      "stabilityai/stable-diffusion-2-1",
                      "wavymulder/Analog-Diffusion",
                      "wavymulder/lomo-diffusion",
                      "wavymulder/modelshoot",
                      "wavymulder/portraitplus",
                      "wavymulder/timeless-diffusion",
                      "wavymulder/wavyfusion",
                    ],
                  },
                },
                aria: {},
              },
            },
            {
              type: "textarea",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Description",
                  forId: "ai-text-prompt",
                },
                area: {
                  type: "text",
                  id: "ai-text-prompt",
                  className: "text-prompt",
                  name: "prompt",
                  value: {},
                  onChange: "",
                  placeholder: "Enter Text Prompt",
                },
                aria: {},
              },
            },
            {
              type: "dropdown",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Select Size",
                  forId: "size-list",
                },
                input: {
                  type: "text",
                  list: "image-size-list",
                  id: "size-list",
                  className: "",
                  placeholder: "Choose Image Size",
                  name: "size",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                datalist: {
                  type: "size-list",
                  id: "image-size-list",
                  className: "",
                  schema: {
                    placeholder: "512x512",
                    types: [
                      "-- Choose Size --",
                      "1024x1024",
                      "512x512",
                      "256x256",
                    ],
                  },
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "createChat",
        options: {
          action: "createAsset",
          method: "post",
          assetType: "AI Chat",
          toggle: true,
          text: "aiChat",
          submit: {
            label: "Create Chat",
            className: "btn btn-block btn-info",
            icon: "",
            action: "createAsset",
          },
          content: {
            header: "Resume Chat",
            header2: "Create New Chat",
            description:
              "This webpage provides information on different types of communication and interaction, including human to AI, human to human, and human to group interaction. The chat prompts covered various aspects of each interaction type, such as verbal and nonverbal communication, shared experiences, and effective communication strategies.",
            image: ChatToAI,
            assistantCover: {
              "openai/chatgpt": "chat_resume.png",
              "text-davinci-003": "chat_gpt_davinci_cover.png",
              "text-curie-001": "chat_gpt_davinci_cover.png",
              "text-babbage-001": "chat_gpt_babbage_cover.png",
              "text-ada-001": "chat_gpt_ada_cover.png",
              "alpaca": "chat_alpaca_cover.png",
              "bloom": "chat_bloom_100b_cover.png",
              "llama": "chat_llama_100b_cover.png",
              "flan": "chat_flan_7b_cover.png",
              "auto-gpt": "chat_auto_gpt_cover.png",
              "sentinel": "chat_ai.png"
              },
            listChatOptions: [
              {
                type: "HumanToAI",
                image: ChatToAI,
                title: "Human To AI",
                description:
                  "Human to AI dialog involves communication between a human and an artificial intelligence system. The conversation can take various forms, such as text or speech, and is usually initiated by the human. In the case of text-based conversations, the human inputs text into a user interface, which the AI system interprets and generates a response. In speech-based conversations, the human speaks to a virtual assistant or chatbot, which uses natural language processing techniques to understand the spoken words and generate appropriate responses.",
                url: "/xln/create/asset/ai/chat/human-to-ai",
              },
              {
                type: "HumanToHuman",
                image: ChatToHuman,
                title: "Human To Human",
                description:
                  "Human to human interaction refers to communication and interaction between individuals. This can take various forms, such as verbal and nonverbal communication, facial expressions, body language, and gestures. Human to human interaction plays a crucial role in social, emotional, and cognitive development, and is an essential part of human life.",
                url: "/xln/create/asset/ai/chat/human-to=human",
              },
              {
                type: "HumanToGroup",
                image: ChatToGroup,
                title: "Human To Group",
                description:
                  "Human to group interaction refers to communication and interaction between an individual and a group of people. This can take various forms, such as group meetings, team projects, social gatherings, and community events. Human to group interaction is essential for building relationships, achieving goals, and creating a sense of belonging and community.",
                url: "/xln/create/asset/ai/chat/human-to-group",
              },
              {
                type: "GroupToAI",
                image: ChatToResume,
                title: "Group To AI",
                description:
                  "Group of humans to AI interaction refers to communication and interaction between a group of individuals and an artificial intelligence system. This can take various forms, such as a group of people using a virtual assistant or chatbot to perform tasks or get information, or a team using an AI system to analyze data or make decisions.",
                url: "/xln/create/asset/ai/chat/group-to-ai",
              },
            ],
          },
          fields: [
            {
              type: "dropdown",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Select Interface",
                  forId: "chat-interface",
                },
                input: {
                  type: "text",
                  list: "chat-interface",
                  id: "chat-interface",
                  className: "",
                  placeholder: "Choose Chat Interface",
                  name: "interfaces",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                datalist: {
                  type: "interface-list",
                  id: "chat-interface",
                  className: "",
                  schema: {
                    types: [
                      "-- Choose Chat Interface --",
                      "human-to-human",
                      "human-to-ai",
                      "human-to-group",
                      "group-to-ai",
                    ],
                  },
                },
                aria: {},
              },
            },
            {
              type: "dropdown",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Select Model",
                  forId: "chat-model",
                },
                input: {
                  type: "text",
                  list: "chat-model",
                  id: "chat-model",
                  className: "",
                  placeholder: "Choose Chat Model",
                  name: "model",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                datalist: {
                  type: "model-list",
                  id: "chat-model",
                  className: "",
                  schema: {
                    types: [
                      "-- Choose Chat Model --",
                      "text-davinci-003",
                      "text-curie-001",
                      "text-babbage-001",
                      "text-ada-001",
                      "sentinel",
                      "text-davinci-003",
                      "gpt2", // 2/5
                      "gpt2-large", // 2/5
                      "bigscience/bloom-560m", // 3/5
                      "openai-gpt", // 1/5 focused on scriptwriting
                      "decapoda-research/llama-7b-hf", // too large
                      "EleutherAI/gpt-neo-2.7B", // 2/5
                      "bigscience/test-bloomd-6b3", // 0/5 no response
                      "bigscience/bloom-7b1", //
                      "bigcode/santacoder",
                      "Salesforce/codegen-350M-multi",
                      "gpt2-xl",
                      "cerebras/Cerebras-GPT-111M",
                      "EleutherAI/gpt-neo-1.3B",
                      "facebook/opt-1.3b",
                      "xlnet-base-cased",
                      "Salesforce/codegen-2B-multi",
                      "facebook/opt-125m",
                      "TehVenom/PPO_Pygway-V8p4_Dev-6b",
                      "facebook/opt-350m",
                      "decapoda-research/llama-13b-hf",
                      "EleutherAI/gpt-j-6b",
                      "facebook/opt-66b",
                      "facebook/opt-13b",
                      "facebook/opt-6.7b",
                      "bigscience/bloomz-560m",
                      "EleutherAI/gpt-neo-125m",
                      "KoboldAI/OPT-6.7B-Erebus",
                      "codeparrot/codeparrot",
                      "databricks/dolly-v2-12b",
                      "togethercomputer/GPT-NeoXT-Chat-Base-20B",
                      "cerebras/Cerebras-GPT-13B",
                      "anon8231489123/vicuna-13b-GPTQ-4bit-128g",
                      "anon8231489123/gpt4-x-alpaca-13b-native-4bit-128g",
                      "Gustavosta/MagicPrompt-Stable-Diffusion",
                      "lmsys/vicuna-13b-delta-v0",
                      "chavinlo/gpt4-x-alpaca",
                      "EleutherAI/gpt-neox-20b",
                      "databricks/dolly-v1-6b",
                      "togethercomputer/GPT-JT-6B-v1",
                      "OpenAssistant/oasst-sft-1-pythia-12b",
                      "stabilityai/stablelm-tuned-alpha-7b",
                      "avinlo/alpaca-native",
                      "decapoda-research/llama-65b-hf",
                      "BlinkDL/rwkv-4-raven",
                      "OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",
                      "stanford-crfm/BioMedLM",
                      "stabilityai/stablelm-base-alpha-7b",
                      "facebook/opt-66b",
                      "succinctly/text2image-prompt-generator",
                      "Intel/fid_flan_t5_base_nq",
                      "gpt2-medium", // 2/5
                      "distilgpt2", // 1/5
                    ],
                  },
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
                  labelText: "Prompt",
                  forId: "chat-prompt",
                },
                input: {
                  type: "text",
                  id: "chat-prompt",
                  className: "",
                  placeholder: "Initial Prompt",
                  name: "prompt",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "toggle",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Use Prompt Template",
                  forId: "chat-prompt-template",
                },
                input: {
                  type: "text",
                  id: "chat-prompt-template",
                  className: "",
                  placeholder: "",
                  name: "toggle",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "dropdown",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Select Prompt Template",
                  forId: "chat-template",
                },
                input: {
                  type: "text",
                  list: "chat-template",
                  id: "chat-template",
                  className: "",
                  placeholder: "Choose Prompt Template",
                  name: "template",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                datalist: {
                  type: "model-list",
                  id: "chat-template",
                  className: "",
                  schema: {
                    types: [
                      "-- Choose Prompt Template --",
                     "None",
                     "Question Answer",
                     "Novelist",
                     "Composer",
                     "Explain subject",
                     "Linux Terminal",
                     "English Translator",
                     "Job Interviewer",
                     "Javascript Console",
                     "Text Based Excel",
                     "English Pronounciation",
                     "Spoken English Teacher",
                     "Travel Guide",
                     "Plagiarism Checker",
                     "Character from Series",
                     "Advertiser",
                     "Storyteller",
                     "Football commentator",
                     "Stand up comedian",
                     "Debater",
                     "Debate Coach",
                     "Screenwriter",
                     "Movie Critic",
                     "Relationship Coach",
                     "Poet",
                     "Rapper",
                     "Motivational Speaker",
                     "Philosophy Teacher",
                    ],
                  },
                },
                aria: {},
              },
            },
            {
              type: "range",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Max Tokens",
                  forId: "chat-max-tokens",
                },
                input: {
                  type: "text",
                  id: "chat-max-tokens",
                  className: "",
                  placeholder: "Max Token",
                  name: "max_tokens",
                  value: {},
                  min: "1",
                  max: "250",
                  step: "1",
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "range",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Temperature",
                  forId: "chat-temperature",
                },
                input: {
                  type: "text",
                  id: "chat-temperature",
                  className: "",
                  placeholder: "Temperature",
                  name: "temperature",
                  value: {},
                  min: "0",
                  max: "1",
                  step: "0.1",
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "range",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "top_p",
                  forId: "chat-top_p",
                },
                input: {
                  type: "text",
                  id: "chat-top_p",
                  className: "",
                  placeholder: "Top P",
                  name: "top_p",
                  value: {},
                  min: "0",
                  max: "1",
                  step: "0.1",
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "range",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "frequency_penalty",
                  forId: "chat_frequency_penalty",
                },
                input: {
                  type: "text",
                  id: "chat_frequency_penalty",
                  className: "",
                  placeholder: "Frequency Penalty",
                  name: "frequency_penalty",
                  value: {},
                  min: "0",
                  max: "1",
                  step: "0.1",
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "range",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "presence_penalty",
                  forId: "chat_presence_penalty",
                },
                input: {
                  type: "text",
                  id: "chat_presence_penalty",
                  className: "",
                  placeholder: "presence_penalty",
                  name: "presence_penalty",
                  value: {},
                  min: "0",
                  max: "1",
                  step: "0.1",
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "createAudio",
        options: {
          action: "createAsset",
          method: "post",
          assetType: "Audio",
          toggle: true,
          text: "audio",
          submit: {
            label: "Add Song",
            className: "btn btn-block btn-info",
            icon: "",
            action: "createAsset",
          },
          fields: [
            {
              type: "input",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Name",
                  forId: "name",
                },
                input: {
                  type: "text",
                  list: "name",
                  id: "song-name",
                  className: "",
                  placeholder: "Song Name",
                  name: "audioName",
                  value: {},
                  onChange: "",
                  disabled: false,
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
                  labelText: "Band Name",
                  forId: "band-name",
                },
                input: {
                  type: "text",
                  list: "",
                  id: "band-name",
                  className: "",
                  placeholder: "Composer",
                  name: "composer",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "textarea",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Lyrics",
                  forId: "lyrics",
                },
                area: {
                  type: "text",
                  id: "lyrics",
                  className: "",
                  name: "lyrics",
                  value: {},
                  onChange: "",
                  placeholder: "Include Lyrics",
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
                  labelText: "Producer",
                  forId: "producer",
                },
                input: {
                  type: "text",
                  id: "ama",
                  className: "",
                  placeholder: "Producer",
                  name: "producer",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "file",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Attach Cover",
                  forId: "songCover",
                },
                input: {
                  type: "file",
                  id: "attach-cover",
                  className: "btn btn-info",
                  name: "cover",
                  onChange: "",
                  placeholder: "Attach Cover",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "file",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Audio File",
                  forId: "attach-audio",
                },
                input: {
                  type: "file",
                  id: "attach-audio",
                  className: "btn btn-info",
                  name: "file",
                  onChange: "",
                  placeholder: "Audio File",
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "createBlog",
        options: {
          action: "blog",
          text: "Blog",
          assetType: "Blog",
          toggle: true,
          buttons: [
            {
              button: "add",
              icon: "fa-solid fa-plus",
            },
            {
              button: "header",
              icon: "fa-solid fa-heading",
            },
            {
              button: "body",
              icon: "fas fa-paragraph",
            },
            {
              button: "image",
              icon: "fas fa-images",
            },
            {
              button: "video",
              icon: "fas fa-film",
            },
            {
              button: "music",
              icon: "fa-solid fa-music",
            },
            {
              button: "link",
              icon: "fas fa-link",
            },
            {
              button: "web cam",
              icon: "fas fa-camera",
            },
            {
              button: "search",
              icon: "fas fa-search",
            },
          ],
          fields: [
            {
              type: "dropdown",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Select Category",
                  forId: "category-asset",
                },
                input: {
                  type: "text",
                  list: "category-asset-list",
                  id: "category-asset",
                  className: "",
                  name: "category",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                datalist: {
                  type: "category-asset",
                  id: "category-asset-list",
                  className: "",
                  schema: {},
                },
                aria: {},
              },
            },
            {
              type: "textarea",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Description",
                  forId: "asset-description",
                },
                area: {
                  type: "text",
                  id: "asset-description",
                  className: "",
                  name: "description",
                  value: {},
                  onChange: "",
                  placeholder: "Asset Description",
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
                  labelText: "Text",
                  forId: "header",
                },
                input: {
                  type: "text",
                  id: "header",
                  className: "header_blog",
                  name: "title",
                  value: {},
                  onChange: "",
                  placeholder: "Enter Text",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "file",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Attach Asset",
                  forId: "attach-asset",
                },
                input: {
                  type: "file",
                  id: "attach-asset",
                  className: "btn btn-info",
                  name: "cover",
                  onChange: "",
                  placeholder: "Attach Asset",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "createDocument",
        options: {
          action: "document",
          method: "post",
          assetType: "Document",
          toggle: true,
          text: "Link",
        },
      },
      {
        type: "createDomain",
        options: {
          action: "link",
          method: "post",
          assetType: "Link",
          toggle: true,
          text: "Link",
        },
      },
      {
        type: "createDownloader",
        options: {
          action: "link",
          method: "post",
          text: "Link",
          assetType: "Downloader",
          toggle: true,
          form: {
            type: "form",
            standard: "Standard",
            title: "Youtube Downloader",
            warning: "Go back to the main  ",
            description: "lets resolve it here",
            warningLink: {
              text: "page",
              to: "/xln",
              icon: "",
              show: true,
              external: false,
            },
            createAsset: "Click here if you ",
            createAssetButton: {
              text: "Buy Tokens",
              to: "/buyTokens",
              icon: "",
              show: true,
              external: false,
            },
            formData: {
              action: "downloadYoutube",
              method: "post",
              assetType: "Downloader",
              submit: {
                label: "Search",
                className: "btn btn-block btn-info",
                icon: "",
                action: "downloadYoutube",
              },
              fields: [
                {
                  type: "input",
                  attributes: {
                    label: {
                      error: false,
                      inverse: false,
                      show: false,
                      labelText: "Buy XLN",
                      forId: "youtube-downloader",
                    },
                    input: {
                      type: "text",
                      id: "youtube-downloader",
                      className: "",
                      name: "url_download",
                      value: {},
                      onChange: "",
                      placeholder: "Search or paste youtube link here",
                      disabled: false,
                    },
                    aria: {},
                  },
                },
              ],
            },
          },
        },
      },
      {
        type: "createEnterprise",
        options: {
          action: "enterprise",
          method: "post",
          assetType: "Enterprise",
          toggle: true,
          text: "Link",
        },
      },
      {
        type: "createImage",
        options: {
          action: "image",
          text: "Image",
          assetType: "Image",
          toggle: true,
          method: "post",
          submit: {
            label: "Add Image",
            className: "btn btn-block btn-info",
            icon: "",
            action: "image",
          },
          fields: [
            {
              type: "input",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Image",
                  forId: "image",
                },
                input: {
                  type: "text",
                  id: "image",
                  className: "",
                  placeholder: "Image",
                  name: "image",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "createLink",
        options: {
          action: "link",
          method: "post",
          assetType: "Link",
          toggle: true,
          text: "Link",
          submit: {
            label: "Add Link",
            className: "btn btn-block btn-info",
            icon: "",
            action: "link",
          },
          fields: [
            {
              type: "input",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Link",
                  forId: "link",
                },
                input: {
                  type: "text",
                  id: "link",
                  className: "",
                  placeholder: "Link",
                  name: "link",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "createLive",
        options: {
          action: "live",
          method: "post",
          assetType: "Live",
          toggle: true,
          text: "Live",
          submit: {
            label: "Add Live",
            className: "btn btn-block btn-info",
            icon: "",
            action: "live",
          },
          fields: [
            {
              type: "input",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Live",
                  forId: "live",
                },
                input: {
                  type: "text",
                  id: "live",
                  className: "",
                  placeholder: "Live",
                  name: "live",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "createMetaverse",
        options: {
          action: "metaverse",
          method: "post",
          assetType: "Metaverse",
          toggle: true,
          text: "Metaverse",
        },
      },
      {
        type: "createMusic",
        options: {
          action: "music",
          method: "post",
          assetType: "Music",
          toggle: true,
          text: "Music",
        },
      },
      {
        type: "createRealEstate",
        options: {
          action: "realEstate",
          method: "post",
          assetType: "Real Estate",
          toggle: true,
          text: "Real Estate",
        },
      },
      {
        type: "createPodcast",
        options: {
          action: "podcast",
          method: "post",
          assetType: "Podcast",
          toggle: true,
          text: "Link",
        },
      },
      {
        type: "createShop",
        options: {
          action: "shop",
          method: "post",
          assetType: "Shop",
          toggle: true,
          text: "Shop",
        },
      },
      {
        type: "createText",
        options: {
          action: "text",
          method: "post",
          assetType: "Text",
          toggle: true,
          text: "Text",
          submit: {
            label: "Add text",
            className: "btn btn-block btn-info",
            icon: "",
            action: "text",
          },
          fields: [
            {
              type: "input",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Text",
                  forId: "text",
                },
                input: {
                  type: "text",
                  id: "text",
                  className: "",
                  placeholder: "Text",
                  name: "text",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "createVideo",
        options: {
          action: "video",
          method: "post",
          assetType: "Video",
          toggle: true,
          text: "Video",
          submit: {
            label: "Add video",
            className: "btn btn-block btn-info",
            icon: "",
            action: "video",
          },
          fields: [
            {
              type: "input",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Video",
                  forId: "video",
                },
                input: {
                  type: "text",
                  id: "video",
                  className: "",
                  placeholder: "Video",
                  name: "video",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "createWebsite",
        options: {
          action: "website",
          method: "post",
          assetType: "Website",
          toggle: true,
          text: "Website",
        },
      },
    ],
  },
};

export const view = {
  infura,
  systemChecks: {
    showHeader: false,
    showFooter: false,
  },
  states: [
    "viewAiArt",
    "viewChat",
    "viewAudio",
    "viewBlog",
    "viewDocument",
    "viewDomain",
    "viewDownloader",
    "viewEnterprise",
    "viewImage",
    "viewLink",
    "viewLive",
    "viewMetaverse",
    "viewMusic",
    "viewPodcast",
    "viewRealEstate",
    "viewShop",
    "viewText",
    "viewVideo",
    "viewWebsite",
  ],
  options: {
    content: {},
    templateData: [
      {
        type: "viewAiArt",
        options: {
          action: "aiArt",
          submit: {
            label: "Generate Art",
            className: "btn btn-block btn-info",
            icon: "",
            action: "aiArt",
          },
          fields: [
            {
              type: "dropdown",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Select Model",
                  forId: "model-list",
                },
                input: {
                  type: "text",
                  list: "ai-model-list",
                  id: "model-list",
                  className: "",
                  placeholder: "Choose AI Model",
                  name: "model",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                datalist: {
                  type: "model-list",
                  id: "ai-model-list",
                  className: "",
                  schema: {
                    placeholder: "Open AI",
                    types: ["Open AI", "Stable Diffusion", "Mid Journey V4"],
                  },
                },
                aria: {},
              },
            },
            {
              type: "dropdown",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Select Size",
                  forId: "size-list",
                },
                input: {
                  type: "text",
                  list: "image-size-list",
                  id: "size-list",
                  className: "",
                  placeholder: "Choose Image Size",
                  name: "size",
                  value: {},
                  onChange: "",
                },
                datalist: {
                  type: "size-list",
                  id: "image-size-list",
                  className: "",
                  schema: {
                    placeholder: "512x512",
                    types: ["1024x1024", "512x512", "256x256"],
                  },
                },
                aria: {},
              },
            },
            {
              type: "textarea",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Description",
                  forId: "ai-text-prompt",
                },
                area: {
                  type: "text",
                  id: "ai-text-prompt",
                  className: "text-prompt",
                  name: "prompt",
                  value: {},
                  onChange: "",
                  placeholder: "Enter Text Prompt",
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "viewChat",
        options: {
          action: "selectLangModel",
          method: "post",
          assetType: "AI Chat",
          toggle: false,
          text: "aiChat",
          submit: {
            label: "Chat",
            className: "btn btn-block btn-info",
            icon: "",
            action: "selectLangModel",
          },
          content: {
            "text-davinci-003": ChatGPT,
            "text-curie-001": ChatGPT,
            "text-babbage-001": ChatGPT,
            "text-ada-001": ChatGPT,
            "alpaca": "src/system/image/avatar/alpaca.png",
            "llama":  "src/system/image/avatar/llama.png",
            "flan": Flan,
            "auto-gpt":  "src/system/image/avatar/autoGpt.png",
            'sentinel': Sentinel,
            "bloom": Bloom

          },
          fields: [
            {
              type: "input",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Prompt",
                  forId: "chat-prompt",
                },
                input: {
                  type: "text",
                  id: "chat-prompt",
                  className: "",
                  placeholder: "Prompt",
                  name: "prompt",
                  value: {},
                  onChange: "",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "viewAudio",
        options: {
          action: "audio",
          method: "post",
          text: "Link",
        },
      },
      {
        type: "viewBlog",
        options: {
          action: "blog",
          text: "Blog",
          buttons: [
            {
              button: "add",
              icon: "fa-solid fa-plus",
            },
            {
              button: "header",
              icon: "fa-solid fa-heading",
            },
            {
              button: "body",
              icon: "fas fa-paragraph",
            },
            {
              button: "image",
              icon: "fas fa-images",
            },
            {
              button: "video",
              icon: "fas fa-film",
            },
            {
              button: "music",
              icon: "fa-solid fa-music",
            },
            {
              button: "link",
              icon: "fas fa-link",
            },
            {
              button: "web cam",
              icon: "fas fa-camera",
            },
            {
              button: "search",
              icon: "fas fa-search",
            },
          ],
          fields: [
            {
              type: "dropdown",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Select Category",
                  forId: "category-asset",
                },
                input: {
                  type: "text",
                  list: "category-asset-list",
                  id: "category-asset",
                  className: "",
                  name: "category",
                  value: {},
                  onChange: "",
                },
                datalist: {
                  type: "category-asset",
                  id: "category-asset-list",
                  className: "",
                  schema: {},
                },
                aria: {},
              },
            },
            {
              type: "textarea",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Description",
                  forId: "asset-description",
                },
                area: {
                  type: "text",
                  id: "asset-description",
                  className: "",
                  name: "description",
                  value: {},
                  onChange: "",
                  placeholder: "Asset Description",
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
                  labelText: "Text",
                  forId: "header",
                },
                input: {
                  type: "text",
                  id: "header",
                  className: "header_blog",
                  name: "title",
                  value: {},
                  onChange: "",
                  placeholder: "Enter Text",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "file",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Attach Asset",
                  forId: "attach-asset",
                },
                input: {
                  type: "file",
                  id: "attach-asset",
                  className: "btn btn-info",
                  name: "cover",
                  onChange: "",
                  placeholder: "Attach Asset",
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "viewDocument",
        options: {
          action: "viewDocument",
          method: "post",
          text: "Link",
        },
      },
      {
        type: "viewDomain",
        options: {
          action: "link",
          method: "post",
          text: "Link",
        },
      },
      {
        type: "viewDownloader",
        options: {
          action: "link",
          method: "post",
          text: "Link",
          form: {
            type: "form",
            standard: "Standard",
            title: "Youtube Downloader",
            warning: "Go back to the main  ",
            description: "lets resolve it here",
            warningLink: {
              text: "page",
              to: "/xln",
              icon: "",
              show: true,
              external: false,
            },
            createAsset: "Click here if you ",
            createAssetButton: {
              text: "Buy Tokens",
              to: "/buyTokens",
              icon: "",
              show: true,
              external: false,
            },
            formData: {
              action: "downloadYoutube",
              method: "post",
              assetType: "Downloader",
              submit: {
                label: "Search",
                className: "btn btn-block btn-info",
                icon: "",
                action: "downloadYoutube",
              },
              fields: [
                {
                  type: "input",
                  attributes: {
                    label: {
                      error: false,
                      inverse: false,
                      show: false,
                      labelText: "Buy XLN",
                      forId: "youtube-downloader",
                    },
                    input: {
                      type: "text",
                      id: "youtube-downloader",
                      className: "",
                      name: "url_download",
                      value: {},
                      onChange: "",
                      placeholder: "Search or paste youtube link here",
                      disabled: false,
                    },
                    aria: {},
                  },
                },
              ],
            },
          },
        },
      },
      {
        type: "viewEnterprise",
        options: {
          action: "enterprise",
          method: "post",
          text: "Link",
        },
      },
      {
        type: "viewImage",
        options: {
          action: "image",
          text: "Image",
          method: "post",
          form: {
            type: "form",
            standard: "Standard",
            title: "Attach an Asset",
            warning: "Check various assets created by our ",
            description: "lets resolve it here",
            warningLink: {
              text: "asset",
              to: "/xln/create-asset",
              icon: "",
              show: true,
              external: false,
            },
            formData: {
              action: "attachAsset",
              method: "post",
              assetType: "Attach",
              submit: {
                label: "Attach Asset",
                className: "btn btn-block btn-info",
                icon: "",
                action: "attachAsset",
              },
              fields: [
                {
                  type: "file",
                  attributes: {
                    label: {
                      error: false,
                      inverse: false,
                      show: false,
                      labelText: "Attach Asset",
                      forId: "attach-asset",
                    },
                    input: {
                      type: "file",
                      id: "attach-asset",
                      className: "btn btn-info",
                      name: "cover",
                      onChange: "",
                      placeholder: "Attach Asset",
                      disabled: false,
                    },
                    aria: {},
                  },
                },
              ],
            },
          },
        },
      },
      {
        type: "viewLink",
        options: {
          action: "link",
          method: "post",
          text: "Link",
        },
      },
      {
        type: "viewLive",
        options: {
          action: "live",
          method: "post",
          text: "Live",
        },
      },
      {
        type: "viewMetaverse",
        options: {
          action: "metaverse",
          method: "post",
          text: "Metaverse",
        },
      },
      {
        type: "viewMusic",
        options: {
          action: "music",
          method: "post",
          text: "Music",
        },
      },
      {
        type: "viewRealEstate",
        options: {
          action: "realEstate",
          method: "post",
          text: "Real Estate",
        },
      },
      {
        type: "viewPodcast",
        options: {
          action: "podcast",
          method: "post",
          text: "Link",
        },
      },
      {
        type: "viewShop",
        options: {
          action: "shop",
          method: "post",
          text: "Shop",
        },
      },
      {
        type: "viewText",
        options: {
          action: "text",
          method: "post",
          text: "Text",
        },
      },
      {
        type: "viewVideo",
        options: {
          action: "video",
          method: "post",
          text: "Video",
        },
      },
      {
        type: "viewWebsite",
        options: {
          action: "website",
          method: "post",
          text: "Website",
        },
      },
    ],
  },
};

export const wallet = {
  infura,
  states: [
    "profile",
    "wallet",
    "authSetting",
    "authFileUpload",
    "walletStats",
    "walletShares",
    "walletAssets",
    "walletShareholders",
    "walletSeed",
    "walletSend",
    "walletSwap",
    "walletNinja",
    "walletReceive",
    "authPermission",
    "authCredential",
  ],
  options: {
    type: "grid-one-center",
    standard: "Standard",
    title: "",
    warning: "",
    description: "",
    content: {
      defaultText: "Authenticate Wallet to access Medallion XLN features.",
      errorText: "User denied accounts access!",
      images: {
        logo: {
          url: Logo,
          width: "200px",
          height: "auto",
        },
        noPhoto: {
          url: NoPhoto,
          width: "100%",
          height: "autp",
        },
        noProfile: {
          url: NoProfile,
          width: "100%",
          height: "autp",
        },
        profileSetting: {
          url: SettingProfile,
          width: "200px",
          height: "auto",
        },
      },
      walletPanel: [
        {
          text: "",
          url: "/xln/wallet/",
          icon: "fas fa-home",
          show: false,
          external: false,
        },
        {
          text: "",
          url: "/xln/wallet/stats",
          icon: "fas fa-chart-line",
          show: false,
          external: false,
        },
        {
          text: "",
          url: "/xln/wallet/assets",
          icon: "fas fa-folder-open",
          show: false,
          external: false,
        },
        {
          text: "",
          url: "/xln/wallet/setting",
          icon: "fas fa-user-cog",
          show: false,
          external: false,
        },
      ],
      walletFooter: [
        {
          text: "",
          className: "icon",
          url: "/xln/create-asset",
          icon: "fas fa-plus",
          show: false,
          external: false,
        },
        {
          text: "",
          className: "icon",
          url: "/xln/wallet/swap",
          icon: "fas fa-exchange",
          show: false,
          external: false,
        },
        {
          text: "",
          className: "icon",
          url: "/xln/",
          icon: "fas fa-user-ninja",
          show: false,
          external: false,
        },
        {
          text: "",
          className: "icon",
          url: "/xln/wallet/send",
          icon: "fas fa-arrow-up",
          show: false,
          external: false,
        },
        {
          text: "",
          className: "icon",
          url: "/xln/wallet/receive",
          icon: "fas fa-arrow-down",
          show: false,
          external: false,
        },
      ],
      newProfile: [
        {
          label: "Add Profile Picture",
          buttonText: "Update Profile Img",
          image: {
            url: NoProfile,
            width: "200px",
            height: "auto",
          },
          url: "/xln/wallet/file-upload",
          icon: "",
          show: true,
          external: false,
        },
        {
          label: "Add Social Media",
          buttonText: "Social Media",
          image: {
            url: SettingProfile,
            width: "200px",
            height: "auto",
          },
          url: "/xln/wallet/setting",
          icon: "",
          show: true,
          external: false,
        },
      ],
    },
    templateData: [
      {
        type: "wallet",
        options: {
          action: "wallet",
          method: "post",
          staticText: {
            text: "Wallet",
            followersText: "Followers",
            followingText: "Following",
            tokenSymbol: "XLN",
            usdSymbol: "USD",
            assetsOwned: "Amount of assets owned",
            shareholdersText: "Total shareholders",
            valueText: "Total value generated",
            btnLinkUrl: "/xln/buy-tokens",
            btnLinkText: "Buy More Tokens",
          },
        },
      },
      {
        type: "walletAssets",
        options: {
          action: "walletAssets",
        },
      },
      {
        type: "walletShareholders",
        options: {
          action: "walletShareholders",
        },
      },
      {
        type: "walletShares",
        options: {
          action: "walletShares",
        },
      },
      {
        type: "walletStats",
        options: {
          action: "walletStats",
        },
      },
      {
        type: "walletSeed",
        options: {
          action: "walletSend",
        },
      },
      {
        type: "walletSwap",
        options: {
          action: "walletSwap",
        },
      },
      {
        type: "walletNinja",
        options: {
          action: "walletNinja",
        },
      },
      {
        type: "walletReceive",
        options: {
          action: "walletReceive",
        },
      },
      {
        type: "walletSend",
        options: {
          action: "walletSend",
        },
      },
      {
        type: "authFileUpload",
        options: {
          method: "post",
          submit: {
            label: "walletFileUpload",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "authSetting",
        options: {
          action: "wallet",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "200px",
              height: "auto",
            },
          },

          submit: {
            label: "updateProfile",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "authPermission",
        options: {
          action: "wallet",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "200px",
              height: "auto",
            },
          },
          submit: {
            label: "Set Permissions",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "authCredential",
        options: {
          action: "wallet",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "200px",
              height: "auto",
            },
          },
          submit: {
            label: "setCredentials",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "profile",
        options: {
          action: "profile",
          method: "post",
          form: {},
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity,
              width: "600px",
              height: "auto",
            },
          },
          text: "Authenticate wallet",
          submit: {
            label: "profile",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
        },
      },
    ],
  },
};

export const whitepaper = {
  header: "Whitepaper",
  image: DownloadWhitepaper,
  description:
    "A whitepaper is an informational document usually issued by a company to highlight the features of a solution that it offers or plans to offer. Medallion XLN’s whitepaper will educate our community regarding the Digital Resource Management industry. Medallion XLN’s many use cases and implementations will be highlighted. Medallion XLN is creating a technology that has the potential to give birth to many new industries in a decentralized ecosystem. The whitepaper will provide our vision, values, implementation strategy, and provide a theoretical & practical approach to Asset Management.",
  options: {
    tableLabel: "Table Of Contents",
    sections: [
      {
        id: 1,
        title: "Definitions",
        image: {
          show: true,
          url: DownloadWhitepaper,
        },
        content: {
          list: true,
          details: [],
          lists: [
            {
              label: "Blockchain",
              isArray: false,
              content:
                "A system in which a record of transactions is made in cryptocurrency and is maintained across several computers that are linked in a peer-to-peer network.",
            },
            {
              label: "Smart Contract",
              isArray: false,
              content:
                "Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met.",
            },
            {
              label: "Decentralized Finance (Defi)",
              isArray: false,
              content:
                "Decentralized finance (DeFi) refers to the infrastructure, processes, and technologies used to democratize financial transactions.",
            },
            {
              label: "Non-Fungible Token (NFT)",
              isArray: false,
              content:
                "A Non-Fungible Token (NFT) is a non-interchangeable unit of data stored on a blockchain, a form of digital ledger, that can be sold and traded.",
            },
            {
              label: "Initial Coin offering (ICO)",
              isArray: false,
              content:
                "A process or event in which a company (especially a start-up) attempts to raise capital by selling a new cryptocurrency, which investors may purchase in the hope that the value of the cryptocurrency will increase, or to later exchange for services offered by that company.",
            },
            {
              label: "Assets",
              isArray: false,
              content:
                "A digital asset is anything that is stored digitally and is uniquely identifiable that organizations can use to realize value.",
            },
            {
              label: "Asset Management",
              isArray: false,
              content:
                "Digital Asset Management (DAM) is both a business process and an information management technology, which creates a centralized system for organizations to organize and access their media assets.",
            },
            {
              label: "Interplanetary File System (IPFS)",
              isArray: false,
              content:
                "IPFS is a peer-to-peer (p2p) storage network. Content is accessible through peers located anywhere in the world, who might relay information, store it, or do both. IPFS knows how to find what you ask for using its content address rather than its location.",
            },
            {
              label: "Artificial Intelligence (AI)",
              isArray: false,
              content:
                "The theory and development of computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.",
            },
            {
              label: "The Metaverse",
              isArray: false,
              content:
                "A virtual-reality space in which users can interact with a computer-generated environment and other users.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Introduction",
        image: {
          show: true,
          url: CityAds,
        },
        content: {
          list: false,
          details: [
            "With the advent of the internet, individuals were able to participate in a wide range of activities. This also gave huge organizations the option to use such activities to figure out the best way to market to new and existing clients. In some ways, this is beneficial to us because we receive adverts that are tailored to our preferences. Of course, the emotion of being violated is the polar opposite. Without our permission, our data is collected. Worse, someone else profited off our data without compensating us. Is it possible to blame them? There is no infrastructure in place to allow those firms to follow us down and compensate us for our data.",
            "Medallion XLN is developing a programmable Blockchain that will allow users to assetize any types of data generated by them. Users will be able to monetize and secure their data thanks to this simplified method. Permissions must be established on each asset, allowing developers to define who has access to the data. Permissions could be a means to keep such information secret or allow collaboration with other individuals while ensuring that everyone gets paid for their work. Through layer 2 scaling, Medallion XLN aims to expand the essential concepts of the Blockchain, such as security and decentralization. We act as an App Marketplace / Component Library, allowing users to access decentralized assetized data from any platform. The reusable components are completely equipped with features that enable the assets to be fully monetized, distributed, and interoperable across any platform.",
          ],
          lists: [],
        },
      },
      {
        id: 3,
        title: "Hypothesis",
        image: {
          show: true,
          url: ChessAvatar,
        },
        content: {
          list: false,
          details: [
            "Throughout the internet, many monetization models have been created. In the beginning, many fortunes were made with the E-Commerce model. Many websites became popular by selling their goods and services online.  Platforms such as Amazon and eBay became trusted marketplaces for sellers to find buyers. PayPal created a trusted intermediary to process payments between sellers and buyers. The next monetization model was advertising. As blogs became more popular, Advertisers paid pennies to bloggers per each user they reached. They paid even more per user for conversions. Popular blogs were able to generate thousands of dollars per post. Then platforms like Myspace & Facebook came along and redefined what a blogging site was supposed to be. These platforms created user account sites with millions of accounts that they were able to expose to a variety of advertisements, then receive millions in revenue. The advertising model evolved even further. Instead of showing every advertisement to every account, why not show only relevant advertisements to each account based on their interests? That is the current state of the advertising model. The Subscription model, popularized by Netflix and movie streaming apps, has gained popularity in recent years. Transitioning from just streaming apps to monthly loot boxes and business services. A new wave of online businesses has been leveraging the subscription model to create consistent monthly income by offering monthly services.",
            "Medallion XLN creates a brand-new monetization model that secures user-generated data as an asset (NFT). I hypothesize that linking each user-generated action to the core person’s digital representation (NFT avatar) will create a brand-new monetization model. The NFT avatar is interoperable within all user interfaces such as the web, mobile, and the metaverse. As the user interacts online as normal, each interaction is converted into an asset that the user can then sell to interested parties. Creatives who seek to monetize their content can create that content as an asset, whether that be Images, Videos, Audio, Text, Metaverse 3D objects, or an entire app. Each asset will always be owned by the user who created it. The owner of the asset will sell a collection of shares in the asset. This means assigning a value to the asset, then establishing the number of available shares. Once all the shares are bought at the base price, the shareholders in the asset can resell those shares at a higher price. The minimum requirement is that the owner of the asset always receives their portion of the resale.  This creates a decentralized marketplace around each asset, and the true value of the asset will be determined by the market. The owner sets permissions on the asset that determines how it can be accessed, promoted, or resold by the shareholders. The permissions also determine if the asset can be merged with other assets owned by different users to create a complex asset. This means a video asset merged with an audio asset. When multiple assets are merged, the permissions set determines how the funds from the sale of the complex asset are distributed. For example, owner A creates a video asset and then sets the distribution permission to 35%, owner B has an audio asset with a 20% distribution fee, and owner C has image assets set at 15% each. A new user comes along and wants to merge owners A, B & C’s assets to create a new complex asset. When this new complex asset is sold, whatever value was set on the asset will be distributed to all the dependencies (A, B & C) based on the distribution permission that was sold. Whatever percentage is left over after being distributed will go to the creator of the complex asset.",
            "This is the brand-new monetization model that Medallion XLN is pioneering. Everything else as far as the Metaverse…etc are applications of Medallion XLN’s core technology listed above.",
          ],
          lists: [],
        },
      },
      {
        id: 4,
        title: "Abstract",
        image: {
          show: true,
          url: CTAContact,
        },
        content: {
          list: true,
          details: [
            "Medallion XLN develops a Blockchain dedicated solely to asset management. That is, intellectual property is always owned and monetized by the creator, who has sole authority over who gets access to it. Medallion XLN understands that data need its transaction ledger, so huge organizations aren't the only ones who can profit from their customers' online actions. As the internet evolves and new ways of connecting with others emerge, it is becoming increasingly necessary for individuals to have control over their online actions.",
            "For the first time in history, Medallion XLN's programmable blockchain allows users to genuinely own their data. Access to the asset will be given once the permissions defined by the asset's owner have been met. Shifting control from Big Data tech corporations to the asset's owner. The amount of market share Medallion XLN can grab from giant IT businesses will reveal the genuine usefulness of Blockchain's decentralization philosophy.",
          ],
          lists: [
            {
              label: "Data ownership",
              isArray: false,
              content:
                "Medallion XLN aims to provide individuals, groups, companies and corporations the ability to own and monetize every aspect of their data. Tools are built with the intention of providing full control of who can access this data, how it will be shared and if other users can collaborate with that data.",
            },
            {
              label: "Monetization",
              isArray: false,
              content:
                "Adam Smith’s Wealth of Nations asserts that value is derived by the amount of effort required in developing a product from inception to customer. Content creators put an unlimited amount of effort into producing videos, text and images to provide entertainment for the internet only to put it out for free. According to the founder of capitalism, these digital products should be viewed as assets and therefore be monetized in a way that rewards the creator for the amount of effort that was put into its development.",
            },
            {
              label: "Collaboration",
              isArray: false,
              content:
                "In an effort to remain consistent to the internet’s favorite past time of collaborating with each other. Medallion XLN protocol provides collaboration as a built in feature. Users love to collaborate and create massive impact with their efforts so it makes sense to have that feature when creating assets. Content creators can collaborate with each other and determine how incoming funds are split.",
            },
            {
              label: "Interoperability",
              isArray: false,
              content:
                "The promise of web3 is to become entirely decentralized from platforms. Currently that is being demonstrated with extensions such as metamask that store your data then provides verification and authentication to other apps when necessary. Medallion XLN’s goal is to provide a similar experience with digital assets. If any user ops out of paying a creator then they simply will not see that creator’s work. When enough creators participate in this system, eventually the only way to access creator content will be by paying for it. As long as the content is priced in a reasonable enough way, then both users and creators will work and profit together in symbiosis.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Our Unique Approach",
        image: {
          show: true,
          url: SecuredAsset,
        },
        content: {
          list: true,
          details: [
            "Medallion XLN is divided into two halves. The central company and the decentralized community. The core company is working to extend the decentralized community's options. The main company functions similarly to a regular software firm, with employees and departments hired to build the app, lead marketing, form alliances, and acquire companies that offer various benefits. The decentralized community will have access to all of the core company's tools and resources, as well as complete autonomy over how they use those tools and resources to achieve their particular goals.",
            "The reasoning behind this kind of company structure is to be able to scale and compete with the top tech companies in the world, while simultaneously giving the decentralized community access to the tools we build. This may be a controversial opinion, but most fully decentralized blockchains fail within a short period. They lack the resources and organization needed to make important decisions and move fast to take advantage of incoming opportunities. Various personalities get involved in a power struggle and ruin the movement for everyone. Medallion XLN is akin to Bitcoin in the early days, Satoshi Nakamoto had to stick around for a few years to coach the decentralized community to understand the technology before they could understand the power of Bitcoin. Ethereum’s founders continue to steer the direction of its development. To guarantee success, Medallion XLN at least for the near future must have a leadership team, that opens doors and breaks down barriers to better foster innovation and growth within our decentralized community. The employees we hire must get paid a salary, receive healthcare, and various other amenities to enable us to move fast and break things than fix them again. The reason why information moves so fast currently is because Big Tech has been directly investing in the infrastructure of the web; buying servers, and replacing old wires with fiber optic cables so that data can move faster. The core company is responsible for building an infrastructure around asset management by all means available to us.",
            "Medallion XLN seeks to empower our decentralized community to build use-cases for themselves. The core company is responsible for building tools as various components that the decentralized community can use and apply to any goal that they have",
            "The only way to achieve our true vision for decentralization is to make it as easy as possible for many people to build their vision. There are so many talented painters, sketchers, graphic designers, video editors, directors, writers, and poets who simply do not code. Their contribution should not be invalidated, and therefore all components are created with accessibility in mind. Each component will be built similar to a Content Management System (CMS), that allows users to create and manage their assets from a User Interface (UI). The App Marketplace is designed to receive contributions from coders who have a vision for Medallion XLN, that the core team has not developed. While the core company builds the Blockchain, Smart Contracts, AI models, and various customizable UI components. The decentralized community will take those tools and build everything else. We provide extensive documentation that will allow the community to build their use case or combination of use cases, then instantly monetize it to the decentralized community. In the Web2 generation, many developers built amazing tools that were leveraged by billion-dollar corporations to earn great sums of money. These developers never received any compensation for their contribution, not even a “Thank- you” letter. Medallion XLN’s App Marketplace guarantees that the contributions made by developers in our community will be compensated and inherently be scaled to reflect the component’s usage. Another function that the core Medallion XLN company provides is to build on-ramps to traditional media outlets. For example, paying for the fees required for Sun dance so that filmmakers in the Medallion XLN community can have their films viewed by a mainstream audience. Paying for various radio stations to play songs from the Medallion XLN community. Paying fees for Art Galleries to feature the work of Medallion XLN artists. We seek to build leverage, then use that leverage to decentralize every aspect of the traditional media market.",
            "We'll go into more detail about our expansion strategy later, but we plan to conduct conferences, fashion runway displays, concerts, and other public events that involve a large number of decentralized community creators. The decentralized community will have the chance to own and create franchises as Medallion XLN grows. The primary corporation will establish a network of Metaverse Arcades & Cafés in the world's most populous cities. The community can then develop franchise concepts for their unique franchises, which the core firm can then develop. Medallion XLN plans to enter every traditional market conceivable over time.",
          ],
          lists: [],
        },
      },
      {
        id: 6,
        title: "Values",
        image: {
          show: true,
          url: SurfApps,
        },
        content: {
          list: true,
          details: [],
          lists: [
            {
              label: "Decentralization",
              isArray: false,
              content:
                "Ownership and Access for Everyone! Medallion XLN wants to make it as cheap and easy as possible to own your data and invest in the data of others. As we flourish as a community, we will empower each other to accomplish our hopes and dreams. As the core company builds new applications & components, we encourage the decentralized community to change the logos and color schemes, then use them to accomplish whatever goal they have in mind.",
            },
            {
              label: "Data ownership",
              isArray: false,
              content:
                "Medallion XLN aims to provide our decentralized community with the ability to own and monetize every aspect of their data. Tools are built to provide full control over who can access this data and how it will be shared, and if other users can collaborate with that data. Web2 was defined by what Tech Companies could do with your data, Medallion XLN will define Web3 by what each person can do with their data.",
            },
            {
              label: "Monetization",
              isArray: false,
              content:
                "Adam Smith’s Wealth of Nations asserts that value is derived from the amount of effort required in developing a product from inception to customer. Content creators put an unlimited amount of effort into producing videos, text, and images to provide entertainment for the internet only to put it out for free. They rely on the advertising model to provide pennies for monetization. According to the founder of capitalism, these digital products should be viewed as assets and therefore be monetized in a way that rewards the creator for the amount of effort that was put into its development.",
            },
            {
              label: "Collaboration",
              isArray: false,
              content:
                "To remain consistent with the internet’s favorite pastime of collaborating. Medallion XLN protocol provides collaboration as a built-in feature. Users love to collaborate and create massive impact with their efforts, so it makes sense to have that feature when creating assets. Content creators can collaborate and determine how incoming funds are split without ever knowing the person they are collaborating with.",
            },
            {
              label: "Interoperability",
              isArray: false,
              content:
                "Web3 promises to become entirely decentralized from platforms. Currently, that is being demonstrated with extensions such as Meta Mask & Wallet Connect that store your data and then provide verification and authentication to other apps when necessary. Medallion XLN’s goal is to provide a similar experience with digital assets. Imagine owning a profile picture (pfp) that can be imported into any metaverse, with a set of preprogrammed moves and abilities exclusive to only your profile picture. If any user ops out of paying a creator, then they simply will not see that creator’s work. When enough creators participate in this system, eventually the only way to access creator content will be by paying for it on Medallion XLN. As long as the content is priced in a reasonable enough way, then both users and creators will work and profit together in symbiosis.",
            },
            {
              label: "Censorship Resistance",
              isArray: false,
              content:
                "A free society needs the ability to think freely. There cannot be a centralized authority determining what is “Right Think” & “Wrong Think”. This of course is a double-edged sword because there are people who have ideas that a large portion of society believes are extremely dangerous. Ideas such as Racism, Nazism, and committing mass genocide. Although these ideas only represent a small portion of the population, these ideas can influence others to commit horrendous acts of violence. Therefore, it makes sense to give that power to censor individual content to the community. The community can filter content they individually find annoying for their taste or report it and the community can decide if they want to de-prioritize the content to the lowest value, which will make it extremely hard to find. We can’t completely delete it because the data is persisted on the blockchain. I think this is an honest conversation that needs to be had because No-Censorship can be just as harmful as censorship, so there should be a way for people to filter out what they are not comfortable being exposed to.	",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Overview",
        image: {
          show: true,
          url: AssetSecurity,
        },
        content: {
          list: false,
          details: [
            "Let us trace our forebears via significant events in the Blockchain space to better understand Medallion XLN and the challenge we tackle. Satoshi Nakamoto published the Bitcoin Whitepaper in October 2008, and the Bitcoin Blockchain was launched on January 3, 2009. The technology changed banking by creating a tamper-proof decentralized ledger with a monetary application. Ethereum was the next great step in the Blockchain sector, building on the key functionalities of Bitcoin while also allowing users to build smart contracts. Since Ethereum’s launch of Smart Contracts, they have been used to create a variety of industries such as Defi, Non-Fungible Tokens, identity management, and Initial Coin Offerings. Ethereum and its many applications have a tremendous impact on many people’s lives. Although, the Achilles heel of Ethereum is the ability to only perform 15 transactions per second. This limitation presents a challenge as demand grows. Fortunately, Ethereum will be updating their Layer 1 to use a Proof Of Stake consensus mechanism that shards . As of the writing of this Whitepaper, it remains to be seen how successful that effort will be.",
            "Ethereum is a robust juggernaut that does it all, which presents a problem. Its many use cases provide a bottleneck for industries that want to focus on one thing. Medallion XLN’s focus is on decentralized Asset Management on a programmable Blockchain. Particularly empowering users to securely track their assets across various applications. Our unique advantage is our focus on allowing creators to monetize their assets without trusting anyone else, set permissions on what can be done with that asset, and compound the asset with other assets to create complex assets. This idea is so important because billion-dollar corporations have been built on the backs of the data they receive from our daily online interactions. This use of our data would be tolerated if the creators received a portion of the money generated from their activities. Tech giants continue to be greedy and expand themselves at a ferocious rate. Who can blame them? Similar to oil barons of the Industrial Revolution, as long as there is oil in the ground, they will drain the land dry. The oil is a metaphor for your data. Medallion XLN reverses this trend by building a Smart Chain that allows us to track, secure, and monetize our data. Medallion XLN allows us to choose who gets access to our various activities. Who can view your content such as images, videos, blog posts, etc., monetizing these interactions through each stage of its lifecycle? Medallion XLN views all our interactions online as individual assets.",
          ],
          lists: [],
        },
      },
      {
        id: 8,
        title: "Utility",
        image: {
          show: true,
          url: AssetSecurity2,
        },
        content: {
          list: true,
          details: [
            "Medallion XLN’s asset management on a programmable Smart Chain has many use cases. Initially, Medallion XLN aimed to create a monetization solution for movies. The idea was to track all personnel involved in creating the movie; actors, cinematographers, directors, scriptwriters, etc. Then create a process that allows the viewer to access the video only once they have bought a share in the video for an amount that would be distributed to the creators of the film. This idea is revolutionary, but why stop at movies when all asset types could benefit from having access to this kind of infrastructure? This section maps out how the various asset types will be monetized on Medallion XLN.",
          ],
          lists: [
            {
              label: "Monetize Text",
              isArray: false,
              content:
                "The most prevalent asset type for daily use is by far text. Text is used for blogs, social media posts, and all kinds of content. There are instances where users create a new phrase and want to create an exclusive pipeline to access it. Medallion XLN provides a way to monetize quotes, poetry, blog post, font types...etc. The text provides advertisers with a way to parse out your interests and hobbies so that they can develop a strategy to sell stuff to you. By securing access to text, we enable users to control & monetize the concepts they type. Quotes are what could benefit the most from monetization. Web2 users see a barrage of quotes on their timelines, which are sometimes not from the person it says it’s from. More so, because of how viral quotes can be, an opportunity is created where users can monetize their quotes and create a direct reference point to the person who said the quote.",
            },
            {
              label: "Monetize Images",
              isArray: false,
              content:
                "A picture is worth a thousand words. Many photographers & artists have no recourse when their art is saved off the internet. Many artists put hours into rendering their work only to have it swiped. Not even the NFT market could solve this problem. Although the NFT feature on many blockchains gave their work a unique address on the blockchain that could be monetized, the image asset itself could still be downloaded without the artist’s consent. Medallion XLN is built exclusively to secure a creator’s image assets in a way that cannot be saved or screenshot.	",
            },
            {
              label: "Monetize Blogs",
              isArray: false,
              content:
                "Blogs are significant because they mark the start of the web 2.0 infrastructure. MySpace, Twitter, Facebook, and Tumblr would not exist without blogs. Monetization is a problem that all blogs face. Subscription models for blogs, such as Medium and Substack, have emerged in recent years. The main problem is that these models need you to focus your content on a brand that you don't control. Medallion XLN is a decentralized system that lets you monetize your blogs without having to centralize your material on another site, thereby diluting your brand.",
            },
            {
              label: "Monetize Videos",
              isArray: false,
              content:
                "Videos on the internet are a product of the 2010s; previously, videos required too much bandwidth to be transmitted on antiquated infrastructure, resulting in unending buffering for the viewer. Nonetheless, YouTube monetization has improved online video viewing, and we can now all watch buffer-free videos. As a result of this medium, 'influencers' and 'content creators' with large followings arose. Their best case scenario for monetizing their work right now is to earn a piece of the ad money that YouTube provides to continue generating content. This material must adhere to an ad-friendly limitation, which limits the ability of the content producer to express their creativity. To monetize private videos, the content creator must rely on third-party platforms such as Patreon and monthly subscribers. Medallion XLN's protocol is designed to take advantage of network effects, maximizing both follower numbers and the possibility to monetize content while also avoiding censorship.",
            },
            {
              label: "Monetize Music",
              isArray: false,
              content:
                "The 2010s were an interesting decade for music. Piracy was at an all-time high and record labels were hemorrhaging album profits. The ringtone era was coming to a close, and the music industry needed a way to fight piracy. Apple’s iTunes store had been going strong for the previous decade and gave audiences a way to legally download music for $0.99 to $1.50 but that wasn’t enough. The solution presented itself when the Spotify streaming service began to blow up in the west and started to onboard more and more artists, giving them a way to monetize their music. Spotify’s model was not to sell the song for a download but to store the song on their platform and charge the user each time they listened to it as a stream. This strategy did work to curb piracy by presenting a solution that was low-cost enough to allow a consumer to enjoy all the songs they wanted legally. It also gave musicians a direct way to monetize their songs. Fast-forward to a decade later and many musicians are not happy getting paid only $0.003 per stream while an NFT.jpeg sells for millions of dollars. This presents an opportunity for Medallion XLN to provide musicians with a better deal, and siphon disgruntled artists to the decentralized asset management platform that has an infrastructure built specifically for monetizing digital assets.",
            },
            {
              label: "Live Events",
              isArray: true,
              content: [
                {
                  image: Stadium,
                  type: "tools",
                  content: [
                    "There are two key elements to consider when it comes to concerts, sports, and performances. The first step is to define who has access to the event or tickets in person. The other option is to watch the live event from a different place and time. Live events are a snapshot of a specific point in time. The use case using Medallion XLN as a ticket aims to allow user wallets to only authenticate during the time of live events. Attendees can resell their experience as an asset after the event. To develop an ecosystem around the main event, attendees tag every asset they make during that period with the main event's tag. Every transaction that occurs as a result of the event will result in a charge being paid to the event's owner.",
                  ],
                },
              ],
            },
            {
              label: "Metaverse",
              isArray: true,
              content: [
                {
                  image: PulpFiction,
                  type: "tools",
                  content: [
                    "What is the Metaverse? The latest Silicon Valley buzzword is a merger of core technologies advanced in the previous decade. It is a combination of the Internet Of Things, Artificial Intelligence, Blockchain, Augmented Reality, Virtual Reality, 5G & Moore’s Law. The metaverse isn’t just a buzzword, it is the inevitable evolution of the internet. It’s more than NFTs and VR goggles, it’s the shift in how we communicate using technology. Moore’s Law guarantees that technology will continue to get smaller and more powerful. What looks like a Janky headset today becomes Ray-Ban sunglasses tomorrow and contact lenses the day after. The role Medallion XLN plays in this industry will be securing and monetizing user assets. Medallion XLN is a decentralized pipeline that allows users to access their assets from any platform or interface. We plan to streamline the ability for a user to access the same asset from various metaverse platforms. Build assets once and reuse them in different interfaces or sell shares in those assets to other users to use as an avatar, clothes, or a weapon.",
                  ],
                },
              ],
            },
            {
              label: "Real Estate",
              isArray: false,
              content:
                "The intersection of the physical world and the metaverse will merge into a singularity as the Metaverse expands. What you purchase in the metaverse will be implemented in your everyday life. The real estate market, in particular, will be impacted. Several persons can band together to form a single organization; buy a building and then rent out each flat. All shareholders will be credited with an agreed-upon amount each time the tenets make a payment. Medallion XLN has the potential to distribute assets among several shareholders by default. The land will be purchased in the actual world as it is in the metaverse. We intend to create a user interface that will provide deeds, contractors, real-world bids, and time estimates for any design that will be built in the real world.",
            },
            {
              label: "Synopsis",
              isArray: false,
              content:
                "In all of the above scenarios, there is always an interaction between the owner, his asset, and the interested party. The owner never loses ownership of his asset, but grants access to it by selling shares. The share bought by the interested party allows them to access the asset and, depending on the permissions set by the owner, combine the asset with another asset. For example, if the owner is a musician, the interested party could want to incorporate the music asset into a painting as background music. The shareholder that buys this new complex asset would have to pay the sum of the musician & painter’s assigned value of each asset. The permission the owner sets on his asset determines if, when his asset is included in a complex asset, whether to distribute payment evenly to all parties or a pay agreed upon portion to each party. Different use cases for various scenarios.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "Go To Market Strategy",
        image: {
          show: true,
          url: GuardDog,
        },
        content: {
          list: true,
          details: [
            "The first users, Medallion XLN will target are users who are already familiar with Non-Fungible Tokens (NFT). NFT collectors are already familiar with the technology and can easily transition to the Medallion XLN use case. They can bring their already existing NFTs to life with our Artificial Intelligence, which will convert them.JPEGs into fully interoperable 3D.GLF files that can be used in participating metaverse. On launch, Medallion XLN will have 40,000 mintable NFTs over 12 months. 10,000 NFTs every 3 months and 4 Virtual reality worlds are distributed once per quarter. ",
            "The next phase will roll out the Medallion XLN monetization model to influencers and content creators.  This target audience is the necessary bridge between NFT enthusiasts and a wider mainstream audience. The app marketplace can give users access to platforms similar to YouTube, Spotify, Blogs, and various metaverse objects and environments. This portion of the Go To Market strategy will set up online workshops facilitated through our substack that demonstrate how to leverage Medallion XLN’s new monetization model to benefit their duties as influencers. We need to reach a threshold with content creators where they start creating content on their onboarding of other creators. Once we reach that goal then we can move on to the next goal of onboarding businesses.",
            "The main selling point for businesses to use Medallion XLN is its ability to secure their intellectual property. Many organizations need an interface that allows them to easily generate and securely distribute access to their intellectual property. Medallion XLN’s Blockchain is dedicated solely to asset management. That is, intellectual property is always owned and monetized by the owner, who has sole authority over who gets access to it. Many institutions could leverage this technology to organize their assets in a highly secure way. They could also unsubscribe from expensive monthly fees from cyber security firms and completely secure their assets on Medallion XLN decentralized interface. Our robust app marketplace is another selling point. Businesses that choose to secure their assets on Medallion XLN can take advantage of the security tools built by the App Marketplace and opt in and out of software that leverages the core technology in innovative and trendy ways.",
          ],
          lists: [],
        },
      },
      {
        id: 10,
        title: "Token Metrics",
        image: {
          show: true,
          url: CTAContact,
        },
        content: {
          list: true,
          details: [
            "Name: Medallion XLN",
            "Symbol: XLN",
            "Total Supply: 5,444,444,671",
          ],
          lists: [
            {
              label: "Token Supply",
              isArray: false,
              content:
                "Medallion XLN prioritizes scalability and accessibility. We intend to become a top 10 market leader in the Blockchain Asset Management space. We never want the token to be too expensive to afford because the token is necessary to interact with the smart contract. As of the writing of this whitepaper, the number 10 positioned cryptocurrency is worth $11B which will make each XLN token worth only $2.00. Overtaking Ethereum will be a monstrous effort and probably unrealistic, but number 3 is achievable. The current number 3 position at the moment is worth $75B which will make each XLN token worth $13.00 each which is still affordable to the masses.",
            },
            {
              label: "ICO Overview",
              isArray: false,
              content:
                "Initial funds will be raised by ICO. 70% of the token supply will go towards the crowdsale while 30% will be retained by Medallion XLN to be used for funding. Medallion XLN’s portion of the crowdfund will be distributed 10% for the founders as a sign on bonus and to acquire top tier talent. The other 20% will go toward funding the company. Company funds will be divided by Executives and Technology. The Executive fund is used by the company to hire team members, acquire property and supply the needs of each department. The technology fund will be used to set up an effective technology and engineering department and buy equipment for the whole company. Key checkpoints include hiring a systems architect, 1 staff engineer, 3 frontend engineers, 3 backend engineers, 2 solidity developers, 1 quality assurance engineer & 2 Extended Reality Specialist. A portion of Technology funds will be set aside to acquire failing companies with complementary technology, subscription services that will speed up development & partnerships with complementary brands.",
            },
            {
              label: "ICO breakdown ",
              isArray: false,
              content:
                "Investors in the ICO will receive 30% of the total supply distributed to their wallets. Another 30% will be distributed to the War Chest. The War Chest will be used to acquire the necessary pieces to fully implement our vision for Medallion XLN. This includes securing an HQ, hiring employees, buying equipment, and more. The Liquidity portion is a pool of tokens that are locked in the ICO smart contract. The pool enables cryptocurrency trading by providing users with liquidity. The Founders got us to this point, this portion of the ICO rewards the people who put their sweat equity into helping build Medallion XLN to get to the point where we have enough infrastructure in place to start fundraising. The Team portion funds the vital departments in the company such as the Executives department which builds out the vision. The operations department applies constructs to allow the company to run more efficiently. The Acquisitions onboard companies onto Medallion XLN’s infrastructure so that they can secure their intellectual property rights. The technology builds our infrastructure for the User Interface, Blockchain, Artificial Intelligence & Metaverse. The Blockchain, Artificial Intelligence, and Metaverse are subsets of the Technology departments that require their funding to hire a specialist in those areas. The Marketing department is responsible for raising awareness about Medallion XLN in all forms of media. The Programs department structures organize and track all of Medallion XLN’s initiatives. The Finance department handles payroll, budget, and all documents required to stay compliant. The Advisors portion is set aside for everyone who invested monetarily in Medallion XLN and allowed us to get on our feet before the ICO.",
            },
            {
              label: "Team Members",
              isArray: true,
              content: [
                {
                  image: CEO,
                  type: "team",
                  content: [
                    "Dwayne Campbell, Chief Executive Officer CEO will define Medallion XLN’s overall vision, technology, user & client acquisition strategy. Dwayne will work with Executives to build each department most optimally and has the final say on all major company decisions. Dwayne manages the Executives and is responsible for providing them with the information and resources they need to best run their departments. Dwayne has over a decade of experience as a serial entrepreneur and senior software developer at various technology organizations and has been working on the vision for Medallion XLN for 5 years.",
                    "Compensation: $250,000 + 20% of Founders portion in ICO Manages access to Executive Initiatives & all company funds",
                  ],
                },
                {
                  image: COO,
                  type: "team",
                  content: [
                    "Allan, Chief Operation Officer (COO) receives the vision of the CEO and breaks them down into strategic achievable goals. Allan will be involved in all aspects of the company’s operation and will build constructs to improve the efficiency of each department. Allan has over 3 decades of experience working in the financial industry. His perspective will be key in building the infrastructure needed for our startup to IPO.",
                    "Compensation: $240,000 + 10% of Founders portion in ICO Co-manages access to Operations fund with CEO",
                  ],
                },
                {
                  image: XPO,
                  type: "team",
                  content: [
                    "Ana Guilbert, Executive Program Officer (XPO) oversees the planning and implementation of the entire organization. Ana’s responsibilities include budgeting, hiring team members for each department, sourcing suppliers, and planning each product release.",
                    "Compensation: $240,000 + 10% of Founders portion in ICO Co-manages access to Programs fund with CEO",
                  ],
                },
                {
                  image: CTO,
                  type: "team",
                  content: [
                    "GK, Chief Technology Officer (CTO) Meet GK our CTO | ex PayPal, ex eBay, he has more than a decade of experience in building core technologies and shipping stellar user experiences to millions of users. GK holds a BS and MS degrees in Computer Science. Based out of San Francisco Bay Area, when he is not in a Nerd mode, he spends time with his friends and family. GK leads the technology & engineering department. GK develops policies & procedures that allow our company to scale exponentially on mobile, web & XR platforms. His department will be building tools for both internal and external use. Gaurav has been a lead engineer at top payment companies such as eBay, Paypal & Venmo for over 15 years.",
                    "Compensation: [salary TBA] + 19% of Founders portion in ICO Co-manages access to Technology fund with CEO",
                  ],
                },
                {
                  image: CBO,
                  type: "team",
                  content: [
                    "Chief Blockchain Officer (CBO) works under the CTO to carve out a strategy for Medallion XLN’s token, smart contracts & blockchain. Seeking a visionary to fill this role. Someone that can predict emerging trends and position Medallion XLN to reap the rewards before our competition.",
                  ],
                },
                {
                  image: CAO,
                  type: "team",
                  content: [
                    "Gary Robinson, Chief Acquisitions Officer (CAO) leads the client acquisitions department and will be the first friendly face company that extends Medallion XLN’s features will interact with. Gary is responsible for leading a department that onboards as many companies as possible & maintaining that relationship. Gary has been a sales & customer service specialist for over 30 years.",
                    "Compensation: $240,000 + 10% of Founders portion in ICO Co-manages access to Acquisitions fund with CEO",
                  ],
                },
                {
                  image: XRO,
                  type: "team",
                  content: [
                    "Ptah “ArtCrazy” Quammie, Extended Reality Officer (XRO), Head photographer Ptah Quammie established ArtCrazy Photography in the early summer of 2010. Since then ArtCrazy has expanded its reach to Las Vegas, Miami, New York, California, the Caribbean, and abroad, to produce some of the most innovative concepts in photography. While providing a full range of photography needs, ArtCrazy and its affiliates have expanded to provide a full spectrum of media production including professional video and editing services. ArtCrazy specializes particularly in fashion editorial, artistic nudes, swimsuits, and portfolio development. Whether you are a newcomer to modeling or a seasoned vet, ArtCrazy will reshape and redefine you. Medallion XLN’s main selling point is asset ownership. XRO will work with CTO to design a Metaverse concept that allows various user-owned assets to be integrated into a Metaverse space.",
                  ],
                },
                {
                  image: CMO,
                  type: "team",
                  content: [
                    "Chief Marketing Officer (CMO) Kushner Sophia, an American entrepreneur who was born and raised in Canada, I am one of many entrepreneurs who has taken her talents to the digital space by minting and selling non-fungible tokens, or NFTs, on digital marketplaces. Before minting and selling non- fungible tokens I also have a career in crypto where back in 2020 I started my ROI (Return on investments) the success rate was 90% for myself and others who invested and has moved further up to hold coins on Public. Kushner Sophia is a principal body under Arenalive a United Kingdom-based company charged with promoting economic programs and national public-private partnerships to advance innovation and entrepreneurship.",
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        id: 11,
        title: "Blockchain Tokenomics",
        image: {
          show: true,
          url: CTAMission,
        },
        content: {
          list: true,
          details: [
            "Medallion XLN leverages StarkNet’s Layer 2 ZK-RollUp to achieve fast transaction speeds and interoperability. StarkNet is a permissionless decentralized ZK-Rollup operating as an L2 network over Ethereum, where any dApp can achieve unlimited scale for its computation, without compromising Ethereum’s composability and security. Medallion XLN builds an asset management system using a Blockchain that specifies if the transaction is transferring assets or value. The asset creation process requires the owner of the asset to upload the file or data which will be tracked and stored on the IPFS (Interplanetary File System). The user will then assign a value and set various permissions on the asset that will determine what shareholders of the asset can do with it before submitting the transaction. This setup will track the address of the owner and assign the asset its address. Users determine the value of their assets based on personal perspective, but Medallion XLN can provide data on what the average asset is selling for. From this point, only users who pay the value of the asset can access the asset in various use cases.",
          ],
          lists: [
            {
              label: "Smartchain",
              isArray: false,
              content:
                "Medallion XLN’s smart chain aims to provide an interface that allows multiple ways to monetize an asset. A core feature of the smart chain will be to compound assets or allow unique assets to depend on each other. For example, a video asset can use a music asset as the background sound, but when the video is accessed, both asset owners will receive payment. Owners can set the permissions on their assets to determine how that asset should be compounded. Building complex assets that use a variety of assets as dependencies is the optimal use case for Medallion XLN’s smart chain. It’s not enough to monetize an asset but to reach an asset’s max potential value by encouraging collaboration with other assets. When a complex asset is created, the sum of all the asset values will be the price of the new asset, allowing all owners to be paid. Another option if the aim is to prevent the price of the asset from getting too expensive is to set the permissions on each asset to take a percentage of the overall value, ensuring flexibility on how users can monetize. An interested user can purchase their desired asset, which will send an offer to the owner, who will accept or decline the offer. The accepted offer will initiate the transaction, which will then be submitted to the blockchain, and the interested user will become a shareholder in the asset. The rejected offer will be discarded. The status of “shareholder” is given to the new owner of a share in the asset which will allow the shareholder to promote, and compound that asset with other assets if the asset owner’s permission allows it. The shareholder can even resell his share at a higher price than that of the owner’s original price, as long as the owner can receive the value he expects on every transaction.",
            },
            {
              label: "Fee Structure",
              isArray: false,
              content:
                "On each transaction, there will be a 3% fee that goes towards the development, management & promotion of the Medallion XLN network, which includes 1% that will be distributed to all the shareholders in the purchased asset. The other 97% gets paid to the owner of the asset. In the scenario where the asset has many dependencies, the 97% will be distributed based on the designated percentage for each dependent. In each transaction, 97% of the price paid will go to the owner or group of dependents and 3% will go towards the fee. The fee will be split, with 1% going to all the shareholders in an asset & 2% that goes toward administration. When the transaction does not include an asset transfer, the 1% goes toward a supernode & master node pool that incentivizes the security and promotion of the network by rewarding the top users. The admin fee is divided by a development pool which receives 0.75%, a management pool receives 0.75%, a promotion pool 0.25% & acquisition pool 0.25%. Development is responsible for the development & maintenance of the infrastructure both online & in the real world. The development pool goes towards developers, project managers, workspaces & contractors. The management pool goes toward maintaining & recruiting management staff. A promotion pool is used to incentivize the marketing of the Medallion XLN Smart Chain by the main company & decentralized community. The acquisition pool is used to help further build out features that are popular with the decentralized community. This means that if Medallion XLN finds a huge community in gaming, then we will put resources towards expanding that community which could include hosting game tournaments with grand prizes.",
            },
            {
              label: "App Marketplace",
              isArray: false,
              content:
                "The app marketplace is designed to apply the core technology described above and gives developers the tools to build different implementations. There is no way to know the full potential of the Medallion XLN Smart Chain unless numerous applications are built and the strength of the network is tested. Medallion XLN aims to provide a secure asset management experience regardless of platform. The app also facilitates simple-to-use plugins for popular interfaces such as web, mobile apps, VR, AR, digital billboards, and any new front-end technology discovered in the future. We aim to be the premier marketplace across all platforms & interfaces for decentralized asset management. The Medallion XLN company will be building apps to contribute to the marketplace that is fully components so that developers can simply import a feature they like into their app and deploy it as soon as possible.",
            },
            {
              label: "Interoperability",
              isArray: false,
              content:
                "One of the goals of Medallion XLN is interoperability. This means creating an asset once and then accessing it from any User Interface, Application, MMORPG, or Metaverse interface. To achieve this, Medallion XLN Assets will use a Graphics Language Transmission Format (.glTF), which is a programmable image format that is known as the JPEG of the 3D world. Most 3D Applications on major platforms use this image format. GLTFs can be used on the web in Three.js projects, Meta Quest VR Apps, Adobe Creative Suite, Unreal Engine, Google & Autodesk Maya. The .glTF image format can be programmed and be seamlessly imported into every metaverse application on the web or in-app. Data can be encoded in the models as JavaScript Object Notation (JSON) or Binary, which can reference external binary and texture resources. The Khronos Group created this image format as an open standard to be the JPEG of 3D. GLTF supports 3D geometry, appearance, scene graph hierarchy, and animation that embeds binary data as base64-encoded strings. The latest upgrades include sparse accessors and morph targets to allow for facial animations & schema tweaks. The GLFT file type in combination with Tensor Flow’s Face Landmarks AI library will allow us to apply realistic movements to Medallion XLN avatars.",
            },
            {
              label: "Artificial Intelligence",
              isArray: false,
              content: "",
            },
            {
              label: "Metaverse Implementation",
              isArray: false,
              content: "",
            },
          ],
        },
      },
      {
        id: 12,
        title: "Software Product Roadmap",
        image: {
          show: true,
          url: CTAContact,
        },
        content: {
          list: true,
          details: [],
          lists: [
            {
              label: "Introduction",
              isArray: false,
              content:
                "Medallion XLN’s initial target audience will be the creator economy. Influencers, artists, cinematographers, content creators, and more. Medallion XLN will build apps that validate our core mission of securing digital & real-world assets. These apps will restructure how assets are transferred. Key focus points will work on how art is sold & royalties are distributed. The first users, Medallion XLN will target are users who are already familiar with Non-Fungible Tokens (NFT). NFT collectors are already familiar with the technology and can easily transition to the Medallion XLN use case. They can bring their already existing NFTs to life with our Artificial Intelligence, which will convert them.JPEGs into fully interoperable 3D.GLF files that can be used in participating metaverse. On launch, Medallion XLN will have 40,000 mintable NFTs over 12 months. 10,000 NFTs every 3 months and 4 Virtual reality worlds are distributed once per quarter.",
            },
            {
              label: "Growth",
              isArray: false,
              content:
                "The 2nd phase of Medallion XLN will find us continuing to build out the creator economy but also shifting to the financial industry. Medallion XLN will introduce apps to manage real-world assets such as fiat, gold, & real estate. In this phase, we will introduce wearables, smart locks, and other hardware that can be interacted with Medallion XLN’s smart chain. The hardware that is introduced will allow for a more decentralized model of ownership to come into fruition. Groups of investors can trustlessly own and run real properties. Shareholders can buy & sell their shares and have their access rights to the properties changed to reflect that status. Medallion XLN will build Meta Cafes & data centers to support the growth of the ecosystem that can scale transactions throughout, secure transactions & assets, and premier the latest innovations in the space.",
            },
            {
              label: "Maturity",
              isArray: false,
              content:
                "Our vision for this phase sees our technology evolving to be able to autonomously run smart cities & factories. Governments will widely distribute and use Medallion XLN across the globe to secure assets & infrastructure. Medallion XLN will pioneer decentralized manufacturing that allows anyone to create real-world instances of their digital assets. The Kardashev scale is used to measure the technological advancement in a civilization based on the amount of energy it can use. The hypothetical scale was developed by Nikolai Kardashev to measure the consumption of energy on a cosmic level. From consuming local resources, continental resources, global resources, solar resources, galaxy resources, and universal resources. Type-3 is being able to use universal resources.",
            },
            {
              label: "Beyond",
              isArray: false,
              content:
                "Medallion XLN will extend its use case to critical infrastructure such as roads, bridges, dams, airports and more that will receive tolls to run completely autonomously. In this phase, we aim to be a stealth layer 1 that processes all transactions. Reaching a Type-2 civilization needs a scalable solution. Space colonies the size of Texas need to be stabilized away from Earth’s orbit. We will develop an industrial 3D printer that gathers the surrounded space dust. It will use Machine Learning to categorize the various elements then remotely print the entire space station. The 3D printer would need to know how to self replicate. We need about a 1000 between each planet so that spaceships can dock, run diagnostics checks and rest. We spread these colonies through out the entire solar system then harness the energy from the entire solar system. Then we begin our plan for Type-3. Medallion XLN is the future!",
            },
          ],
        },
      },
      {
        id: 13,
        title: "Asset Permissions",
        image: {
          show: true,
          url: SecuredAsset,
        },
        content: {
          list: true,
          details: [
            "Asset permission gives creators great control over who can access their data. A creator will have various intentions on who can access their data and what they can do with it. For example, a creator could want his work to be private but only accessed in collaboration with other assets. This section highlights the most prominent use-cases for asset permissions.",
          ],
          lists: [
            {
              label: "Permissions",
              isArray: false,
              content: "Creator monetize asset from all potential buyers",
            },
          ],
        },
      },
      {
        id: 14,
        title: "Architecture",
        image: {
          show: true,
          url: CityAds,
        },
        content: {
          list: false,
          details: [
            "Medallion XLN is built on the Node.js infrastructure. The overall goal of the Medallion XLN infrastructure is to provide both a centralized access hub and a decentralized asset management protocol. The centralized access hub provides tools to further decentralize your asset that, including landing page templates for your various assets that you can then embed on your social media or website. The central access hub also allows Medallion XLN users to interact with the App Marketplace. All Medallion XLN features and implementations will be available for sale and ready to be reused for new implementations. ",
          ],
          lists: [],
        },
      },
    ],
  },
};

export const xln = {
  infura,
  systemChecks: {
    showHeader: false,
    showFooter: false,
  },
  states: [
    "addPermissions",
    "buyShare",
    "buyTokens",
    "codeBlock",
    "createAsset",
    "mintAsset",
    "search",
    "sellShare",
    "showAsset",
    "showMintableAssets",
    "showPurchasableAssets",
    "showComments",
    "showReviews",
    "txPrompt",
  ],
  options: {
    type: "grid-one-center",
    standard: "Standard",
    title: "",
    warning: "",
    description: "",
    content: {
      defaultText: "Authenticate Wallet to access Medallion XLN features.",
      errorText: "User denied accounts access!",
    },
    image: CTAMission,
    templateData: [
      {
        type: "addPermissions",
        options: {
          action: "Add Permission",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            format: {},
            assetSecurity: {
              url: AssetSecurity2,
              width: "500px",
              height: "auto",
            },
          },
          submit: {
            label: "Add Permissions",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
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
                  className: "line_bottom",
                  name: "email",
                  value: {},
                  onChange: "",
                  placeholder: "Email *",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "attachAsset",
        options: {
          action: "attachAsset",
          method: "post",
          form: {
            type: "form",
            standard: "Standard",
            title: "Attach an Asset",
            warning: "Check various assets created by our ",
            description: "lets resolve it here",
            warningLink: {
              text: "asset",
              to: "/xln/create-asset",
              icon: "",
              show: true,
              external: false,
            },
            formData: {
              action: "attachAsset",
              method: "post",
              assetType: "Attach",
              submit: {
                label: "Attach Asset",
                className: "btn btn-block btn-info",
                icon: "",
                action: "attachAsset",
              },
              fields: [
                {
                  type: "file",
                  attributes: {
                    label: {
                      error: false,
                      inverse: false,
                      show: false,
                      labelText: "Attach Asset",
                      forId: "attach-asset",
                    },
                    input: {
                      type: "file",
                      id: "attach-asset",
                      className: "btn btn-info",
                      name: "cover",
                      onChange: "",
                      placeholder: "Attach Asset",
                      disabled: false,
                    },
                    aria: {},
                  },
                },
              ],
            },
          },
        },
      },
      {
        type: "avatar",
        options: {
          action: "avatar",
          method: "post",
          form: {},
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity,
              width: "600px",
              height: "auto",
            },
          },
          text: "Avatar",
          submit: {
            label: "avatar",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "buyTokens",
        options: {
          action: "buyTokens",
          method: "post",
          form: {
            type: "form",
            standard: "Standard",
            title: "Buy XLN Tokens",
            warning: "You are buying XLN tokens ",
            description: "lets resolve it here",
            warningLink: {
              text: "buyTokens",
              to: "/buyTokens",
              icon: "",
              show: true,
              external: false,
            },
            createAsset: "Click here if you ",
            createAssetButton: {
              text: "Buy Tokens",
              to: "/buyTokens",
              icon: "",
              show: true,
              external: false,
            },
            formData: {
              action: "updateSupply",
              method: "post",
              assetType: "Update Supply",
              submit: {
                label: "Update Supply",
                className: "btn btn-block btn-info",
                icon: "",
                action: "updateSupply",
              },
              fields: [
                {
                  type: "buy",
                  attributes: {
                    label: {
                      error: false,
                      inverse: false,
                      show: false,
                      labelText: "Buy XLN",
                      forId: "buy-xln",
                    },
                    input: {
                      type: "text",
                      id: "buy-xln",
                      className: "",
                      name: "asset",
                      value: {},
                      onChange: "",
                      placeholder: "Name of Asset",
                      disabled: false,
                    },
                    aria: {},
                  },
                },
              ],
            },
          },
          header: "Buy Medallion XLN Tokens",
          description: `Owning Medallion XLN tokens allows users to interact within the
          greater Medalllion XLN ecosystem. Users can tokenize assets, receive
          token rewards, and leverage greater network effects.`,
          balanceText: "You currently have a balance of",
          price: 15,
          images: {
            cityAds: {
              url: CityAds,
              width: "100%",
              height: "auto",
            },
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity2,
              width: "600px",
              height: "auto",
            },
          },
          submit: {
            label: "Buy Tokens",
            className: "btn-block",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "buyShare",
        options: {
          action: "buyShare",
          method: "post",
          form: {
            type: "form",
            standard: "Standard",
            title: "Buy XLN",
            warning: "Buy XLN tokens in the crowd sale ",
            description: "lets resolve it here",
            warningLink: {
              text: "buy",
              to: "/buy",
              icon: "",
              show: true,
              external: false,
            },
            createAsset: "Click here if you ",
            createAssetButton: {
              text: "Buy XLN",
              to: "/buy",
              icon: "",
              show: true,
              external: false,
            },
            image: {
              cityAds: {
                url: ChessAvatar,
                width: "900px",
                height: "auto",
              },
            },
            formData: {
              action: "updateSupply",
              method: "post",
              assetType: "Update Supply",
              submit: {
                label: "Update Supply",
                className: "btn btn-block btn-info",
                icon: "",
                action: "updateSupply",
              },
              fields: [
                {
                  type: "buy",
                  attributes: {
                    label: {
                      error: false,
                      inverse: false,
                      show: false,
                      labelText: "Buy XLN",
                      forId: "buy-xln",
                    },
                    input: {
                      type: "text",
                      id: "buy-xln",
                      className: "",
                      name: "asset",
                      value: {},
                      onChange: "",
                      placeholder: "Name of Asset",
                      disabled: false,
                    },
                    aria: {},
                  },
                },
              ],
            },
          },
          description: "Buy XLN tokens in the crowd sale",
          price: 15,
          images: {
            cityAds: {
              url: CityAds,
              width: "900px",
              height: "auto",
            },
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity2,
              width: "600px",
              height: "auto",
            },
          },
          submit: {
            label: "Buy Tokens",
            className: "btn-block",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "codeBlock",
        options: {
          action: "Code Block",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity2,
              width: "500px",
              height: "auto",
            },
          },
          submit: {
            label: "Mint",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
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
                  className: "line_bottom",
                  name: "email",
                  value: {},
                  onChange: "",
                  placeholder: "Email *",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "createAsset",
        options: {
          action: "createAsset",
          method: "post",
          form: {},
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity,
              width: "600px",
              height: "auto",
            },
          },
          text: "Authenticate wallet",
          submit: {
            label: "createAsset",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "mintAsset",
        options: {
          action: "mintAsset",
          method: "post",
          form: {},
          description: "Mint this asset and own as share of this  asset",
          price: 2,
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity2,
              width: "600px",
              height: "auto",
            },
          },
          submit: {
            label: "Mint Asset",
            className: "btn-block",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "mintTokens",
        options: {
          action: "mintTokens",
          method: "post",
          form: {
            type: "form",
            standard: "Standard",
            title: "mint XLN Tokens",
            warning: "You are buying XLN tokens ",
            description: "lets resolve it here",
            warningLink: {
              text: "mintTokens",
              to: "/mintTokens",
              icon: "",
              show: true,
              external: false,
            },
            createAsset: "Click here if you ",
            createAssetButton: {
              text: "mint Tokens",
              to: "/mintTokens",
              icon: "",
              show: true,
              external: false,
            },
            image: CityAds,
            formData: {
              action: "mintXLN",
              method: "post",
              assetType: "Mint",
              submit: {
                label: "Update Supply",
                className: "btn btn-block btn-info",
                icon: "",
                action: "updateSupply",
              },
              fields: [
                {
                  type: "mint",
                  attributes: {
                    label: {
                      error: false,
                      inverse: false,
                      show: false,
                      labelText: "mint XLN",
                      forId: "mint-xln",
                    },
                    input: {
                      type: "text",
                      id: "mint-xln",
                      className: "",
                      name: "asset",
                      value: {},
                      onChange: "",
                      placeholder: "Name of Asset",
                      disabled: false,
                    },
                    aria: {},
                  },
                },
              ],
            },
          },
          description: " XLN tokens in the crowd sale",
          price: 15,
          images: {
            cityAds: {
              url: ChessAvatar,
              width: "900px",
              height: "auto",
            },
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity2,
              width: "600px",
              height: "auto",
            },
          },
          submit: {
            label: "Buy Tokens",
            className: "btn-block",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "search",
        options: {
          action: "buyTokens",
          method: "post",
          form: {
            type: "form",
            standard: "Standard",
            title: "Buy XLN Tokens",
            warning: "You are buying XLN tokens ",
            description: "lets resolve it here",
            warningLink: {
              text: "buyTokens",
              to: "/buyTokens",
              icon: "",
              show: true,
              external: false,
            },
            createAsset: "Click here if you ",
            createAssetButton: {
              text: "Buy Tokens",
              to: "/buyTokens",
              icon: "",
              show: true,
              external: false,
            },
            formData: {
              action: "updateSupply",
              assetType: "Update Supply",
              method: "post",
              submit: {
                label: "Update Supply",
                className: "btn btn-block btn-info",
                icon: "",
                action: "updateSupply",
              },
              fields: [
                {
                  type: "buy",
                  attributes: {
                    label: {
                      error: false,
                      inverse: false,
                      show: false,
                      labelText: "Buy XLN",
                      forId: "buy-xln",
                    },
                    input: {
                      type: "text",
                      id: "buy-xln",
                      className: "",
                      name: "asset",
                      value: {},
                      onChange: "",
                      placeholder: "Name of Asset",
                      disabled: false,
                    },
                    aria: {},
                  },
                },
              ],
            },
          },
          header: "Buy Medallion XLN Tokens",
          description: `Owning Medallion XLN tokens allows users to interact within the
          greater Medalllion XLN ecosystem. Users can tokenize assets, receive
          token rewards, and leverage greater network effects.`,
          balanceText: "You currently have a balance of",
          price: 15,
          images: {
            cityAds: {
              url: CityAds,
              width: "100%",
              height: "auto",
            },
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity2,
              width: "600px",
              height: "auto",
            },
          },
          submit: {
            label: "Buy Tokens",
            className: "btn-block",
            icon: "fa-solid fa-diamond",
          },
        },
      },
      {
        type: "sellShare",
        options: {
          action: "sellShare",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity2,
              width: "500px",
              height: "auto",
            },
          },
          submit: {
            label: "SellShares",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
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
                  className: "line_bottom",
                  name: "email",
                  value: {},
                  onChange: "",
                  placeholder: "Email *",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "showAsset",
        options: {
          action: "buyNFT",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "100px",
              height: "auto",
            },
            asset: {
              url: DownloadWhitepaper,
              width: "500px",
              height: "auto",
            },
          },
          title: "The Asset",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: 3,
          submit: {
            label: "Show",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
          dependencies: [
            {
              avatar: "aloy-avatar.jpg",
              username: "aloy",
              width: "50px",
              height: "50px",
            },
            {
              avatar: "satoshi-avatar.jpeg",
              username: "satoshi",
              width: "50px",
              height: "50px",
            },
            {
              avatar: "CEO-Executive.png",
              username: "xln",
              width: "50px",
              height: "50px",
            },
            {
              avatar: "CMO-Executive.png",
              username: "xln",
              width: "50px",
              height: "auto",
            },
          ],
          fields: [],
        },
      },
      {
        type: "showPurchasableAssets",
        options: {
          action: "showAssets",
          mode: "buy",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity,
              width: "600px",
              height: "auto",
            },
          },
          submit: {
            label: "showPurchasableAssets",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
          searchBar: {
            placeholder: "Search Assets",
          },
          assets: [
            {
              id: "1",
              selected: false,
              username: "aloy",
              asset_name: "horizon_zero_dawn",
              avatar: {
                url: "aloy-avatar.jpg",
                height: "50px",
                width: "50px",
              },
              cover: "horizon_zero_dawn_1.jpeg",
            },
            {
              id: "2",
              selected: false,
              username: "xln",
              asset_name: "xln",
              avatar: {
                url: "CEO-Executive.png",
                height: "50px",
                width: "50px",
              },
              cover: "smart-city-4.jpg",
            },
            {
              id: "3",
              selected: false,
              username: "satoshi",
              asset_name: "bitcoin",
              avatar: {
                url: "satoshi-avatar.jpeg",
                height: "50px",
                width: "50px",
              },
              cover: "bitcoin.jpeg",
            },
            {
              id: "4",
              selected: false,
              username: "xln",
              asset_name: "xln",
              avatar: {
                url: "CMO-Executive.png",
                height: "50px",
                width: "50px",
              },
              cover: "Banners.jpg",
            },
            {
              id: "4",
              selected: false,
              username: "xln",
              asset_name: "xln",
              avatar: {
                url: "CBO-Executive.jpg",
                height: "50px",
                width: "50px",
              },
              cover: "nij-studio-final.jpg",
            },
            {
              id: "5",
              selected: false,
              username: "v",
              asset_name: "cyberpunk_2077",
              avatar: {
                url: "v-cyberpunk-avatar.jpeg",
                height: "50px",
                width: "50px",
              },
              cover: "cyberpunk-2077-cover-asset.jpeg",
            },
            {
              id: "6",
              selected: false,
              username: "xln",
              asset_name: "xln",
              avatar: {
                url: "CAO-Executive.png",
                height: "50px",
                width: "50px",
              },
              cover: "gundam-in-city.jpg",
            },
            {
              id: "7",
              selected: false,
              username: "aloy",
              asset_name: "horizon_zero_dawn",
              avatar: {
                url: "aloy-avatar.jpg",
                height: "50px",
                width: "50px",
              },
              cover: "horizon_zero_dawn_3.jpeg",
            },
            {
              id: "8",
              selected: false,
              username: "xln",
              asset_name: "xln",
              avatar: {
                url: "XPO-Executive.png",
                height: "50px",
                width: "50px",
              },
              cover: "diesel-s-rua-mid-sp.jpg",
            },
            {
              id: "8",
              selected: false,
              username: "v",
              asset_name: "cyberpunk_2077",
              avatar: {
                url: "v-cyberpunk-avatar-2.jpeg",
                height: "50px",
                width: "50px",
              },
              cover: "night-city-4-asset.jpeg",
            },
            {
              id: "9",
              selected: false,
              username: "satoshi",
              asset_name: "bitcoin",
              avatar: {
                url: "satoshi-avatar.jpeg",
                height: "50px",
                width: "50px",
              },
              cover: "bitcoin_4.jpeg",
            },
            {
              id: "2",
              selected: false,
              username: "v",
              asset_name: "cyberpunk_2077",
              avatar: {
                url: "v-cyberpunk-avatar.jpeg",
                height: "50px",
                width: "50px",
              },
              cover: "night-city-asset.jpeg",
            },
          ],
        },
      },
      {
        type: "showMintableAssets",
        options: {
          action: "showAssets",
          mode: "mint",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity,
              width: "600px",
              height: "auto",
            },
          },
          submit: {
            label: "showMintableAssets",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
          searchBar: {
            placeholder: "Search Assets",
          },
          assets: [
            {
              id: "1",
              selected: false,
              username: "aloy",
              asset_name: "horizon_zero_dawn",
              avatar: {
                url: "aloy-avatar.jpg",
                height: "50px",
                width: "50px",
              },
              cover: "horizon_zero_dawn_1.jpeg",
            },
            {
              id: "2",
              selected: false,
              username: "xln",
              asset_name: "xln",
              avatar: {
                url: "CEO-Executive.png",
                height: "50px",
                width: "50px",
              },
              cover: "smart-city-4.jpg",
            },
            {
              id: "3",
              selected: false,
              username: "satoshi",
              asset_name: "bitcoin",
              avatar: {
                url: "satoshi-avatar.jpeg",
                height: "50px",
                width: "50px",
              },
              cover: "bitcoin.jpeg",
            },
            {
              id: "4",
              selected: false,
              username: "xln",
              asset_name: "xln",
              avatar: {
                url: "CMO-Executive.png",
                height: "50px",
                width: "50px",
              },
              cover: "Banners.jpg",
            },
            {
              id: "4",
              selected: false,
              username: "xln",
              asset_name: "xln",
              avatar: {
                url: "CBO-Executive.jpg",
                height: "50px",
                width: "50px",
              },
              cover: "nij-studio-final.jpg",
            },
            {
              id: "5",
              selected: false,
              username: "v",
              asset_name: "cyberpunk_2077",
              avatar: {
                url: "v-cyberpunk-avatar.jpeg",
                height: "50px",
                width: "50px",
              },
              cover: "cyberpunk-2077-cover-asset.jpeg",
            },
            {
              id: "6",
              selected: false,
              username: "xln",
              asset_name: "xln",
              avatar: {
                url: "CAO-Executive.png",
                height: "50px",
                width: "50px",
              },
              cover: "gundam-in-city.jpg",
            },
            {
              id: "7",
              selected: false,
              username: "aloy",
              asset_name: "horizon_zero_dawn",
              avatar: {
                url: "aloy-avatar.jpg",
                height: "50px",
                width: "50px",
              },
              cover: "horizon_zero_dawn_3.jpeg",
            },
            {
              id: "8",
              selected: false,
              username: "xln",
              asset_name: "xln",
              avatar: {
                url: "XPO-Executive.png",
                height: "50px",
                width: "50px",
              },
              cover: "diesel-s-rua-mid-sp.jpg",
            },
            {
              id: "8",
              selected: false,
              username: "v",
              asset_name: "cyberpunk_2077",
              avatar: {
                url: "v-cyberpunk-avatar-2.jpeg",
                height: "50px",
                width: "50px",
              },
              cover: "night-city-4-asset.jpeg",
            },
            {
              id: "9",
              selected: false,
              username: "satoshi",
              asset_name: "bitcoin",
              avatar: {
                url: "satoshi-avatar.jpeg",
                height: "50px",
                width: "50px",
              },
              cover: "bitcoin_4.jpeg",
            },
            {
              id: "2",
              selected: false,
              username: "v",
              asset_name: "cyberpunk_2077",
              avatar: {
                url: "v-cyberpunk-avatar.jpeg",
                height: "50px",
                width: "50px",
              },
              cover: "night-city-asset.jpeg",
            },
          ],
        },
      },
      {
        type: "showComments",
        options: {
          action: "showComments",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
          },
          submit: {},
          fields: [],
        },
      },
      {
        type: "showReviews",
        options: {
          action: "showReviews",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity,
              width: "600px",
              height: "auto",
            },
          },
          submit: {
            label: "showReviews",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
          },
          fields: [
            {
              type: "input",
              attributes: {
                label: {
                  error: false,
                  inverse: false,
                  show: false,
                  labelText: "Wallet Sign In",
                  forId: "kyc-email",
                },
                input: {
                  type: "email",
                  id: "kyc-email",
                  className: "line_bottom",
                  name: "email",
                  value: {},
                  onChange: "",
                  placeholder: "Wallet Email",
                  disabled: false,
                },
                aria: {},
              },
            },
          ],
        },
      },
      {
        type: "txPrompt",
        options: {
          action: "TxPrompt",
          method: "post",
          images: {
            logo: {
              url: Logo,
              width: "300px",
              height: "auto",
            },
            assetSecurity: {
              url: AssetSecurity2,
              width: "500px",
              height: "auto",
            },
          },
          submit: {
            label: "Tx Prompt",
            className: "btn btn-block btn-info",
            icon: "fa-solid fa-diamond",
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
                  className: "line_bottom",
                  name: "email",
                  value: {},
                  onChange: "",
                  placeholder: "Email *",
                  disabled: false,
                },
                aria: {},
              },
            },
            {
              type: "codeBlock",
              options: {
                action: "Code Block",
                method: "post",
                images: {
                  logo: {
                    url: Logo,
                    width: "300px",
                    height: "auto",
                  },
                  assetSecurity: {
                    url: AssetSecurity2,
                    width: "500px",
                    height: "auto",
                  },
                },
                submit: {
                  label: "Mint",
                  className: "btn btn-block btn-info",
                  icon: "fa-solid fa-diamond",
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
                        className: "line_bottom",
                        name: "email",
                        value: {},
                        onChange: "",
                        placeholder: "Email *",
                        disabled: false,
                      },
                      aria: {},
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};
