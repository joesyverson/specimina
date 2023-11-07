import { exhibit } from './module/conf/exhibit.js';
import { appendix } from './module/conf/appendix.js';

class Engine {
	constructor(exhibit, appendix) {
		this.exhibit = exhibit;
		this.appendix = appendix;
	}

	baseURL = (() => {
		const protocol = 'http';
		const domain = 'localhost';
		const port = '8080';
		const hTMLResourcePath = 'module/html';
		return `${protocol}://${domain}:${port}/${hTMLResourcePath}`		
	})();

	componentLoader = async (evt) => {
		evt.preventDefault ? evt.preventDefault() : console.log('INIT','...');
		const [ menuPath,id ] = evt.target.id.split('-');
		const uRL = `${this.baseURL}/${menuPath}/${id}.html`;
		
		console.log('INFO:','try',uRL);
		try {	
			const response = await fetch(uRL);
			const hTML = await response.text();
			const resourceTriad = [id,hTML,menuPath];
			this.componentWriter(resourceTriad)
			
			return resourceTriad;
		} catch (err) {
			console.log('ERRO:',err);

			return err
		}
	}

	componentWriter = (resourceTriad) => {
		const [ id,hTML,menuPath ] = resourceTriad;
		console.log('INFO:','write',id,'to', menuPath);
		main.innerHTML = `<ol class="columnlist"><h2 class="uppercase offscreen">${menuPath}</h2>${hTML}</ol>`
		return resourceTriad;
	}

	menuWriter = (menuType,menu,componentKey) => {
		let newLi = document.createElement('li');
		let newA = document.createElement('a');
		let componentObject = menuType.components[componentKey];
		let id = `${menuType.title}-${componentObject.id}`;
		newA.id = id;
		newA.innerText = componentObject.title;
		newA.href = `index.html#${id}`;
		newA.addEventListener('click',this.componentLoader,false);
		newLi.append(newA);
		menu.append(newLi);
	}

}


// DOM ///////////////////////////////////////////////////////////

const main = document.querySelector('main');
const nav = document.querySelector('nav');
const navOLList = nav.querySelectorAll('ol');

// DO ///////////////////////////////////////////////////////////

console.log(exhibit.helloWorld());
console.log(appendix.helloWorld());
const engine = new Engine(exhibit, appendix);


for (let oL of navOLList ) {
	let [ menu,responsivityRange ] = oL.id.split('-');
	if ( menu === 'exhibit' ) {
		for (let component in engine.exhibit.components) {
			engine.menuWriter(exhibit,oL,component);
		}
	} else {
		for (let component in engine.appendix.components) {
			engine.menuWriter(appendix,oL,component);
		}
	}
}

const mockEvent = {target: {id: 'exhibit-img'}};
engine.componentLoader(mockEvent);
