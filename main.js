const apikey = '8e9fe67efd50480917691f60aa288c8a';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';



 const searchBox = document.querySelector('.search input');
 const searchBtn = document.querySelector('.search button');
 const weatherIcon = document.querySelector('.weather-icon');


async function checkweather(city) {

     const resp = await fetch(`${apiUrl}${city}&appid=${apikey}`);
    
          const data = await resp.json();

        
 


  
      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
      document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
      document.querySelector('.wind').innerHTML = data.wind.speed +'km/h';

      const weatherMain = data.weather[0].main.toLowerCase();

      if(weatherMain.includes('clouds')){
        weatherIcon.src = 'clouds.png';
      }else if(weatherMain.includes('rain')){
        weatherIcon.src = 'rain.png';
      }else if(weatherMain.includes('clear')){
        weatherIcon.src = 'clear.png';
      }else if(weatherMain.includes('drizzle')){
        weatherIcon.src = 'drizzle.png';
      }else if(weatherMain.includes('mist')){
        weatherIcon.src = 'mist.png';
      }else if(weatherMain.includes('snow')){
        weatherIcon.src = 'snow.png';
      }





      searchBtn.addEventListener('click' , ()=> {
        const city = searchBox.value;
        checkweather(city);
    
        });

};

 
checkweather('city');

function updateclock() {
  var datatime = new Date();
  var  h = datatime.getHours();
  var m = datatime.getMinutes();
  var s = datatime.getSeconds();

  var  ampm = document.getElementById('ampm');
  if (h>=12){
      ampm.innerHTML = 'PM';
  }else {
      ampm.innerHTML= 'AM';
  }

  document.getElementById('Hours').innerHTML=h;
  document.getElementById('minutes').innerHTML=m;
  document.getElementById('seconds').innerHTML=s;

  setTimeout (() =>{
      updateclock()

  },1000)
 


 
  
}
updateclock()












