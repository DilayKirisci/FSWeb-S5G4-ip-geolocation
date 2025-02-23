//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
	await axios({
		method: "get",
		url: "https://apis.ergineer.com/ipgeoapi/85.107.123.27",
	})
		.then(function (response) {
			return response.data;
		})
		.then(function (a) {
			benimIP = a;
		});
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/85.107.123.27
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.

*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

function myIp(data) {
	const body = document.querySelector("body");
	const card = document.createElement("div");
	card.classList.add("card");
	const img = document.createElement("img");
	img.src = "data.ülkebayrağı";
	const cardInfo = document.createElement("div");
	cardInfo.classList.add("card-info");
	const cardH3 = document.createElement("h3");
	cardH3.classList.add("ip");
	cardH3.textContent = data.sorgu;
	const pUlke = document.createElement("p");
	pUlke.classList.add("ulke");
	pUlke.textContent = `{ülke bilgisi (${data.ülke})}`;
	const p1 = document.createElement("p");
	const p2 = document.createElement("p");
	const p3 = document.createElement("p");
	const p4 = document.createElement("p");
	const p5 = document.createElement("p");
	p1.textContent = `Enlem: {${data.enlem}} Boylam: {${data.boylam}}`;
	p2.textContent = `Şehir: {${data.bölgeAdı}}`;
	p3.textContent = "Saat dilimi: " + data.saatdilimi;
	p4.textContent = `Para birimi: {${data.parabirimi}}`;
	p5.textContent = `ISP: {${data.isp}}`;
	cardInfo.appendChild(cardH3);
	cardInfo.appendChild(pUlke);
	cardInfo.appendChild(p1);
	cardInfo.appendChild(p2);
	cardInfo.appendChild(p3);
	cardInfo.appendChild(p4);
	cardInfo.appendChild(p5);
	card.appendChild(img);
	card.appendChild(cardInfo);
	body.appendChild(card);
}

axios
	.get("https://apis.ergineer.com/ipgeoapi/85.107.123.27")
	.then((response) => {
		console.log(response);
		myIp(response.data);
	})
	.catch((error) => {
		console.error(error);
	});
