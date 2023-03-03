import { useEffect, useState } from 'react'
import "../../../../../css/assets/Blog.scss";
import CreateBlog from "./createBlog";
import ViewBlog from "./viewBlog";

export const Blog = ({ options, setActionType }) => {
  const [plus, setPlus] = useState({});
  const [select, setSelect] = useState("header");
  const [icons, setIcons] = useState([]);
  const [featured, setFeatured] = useState({});
  const [content, setContent] = useState([
    { type: "header", content: "The first" },
    { type: "paragraph", content: "The first paragraph that is amazing " },
    { type: "header", content: "The second" },
    { type: "image", content: "/uploads/aloy/asset/horizon_zero_dawn_1.jpeg" },
    {
      type: "video",
      content: {
        poster: "/uploads/xln/asset/images/johnson-ting-final-gif.jpg",
        video: "/uploads/xln/asset/videos/warehouse_robots.mp4",
      },
    },
  ]);
  const [value, setValue] = useState({});

  useEffect(() => {
    const { fields, buttons } = options;
    setFeatured(fields.find(({ type, index }) => type == select));
    setPlus(buttons[0]);
    setIcons(buttons);
  }, [featured]);

  useEffect(() => {
    if (value.title) {
      console.log("Updated Values ---", content, select);
    }
  }, [select]);

  const handleAddContent = () => {
    setContent((content) => {
      return [...content, { type: value.type, content: value.content }];
    });
  };

  const attribute = {
    featured,
    select,
    value,
    setValue,
    content,
    setContent,
    action: handleAddContent,
  };

  return (
    <>
      <div className="blog-display-entries">
        {content.map(({ type, content }, index) => (
          <ViewBlog key={index} type={type} content={content} />
        ))}
      </div>

      <div className="blog-show-content">
        <CreateBlog type={select} attribute={attribute} />
      </div>

      <div className="blog-container">
        <div className="blog-panel">
          <div className="blog-asset">
            {icons.map(({ button, icon }, index) => (
              <div className="blog-icon" onClick={() => setSelect(button)}>
                <i class={icon}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};