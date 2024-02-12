// Sample data
const data = [{
  x: ['A', 'B', 'C', 'D'],
  y: [20, 35, 40, 15],
  type: 'bar'
}];

// Define layout
const layout = {
  title: 'Plotly.js Bar Chart',
  xaxis: {
    title: 'Categories'
  },
  yaxis: {
    title: 'Values'
  }
};

// Plot the chart
Plotly.newPlot('chart', data, layout);
