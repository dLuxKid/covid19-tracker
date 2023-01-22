import React, { useEffect, useState } from "react";

import Cards from "../components/Cards/Cards";
import Chart from "../components/Chart/Chart";
import CountryPicker from "../components/CountryPicker/CountryPicker";

import { fetchData } from "../Api";

const Layout = () => {
	const [data, setData] = useState({});
	const [usStates, setUsStates] = useState("");

	useEffect(() => {
		async function covidData() {
			setData(await fetchData());
		}
		covidData();
		return () => {};
	}, []);

	const handleStateChange = (state) => {
		async function stateData() {
			const fetchedData = await fetchData(state);
			setData(fetchedData);
			setUsStates(state);
		}
		stateData();
	};

	return (
		<main className='container'>
			<Cards data={data} />
			<CountryPicker handleStateChange={handleStateChange} />
			<Chart usState={usStates} data={data} />
		</main>
	);
};

export default Layout;
