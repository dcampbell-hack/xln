export const assetTypes = [
    {
      name: "AI Art",
      icon: "fas fa-robot",
      className: "",
      url: "/xln/create/asset/ai/art",
      external: false,
      show: true,
    },
    {
      name: "AI Chat",
      icon: "fas fa-comments",
      className: "",
      url: "/xln/create/asset/ai/chat",
      external: false,
      show: true,
    },
    {
      name: "Audio",
      icon: "fas fa-volume-up",
      className: "",
      url: "/xln/create/asset/audio",
      external: false,
      show: true,
    },
    {
      name: "Blog",
      icon: "fas fa-rss",
      className: "",
      url: "/xln/create/asset/blog",
      external: false,
      show: true,
    },
    {
      name: "Document",
      icon: "fas fa-file-alt",
      className: "",
      url: "/xln/create/asset/document",
      external: false,
      show: true,
    },
    {
      name: "Domain",
      icon: "fas fa-globe",
      className: "",
      url: "/xln/create/asset/domain",
      external: false,
      show: true,
    },
    {
      name: "Downloader",
      icon: "fas fa-download",
      className: "",
      url: "/xln/create/asset/downloader",
      external: false,
      show: true,
    },
    {
      name: "Enterprise",
      icon: "fas fa-briefcase",
      className: "",
      url: "/xln/create/asset/enterprise",
      external: false,
      show: true,
    },
    {
      name: "File",
      icon: "fas fa-file-upload",
      className: "",
      url: "/xln/create/asset/file",
      external: false,
      show: true,
    },
    {
      name: "Link",
      icon: "fas fa-link",
      className: "",
      url: "/xln/create/asset/link",
      external: false,
      show: true,
    },
    {
      name: "Live",
      icon: "fas fa-heartbeat",
      className: "",
      url: "/xln/create/asset/live",
      external: false,
      show: true,
    },
    {
      name: "Text",
      icon: "fas fa-quote-left",
      className: "",
      url: "/xln/create/asset/text",
      external: false,
      show: true,
    },
    {
      name: "Image",
      icon: "far fa-image",
      className: "",
      url: "/xln/create/asset/image",
      external: false,
      show: true,
    },
    {
      name: "Metaverse",
      icon: "fas fa-vr-cardboard",
      className: "",
      url: "/xln/create/asset/metaverse",
      external: false,
      show: true,
    },
    {
      name: "Music",
      icon: "fas fa-music",
      className: "",
      url: "/xln/create/asset/music",
      external: false,
      show: true,
    },
    {
      name: "Podcast",
      icon: "fas fa-microphone-alt",
      className: "",
      url: "/xln/create/asset/podcast",
      external: false,
      show: true,
    },
    {
      name: "Real Estate",
      icon: "fas fa-home-lg",
      className: "",
      url: "/xln/create/asset/real-estate",
      external: false,
      show: true,
    },
    {
      name: "Shop",
      icon: "fas fa-shopping-cart",
      className: "",
      url: "/xln/create/asset/shop",
      external: false,
      show: true,
    },
    {
      name: "Video",
      icon: "fas fa-photo-video",
      className: "",
      url: "/xln/create/asset/video",
      external: false,
      show: true,
    },
    {
      name: "Website",
      icon: "fas fa-window-maximize",
      className: "",
      url: "/xln/create/asset/website",
      external: false,
      show: true,
    },
  ]

export const walletProfile = [
    {
      text: "",
      url: "/xln/search/",
      icon: "fa-sharp fa-solid fa-magnifying-glass",
      show: false,
      external: false,
    },
    {
      text: "",
      url: "/xln/profile/",
      icon: "fas fa-home",
      show: false,
      external: false,
    },
    {
      text: "",
      url: "/xln/create",
      icon: "fas fa-plus",
      show: false,
      external: false,
    },
    {
      text: "",
      url: "/xln/stats",
      icon: "fas fa-chart-line",
      show: false,
      external: false,
    },
    {
      text: "",
      url: "/xln/wallet/",
      icon: "fa-solid fa-wallet",
      show: false,
      external: false,
    },
    {
      text: "",
      url: "/xln/assets/",
      icon: "fa-solid fa-coins",
      show: false,
      external: false,
    },
    {
      text: "",
      url: "/xln/setting/",
      icon: "fa-solid fa-gear",
      show: false,
      external: false,
    },
  ]

  const walletNavLinks = [
    {
      text: "Create Asset",
      to: "/xln/create-asset",
      className: "main-wallet-btn",
      icon: "fa-duotone fa-wave-pulse",
      show: true,
      external: false,
    },
    {
      text: "Assets",
      to: "/xln/wallet/assets",
      className: "",
      icon: "number",
      show: true,
      external: false,
      amount: 0,
    },
    {
      text: "Shares",
      to: "/xln/wallet/shares",
      className: "",
      icon: "number",
      show: true,
      external: false,
      amount: 0,
    },
    {
      text: "Shareholders",
      to: "/xln/wallet/shareholders",
      className: "",
      icon: "number",
      show: true,
      external: false,
      amount: 0,
    },
  ];
  
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

  export const formLinks = [
    {
        text: "Edit Profile",
        url: "/xln/setting"
    },
    {
        text: "Edit Permissions",
        url: "/xln/setting/permission"
    },
    {
        text: "Asset Credentials",
        url: "/xln/setting/credentials"
    },
    {
        text: "Upload / Change Photo",
        url: "/xln/setting/photos"
    }
  ]
  