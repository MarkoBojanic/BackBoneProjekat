

    const form = document.getElementById('form');
   const jmbg = document.getElementById('jmbg');
   const ime = document.getElementById('ime');
  const prezime = document.getElementById('prezime');
   const godinarodjenja = document.getElementById('godinaRodjenja');
   const mestostanovanja= document.getElementById('mestoStanovanja');
  const adresastanovanja = document.getElementById('adresaStanovanja');
  const brojclanovaporodice = document.getElementById('brojClanovaPorodice');
   const brojtelefona = document.getElementById('brojTelefona');
   const emailadresa = document.getElementById('emailAdresa');
   const status = document.getElementById('status');

   form.addEventListener('submit',(e)=>{
       e.preventDefault();

       checkInputs();
      
        
    //    onClick="clearField()";

   });

   function clearField() {
    document.chatform.reset();
    }

   function checkInputs(){
    const jmbgValue = jmbg.value.trim();
    const imeValue = ime.value.trim();
   const prezimeValue = prezime.value.trim();
    const godinarodjenjaValue = godinarodjenja.value.trim();
    const mestostanovanjaValue= mestostanovanja.value.trim();
   const adresastanovanjaValue = adresastanovanja.value.trim();
   const brojclanovaporodiceValue = brojclanovaporodice.value.trim();
    const brojtelefonaValue = brojtelefona.value.trim();
    const emailadresaValue = emailadresa.value.trim();
    const statusValue = status.value.trim();

    if(jmbgValue == ''){

        setErrorFor(jmbg, 'Greska');
    }else{

        setSuccessFor(jmbg);
    }

    if(imeValue == ''){

        setErrorFor(ime, 'Greska');
    }else{

        setSuccessFor(ime);
    }

    if(prezimeValue == ''){

        setErrorFor(prezime, 'Greska');
    }else{

        setSuccessFor(prezime);
    }

    if(godinarodjenjaValue == ''){

        setErrorFor(godinarodjenja, 'Greska');
    }else{
        
        setSuccessFor(godinarodjenja);
    }

    if(mestostanovanjaValue == ''){

        setErrorFor(mestostanovanja, 'Greska');
    }else{
        
        setSuccessFor(mestostanovanja);
    }
    
    if(adresastanovanjaValue == ''){

        setErrorFor(adresastanovanja, 'Greska');
    }else{
        
        setSuccessFor(adresastanovanja);
    }

    if(brojclanovaporodiceValue == ''){

        setErrorFor(brojclanovaporodice, 'Greska');
    }else{
        
        setSuccessFor(brojclanovaporodice);
    }

    if(brojtelefonaValue == ''){

        setErrorFor(brojtelefona, 'Greska');
    }else{
        
        setSuccessFor(brojtelefona);
    }

    if(emailadresaValue == ''){
        setErrorFor(emailadresa, 'Greska');
    }else if(!ValidateEmail(emailadresaValue)){
        setErrorFor(emailadresa,'Greska');
    }else{
        setSuccessFor(emailadresa)
    }

    if(statusValue == ''){

        setErrorFor(status, 'Greska');
    }else{
        
        setSuccessFor(status);
    }

   }

   function setErrorFor(input, message){
       const textbox = input.parentElement;
       const small = textbox.querySelector('small');

       small.innerText = message;

       textbox.className = 'textbox error';
   }

   function setSuccessFor(input){
    const textbox = input.parentElement;
    textbox.className = 'textbox success';
   }

   function ValidateEmail(mail) 
   {
    if (/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(mail))
     {
       return (true)
     }
       alert("You have entered an invalid email address!")
       return (false)
   }