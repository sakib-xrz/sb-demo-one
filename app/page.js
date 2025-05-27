import RiddaLayout from "@/layout/RiddaLayout";
import Hero from "./components/hero";
import Service from "./components/service";

export default function Home() {
  return (
    <RiddaLayout bodyClass="home-five dark-version" header={5} footer={5}>
      <Hero />
      <Service />
    </RiddaLayout>
  );
}
