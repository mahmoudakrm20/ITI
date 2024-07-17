        var audio=document.getElementsByTagName('audio')[0];
        var audioImage = document.getElementById('audioImage');
        var playBtn=document.getElementById('play');
        var pauseBtn=document.getElementById('pause');
        var stopBtn=document.getElementById('stop');
        var volumeRange=document.getElementById('volume');
        var timeRange=document.getElementById('time');
        //Buttons
        playBtn.addEventListener('click',function(){
            audio.play();
        })
        pauseBtn.addEventListener('click',function(){
            audio.pause()
        })
        stopBtn.addEventListener('click',function(){
            audio.pause();
            audio.currentTime = 0;
        })
        volumeRange.addEventListener('input',function(){
            audio.volume=volumeRange.value;
        })
        audio.addEventListener('durationchange',function(){
            timeRange.max=audio.duration;
        })
        timeRange.addEventListener('input',function(){
            audio.currentTime=timeRange.value;
        })
        audio.addEventListener('timeupdate', function() {
            timeRange.value = audio.currentTime;
        });
        // 
        var rows = document.getElementsByClassName("row")
        for (let i = 0; i <= 3; i++) {
            rows[i].addEventListener('click', function() {
                console.log("Clicked row " + (i + 1));
                audio.src = "./Audio/" + (i + 1) + ".mp3";
                audioImage.src = "./Photos/" + (i + 1) + ".jpg";
            });
        }