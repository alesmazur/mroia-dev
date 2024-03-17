import { NavLink } from "react-router-dom";

function OurWork() {
  return (
    <>
      <h2 className="font-heading text-5xl text-center mb-6 tracking-widest">
        What we do
      </h2>
      <h3 className="text-xl mb-4 text-center">Some of out work</h3>
      <p className="mb-14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="grid md:grid-cols-2 2xl:grid-cols-3 6xl:grid-cols-4">
        <NavLink to="https://google.com/">
          <img src="https://placehold.co/600x400.png" alt="" />
        </NavLink>
        <NavLink to="https://google.com/">
          <img src="https://placehold.co/600x400.png" alt="" />
        </NavLink>
        <NavLink to="https://google.com/">
          <img src="https://placehold.co/600x400.png" alt="" />
        </NavLink>
        <NavLink to="https://google.com/" className="hidden md:block">
          <img src="https://placehold.co/600x400.png" alt="" />
        </NavLink>
        <NavLink to="https://google.com/" className="hidden md:block">
          <img src="https://placehold.co/600x400.png" alt="" />
        </NavLink>
        <NavLink to="https://google.com/" className="hidden md:block">
          <img src="https://placehold.co/600x400.png" alt="" />
        </NavLink>
        <NavLink to="https://google.com/" className="hidden 6xl:block">
          <img src="https://placehold.co/600x400.png" alt="" />
        </NavLink>
        <NavLink to="https://google.com/" className="hidden 6xl:block">
          <img src="https://placehold.co/600x400.png" alt="" />
        </NavLink>
      </div>
    </>
  );
}

export default OurWork;
