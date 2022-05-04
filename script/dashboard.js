const idk = (function(){
  window.addEventListener('scroll',(function(){
    let winTop = window.pageYOffset;
    if(winTop >= 30){
      
    }else{
    	
    }//if-else
  }));//win func.
});//ready func.

idk()

const sortbyTitle = document.querySelectorAll('.sortby .sortby-title h3');

sortbyTitle.forEach(title => title.addEventListener('mouseover',function(){
  title.classList.add('underscore')
}
  ))
sortbyTitle.forEach(title => title.addEventListener('mouseout',function(){
  title.classList.remove('underscore')
}
  ))

let listContainer = document.querySelector('.sort-list')

function showDefault(){
  listContainer.innerHTML = '';
  fetch('http://api.alquran.cloud/v1/surah')
	.then(res => res.json())
	.then(res => {
		res.data.forEach(surah => 
		listContainer.innerHTML += showSurah(surah.number,surah.englishName,surah.revelationType,surah.numberOfAyahs,surah.name)
		)
	})

function showSurah(num,engName,revel,verse,arab){
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
}}

showDefault()

const sortBySurah = document.getElementById('surah-btn')
sortBySurah.addEventListener('click',showDefault)

const sortByPara = document.getElementById('para-btn')
sortByPara.addEventListener('click', function(){
  
  listContainer.innerHTML = '';
  
  fetch('http://api.alquran.cloud/v1/meta')
    .then(data => data.json())
    .then(data => {
      let datas = data.data
      datas.juzs.references.forEach((juz,i) => {
       listContainer.innerHTML += showPara(i+1,datas.surahs.references[datas.juzs.references[i].surah-1].englishName,datas.juzs.references[i].ayah)
      })
    })
  
})

function showPara(num, surah, ayah) {
  	return ` 
  	<a href="#">
  	  <li>
  	    <div class="num">
  	      <h5>${num}</h5>
  	    </div>

  	    <div class="surah">
  	        <h5>Juz ${num}</h5>
  	        <p>Start from: ${surah} Ayah ${ayah}</p>
  	    </div>
  	  </li>
    	</a>`
  }

const sortByPage = document.getElementById('page-btn')
sortByPage.addEventListener('click', function(){
  
  listContainer.innerHTML = '';
  
  fetch('http://api.alquran.cloud/v1/meta')
    .then(data => data.json())
    .then(data => {
      let datas = data.data
      datas.pages.references.forEach((page,i) => {
       listContainer.innerHTML += showPages(i+1,datas.surahs.references[datas.pages.references[i].surah-1].englishName,datas.pages.references[i].ayah)
      })
    })
  
})

function showPages(num, surah, ayah) {
  	return ` 
  	<a href="#">
  	  <li>
  	    <div class="num">
  	      <h5>${num}</h5>
  	    </div>

  	    <div class="surah">
  	        <h5>Page ${num}</h5>
  	        <p>Start from: ${surah} Ayah ${ayah}</p>
  	    </div>
  	  </li>
    	</a>`
  }
