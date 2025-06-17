import { WorkshopCard } from "./WorkshopCard";

export function WorkshopList({ workshops }) {
  return (
    <ul className="temporary-grid">
      {workshops.map((workshop) => (
        <WorkshopCard
          key={workshop.slug}
          name={workshop.name}
          phoneNumber={workshop.phoneNumber}
          photoSrc={workshop.image}
        />
      ))}
    </ul>
  );
}
