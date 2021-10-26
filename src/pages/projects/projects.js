import calc from '../../assets/images/calc.jpg';
import catAndPerson from '../../assets/images/cat-and-person.jpg';
import science from '../../assets/images/science.jpg';

export default [
	{
		img: calc,
		title: 'Calculator',
		github: 'https://github.com/OwtmPatrick/calc-ts',
		demo: 'https://owtmpatrick.github.io/calc-ts/',
		technoloigies: [{name: 'typescript', type: 'custom'}]
	},
	{
		img: catAndPerson,
		title: 'Cat and person detection',
		github: 'https://github.com/OwtmPatrick/person-and-cat-detection',
		demo: 'https://owtmpatrick.github.io/person-and-cat-detection/',
		technoloigies: [{name: 'javascript', type: 'fontAwesome'}, {name: 'tensorflow', type: 'custom'}]
	},
	{
		img: science,
		title: 'Science',
		github: 'https://github.com/OwtmPatrick/science',
		demo: 'https://owtmpatrick.github.io/science/',
		technoloigies: [{name: 'react', type: 'fontAwesome'}, {name: 'redux', type: 'custom'}]
	}
];
