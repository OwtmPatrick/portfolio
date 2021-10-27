import React, {useState, useRef, useEffect} from 'react';

import {throttle} from 'lodash';

import Header from '../../components/header';
import sections from './sections';

export default () => {
	const [currentSection, setCurrenSection] = useState();
	const sectionsRefs = {};

	sections.forEach(section => (sectionsRefs[section.name] = useRef()));

	const spyScroll = () => {
		const {scrollY} = window;

		let bestMatch;

		Object.keys(sectionsRefs).forEach(target => {
			const el = sectionsRefs[target].current;

			const {top, height} = el.getBoundingClientRect();

			if (top <= 0 && height > scrollY - el.offsetTop) {
				bestMatch = target;
			}
		});

		return bestMatch;
	};

	const throttledOnScroll = throttle(() => setCurrenSection(spyScroll), 200);

	useEffect(() => {
		window.addEventListener('scroll', throttledOnScroll);
		setCurrenSection(spyScroll());

		return () => window.removeEventListener('scroll', throttledOnScroll);
		// eslint-disable-next-line
	}, []);

	const scrollToTarget = refName => {
		if (refName && sectionsRefs[refName] && sectionsRefs[refName].current) {
			sectionsRefs[refName].current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest'
			});
		}
	};

	return (
		<main>
			<Header scrollToTarget={scrollToTarget} currentSection={currentSection} />

			{sections.map((item, index) => (
				<section key={index} ref={sectionsRefs[item.name]}>{item.component()}</section>
			))}
		</main>
	);
};
