import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Sample from './components/Sample';

const components:JSX.Element[] = [
	<Sample cdnAttribute="SampleComponent"/>,
];

components.forEach((component) => {
	const componentName:string = component.props.cdnAttribute;
	const attribute:string = `reactbook-${componentName}`;
	document.querySelectorAll(`[${attribute}]`).forEach((querySelector) => {
		ReactDOM.render(
			<React.StrictMode>
				{component}
			</React.StrictMode>,
			querySelector
		)
	})
})

