let items = []

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
	let nameProduct = document.querySelector('input[name=name_product]').value;
	let priceProduct = document.querySelector('input[name=value_product]').value;

	items.push({
		nome: nameProduct,
		valor: priceProduct
	})
	alert(items[0].nome)
})
