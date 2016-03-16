$( document ).ready(function() {

(function () {
	var url = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X'
	
	handleData = function (data) {
		$('.aviso').append('<div class="alert alert-danger" role="alert"><b>AVISO IMPORTANTE:</b> Promoções válidas somente até o dia'+ 					'<b>'+data.data.reference.timestamp+'</b>, aproveite agora mesmo!</div>');

		var destaque = data.data.reference.item;
		var image = destaque.imageName;
		image = image.replace("//", "http://");
		$('.destaque').append('<div class="col-sm-6 col-md-12">'+
							'<div class="thumbnail">'+
								((destaque.oldPrice !== null) ? '<div class="text-center"><span class="glyphicon glyphicon-star" aria-hidden="true"></span><small> Desconto especial</small></div>' : '')+
								'<img src='+image+'>'+
								'<div class=" text-center caption">'+
									'<h4 class="titulo">'+((destaque.name !== null) ? destaque.name : '')+'</h4>'+
									'<small class="codigo">'+((destaque.businessId !== null) ? 'Cód. item: '+destaque.businessId : '')+'</small>'+
									'<p class="preco-old">'+((destaque.oldPrice !== null) ? 'De: '+destaque.oldPrice : '')+'</p>'+
									'<p class="preco">'+((destaque.price !== null) ? 'Por: '+destaque.price : '')+'</p>'+
									'<p class="pagamento">'+((destaque.productInfo.paymentConditions !== null) ? destaque.productInfo.paymentConditions : '')+'</p>'+
									'<p><a target="_blank" href="'+destaque.detailUrl+'" class="btn btn-primary" role="button">Comprar</a> <a href="'+destaque.detailUrl+'" class="btn btn-default" role="button">Detalhes</a></p>'+
								'</div>'+
							'</div>'+
						'</div>');		
			$(data.data.recommendation).each(function(i,f) {
				var image = f.imageName;
				image = image.replace("//", "http://");
				var link = f.detailUrl;
				link = link.replace("//", "http://");

				$('.recomendados').append('<div class="col-sm-6 col-md-3">'+
							'<div class="thumbnail">'+
								((f.oldPrice !== null) ? '<span class="glyphicon glyphicon-star" aria-hidden="true"></span><small> Desconto especial</small>' : '')+
								'<img src='+image+'>'+
								'<div class="caption">'+
									'<h4 class="titulo">'+((f.name !== null) ? f.name : '')+'</h4>'+
									'<small class="codigo">'+((f.businessId !== null) ? 'Cód. item: '+f.businessId : '')+'</small>'+
									'<p class="preco-old">'+((f.oldPrice !== null) ? 'De: '+f.oldPrice : '')+'</p>'+
									'<p class="preco">'+((f.price !== null) ? 'Por: '+f.price : '')+'</p>'+
									'<p class="pagamento">'+((f.productInfo.paymentConditions !== null) ? f.productInfo.paymentConditions : '')+'</p>'+
									'<p><a target="_blank" href="'+link+'" class="btn btn-primary" role="button">Comprar</a> <a href="'+link+'" class="btn btn-default" role="button">Detalhes</a></p>'+
								'</div>'+
							'</div>'+
						'</div>');
			})
		           
		},

	X = handleData;

	$.ajax({
		url: url,
                dataType: 'jsonp',
	});
})();
});
