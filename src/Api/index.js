import axios from "axios";

// const url = "";
const url = "https://api.covidtracking.com/v1/us/current.json";

export const fetchData = async (state) => {
	let changeableUrl = url;
	if (state) {
		changeableUrl = `https://api.covidtracking.com/v1/states/${state}/daily.json`;
	}
	try {
		const res = await axios.get(changeableUrl);
		const modifiedData = {
			confirmed: res.data[0].positive,
			hospitalized: res.data[0].hospitalizedCumulative,
			deaths: res.data[0].death,
			lastUpdate: res.data[0].lastModified,
		};
		return modifiedData;
	} catch (error) {
		console.log(error);
	}
};

export const fetchDailyData = async () => {
	try {
		const res = await axios.get("https://api.covidtracking.com/v1/us/daily.json");
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getStates = async () => {
	try {
		const res = await axios.get(
			"https://api.covidtracking.com/v1/states/current.json"
		);
		return res.data.map((state) => state);
	} catch (error) {
		console.log(error);
	}
};
