function countries(){
    let countryId = document.getElementById('countries');
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        const jsApi = JSON.parse(this.response);
        let length = jsApi.data.length;
        let output= `<option id="none">country</option>`;
        for(let i=0;i<length;i++){
            output +=`<option>${jsApi.data[i].country}</option>`
            countryId.innerHTML=output;
        }
    }
    xhr.open('get','https://countriesnow.space/api/v0.1/countries',true);
    xhr.send()
}
countries();
