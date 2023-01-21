import React, { useEffect, useState } from "react";

import Cards from "../components/Cards/Cards";
import Chart from "../components/Chart/Chart";
import CountryPicker from "../components/CountryPicker/CountryPicker";

import { fetchData } from "../Api";

const Layout = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		async function covidData() {
			setData(await fetchData());
		}
		covidData();
		return () => {};
	}, []);

	return (
		<main className='container'>
			<Cards data={data} />
			<CountryPicker />
			<Chart />
		</main>
	);
};

export default Layout;
