
// Map map Social Media Anchor tags
export const mapSocialMediaAnchorTagsIcons = (socials) => socials.map(social => <a key={social[1]} href={social[1]} className="btn-secondary" target="_blank"><i className={social[2]}></i></a> )
