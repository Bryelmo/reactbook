import React from "react";
import { BaseType } from "../interface";

/**
 * This is a sample component.
 * Create your own component starting from here and pay attention to use
 * cdnAttribute if you want to export it as CDN with build:cdn.
 * CDN will be useful to include your component in an external HTML project.
 * @category  	Component
 * @package   	reactbook
 * @author 		Gabriele Morero <gabriele.morero@gmail.com>
 * @param		{String} id (optional)
 * @param		{String} className (optional)
 * @param		{String} cdnAttribute (optional)
 * @return 		{Sample}
 */
const Sample = (props:BaseType) => {

	const { id, className, cdnAttribute } = props;

	const customClasses:string = className ? className : '';

	return(
		<div id={id} className={`cdn-attribute--${cdnAttribute} ${customClasses}`}>
			This is a Sample Component
		</div>
	);
}

export default Sample;
