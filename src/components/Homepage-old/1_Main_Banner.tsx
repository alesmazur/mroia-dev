// import { useEffect, useState } from "react";
// import Globe from "globe.gl";
// import * as THREE from "three";

function MainBanner() {
  // const [landPolygons, setLandPolygons] = useState([]);
  // useEffect(() => {
  //   fetch("//unpkg.com/world-atlas/land-110m.json")
  //     .then((res) => res.json())
  //     .then((landTopo) => {
  //       setLandPolygons(
  //         topojson.feature(landTopo, landTopo.objects.land).features,
  //       );
  //     });
  // }, []);

  return (
    <section className="bg-gradient-to-bl from-violet-500 to-violet-700 text-white pt-28 min-h-screen">
      <div className="box grid gap-40">
        {/* <h1 className="font-heading text-3xl">This is a Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          impedit vitae quod optio, nulla id atque fuga suscipit aspernatur illo
          consequuntur soluta iusto eos voluptatum eum! Nobis rerum sequi
          laudantium!
        </p> */}
        {/* <Globe
          backgroundColor="rgba(0,0,0,0)"
          showGlobe={false}
          showAtmosphere={false}
          polygonsData={landPolygons}
          polygonCapMaterial={polygonsMaterial}
          polygonSideColor={() => "rgba(0, 0, 0, 0)"}
        /> */}
      </div>
    </section>
  );
}

export default MainBanner;
