const Features = ({ arr }: { arr: string[] }) => {
  return (
    <div className="flex flex-col mt-5 gap-5">
      <h2>Popüler konaklama yeri imkan ve özellikleri</h2>
      <div className="grid grid-cols-2 gap-4">
        {arr.map((i, key) => (
          <span key={key} className="border bg-zinc-100 py-1 px-2 rounded-md">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Features;
