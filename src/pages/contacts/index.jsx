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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {sendForm} from 'emailjs-com';
import {useFormik} from 'formik';
import useStyles from './styles';
import validationSchema from './validation-schema';
import icons from './icons';

const {REACT_APP_EMAIL_USER_ID, REACT_APP_EMAIL_SERVICE_ID, REACT_APP_TEMPLATE_ID} = process.env;

export default () => {
	const [isLoading, setLoading] = useState(false);
	const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
	const [isFailureModalOpen, setFailureModalOpen] = useState(false);
	const formRef = useRef(null);

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			subject: '',
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
				<Grid container direction="column" lg={6}>
					<Grid item>
						<Typography variant="h2" component="h2" className={clsx(classes.title)}>
							Send me a message
						</Typography>
					</Grid>

					<Grid container direction="column" spacing={2} className={classes.formInner}>
						<Grid item className={classes.fields}>
							<Grid item className={clsx(classes.item, classes.names)}>
								<Grid item lg={6} className={clsx(classes.item, classes.firstName)}>
									<TextField
										fullWidth
										variant="outlined"
										name="firstName"
										label="First name"
										id="firstName"
										className={clsx(classes.textField)}
										value={formik.values.firstName}
										onChange={formik.handleChange}
										error={
											formik.touched.firstName
											&& Boolean(formik.errors.firstName)
										}
										helperText={
											formik.touched.firstName && formik.errors.firstName
										}
									/>
								</Grid>

								<Grid item lg={6} className={classes.item}>
									<TextField
										fullWidth
										variant="outlined"
										name="lastName"
										label="Last name"
										id="lastName"
										className={clsx(classes.textField)}
										value={formik.values.lastName}
										onChange={formik.handleChange}
										error={
											formik.touched.lastName
											&& Boolean(formik.errors.lastName)
										}
										helperText={
											formik.touched.lastName && formik.errors.lastName
										}
									/>
								</Grid>
							</Grid>

							<Grid item className={classes.item}>
								<TextField
									fullWidth
									variant="outlined"
									name="subject"
									label="Subject"
									id="subject"
									className={clsx(classes.textField)}
									value={formik.values.subject}
									onChange={formik.handleChange}
								/>
							</Grid>

							<Grid item className={classes.item}>
								<TextField
									fullWidth
									variant="outlined"
									multiline
									rows={10}
									name="message"
									label="Message"
									id="message"
									className={clsx(classes.textField)}
									value={formik.values.message}
									onChange={formik.handleChange}
									error={formik.touched.message && Boolean(formik.errors.message)}
									helperText={formik.touched.message && formik.errors.message}
								/>
							</Grid>

							<Grid item xs={6} md={4} className={classes.item}>
								<Button
									color="primary"
									variant="outlined"
									fullWidth
									type="submit"
									className={clsx(classes.button)}
								>
									Send
								</Button>
							</Grid>
						</Grid>

						<Grid item className={classes.icons}>
							{icons.map(({icon, link}) => (
								<a key={link} href={link} className={classes.link}>
									<FontAwesomeIcon icon={icon} className={classes.icon} />
								</a>
							))}
						</Grid>
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
					<Typography variant="h5" component="h2" className={classes.dialogText}>
						Your message was successfully sent, I&apos;ll answer you soon
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
					<Typography variant="h5" component="h2" className={classes.dialogText}>
						Something went wrong, please try again later
					</Typography>
				</DialogContent>
			</Dialog>
		</section>
	);
};
