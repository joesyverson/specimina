import { exhibit } from './module/conf/exhibit.js';
import { appendix } from './module/conf/appendix.js';

// VARS /////////////////////////////////////////////////////////

const protocol = 'http';
const domain = 'localhost';
const port = '8080';
const hTMLResourcePath = 'module/html';
const baseURL = `${protocol}://${domain}:${port}`

// FUNCT /////////////////////////////////////////////////////////

const componentLoader = async (evt) => {
	evt.preventDefault();
	const [ menuPath,id ] = evt.target.id.split('-');
	const uRL = `${baseURL}/${hTMLResourcePath}/${menuPath}/${id}.html`;
	console.log('INFO: try ',uRL);
	try {	
		const response = await fetch(uRL);
		const hTML = await response.text();
		const resourceTriad = [id,hTML,menuPath];
		componentWriter(resourceTriad)
		return resourceTriad;
	} catch (err) {
		console.log(err);
	}
}

const componentWriter = (resourceTriad) => {
	const [ id,hTML,menuPath ] = resourceTriad;
	console.log('INFO:','write',id,' to ', menuPath);
	main.innerHTML = `<ol class="columnlist"><h2 class="uppercase offscreen">${menuPath}</h2>${hTML}</ol>`
	return resourceTriad;
}

const menuWriter = (menuType,menu,componentKey) => {
	let newLi = document.createElement('li');
	let newA = document.createElement('a');
	let componentObject = menuType.components[componentKey];
	let id = `${menuType.title}-${componentObject.id}`;
	newA.id = id;
	newA.innerText = componentObject.title;
	newA.href = `index.html#${id}`;
	newA.addEventListener('click',componentLoader,false);
	newLi.append(newA);
	menu.append(newLi);
}

// DOM ///////////////////////////////////////////////////////////

const main = document.querySelector('main');
const nav = document.querySelector('nav');
const navOLList = nav.querySelectorAll('ol');


// DO ///////////////////////////////////////////////////////////

console.log(exhibit.title,exhibit.helloWorld());
console.log(appendix.title,appendix.helloWorld());

for (let oL of navOLList ) {
	let [ menu,responsivityRange ] = oL.id.split('-');
	if ( menu === 'exhibit' ) {
		for (let component in exhibit.components) {
			menuWriter(exhibit,oL,component);
		}
	} else {
		for (let component in appendix.components) {
			menuWriter(appendix,oL,component);
		}
	}
}
