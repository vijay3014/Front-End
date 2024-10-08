import "./App.css";
import Card from "./components/Card_props";
import image1 from "./assets/Samsung Galaxy S22 Ultra.jpg";
import image2 from "./assets/oneplus9pro.webp";
import image3 from "./assets/oneplus8Pro.jpg";
import image4 from "./assets/nothing.webp";
import image5 from "./assets/oneplus9pro.jpg";
import image6 from "./assets/huwai.jpg";

function App() {
  return (
    <div className="App">
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          My Phone Shop
        </h1>
        <h1 className="text-3xl">Victor Dizhard</h1>
      </div>

      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 justify-center">
        <Card image={image1} afPrice="1,40,000" nowPrice="1,10,000" proName="Samsung S22 Utra" brand="samsung"/>
        <Card image={image2} afPrice="85,000" nowPrice="70,000" proName="Oneplus 9 pro (Black)"  brand="oneplus"/>
        <Card image={image3} afPrice="80,000" nowPrice="65,000" proName="Oneplus 8 pro" brand="oneplus"/>
        <Card image={image4} afPrice="65,000" nowPrice="52,000" proName="Nothing Phone 2" brand="nothing"/>
        <Card image={image5} afPrice="85,000" nowPrice="70,000" proName="Oneplus 9 pro (Morning mist)" brand="oneplus"/>
        <Card image={image6} afPrice="90,000" nowPrice="85,000" proName="Huwai xel3" brand="huwai"/>
      </div>
    </div>
  );
}

export default App;