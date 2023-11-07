import { exhibit } from './module/conf/exhibit.js';
import { appendix } from './module/conf/appendix.js';
import { conf } from './module/conf/conf-dev.js';

console.log(exhibit.helloWorld());
console.log(appendix.helloWorld());
console.log(conf.helloWorld());

// DEFINE ///////////////////////////////////////////////////////

class Engine {
	constructor(exhibit,appendix) {
		this.exhibit = exhibit;
		this.appendix = appendix;
	}

	// just make the config module a class so these can actually be private
	baseURL = (() => {
		const protocol = conf.opts.protocol;
		const domain = conf.opts.domain;
		const port = conf.opts.port;
		const hTMLResourcePath = conf.opts.hTMLResourcePath;
		return `${protocol}://${domain}:${port}/${hTMLResourcePath}`;
	})();

	componentLoader = async (evt) => {
		evt.preventDefault ? evt.preventDefault() : console.log('INIT','...');
		const [menuPath,id] = evt.target.id.split('-');
		const uRL = `${this.baseURL}/${menuPath}/${id}.html`;
		
		console.log('INFO:','try',uRL);
		try {	
			const response = await fetch(uRL, {mode: 'same-origin'});
			const hTML = await response.text();
			const resourceTriad = [id,hTML,menuPath];
			this.componentWriter(resourceTriad);
			
			return resourceTriad;
		} catch (err) {
			console.log('ERRO:',err);
			let newLi = document.createElement('li');
			newLi.innerHTML = 'If you\'re seeing this, the most recent request failed. Try again or <a href="mailto:contact@la-leg.com">contact</a>.';
			mainOL.innerHTML = '';
			mainOL.append(newLi);
			mainH2.innerText = 'Request Failed';
			return err;
		}
	}

	componentWriter = (resourceTriad) => {
		const [id,hTML,menuPath] = resourceTriad;
		console.log('INFO:','write',id,'to', menuPath);
		mainH2.innerText = menuPath;
		mainOL.innerHTML= hTML;
		main.prepend(mainH2);

		return resourceTriad;
	}

	menuHandler = (navOLList) => {
		for (let oL of navOLList ) {
			oL.innerHTML = '';
			let [menu,responsivityRange] = oL.id.split('-');
			if ( menu === 'exhibit' ) {
				for (let component in this.exhibit.components) {
					this.menuWriter(exhibit,oL,component);
				}
			} else {
				for (let component in this.appendix.components) {
					this.menuWriter(appendix,oL,component);
				}
			}
		}

		return navOLList;
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

		return [menuType,menu,componentKey];
	}

}

const engine = new Engine(exhibit, appendix);
const main = document.querySelector('main');
const mainH2 = main.querySelector('h2');
const mainOL = main.querySelector('ol');
const nav = document.querySelector('nav');
const navOLList = nav.querySelectorAll('ol');
const mockEvent = {target: {id: 'exhibit-img'}};

// DO ///////////////////////////////////////////////////////////

engine.menuHandler(navOLList);
engine.componentLoader(mockEvent);
