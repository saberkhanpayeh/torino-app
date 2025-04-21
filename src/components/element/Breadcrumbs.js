"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/components/element/Breadcrumbs.module.css";
const Breadcrumbs = ({ data }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  if (data?.page === "tour-details") {
    pathSegments.pop();
    pathSegments.push(data.tourName);
  }
  if (data?.page === "cart") {
    pathSegments.push(`رزرو ${data.tourName}`);
  }

//   console.log(pathSegments);
  const breadcrumbTitles = {
    tours: "تور ها",
    cart: "سبد خرید",
  };
  return (
    <nav className={`${data.page==="cart"?styles.cartPage:null} ${styles.breadcrumbs}`}>
      <ol className={styles.list}>
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
        {pathSegments.map((segment, index) => {
          let href;
          if (segment === "tours") href = "/#main-tours";
          else href = "/" + pathSegments.slice(0, index + 1).join("/");

          const label = breadcrumbTitles[segment] || segment;
          //const label = segment;
          return (
            <li key={href} className={styles.item}>
              <span className={styles.symbol}>{"/"}</span>
              {index === pathSegments.length - 1 ? (
                <span className={styles.currentItem}>{label}</span>
              ) : (
                <Link href={href}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
