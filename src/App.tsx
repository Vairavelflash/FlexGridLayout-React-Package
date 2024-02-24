import FlexGridLayout from './component/FlexGridLayout';

const gridItems = [
  { content: "Item", id: "1", rowSpan: "1", colSpan: "1" },
  { content: "Item", id: "2", rowSpan: "1", colSpan: "1" },
  { content: "Item", id: "3", rowSpan: "1", colSpan: "1" },
  { content: 'Item', id: '4', rowSpan: '1', colSpan: '1' },
  { content: 'Item', id: '5', rowSpan: '2', colSpan: '1' },
  { content: 'Item', id: '6', rowSpan: '1', colSpan: '1' },
  { content: 'Item', id: '7', rowSpan: '1', colSpan: '1' },
  { content: 'Item', id: '8', rowSpan: '1', colSpan: '1' },
  { content: 'Item', id: '9', rowSpan: '1', colSpan: '1' },
  { content: 'Item', id: '10', rowSpan: '1', colSpan: '1' },
  { content: 'Item', id: '11', rowSpan: '1', colSpan: '1' },
  { content: 'Item', id: '12', rowSpan: '1', colSpan: '1' },
  { content: 'Item', id: '13', rowSpan: '1', colSpan: '1' },
  { content: 'Item', id: '14', rowSpan: '1', colSpan: '1' },
  { content: 'Item', id: '15', rowSpan: '1', colSpan: '1' },
];
function App() {
  return (
    <div className="">
      <FlexGridLayout rowCount={4} colCount={4} gridItems={gridItems}/>
    </div>
  );
}

export default App;
