//http://api.aladhan.com/v1/timingsByCity/:date?country=DZ&city=Guelma

let X  = [  
{name:"Guelma",
arbicName:"قالمة"
},
{
  name:"Oran",
  arbicName:"وهران"},
  {
    name:"Alger",
  arbicName:"الجزائر العاصمة"},
  {
    name:"Annaba",
    arbicName:"عنابة"
  }

];

  getTime(X[0].name);

  for(let y of X) {
    const Z = ` <option >${y.arbicName} </option>`;
    document.getElementById("p").innerHTML += Z;
}

let params;

document.getElementById("p").addEventListener("change",()=>{

  const A =document.getElementById("p").value; 
   for(let y of X){
    if(A == y.arbicName){
         getTime(y.name);
          document.getElementById('City-name').innerHTML = A;

        }

   } 
 

} )


function getTime(cityName){
   const params = {
        country:"DZ",
        city:cityName
    }

    axios.get("http://api.aladhan.com/v1/timingsByCity", {
   
    params:params 
      })
      .then(function (response) {
        console.log(response.data.data);
        const timings = response.data.data.timings;
        setTime("fajr",timings.Fajr)
        setTime("Lvds",timings.Sunrise)
        setTime("dohr",timings.Dhuhr)
        setTime("asr",timings.Asr)
        setTime("maghreb",timings.Maghrib)
        setTime("isha",timings.Isha);
        const DateRead = response.data.data.date.readable;
        const weekDay = response.data.data.date.hijri.weekday.ar;
        const date = weekDay +' ' + DateRead
    
        document.getElementById('date').innerHTML =date;
    
    })
      .catch(function (error) {
        console.log(error);
      })

}

  


function setTime(id,time){
    document.getElementById(id).innerHTML = time;


}

