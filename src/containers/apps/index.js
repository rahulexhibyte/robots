import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppsCard } from "../../components/apps/appsCard";
import { getApps } from "../../redux/actions";

const Apps = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApps());
  }, []);
  const apps = useSelector((state) => state.apps);
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        {apps.map((app, index) => {
          return <AppsCard key={index} title={app.title} desc={app.desc} />;
        })}
      </div>
    </>
    // <div className="wrapper-main">
    //   <div className="wrapper-body">
    //     <div>
    //       <img src="/images/taurob_logo_white.svg" alt="logo" />
    //     </div>
    //     <h2>Apps - Work in Progress</h2>
    //     <Link to={"/missions?FilterbyApp=" + 1}>Go to Mission Editor</Link>
    //   </div>
    //   <div className="wrapper-bg" />
    // </div>
  );
};

export default Apps;
