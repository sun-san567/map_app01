let map;
let marker;


// Google Mapを初期化する関数
function initMap() {
  // 東京駅の座標
  const tokyoStation = new google.maps.LatLng(35.6811673, 139.7670516);

  // 初期表示のオプション
  const Options = {
    zoom: 15,
    center: tokyoStation,
    mapTypeId: "roadmap",
    region: "JP",
  };

  // 地図を表示
  map = new google.maps.Map(document.getElementById("map"), Options);

  marker = new google.maps.Marker({
    position: tokyoStation,
    map: map,
  });
}


// ボタンをクリックした時の関数
function moveToRandomLocation() {
  const minLat = 30.591;
  const maxLat = 45.3122;
  const minLng = 129.339;
  const maxLng = 145.49;

  const latitude = Math.random() * (maxLat - minLat) + minLat;
  const longitude = Math.random() * (maxLng - minLng) + minLng;

  const newLocation = new google.maps.LatLng(latitude, longitude);

  map.setCenter(newLocation);
  marker.setPosition(newLocation);
  // 周辺の観光スポットを検索
// 正: searchNearbyPlaces(newLocation);
}



// クリックイベント
const sendButton = document.querySelector("#send-button");
sendButton.addEventListener("click", moveToRandomLocation);
