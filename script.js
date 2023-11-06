import { exhibit } from './module/conf/exhibit.js';
import { appendix } from './module/conf/appendix.js';

// VARS /////////////////////////////////////////////////////////

const protocol = 'http';
const domain = 'localhost';
const port = '8080';
const hTMLResourcePath = 'module/html';
// const headings = { exhibit: 'exhibit', appendix: 'appendix'}
const baseURL = `${protocol}://${domain}:${port}`

// FUNCT /////////////////////////////////////////////////////////

const hTMLLoader = async (baseURL,path,heading,resource) => {
	const uRL = `${baseURL}/${path}/${heading}/${resource}`
	console.log('INFO: try ',uRL);
	try {	
		const response = await fetch(uRL);
		const hTML = await response.text();
		const resourceTriad = [resource,hTML,heading];
		hTMLWriter(resourceTriad)

		return resourceTriad;
	} catch (err) {
		console.log(err);
	}
}

const hTMLWriter = (resourceTriad) => {
	const [ resource,hTML,heading ] = resourceTriad;
	console.log('INFO:','write',resource,' to ', heading);
	if(heading === 'appendix') {
		main.innerHTML = `<ol class="columnlist"><h2 class="uppercase offscreen">Appendix</h2>${hTML}</ol>`
	}
	return resourceTriad;
}

// DOM ///////////////////////////////////////////////////////////

const main = document.querySelector('main');
const nav = document.querySelector('nav');
const navOLList = nav.querySelectorAll('ol');



// LISTENERS ////////////////////////////////////////////////////



// DO ///////////////////////////////////////////////////////////

// console.log(exhibit.title,exhibit.helloWorld());
// console.log(appendix.title,appendix.helloWorld());

console.log(navOLList);


// const heading = headings.appendix;
// const resource = appendix.table;
// hTMLLoader(baseURL,hTMLResourcePath,heading,resource);

// for (let oL of oLList ) {
// 	let heading = oL.id.split('-')[0];
// 	for (let lI of oL.children) {
// 		let el = lI.firstChild.href.split('#')[1];
// 		console.log(heading,el);
// 	}	
// }
