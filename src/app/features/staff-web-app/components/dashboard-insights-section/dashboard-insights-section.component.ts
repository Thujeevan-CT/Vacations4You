import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-insights-section',
  templateUrl: './dashboard-insights-section.component.html',
  styleUrls: ['./dashboard-insights-section.component.css']
})
export class DashboardInsightsSectionComponent {

	chart: any;
	
	chartOptions = {
	  animationEnabled: true,
	  theme: "light2",
	  title:{

	  },
	  axisX:{
		valueFormatString: "D MMM"
	  },
	  axisY: {
		title: "Number of Sales"
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: "pointer",
		itemclick: function (e: any) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			} 
			e.chart.render();
		}
	  },
	  data: [{
		type: "line",
		showInLegend: true,
		name: "Sales",
		xValueFormatString: "MMM DD, YYYY",
		dataPoints: [
			{ x: new Date(2021, 8, 1), y: 63 },
			{ x: new Date(2021, 8, 2), y: 69 },
			{ x: new Date(2021, 8, 3), y: 65 },
			{ x: new Date(2021, 8, 4), y: 70 },
			{ x: new Date(2021, 8, 5), y: 71 },
			{ x: new Date(2021, 8, 6), y: 65 },
			{ x: new Date(2021, 8, 7), y: 73 },
			{ x: new Date(2021, 8, 8), y: 86 },
			{ x: new Date(2021, 8, 9), y: 74 },
			{ x: new Date(2021, 8, 10), y: 75 },
			{ x: new Date(2021, 8, 11), y: 76 },
			{ x: new Date(2021, 8, 12), y: 84 },
			{ x: new Date(2021, 8, 13), y: 87 },
			{ x: new Date(2021, 8, 14), y: 76 },
			{ x: new Date(2021, 8, 15), y: 79 }
		]
	  }]
	}



  chartOptions2 = {
	  animationEnabled: true,

	  exportEnabled: true,
	  title: {

	  },
	  subtitles: [{

	  }],
	  data: [{
		type: "pie", 
		indexLabel: "{name}: {y}%",
		dataPoints: [
			{ name: "Cruise Bookings", y: 39.1 },
			{ name: "Activty Bookings", y: 23.7 },
			{ name: "Holiday Bookings", y: 36.4 }
		]
	  }]
	}
}
