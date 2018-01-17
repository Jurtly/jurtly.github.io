// First the mobile page check


  var mobile = 'i dont know';
  testExp = new RegExp('Android|webOS|iPhone|iPad|' +
    		       'BlackBerry|Windows Phone|'  +
    		       'Opera Mini|IEMobile|Mobile' , 
    		      'i');
  
  if (testExp.test(navigator.userAgent)) {
       document.getElementById("device").innerHTML =
       		"Your device is a Mobile Device";
         mobile = 'true'
  } else {
       document.getElementById("device").innerHTML = 
       		"Your device is NOT a Mobile Device";
         mobile = 'false';
  };


// NEED TO WORK ON BUILDING DYNAMIC BOXES WITH THE JS TO CLEAN UP HTML

// NEXT IS THE YOUTUBE API --------------------------------------------------------

  // my extra code, putting on top
      var nextScene =  false;
      var Videobox = document.getElementById('video-background');
      
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '812',
          width: '375',
          videoId: 'OsQ-cUDpV6Q',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
          },
          playerVars: {
            rel: 0,
            controls: 0,
            fs: 1,
            showinfo: 0
          }
        });
        checkScene();
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(pauseVideo, 9998);
          done = true;
         }
         if (event.data == YT.PlayerState.PAUSED && done) { 
           alert('Check');
           nextScene = true;
         };
      }
        function pauseVideo() {
          player.pauseVideo();
        }
        function stopVideo() {
          player.stopVideo();
        }
        function getDuration() {
        player.getDuration();
        }
        
        function checkScene() {
          if (nextScene == true) {
            alert('nextscene is true');
            Videobox.style.visiblity = 'hidden';
            console.log('box should be hidden');
          }
        }; 
      

  
// -------------------- END YOUTUBE API ----------------------------------------
