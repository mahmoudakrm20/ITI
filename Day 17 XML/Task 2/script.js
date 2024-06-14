var xhr = new XMLHttpRequest();
xhr.open('GET', 'rockbands.json');
xhr.send();
xhr.addEventListener('readystatechange',function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            var bands = JSON.parse(xhr.response);
            
            var bandSelect = document.getElementById('bandSelect');
            var artistSelect = document.getElementById('artistSelect');
            var goButton = document.getElementById('goButton');
            console.log(bands)
          
            for (var band in bands) {
                var option = document.createElement('option');
                console.log(band)
                option.value = band;
                option.textContent = band;
                bandSelect.appendChild(option);
            }

            bandSelect.addEventListener('change', function () {
                var selectedBand = bandSelect.value;
                var bandArtists = bands[selectedBand];

                artistSelect.innerHTML = '<option value="">Select an artist</option>';

                bandArtists.forEach(function (artist) {
                    var option = document.createElement('option');
                    option.value = artist.value;
                    option.textContent = artist.name;
                    artistSelect.appendChild(option);
                });
            });

            goButton.addEventListener('click', function () {
                if (artistSelect.value) {
                    window.open(artistSelect.value, '_blank'); 
                }
            });
        } else {
            console.error('Failed to fetch data: ' + xhr.statusText);
        }
    }
})
