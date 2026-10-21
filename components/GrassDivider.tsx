export default function GrassDivider() {
  return (
    <div className="relative h-16 overflow-hidden bg-white" aria-hidden="true">
      <svg
        className="absolute inset-x-0 bottom-0 h-16 w-full text-brand"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 80 40 28c20-26 40 10 60-4s40-10 60 8 40 6 60-12 40 4 60 10 40-22 60-8 40 20 60 4 40-18 60-6 40 24 60 8 40-16 60 2 40 18 60 4 40-20 60-4 40 22 60 6 40-14 60 4 40 16 60 2 40-18 60 6 40 20 60 2 40-14 60 8 40 10 60-4 40-8 60 12 40 4 60-8 40-6 80 10v42H0Z"
        />
        <path
          fill="#0a4d2a"
          opacity="0.35"
          d="M0 80 50 40c25-20 40 4 70-6s45-8 65 10 40 2 70-8 50 12 70 4 40-10 70 6 50 8 70-6 40-4 70 10 50 0 70-8 40 14 70 4 50-6 70 8 40 4 70-4 50-2 70 10 40 0 70-6 55 12 90 4v22H0Z"
        />
      </svg>
    </div>
  );
}
