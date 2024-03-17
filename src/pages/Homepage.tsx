import MainBanner from "@/components/Homepage/MainBanner";

import testImage from "@/assets/ttt.webp";

function Homepage() {
  return (
    <>
      <MainBanner />

      <div className="bg-slate-400 min-h-screen relative">
        <div className="background-clipper">
          <div
            className="background-layer"
            style={{ backgroundImage: `url(${testImage})` }}
          >
            <div className="mk-color-layer" />
          </div>
        </div>
      </div>

      <div className="bg-green-400 min-h-screen">1</div>
    </>
  );
}

export default Homepage;
