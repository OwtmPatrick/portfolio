import React, {useRef} from 'react';
import {
	Typography, Grid, TextField, Button
} from '@material-ui/core';
import clsx from 'clsx';
import {sendForm} from 'emailjs-com';
import {useFormik} from 'formik';
import useStyles from './styles';
import validationSchema from './validation-schema';

const {REACT_APP_EMAIL_USER_ID, REACT_APP_EMAIL_SERVICE_ID, REACT_APP_TEMPLATE_ID} = process.env;

export default () => {
	const formRef = useRef(null);

	const formik = useFormik({
		initialValues: {
			name: '',
			message: ''
		},
		validationSchema,
		onSubmit: () => {
			sendForm(
				REACT_APP_EMAIL_SERVICE_ID,
				REACT_APP_TEMPLATE_ID,
				formRef.current,
				REACT_APP_EMAIL_USER_ID
			).then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		}
	});
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<form onSubmit={formik.handleSubmit} className={classes.container} ref={formRef}>
				<Grid container direction="column" spacing={3} xs={12} sm={6} xl={4}>
					<Grid item>
						<Typography
							variant="h4"
							component="h1"
							className={clsx(classes.title, 'animate__animated animate__fadeInUp')}
						>
							Please contact me via email
						</Typography>
					</Grid>

					<Grid item>
						<TextField
							fullWidth
							variant="outlined"
							name="name"
							label="Name"
							id="name"
							className={clsx(
								classes.textField,
								'animate__animated animate__fadeInUp animate__delay-1s'
							)}
							value={formik.values.name}
							onChange={formik.handleChange}
							error={formik.touched.name && Boolean(formik.errors.name)}
							helperText={formik.touched.name && formik.errors.name}
						/>
					</Grid>

					<Grid item>
						<TextField
							fullWidth
							variant="outlined"
							multiline
							rows={10}
							name="message"
							label="Message"
							id="message"
							className={clsx(
								classes.textField,
								'animate__animated animate__fadeInUp animate__delay-2s'
							)}
							value={formik.values.message}
							onChange={formik.handleChange}
							error={formik.touched.message && Boolean(formik.errors.message)}
							helperText={formik.touched.message && formik.errors.message}
						/>
					</Grid>

					<Grid item xs={6} md={4}>
						<Button
							color="primary"
							variant="contained"
							fullWidth
							type="submit"
							className="animate__animated animate__fadeInUp animate__delay-3s"
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</section>
	);
};
