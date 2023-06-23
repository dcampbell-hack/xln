import Documentation from "../components/documentation"

export type Auth = {
    login: Object,
    register: Object,
    forgotPassword: Object,
    profile: {
    username: string,
    avatar: string,
    cover: string,
    address: null | string, 
    balance: number
    },
    error: null | string,
    errors: Object[],
    status: number | null,
    isError: boolean,
    isAuthenticated: boolean,
    tokenRecieved: boolean,
    loading: boolean
  }
  
  export  type User = {
    users: Object[],
    id: null | string,
    sharesOwned: number,
    assetsOwned: number,
    avatar: string,
    cover: string,
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    role: string,
    media: boolean,
    accountCreated: boolean,
    files: string[],
    followers: Object[],
    following: Object[],
    socialLinks: string[],
    updated: null | string,
    hasWallet: boolean,
    redirect: null | boolean,
    loading: boolean,
    isError: boolean,
    isAuthenticated: boolean,
    error: null | string 
  }
  
  export type Blockchain = {
    balance: number,
    address: null | string,
    price: number,
    dai: number,
    supply: number,
    deployer: null | string,
    showForm: boolean,
    token: Object,
    nft: Object,
    market: Object,
    ico: Object,
    wallet: null | string,
    error: null | string,
    status: null | boolean,
    isError: boolean,
    tokenRecieved: boolean,
    loading: boolean,
  }

  export type NavBtn = {
    text: string,
    to: string,
    className: string,
    icon: string,
    show: boolean,
    external: boolean,
    action: () => JSX.Element
  }

  export interface SubmitBtn{
    label: string,
    className: string
  }

  export type Btn = {
    text: string,
    className: string,
    icon: string,
    click: () => JSX.Element
  }

  export type LinkProps = {
    className: string,
    text: string, 
    url: string, 
    icon: string, 
    amount?: number,
    show: boolean, 
    external: boolean
  }

  export type Header = {
    logo: string,
    links: {
        logoLink: string, 
        isAuthenticated: NavBtn[], 
        crowd: NavBtn[]
    },
  }

  export type NavDropdown = {
    showDropdown: boolean, 
    setShowDropdown:  React.Dispatch<React.SetStateAction<boolean>>
  }

  export type Footer = {
    logo: string, 
    copyright: string, 
    year: string
  }

  export interface IProfile {
    active: boolean | undefined,
    address: string,
    balance: number,
    username: string,
    avatar: string,
    cover: string
  }
  
  export  interface IActions {
    LOGIN: Object,
    LOGOUT: Object,
    REGISTER: Object, 
    UPDATE_PASSWORD: string,
    FORGOT_PASSWORD: string,
    RESET_PASSWORD: string,
    AUTH_ERROR: string,
    ADD_NEW_ERROR: string,
    REMOVE_ERROR: string,
    LOAD_USER: Object,
    GET_USER: Object,
    GET_USERS: Object[],
    GET_USER_BY_USERNAME: string,
    UPLOAD_USER_FILE: string,
    USERNAME: string,
    CREATE_USER: Object, 
    UPDATE_USER: Object,
    DELETE_USER: boolean,
    USER_ERROR: string,
    MINT_NFT: Object,
    LOAD_NFT: Object,
    UPDATE_ADDRESS: string,
    TOKEN_SUPPLY: number,
    UPDATE_SUPPLY: number,
    GET_CONTRACT_ADDRESS: string,
    LOGGED_IN_USER_ADDRESS: string,
    SHOW_FORM: boolean,
    CHAIN_ERROR: string,
  } 
  
  export  type LoadUser = () => {
    type: IActions['LOAD_USER'];
    payload: User
  }
  
  export  interface AppProps {
    auth: Auth;
    users: User;
    blockchain: Blockchain,
    loadUser: LoadUser
  }

  export interface HeaderProps {
     auth: Auth,
     users: User,
     blockchain: Blockchain,
     dropdown:  NavDropdown,
     header: Header,
     isLoggedIn: boolean,
  }

  export interface FooterProps {
     footer: Footer
  }

  export interface ErrorProps {
    auth: Auth
  }

  export interface LabelProps {
    show: boolean,
    labelText: string,
    forId: string,
  }

  export interface AttributeProps {
     label: LabelProps,
     input: {
      type: string,
      id: string,
      className: string,
      name: string,
      value: {},
      onChange: string,
      placeholder: string,
      disabled: boolean,
    },
     aria: {}
  }

  export interface FieldProps {
    type: string,
    attributes: AttributeProps 
  }

  export interface FormDataProps{
    action: string,
    method: string,
    expand: boolean,
    assetType: string,
    submit: SubmitBtn,
    fields: FieldProps[]
  }

  export interface OptionsProps {
    id?: string,
    standard: string;
    title: string;
    forgotPassword: string;
    forgotPasswordLink: string;
    warning: string;
    warningLink: Btn;
    description: string;
    showDescription: any;
    image: string;
    formData: FormDataProps;
    clickable?: boolean,
    charLimit?: number; 
    minimizeImage?: boolean; 
    button?: NavBtn;
  }

  export interface DocsProps {
    docs: {
    header: string, 
    image: string, 
    description: string, 
    options: OptionsProps
    }
  } 

  export interface FormatLayoutProps{
    type: string,
    options: OptionsProps
  }

export interface LayoutProps {
  options: OptionsProps
}

