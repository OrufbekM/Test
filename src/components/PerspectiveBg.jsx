import { PerspectiveGrid } from "@/components/ui/perspective-grid"

export function Perspectivebg({ children }) {
  return (
    <div className="relative w-full h-full">
      <PerspectiveGrid
        gridSize={20}
        className="absolute inset-0"
      />
      <div className="relative z-20 flex items-center justify-center w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  )
}