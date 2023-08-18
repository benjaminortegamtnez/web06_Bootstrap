console.log("JS06 - Formulario");

// Obtenemos la referencia del formulario
// const registerForm = document.getElementById("registerForm");
const registerForm = document.forms["registerForm"];

// registerForm.addEventListener( "click", fncCallback  );
registerForm.addEventListener( "submit", ( event )=>{
    event.preventDefault(); // omitir las acciones por default
    // console.log( event ); datos del click
    /* const email = registerForm.elements["email"];
    const birthdate = registerForm.elements["birthdate"];
    console.log(email.value , birthdate.value); */

    const user = {
        fullname: registerForm.elements[ "fullname" ].value,
        email: registerForm.elements[ "email" ].value,
        password: registerForm.elements[ "password" ].value,
        birthdate: registerForm.elements[ "birthdate" ].value,
    }

    const age = caclculateAge ( user );

    if( age.year < 18 ){
        // alert (`Al rato regresas, aún tienes ${age.year} años`);
        appendAlert(`Al rato regresas aun estas chavo, aún tienes ${age.year} años`, 'success')
      }

}  );

const caclculateAge = ( {birthdate : birthdateStr} ) => {
    console.log( birthdateStr ); // 1995-10-12

    // DAte entrega los milisegundos transcurridos desde el 01/01/1970
    const today = new Date(); // Crear un objeto con la fecha en curso
    const birthdate = new Date( birthdateStr ); // objeto con la fecha 1996-11-30
    
    const difference = today - birthdate;
    console.log( difference ); // 878666784740 milisegundos de diferencia 

    const age = new Date( difference ); // Tue Nov 04 1997 12:12:35 GMT-0600
    // console.log( age);
    console.log( `Year: ${age.getFullYear() - 1970}  `); // 1995 - 1970 = 27
    console.log( `Months: ${age.getMonth() } `); // 
    console.log( `Days: ${age.getDate() }  `); // 
    return {
        year: age.getFullYear() - 1970 ,
        month: age.getMonth() ,
        day: age.getDate() ,
    }

}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

/* const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
} */