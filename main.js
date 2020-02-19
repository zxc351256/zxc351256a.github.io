$(function(){
	$('#button').click(function(){
		var h	= $('#height').val(),
			w	= $('#weight').val(),
			a	= $('#age').val(),
			s	= $('#sex').val();

		if( h == '') {
			alert('請輸入身高');
		} else if(h > 250) {
			alert('請輸入正確身高');
		}else if(w == '') {
			alert('請輸入體重');
		}else if(h > 300) {
			alert('請輸入正確體重');
		}else if(a == '') {
			alert('請輸入年齡');
		}else if(a > 120) {
			alert('請輸入正確年齡');
		}else {
			var bmi = w / ((h/100) * (h/100)),
				fat = (1.2 * bmi) + (0.23 * a - 5.4) - (10.8 * s);
			$('#BMI').val(Math.round(bmi*100)/100);
			$('#FAT').val(Math.round(fat*100)/100);
		}
	});
	$('#Reset').click(function(){
		$('#height').val('');
		$('#weight').val('');
		$('#age').val('');
		$('#BMI').val('');
		$('#FAT').val('');
	});
});
