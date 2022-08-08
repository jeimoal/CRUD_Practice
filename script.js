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

	crudTst.createBtn.addEventListener('onclick', crudTst.newCrudItem);
},

newCrudItem: () => {
	alert('deu certo');
},

}

window.addEventListener('load', crudTst.init);