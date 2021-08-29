import * as yup from 'yup';

export default yup.object({
	name: yup.string('Enter your name').required('Name is required'),
	message: yup.string('Enter your message').required('Message is required')
});
