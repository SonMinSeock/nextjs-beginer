import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const [mode, setMode] = useState(false);

  const onDarkLightMode = () => {
    setMode((prev) => !prev);
  };

  useEffect(() => {
    if (mode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [mode]);
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : "non-active"}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : "non-active"}>
            About
          </a>
        </Link>
      </div>
      <div className="dark-light__mode__container">
        <img onClick={onDarkLightMode} src={mode ? "/sun.png" : "/moon.png"} />
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          background-color: var(--color-primary);
          border-radius: 10px;
          margin-top: 25px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
          cursor: pointer;
        }
        nav {
          position: relative;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        .non-active {
          color: black;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        .dark-light__mode__container {
          position: absolute;
          right: 25px;
          top: 25px;
        }
      `}</style>
    </nav>
  );
}
