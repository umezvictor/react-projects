import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import RandomColour from "./components/random-colour";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
    </div>
  );
}

export default App;
