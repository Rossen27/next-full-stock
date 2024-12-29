import { CircularProgress } from "@nextui-org/react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <CircularProgress
        color="default"
        label="Loading..."
        aria-label="Loading..."
        size="lg"
      />
    </div>
  );
}