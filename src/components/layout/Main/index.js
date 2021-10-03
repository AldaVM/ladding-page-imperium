import ClassFree from "../../common/ClassFree";
import ListTopics from "../../common/ListTopics";
import Promo from "../../common/Promo";
import SectionBanner from "../../common/SectionBanner";

export default function Main() {
  return (
    <main>
      <SectionBanner />
      <Promo />
      <ClassFree />
      <ListTopics />
    </main>
  );
}
