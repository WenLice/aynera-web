import { tasteAreas } from "@/lib/taste";

type TasteAreasProps = {
  className?: string;
};

export function TasteAreas({ className = "taste-grid" }: TasteAreasProps) {
  return (
    <div className={className}>
      {tasteAreas.map((area) => (
        <article className="taste-card" key={area.id}>
          <h3>{area.name}</h3>
          <p>{area.description}</p>
        </article>
      ))}
    </div>
  );
}
