
//h3 elementi 
function rastgeleRenk() {
     const rastgeleDeger = () => Math.floor(Math.random() * 256);
     return `rgb(${rastgeleDeger()}, ${rastgeleDeger()}, ${rastgeleDeger()})`;
}

// Her saniyede bir rastgele renk uygula
setInterval(() => {
     document.querySelector("span").style.color = rastgeleRenk();
     document.querySelector("span").style.fontSize = "70px";
}, 1000);


//h2 elementi
const h2 = document.querySelector("h2")
h2.style.textDecorationLine = "underline";
h2.style.fontSize = "20px"
h2.style.fontWeight = "normal"




function saatiGuncelle() {
     const now = new Date();

     // Ay isimlerini tanımla
     const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

     // Tarih ve saat bileşenlerini al
     const ay = aylar[now.getMonth()];                         // Ay ismini al
     const gun = now.getDate().toString().padStart(2, '0');    // Günleri 01-31 arasında göster
     const yil = now.getFullYear();
     const saat = now.getHours().toString().padStart(2, '0');  // Saatleri 00-23 arasında göster
     const dakika = now.getMinutes().toString().padStart(2, '0'); // Dakikaları 00-59 arasında göster
     const saniye = now.getSeconds().toString().padStart(2, '0'); // Saniyeleri 00-59 arasında göster

     // Tarih ve saati istenen sırada biçimlendir
     const tarihSaat = `${ay} ${gun}, ${yil} ${saat}:${dakika}:${saniye}`;

     // Ekrana yazdır
     document.querySelector("h3").textContent = tarihSaat;
}


const h3 = document.createElement("h3");
h2.parentNode.insertBefore(h3, h2.nextSibling); // h3'ü h2'nin hemen altına ekler
document.querySelector("h3").style.fontSize = "20px";
h3.style.padding = "10px 20px"
h3.style.fontWeight = "normal"

// Her saniyede bir güncelle

setInterval(() => {
     document.querySelector("h3").style.backgroundColor = rastgeleRenk();
     saatiGuncelle()
}, 1000);


// ul li elementi
const li = document.querySelectorAll("li");
li.forEach(li => {
     li.style.listStyleType = "none"
     li.style.padding = "10px 20px"
     li.style.width = "500px"
     li.style.margin = "10px 0"
     li.style.border = "1px solid #333"
     li.style.backgroundColor = "lightgreen"
     if (li.textContent.toLowerCase().includes("done")) {
          li.style.backgroundColor = "green"
     } else if (li.textContent.toLowerCase().includes("ongoing")) {
          li.style.backgroundColor = "yellow"
     } else {
          li.style.backgroundColor = "red"
     }
})



