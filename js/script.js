let items = []

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
	let nameProduct = document.querySelector('input[name=name_product]');
	let priceProduct = document.querySelector('input[name=price]');

	items.push({
		nome: nameProduct.value,
		valor: priceProduct.value
	})

	/*
	<div class="list-product-single">
		<h3>RedBull</h3>
		<h3 class="price-product"><span>R$ 20,00</span></h3>
	</div>
	*/

	let listProducts = document.querySelector('.list-products');
	let sum = 0;

	listProducts.innerHTML = ""
	items.map(function(val){
		sum+=parseFloat(val.valor);

		listProducts.innerHTML+=`
		<div class="list-product-single">
			<h3>`+val.nome+`</h3>
			<h3 class="price-product"><span>R$ `+val.valor+`</span></h3>
		</div>
		`;
	})

	sum = sum.toFixed(2)
	nameProduct.value = ""
	priceProduct.value = ""

	let elementSum = document.querySelector('.sum-product h1');
	elementSum.innerHTML = `R$ `+sum;

})
