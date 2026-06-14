import { DesignSpecimenCard } from "@/components/design-specimen-card";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12">
      <section className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DesignSpecimenCard variant="dark" />
          <DesignSpecimenCard variant="light" />
        </div>
      </section>
    </main>
  );
}
