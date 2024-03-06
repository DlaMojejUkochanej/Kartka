function openCard() {
  const frontPage = document.getElementById('frontPage');
  const card = document.getElementById('card');
  
  frontPage.style.display = 'none';
  card.style.display = 'block';
  card.classList.add('open');
}

function closeCard() {
  const frontPage = document.getElementById('frontPage');
  const card = document.getElementById('card');
  
  card.style.display = 'none'
  frontPage.style.display = 'block';
  card.classList.remove('open');
}


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
