
export default function Board() {
  const rows = Array.from({ length: 8 }, (_, row) => row);
  const cols = Array.from({ length: 8 }, (_, col) => col);

  return (
    <div
      className="grid grid-cols-8 grid-rows-8 overflow-hidden"
      style={{ width: "90vmin", maxWidth: "800px", aspectRatio: "1 / 1" }}
    >
      {rows.map((row) =>
        cols.map((col) => {
          const isDark = (row + col) % 2 === 1;
          return (
            <div
              key={`board-square-${row}-${col}`}
              className={isDark ? "bg-emerald-700" : "bg-amber-100"}
            />
          );
        })
      )}
    </div>
  );
}
