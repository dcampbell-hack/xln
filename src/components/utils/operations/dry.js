import { PrimaryB } from "../buttons/buttons";
import { LinkL, LightL } from "../buttons/links";

export const chooseButtonType = (type, array, component, callback) => {
  switch (type) {
    case "primary":
      return callback(array, component);
      break;
    case "secondary":
        return callback(array, component);
      break;
    case "success":
        return callback(array, component);
      break;
    case "danger":
        return callback(array, component);
      break;
    case "warning":
        return callback(array, component);
      break;
    case "info":
        return callback(array, component);
      break;
      case "light":
        return callback(array, component);
        break;
      case "dark":
        return callback(array, component);
        break;
       default:
           return null
  }
};

export const mapSocialMediaLinks = (socials) => 
  socials.map((social, index) => (
    <LinkL
      key={index}
      text={social[0]}
      url={social[1]}
      icon={social[2]}
      showText={social[3]}
    />
  ));


  export const mapSocialMediaLightLinks = (socials) => 
  socials.map((social, index) => (
    <LightL
      key={index}
      text={social[0]}
      url={social[1]}
      icon={social[2]}
      showText={social[3]}
    />
  ));




export const mapSocialMediaButtons = (socials) =>
  socials.map((social) => <PrimaryB />);
