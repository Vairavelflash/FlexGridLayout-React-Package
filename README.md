# flexgridlayout-react

github: https://github.com/Vairavelflash/FlexGridLayout-React-Package

A flexible grid layout React component for easy grid management.

## Installation

```bash
npm install flexgridlayout-react

```

Usage

```
import React from 'react';
import { FlexGridLayout } from 'flexgridlayout-react';

const gridItems = [
  { content: 'Item1', id: '1', rowSpan: '1', colSpan: '1' },
  { content: 'Item2', id: '2', rowSpan: '1', colSpan: '1' },
  // ... (rest of your gridItems)
];

const App = () => {
  return (
    <FlexGridLayout rowCount={3} colCount={4} gridItems={gridItems} />
  );
};

export default App;


```


Props
rowCount: Number of rows in the grid.
colCount: Number of columns in the grid.
gridItems: An array of objects representing items in the grid.

```
{
  content: 'Item1',
  id: '1',
  rowSpan: '1',
  colSpan: '1',
}


```

