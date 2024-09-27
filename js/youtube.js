// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// var player;   내가
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {            // id=player에서는 그것 그냥 이름 그대로  # 같은거 안 붙이고
    // height: '360',  내가   별도로 지정할 필요가 없다
    // width: '640',    내가 
    videoId: 'An6LvWQuj_8',        // 이 값이 중요하다 
    // events: {        내가  이부분도 필요없으니 지운다.
      // 'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange    
    // }
    // 제어를 할 몇가지 속성을 넣어 줄거다  아래에
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8'  //반복 재생할 유부브 영상 ID 목록
    },
    events : {
      onReady: function (event) {
        event.target.mute()
      }
    }

  });
}

