import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "../../components/newsFeed/newsList";
import { getNews } from "../../redux/actions";

const NewsFeed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, []);
  const news = useSelector((state) => state.news);
  return (
    <>
      <div style={{ margin: "auto", width: "50%" }}>
        <h2>News Feed</h2>
        {news.map((item, index) => {
          return (
            <NewsList ke={index} image={item.image} desc={item.desc}></NewsList>
          );
        })}
      </div>
    </>
  );
};

export default NewsFeed;
