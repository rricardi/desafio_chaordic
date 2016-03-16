$( document ).ready(function() {

(function () {
	var url = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X'
	
	handleData = function (data) {
		$('.qt-estoque').append('Atualmente nossa loja contém '+data.data.widget.size+' produto(s) em estoque, aproveite nossos preços!');
			$(data.data.recommendation).each(function(i,f) {
				var image = f.imageName;
				image = image.replace("//", "http://");
				var link = f.detailUrl;
				link = link.replace("//", "http://");

				$('.row').append('<div class="col-sm-6 col-md-4"><div class="thumbnail"><img src='+image+'><div class="caption"><h3 class="titulo">'+f.name+'</h3><p class="codigo">'+f.businessId+'</p><p class="preco">'+f.price+'</p><p class="preco-old">'+f.oldPrice+'</p><p class="pagamento">'+f.productInfo.paymentConditions+'</p><p><a target="_blank" href="'+link+'" class="btn btn-primary" role="button">Saiba Mais</a></p></div></div></div>');
			})
		           
		},

	X = handleData;

	$.ajax({
		url: url,
                dataType: 'jsonp',
	});
})();
});
