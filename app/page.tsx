import Grid from "@/core/ui/Grid";
import Glow from "@/core/ui/Glow";
import Features from "@/core/landing/Features";
import Background from "@/core/ui/Background";
import Navbar from "@/core/layout/Navbar";
import Hero from "@/core/home/Hero";
import MeetingList from "@/core/meeting/MeetingList";

export default function Home() {
  return (
    <>
      <Background />
      <Grid />
      <Glow />

      <Navbar />

      <Hero />

      <MeetingList />

      <Features />

    </>
  );
}