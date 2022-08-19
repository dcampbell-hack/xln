
// Map map Social Media Anchor tags
export const mapSocialMediaAnchorTagsIcons = (socials) => socials.map(social => <a key={social[1]} href={social[1]} className="btn-secondary" target="_blank"><i className={social[2]}></i></a> )

export const removeDups = (arr) => arr.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === arr.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
  

