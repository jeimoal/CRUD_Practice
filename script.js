let crudTst = {
createBtn: null, //access button
deleteBtn: null, //access button
addBtn: null, //access button
textArea: null, //access textarea button

//initiate items
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

//create and display a crud item
addCrudItem: () => {
	div = document.querySelector('#crudItem');
	divLyt = document.createElement('div');
	divLyt.setAttribute('class', 'crudElement');
	div.appendChild(divLyt);

	crudLayout = document.createElement('span');
	crudLayout.className = 'crudDesc';
	crudTxt = crudTst.textArea.value;
	crudLayout.textContent = crudTxt;
	divLyt.appendChild(crudLayout);

	crudLayout = document.createElement('button');
	crudLayout.className = 'crudEdit';
	crudTxt = document.createTextNode('edit');
	crudLayout.appendChild(crudTxt);
	divLyt.appendChild(crudLayout);

	crudLayout = document.createElement('button');
	crudLayout.className = 'crudDel';
	crudTxt = document.createTextNode('delete');	
	crudLayout.appendChild(crudTxt);
	divLyt.appendChild(crudLayout);
	crudLayout = crudTst.deleteItem();
},

//does a loop, adding a remove function to every delete button
deleteItem: () => {
	let crudDel = document.querySelectorAll('.crudDel');
	for(i=0; i < crudDel.length; i++) {
		crudDel[i].onclick = function() {
			let rmv = this.parentElement.remove();
		};
	}
},

}

window.addEventListener('load', crudTst.init);
