fetch("http://localhost:3000/konyv")
.then(x => x.json())
.then(y => konyv(y));

function konyv(y){
    console.log(y)

    var sz = ""
    y.forEach(elem => {
        sz += 
        `
        <div class="col-sm-6" id="oszlop2">
            <a href="leiras.html" target="_blank"><p>${elem.konyv_cim}</p></a>
            <img src="${elem.konyv_kep}" title="${elem.konyv_cim}">
        </div>
        `
    });

    
    document.getElementById("oszlop").innerHTML = sz
}