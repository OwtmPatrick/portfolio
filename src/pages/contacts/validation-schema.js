import * as yup from 'yup';

export default yup.object({
	firstName: yup.string('Enter your first name').required('First name is required'),
	lastName: yup.string('Enter your last name').required('Last name is required'),
	subject: yup.string('Enter email subject'),
	message: yup.string('Enter your message').required('Message is required')
});
