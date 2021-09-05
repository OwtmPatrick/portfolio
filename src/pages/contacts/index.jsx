import React, {useRef, useState} from 'react';
import {
	Typography,
	Grid,
	TextField,
	Button,
	CircularProgress,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import {sendForm} from 'emailjs-com';
import {useFormik} from 'formik';
import useStyles from './styles';
import validationSchema from './validation-schema';

console.log(process.env);

const {REACT_APP_EMAIL_USER_ID, REACT_APP_EMAIL_SERVICE_ID, REACT_APP_TEMPLATE_ID} = process.env;

export default () => {
	const [isLoading, setLoading] = useState(false);
	const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
	const [isFailureModalOpen, setFailureModalOpen] = useState(false);
	const formRef = useRef(null);

	const formik = useFormik({
		initialValues: {
			name: '',
			message: ''
		},
		validationSchema,
		onSubmit: async () => {
			setLoading(true);

			try {
				await sendForm(
					REACT_APP_EMAIL_SERVICE_ID,
					REACT_APP_TEMPLATE_ID,
					formRef.current,
					REACT_APP_EMAIL_USER_ID
				);

				setLoading(false);
				setSuccessModalOpen(true);
			} catch (e) {
				console.log(e);
				console.log(e.text);
				setLoading(false);
				setFailureModalOpen(true);
			}
		}
	});

	const classes = useStyles();

	return (
		<section className={classes.root}>
			{isLoading && (
				<div className={classes.overlay}>
					<CircularProgress />
				</div>
			)}

			<form onSubmit={formik.handleSubmit} className={classes.form} ref={formRef}>
				<Grid container direction="column" spacing={3} xs={12} sm={6} xl={4}>
					<Grid item>
						<Typography
							variant="h4"
							component="h1"
							className={clsx(classes.title, 'animate__animated animate__fadeInUp')}
						>
							Send a message to me
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
							variant="outlined"
							fullWidth
							type="submit"
							className={clsx(
								classes.button,
								'animate__animated animate__fadeInUp animate__delay-3s'
							)}
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>

			<Dialog open={isSuccessModalOpen} onClose={() => setSuccessModalOpen(false)}>
				<DialogTitle disableTypography className={classes.dialogTitle}>
					<IconButton
						aria-label="close"
						className={classes.closeButton}
						onClick={() => setSuccessModalOpen(false)}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>

				<DialogContent className={classes.dialogContent}>
					<Typography variant="h5" component="h2">
						Your message was successfully sent
					</Typography>
				</DialogContent>
			</Dialog>

			<Dialog open={isFailureModalOpen} onClose={() => setFailureModalOpen(false)}>
				<DialogTitle disableTypography className={classes.dialogTitle}>
					<IconButton
						aria-label="close"
						className={classes.closeButton}
						onClick={() => setFailureModalOpen(false)}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>

				<DialogContent className={classes.dialogContent}>
					<Typography variant="h5" component="h2">
						Something went wrong
					</Typography>
				</DialogContent>
			</Dialog>
		</section>
	);
};
