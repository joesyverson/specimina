import { exhibit } from './module/script/exhibit.js';
import { appendix } from './module/script/appendix.js';


// FUNCT /////////////////////////////////////////////////////////

const hTMLLoader = async (uRL) => {
	try {	
		const response = await fetch(uRL);
		const hTML = await response.text();
		console.log(hTML);
	} catch (err) {
		console.log(err);
	}
}

// VARS /////////////////////////////////////////////////////////

const main = document.querySelector('main');

// const oLs = main.querySelectorAll('ol');

// const appendix = oLs[1];

// LISTENERS ////////////////////////////////////////////////////


// DO ///////////////////////////////////////////////////////////

console.log(appendix);
console.log(appendix.table);
console.log(appendix.helloWorld());

hTMLLoader(appendix.table);