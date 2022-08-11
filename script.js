let crudTst = {
createBtn: null, //access button
deleteBtn: null, //access button
addBtn: null, //access button
textArea: null, //access textarea button

init: () => {
	crudTst.createBtn = document.querySelector('#hCreateBtn');
	crudTst.deleteBtn = document.querySelector('#hDeleteBtn');
	crudTst.addBtn = document.querySelector('#addBtn');
	crudTst.textArea = document.querySelector('#newTxt');

	crudTst.createBtn.addEventListener('click', crudTst.newCrudItem);
	crudTst.addBtn.addEventListener('click', crudTst.addCrudItem);
},

newCrudItem: () => {
	crudTst.textArea.hidden = false;
	crudTst.addBtn.hidden = false;
},

addCrudItem: () => {
	div = document.querySelector('#crudItem');
	divLyt = document.createElement('div');
	divLyt.setAttribute('class', 'crudElement');
	div.appendChild(divLyt);

	crudLayout = document.createElement('textarea');
	crudLayout.className = 'crudDesc';
	crudLayout.disabled = true;
	crudTxt = crudTst.textArea.value;
	crudLayout.textContent = crudTxt;
	divLyt.appendChild(crudLayout);

	crudLayout = document.createElement('button');
	crudLayout.className = 'crudEdit';
	crudTxt = document.createTextNode('edit');
	crudLayout.appendChild(crudTxt);
	divLyt.appendChild(crudLayout);
	crudLayout = crudTst.editItem();

	crudLayout = document.createElement('button');
	crudLayout.className = 'crudDel';
	crudTxt = document.createTextNode('delete');	
	crudLayout.appendChild(crudTxt);
	divLyt.appendChild(crudLayout);
	crudLayout = crudTst.deleteItem();
},

deleteItem: () => {
	let crudDel = document.querySelectorAll('.crudDel');
	for(i=0; i < crudDel.length; i++) {
		crudDel[i].onclick = function() {
			let rmv = this.parentElement.remove();
		};
	};
},

editItem: () => {
	let crudEdit = document.querySelectorAll('.crudEdit');
	for(i=0; i < crudEdit.length; i++) {
	crudEdit[i].onclick = function() {
		let descript = document.querySelectorAll('.crudDesc');
		for(n=0; n < descript.length; n++) {
			descript[i].disabled = false; //why it returns undefined?
			this.textContent = 'save';
			};
		};
	};
},

}

window.addEventListener('load', crudTst.init);
