import LocationIcon from "./LocantionIcon";
import GitIcon from "./GitIcon";
import Twittericon from "./TwitterIcon";
import FigmaIcon from "./FigmaIcon";
import Profile from "./../../public/Pic.png"
import GreenIcon from "./GreenIcon";
export default function Main() {
    console.log(Profile);
  return (
    <>
    <div className="flex ctrRow marginTop96px">
    <div className="leftMain">
        <h1>Hi, I’m Sagar 👋</h1>
        <p>
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="flex ctrColumn">
        <LocationIcon/>
        <p>
        Ahmedabad, India
        </p>
        </div>
        <div className="flex ctrColumn">
            <GreenIcon/>
        <p>
        Available for new projects
        </p>
        </div>
       
        <div className="flex" >
            <GitIcon/>
            <Twittericon/>
            <FigmaIcon/>
        </div>
      </div>
      <div className="rightMain">
      <img src={Profile.src}/>
    <div  className="empty">

    </div>
      </div>
    </div>
     
    </>
  );
}
