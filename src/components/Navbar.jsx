import SunIcon from "./Icon";
export default function Navbar() {
  return (
    <>
      <div className="flex spaceBwn marginLftRght ctrColumn">
        <h1>{"<SS/>"}</h1>
        <div className="flex ctrColumn gap24px">
          <p>about</p>
          <p>work</p>
          <p>testimonials</p>
          <p>Contact</p>
          <button className="iconBtn">
            <SunIcon />
          </button>

          <button className="navBtn">Download CV</button>
        </div>
      </div>
    </>
  );
}

