import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../Api";
import "./Chart.module.css";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import cx from "classnames";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Legend,
	Title,
	Tooltip,
	Filler
);

const Chart = () => {
	const [dailyData, setDailyData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setDailyData(await fetchDailyData());
		};
		fetchData();
		setTimeout(() => {
			console.log(dailyData);
		}, 2000);
		return () => {};
	}, []);

	const lineChart = dailyData.length ? (
		<div className={styles.container}>
			<Line
				options={{
					responsive: true,
					plugins: {
						legend: { position: "top" },
						title: {
							display: true,
							text: "COVID CHART",
						},
					},
				}}
				data={{
					labels: dailyData.map(({ date }) => date).reverse(),
					datasets: [
						{
							data: dailyData.map(({ positive }) => positive).reverse(),
							label: "Infected",
							borderColor: "#3333ff",
							backgroundColor: "rgba(0,0,255,0.5)",
							// fill: true,
						},
						{
							data: dailyData.map(({ death }) => death).reverse(),
							label: "death",
							borderColor: "red",
							backgroundColor: "rgba(255,0,0,0.5)",
							// fill: true,
						},
					],
				}}
			/>
		</div>
	) : null;

	return lineChart;
};

export default Chart;
