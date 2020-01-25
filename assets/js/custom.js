$("button").click(sayisalOyna);
 
/*toplarımızı oluşturup ekrana yerleştiriyoruz.*/
for(i=1;i<50;i++)
{
	$("<div class='top'>").appendTo($("body")).html(i);	
}
 
 
function sayisalOyna(){
/*sayıların belirlenmesi için gerekli global değişkenlerin tanımlanması*/
var toplar=[],sayi,sayac=0;
 
/*şanslı sayıları belirliyoruz*/
while(sayac<6)
{
	sayi=Math.floor(Math.random()*49)+1;
	if(toplar.indexOf(sayi)==-1)
	{
		toplar.push(sayi);
		sayac++;
	}
}
/*arkaplanı ilk rengi ile boyuyoruz. ikinci ve diğer tıklamalar için önemli*/
$(".top").css({"background":"rgba(59,182,233,1.00)"});
 
$(".top").each(function(index, element) {
  
   var kutuSayi=Number($(element).html());
   if(toplar.indexOf(kutuSayi)>=0)
   {
   		$(element).css({"background":"red"});
   }
});
 
}