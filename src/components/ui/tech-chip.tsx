import { Badge } from "./badge";

export function TechChip({ children, className }: { children: React.ReactNode; className?: string }) {
  // Custom className extends the default "tech" variant styling instead of replacing it
  return (
    <Badge className={className} variant="tech">
      {children}
    </Badge>
  );
}
