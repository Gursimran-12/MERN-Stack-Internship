export default function ResponsiveGrid({ 
  children, 
  cols = 4, 
  gap = "gap-8", 
  padding = "px-5" 
}) {
  const colClasses = {
    2: "grid sm:grid-cols-2",
    3: "grid sm:grid-cols-2 md:grid-cols-3",
    4: "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4",
    5: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div className={`${colClasses[cols]} ${gap} ${padding}`}>
      {children}
    </div>
  );
}