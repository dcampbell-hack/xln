import {
  ASSET_ERROR,
  ATTACH_ASSET,
  GET_ASSET,
  GET_ASSETS,
  GET_USER_ASSETS,
  CREATE_ASSET,
  UPDATE_ASSET,
} from "../../actions/types";

const initState = {
  asset: {},
  assets: [],
  phase: "start",
  assetTypes: {
    placeholder: "Asset Types",
    isDescription: true,
    description: "Choose the type of asset to be generated.",
    types: [
      {
        name: "AI Art",
        icon: "",
        className: "",
        url: "/xln/assets/ai/art",
        external: false,
        show: true,
      },
      {
        name: "Blog",
        icon: "",
        className: "",
        url: "/xln/assets/blog",
        external: false,
        show: true,
      },
      {
        name: "Document",
        icon: "",
        className: "",
        url: "/xln/assets/document",
        external: false,
        show: true,
      },
      {
        name: "Domain",
        icon: "",
        className: "",
        url: "/xln/assets/domain",
        external: false,
        show: true,
      },
      {
        name: "Enterprise",
        icon: "",
        className: "",
        url: "/xln/assets/enterprise",
        external: false,
        show: true,
      },
      {
        name: "File",
        icon: "",
        className: "",
        url: "/xln/assets/file",
        external: false,
        show: true,
      },
      {
        name: "Link",
        icon: "",
        className: "",
        url: "/xln/assets/link",
        external: false,
        show: true,
      },
      {
        name: "Live",
        icon: "",
        className: "",
        url: "/xln/assets/live",
        external: false,
        show: true,
      },
      {
        name: "Text",
        icon: "",
        className: "",
        url: "/xln/assets/text",
        external: false,
        show: true,
      },
      {
        name: "Image",
        icon: "",
        className: "",
        url: "/xln/assets/image",
        external: false,
        show: true,
      },
      {
        name: "Metaverse",
        icon: "",
        className: "",
        url: "/xln/assets/metaverse",
        external: false,
        show: true,
      },
      {
        name: "Music",
        icon: "",
        className: "",
        url: "/xln/assets/music",
        external: false,
        show: true,
      },
      {
        name: "Podcast",
        icon: "",
        className: "",
        url: "/xln/assets/podcast",
        external: false,
        show: true,
      },
      {
        name: "Real Estate",
        icon: "",
        className: "",
        url: "/xln/assets/real-estate",
        external: false,
        show: true,
      },
      {
        name: "Shop",
        icon: "",
        className: "",
        url: "/xln/assets/shop",
        external: false,
        show: true,
      },
      {
        name: "Video",
        icon: "",
        className: "",
        url: "/xln/assets/video",
        external: false,
        show: true,
      },
      {
        name: "Website",
        icon: "",
        className: "",
        url: "/xln/assets/website",
        external: false,
        show: true,
      },
    ],
  },
  category: {
    placeholder: "Choose a Category",
    isDescription: true,
    description: "If category is not available then enter a new one,",
    types: [],
  },
  file: null,
  error: null,
  errors: [],
  status: null,
  isError: false,
  loading: true,
};

export default function (state = initState, action) {
  switch (action.type) {
    case ATTACH_ASSET:
      return {
        ...state,
        file: action.payload,
        pending: false,
        loading: false,
        isError: false,
      };
    case GET_ASSET:
      return {
        ...state,
        asset: action.payload,
        loading: false,
        isError: false,
      };
    case GET_ASSETS:
      return { ...state, loading: false, isError: false, loading: false };
    case GET_USER_ASSETS:
      return {
        ...state,
        assets: action.payload,
        loading: false,
        isError: false,
      };
    case CREATE_ASSET:
      return {
        ...state,
        asset: action.payload,
        loading: false,
        isError: false,
      };
    case UPDATE_ASSET:
      return { ...state, loading: false, isError: false };
    case ASSET_ERROR:
      return { ...state, loading: false, isError: true, errors: [] };
    default:
      return state;
  }
}
