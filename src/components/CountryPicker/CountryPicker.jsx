import React, { useEffect } from "react";
import { useState } from "react";

import { NativeSelect, FormControl } from "@mui/material";

import styles from "./CountryPicker.module.css";
import { getStates } from "../../Api";

const CountryPicker = ({ handleStateChange }) => {
	const [states, setStates] = useState([]);

	useEffect(() => {
		const fetchStates = async () => {
			setStates(await getStates());
		};
		fetchStates();
		return () => {};
	}, [setStates]);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect
				defaultValue=''
				onChange={(e) => handleStateChange(e.target.value)}
			>
				<option value=''>GLOBAL</option>
				{states.map(({ state }, id) => (
					<option key={id} value={state.toLowerCase()}>
						{state}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
