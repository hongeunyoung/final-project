const API_KEY="d2c902d6ac6326cbb6156dacfebcb420"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    var placeName = `강남동 짜장면`

    var markers = [
        {
            position: new kakao.maps.LatLng(lat, lon)
        },
        {
            position: new kakao.maps.LatLng(lat, lon), 
            text: placeName // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다     
        }
    ];
    
    var staticMapContainer  = document.getElementById('staticMap'), // 이미지 지도를 표시할 div  
        staticMapOption = { 
            center: new kakao.maps.LatLng(lat, lon), // 이미지 지도의 중심좌표
            level: 3, // 이미지 지도의 확대 레벨
            marker: markers // 이미지 지도에 표시할 마커 
        };    
    
    // 이미지 지도를 생성합니다
    var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
    
    var geocoder = new kakao.maps.services.Geocoder();

    searchAddrFromCoords(staticMap.getCenter(), displayCenterInfo);

    function searchAddrFromCoords(coords, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
    }
    
    function searchDetailAddrFromCoords(coords, callback) {
        // 좌표로 법정동 상세 주소 정보를 요청합니다
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }
    
    // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
    function displayCenterInfo(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            var infoDiv = document.getElementById('centerAddr');
    
            for(var i = 0; i < result.length; i++) {
                // 행정동의 region_type 값은 'H' 이므로
                if (result[i].region_type === 'H') {
                    var addr=result[i].address_name;
                    var addr2=addr.split(' ')
                    var addr3=addr2[2]
                    infoDiv.innerHTML = '<식당 정보 보기>';
                    infoDiv.innerHTML=`<a href=https://map.kakao.com/?map_type=DEFAULT&map_hybrid=false&q=강남동%20짜장면&from=total&from=total class=restu>`+infoDiv.innerHTML+`</a>`
                    const city = document.querySelector("#location p:first-Child")
                    city.innerText = `현재 위치: ${addr}`;
                    // var aTag = document.createElement('a');
                    // aTag.setAttribute('href',`https://map.kakao.com/?from=total&nil_suggest=btn&q=강남동20%짜장면&tab=place`);
                    // // aTag.innerText = "link text";
                    // infoDiv.appendChild(aTag);
                    break;
                }
            }
        }    
    }
    

    fetch(url).then(response => response.json()).then(data => {
        // const city = document.querySelector("#location p:first-Child")
        const weather = document.querySelector("#location p:nth-Child(2)")
        const location = document.querySelector("#location p:nth-Child(3)")
        // city.innerText = `현재 위치: ${data.name}`;
        weather.innerText = `현재 날씨: ${data.weather[0].main} / 현재 온도: ${data.main.temp}`;
        location.innerText= `위도: ${lat}  경도: ${lon}`
        });

    
    
}

function onGeoError(){
    alert("Can't find you. No weather for ypu")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)

