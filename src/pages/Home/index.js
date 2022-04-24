import { lazy, Suspense } from "react";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import "../../styles/loaders.css";
import "../../styles/home.css";

export default function Home() {
  let MainHome = lazy(() => import("../../components/MainHome"));

  return (
    <div className="layout-home">
      <Header />
      <Suspense fallback={<Loader className="loader-home" />}>
        <MainHome />
      </Suspense>
    </div>
  );
}
