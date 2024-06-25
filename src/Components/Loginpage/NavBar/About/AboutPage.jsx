import NavBar from "../NavBar";
import "../About/aboutpage.css"
import shopbag from "../About/shopingbag.avif";
import FooterPage from "../../../Footer/FooterPage";
import { useParams } from "react-router-dom";
const AboutPage = () => {
  let paem=useParams()
  return (
    <div className="aboutpage">
      <NavBar id={paem.id}/>
      <div className="topAbout">
        <h1>#KnowUs</h1>
        <p>Welcome to our e-commerce store!</p>
      </div>
      <div className="midAbout">
        <div className="aboutImgBox">
          <img src={shopbag} alt="" />
        </div>
        <div className="aboutWho">
          <h1>Who We Are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            cum odit at, ea est error dolorum explicabo accusantium animi nihil
            hic, qui laboriosam cupiditate velit illum. Iusto earum reiciendis
            nulla voluptas non beatae libero quas similique esse voluptate, et
            odit sapiente ab soluta cupiditate quos dolorum temporibus
            praesentium aliquid nesciunt?
          </p>
        </div>
      </div>
      <FooterPage/>
    </div>
  );
};

export default AboutPage;
