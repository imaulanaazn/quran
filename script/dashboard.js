const sortbyTitle = document.querySelectorAll('.sortby .sortby-title h3');
sortbyTitle.forEach(title => title.addEventListener('mouseover',function(){
  title.classList.add('underscore')
}
  ))
sortbyTitle.forEach(title => title.addEventListener('mouseout',function(){
  title.classList.remove('underscore')
}
  ))

fetch('http://api.alquran.cloud/v1/surah')
	.then(res => res.json())
	.then(res => {
		const listContainer = document.querySelector('.surah-list')
		res.data.forEach(surah => 
		listContainer.innerHTML += getListTemplate(surah.number,surah.englishName,surah.revelationType,surah.numberOfAyahs,surah.name)
		)
	})

function getListTemplate(num,engName,revel,verse,arab){
	return ` 
	<a href="#">
	  <li>
	    <div class="num">
	      <h5>${num}</h5>
	    </div>

	    <div class="surah">
	        <h5>${engName}</h5>
	        <p>${revel} - ${verse} VERSES</p>
	    </div>

	    <div class="arab">
	      ${arab}
	    </div>
	  </li>
  	</a>`
}

const idk = (function(){
  window.addEventListener('scroll',(function(){
    let winTop = window.pageYOffset;
    if(winTop >= 30){
      console.log(winTop)
    }else{
    	console.log(winTop)
    }//if-else
  }));//win func.
});//ready func.

idk()
