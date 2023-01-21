import axios from "axios";

// const url = "";
const url = "https://api.covidtracking.com/v1/us/current.json";

export const fetchData = async () => {
	try {
		const res = await axios.get(url);
		const modifiedData = {
			confirmed: res.data[0].positive,
			hospitalized: res.data[0].hospitalizedCumulative,
			deaths: res.data[0].death,
			lastUpdate: res.data[0].lastModified,
			total: res.data[0].totalTestResults,
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
	} catch (error) {}
};
