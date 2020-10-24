var counter = 1500;


		setInterval(function(){
			counter--;

			if( counter >= 0 ){
				id = document.getElementById("count");
				id.innerHTML = counter;
			}

			if( counter === 0 ){
				id.innerHTML = "Break";
        
        
      // add button element here to refresh
      //add function that does every 5 min

			}
		}, 1000);

   