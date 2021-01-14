import React from 'react';

// import DoughnutExample from './doughnut';
// import DynamicDoughnutExample from './dynamic-doughnut';
// import PieExample from './pie';
// import LineExample from './line';
import BarExample from './bar';
import HorizontalBarExample from './horizontalBar';
import RadarExample from './radar';

export default class App extends React.Component {
	render() {
		return (
			<div>

				<HorizontalBarExample />
				<hr />
				<RadarExample />

			</div>
		);
	}
}
