
  document.querySelector('.button-callback').addEventListener('click', function(){
    document.querySelector('.modal').classList.toggle('modal-visible');
  });
  document.querySelector('.modal').addEventListener('click', function(){
    document.querySelector('.modal').classList.toggle('modal-visible')
  })
