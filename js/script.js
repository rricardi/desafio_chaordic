$( document ).ready(function() {
	/*$.ajax({
	        url: "js/challenge.json",
	        dataType: 'json',
		success: function(dados) {
//		console.log(dados.data.widget.size);
			$('.qt-estoque').append('Atualmente nossa loja contem '+dados.data.widget.size+' produto(s) em estoque, aproveite nossos precos!');
			$(dados.data.recommendation).each(function(i,f) {
				$('.produtos .thumbnail img').attr('src', f.imageName);
				//$('.produtos .titulo').append(f.name+"<br><br>");
				//$('.produtos .codigo').append(f.businessId+"<br><br>");
				//$('.produtos a').attr('href', f.detailUrl);
				//$('.produtos a').attr('href', f.detailUrl);
				/*
				console.log(f.price);
				console.log(f.oldPrice);
				console.log(f.productInfo.paymentConditions);
			})
		}
	});*/

(function () {
            console.log('Start Test');

            var url = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X'

                handleData = function (data) {
		$('.qt-estoque').append('Atualmente nossa loja contem '+data.data.widget.size+' produto(s) em estoque, aproveite nossos precos!');
                    console.log('Data: ', data);
                },

                X = handleData;

            $.ajax({
                url: url,
                dataType: 'jsonp',
            });
        })();




});
