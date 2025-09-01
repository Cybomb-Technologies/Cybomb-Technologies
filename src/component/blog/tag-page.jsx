import { useParams } from "react-router-dom";

export default function TagPage() {
  const { tagName } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Articles tagged with: #{tagName}</h2>
      {/* Later: filter blogData by tagName and show matching blogs */}
    </div>
  );
}
