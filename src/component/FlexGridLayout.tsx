import { Fragment, useState } from "react";
import './layout.css'
type GridItem = {
  content: string;
  id: string;
  rowSpan: string;
  colSpan: string;
};

type GridProps = {
  rowCount: number;
  colCount: number;
  gridItems: GridItem[];
};

function FlexGridLayout({ rowCount, colCount, gridItems }: GridProps) {
  const [selectedCells, setSelectedCells] = useState<string[]>([]);

  const handleCellClick = (id:string, event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const isShiftPressed = event.shiftKey;

    if (isShiftPressed) {
      // Handle merging logic on shift + right click
      console.log("Merging cells on shift + right click:", id);
      setSelectedCells((prev) => [...prev, ...id]);

      // Implement your logic for merging cells here
    } else {
      // Handle individual cell click
      console.log("Individual cell click:", id);
    }
  };

  console.log("selected cells:", selectedCells);
  return (
    <Fragment>
 
      <div
        className=" grid-container"
        style={{
          gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))`,
        }}
      >
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`cell${
              selectedCells.includes(item?.id) ? "border-[#5D5DE1]" : " "
            }`}
            style={{
              gridColumn: `span ${item.colSpan}`,
              gridRow: `span ${item.rowSpan}`,
            }}
            // onClick={(e) => handleCellClick(item?.id, e)}
          >
            {item.content}
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default FlexGridLayout;
