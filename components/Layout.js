import NavBar from "./NavBar";

export default function Laout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
