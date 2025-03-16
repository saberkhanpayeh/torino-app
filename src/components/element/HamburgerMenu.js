import React, { useEffect, useState } from "react";
import Home from "../icons/mobile-icons/Home";
import AirplaneSquare from "../icons/mobile-icons/AirplaneSquare";
import Volume from "../icons/mobile-icons/Volume";
import Phone from "../icons/mobile-icons/Phone";
import styles from "@/components/element/HamburgerMenu.module.css";
import { usePathname, useRouter } from "next/navigation";
const routes = [
  { id: 1, title: "صفحه اصلی", route: "/", icon: <Home /> },
  { id: 2, title: "خدمات گردشگری", route: "/khadamat", icon: <AirplaneSquare /> },
  { id: 3, title: "درباره ما", route: "", icon: <Volume /> },
  { id: 4, title: "تماس باما", route: "", icon: <Phone /> },
];
function HamburgerMenu() {
  const [selected, setSelected] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  const menueHandler = (event) => {
    let li = event.target;
    while (li && li.tagName !== "LI") {
      li = li.parentElement; //move from svg or p tag that user clicked it  until reach to li
    }
    if (li) {
      const route = li.id;
      if (route) {
        router.push(route);
      }
    }
  };
  return (
    <div className={styles.container}  >
      <nav>
        <ul onClick={menueHandler}>
          {routes.map((item) => (
            <li
              key={item.id}
              id={item.route}
              className={item.route === selected ? styles.select : null}
            >
              {item.icon}
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
