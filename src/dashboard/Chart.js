import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts';

import Title from './Title';

export default function Chart() {
  const theme = useTheme();

  
  return (
    <React.Fragment>
    <Title>Today</Title>
    <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 200000, label: 'Cash' },
              { id: 1, value: 400000, label: 'Investments' },
              { id: 2, value: 350000, label: 'Other' },
            ],
          },
        ]}
      />
    </div>
    </React.Fragment>
  );
}
