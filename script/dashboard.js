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

async function showDefault(){
	try{
		const res = await fetch('http://api.alquran.cloud/v1/surah')
		return res.json()	
	}catch(err){
		console.log(err)
	}	
}
function showSurah(){
	listContainer.innerHTML = '';
	showDefault()
	.then(res => {
		res.data.forEach(surah => 
		listContainer.innerHTML += 
		`<a href="#">
	  		<li>
				<div class="num">
				<h5>${surah.number}</h5>
				</div>

				<div class="surah">
					<h5>${surah.englishName}</h5>
					<p>${surah.revelationType} - ${surah.numberOfAyahs} VERSES</p>
				</div>

				<div class="arab">
				${surah.name}
				</div>
	  		</li>
  		</a>`
		)
	})
}

showSurah()

const sortBySurah = document.getElementById('surah-btn')
sortBySurah.addEventListener('click',showSurah)

async function getData(){
	try{
		const res = await fetch('http://api.alquran.cloud/v1/meta')
		const datas = await res.json()
		return datas
	}catch (err){
		console.log(err)
	}
}

function showLists(title,num, surah, ayah) {
	return ` 
	<a href="#">
	  <li>
		<div class="num">
		  <h5>${num}</h5>
		</div>

		<div class="surah">
			<h5>${title} ${num}</h5>
			<p>Start from: ${surah} Ayah ${ayah}</p>
		</div>
	  </li>
  </a>`
}


const sortByPara = document.getElementById('para-btn')
	sortByPara.addEventListener('click', function(){
		getData().then(data => {
			listContainer.innerHTML = '';
			let datas = data.data
			datas.juzs.references.forEach((hijb,i) => {
			 listContainer.innerHTML += showLists('Juz',i+1,datas.surahs.references[datas.juzs.references[i].surah-1].englishName,datas.juzs.references[i].ayah)
		  	})
		})
	})

const sortByPage = document.getElementById('page-btn')
	sortByPage.addEventListener('click', function(){
		getData().then(data => {
			listContainer.innerHTML = '';
			let datas = data.data
			datas.pages.references.forEach((hijb,i) => {
			 listContainer.innerHTML += showLists('Page',i+1,datas.surahs.references[datas.pages.references[i].surah-1].englishName,datas.pages.references[i].ayah)
		  	})
		})
	})

  const sortByHijb = document.getElementById('hijb-btn')
	sortByHijb.addEventListener('click', function(){
		getData().then(data => {
			listContainer.innerHTML = '';
			let datas = data.data
			datas.hizbQuarters.references.forEach((hijb,i) => {
			 listContainer.innerHTML += showLists('Hijb',i+1,datas.surahs.references[datas.hizbQuarters.references[i].surah-1].englishName,datas.hizbQuarters.references[i].ayah)
		  	})
		})
	})

