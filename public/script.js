$(document).ready(async function() {
  const data = {};
  $("#save").on("click", async function() {
    if ($("input[name=parol1]").val() === $("input[name=parol]").val()) {
      data.parol = $("input[name=parol]").val();
      const psw = await fetch("http://localhost:4000/api/add-parol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(res => res.json());
      alert(psw.message);
    } else {
      alert("parols are not same");
    }
  });
  $("#logIn").on("click", async function() {
    const some=await fetch(`http://localhost:4000/api/look-parol`).then(res=>res.json());    
    if (some.data === $("input[name=logInParol]").val()) {
      $(this).attr('href','/day1');
      window.location =  $(this).attr('href');
    } else{
      $("input[name=logInParol]").addClass('shake');
    } 
  });
  $(window).keydown(async function(event){
    if(event.keyCode===13 || event.which===13){
    const some=await fetch(`http://localhost:4000/api/look-parol`).then(res=>res.json());    
    if (some.data === $("input[name=logInParol]").val()) {
      $("#logIn").attr('href','/day1');
      window.location =  $("#logIn").attr('href');
    } else{
      $("input[name=logInParol]").addClass('shake');
    } 
  }
  })
  // $(window).keydown(function(e){
  //   $(`div[data-key="${e.keyCode}"]`).addClass('biger');
  // })

  function removeTransition(e) {
    
    if (e.propertyName !== 'transform') return;
    $(this).removeClass('playing');
  }

  function playSound(e) {
    // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = $(`div[data-key="${e.keyCode}"]`);
    // if (!audio) return;

    key.addClass('playing');
    // audio.currentTime = 0;
    // audio.play();
  }

  const keys = Array.from($('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
  // keys.forEach(key => $(document).on('transitionend', $.key, removeTransition));
  window.addEventListener('keydown', playSound);
});

