"use client"

import Piece from "./piece";
import { DndContext } from "@dnd-kit/core";

export default function Board() {
  const rows = Array.from({ length: 8 }, (_, row) => row);
  const cols = Array.from({ length: 8 }, (_, col) => col);

  return (
    <DndContext>
      <div className="grid grid-cols-8 grid-rows-8 overflow-hidden w-[800px] h-[800px]">
        {rows.map((row) =>
          cols.map((col) => {
            const isDark = (row + col) % 2 === 1;
            return (
              <div key={`board-square-${row}-${col}`} className={isDark ? "bg-emerald-700" : "bg-amber-100" + " aspect-square"} >
                  <Piece id = {row * 8 + col}></Piece>
              </div>
            );
          })
        )}
      </div>
    </DndContext>
  );
}
