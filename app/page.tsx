import Hero from "@/components/Hero";
import CampusSection from "@/components/CampusSection";
import CoursesSection from "@/components/CoursesSection";
import TeachersSection from "@/components/TeachersSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <>
      <Hero />
      <CampusSection />
      <CoursesSection />
      <TeachersSection />
      <ShowcaseSection />
      <BookingForm />
    </>
  );
}
