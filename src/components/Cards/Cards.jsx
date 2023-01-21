import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data }) => {
	if (!data.confirmed) {
		return "Loading...";
	} else
		return (
			<div className={styles.container}>
				<Grid container spacing={3} justify='center'>
					<Grid
						item
						component={Card}
						xs={12}
						md={4}
						className={cx(styles.card, styles.infected)}
					>
						<CardContent>
							<Typography color='textSecondary' gutterBottom>
								CONFIRMED CASES
							</Typography>
							<Typography variant='h5'>
								<CountUp start={0} end={data.confirmed} duration={2.5} separator=',' />
							</Typography>
							<Typography color='textSecondary'>
								{new Date(data.lastUpdate).toDateString()}
							</Typography>
							<Typography variant='body2'>Number of active cases recorded</Typography>
						</CardContent>
					</Grid>
					<Grid
						item
						component={Card}
						xs={12}
						md={4}
						className={cx(styles.card, styles.recovered)}
					>
						<CardContent>
							<Typography color='textSecondary' gutterBottom>
								HOSPITALIZED
							</Typography>
							<Typography variant='h5'>
								<CountUp
									start={0}
									end={data.hospitalized}
									duration={2.5}
									separator=','
								/>
							</Typography>
							<Typography color='textSecondary'>
								{new Date(data.lastUpdate).toDateString()}
							</Typography>
							<Typography variant='body2'>
								Number of hospitalized cases recorded
							</Typography>
						</CardContent>
					</Grid>
					<Grid
						item
						component={Card}
						xs={12}
						md={4}
						className={cx(styles.card, styles.deaths)}
					>
						<CardContent>
							<Typography color='textSecondary' gutterBottom>
								DEATHS
							</Typography>
							<Typography variant='h5'>
								<CountUp start={0} end={data.deaths} duration={2.5} separator=',' />
							</Typography>
							<Typography color='textSecondary'>
								{new Date(data.lastUpdate).toDateString()}
							</Typography>
							<Typography variant='body2'>Number of death cases recorded</Typography>
						</CardContent>
					</Grid>
				</Grid>
			</div>
		);
};

export default Cards;
