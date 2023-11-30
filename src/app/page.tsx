import SliderOne from "@/components/slider-one/sliderOne";
import style from "./page.module.css";

export default function Home() {
  return (
    <main className={style.mainContainer}>
      <SliderOne/>
    </main>
  );
}
