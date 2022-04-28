const sortbyTitle = document.querySelectorAll('.sortby .sortby-title h3');
sortbyTitle.forEach(title => title.addEventListener('mouseover',function(){
  title.classList.toggle('underscore')
}
  ))
console.log(sortbyTitle)
