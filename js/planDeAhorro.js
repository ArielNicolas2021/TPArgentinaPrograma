const form = document.querySelector('#contact-form');
const successMessage = document.querySelector('#success-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const surname = document.querySelector('#surname').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const province = document.querySelector('#province').value;
  const city = document.querySelector('#city').value;
  const zip = document.querySelector('#zip').value;
  
  console.log(`Nombre: ${name}`);
  console.log(`Apellido: ${surname}`);
  console.log(`Correo electrónico: ${email}`);
  console.log(`Teléfono: ${phone}`);
  console.log(`Provincia: ${province}`);
  console.log(`Ciudad: ${city}`);
  console.log(`Código Postal: ${zip}`);
  
  if (name.length < 3) {
    alert("Nombre inválido, debe tener al menos 3 caracteres.");
    return;
  }
  
  if (surname.length < 3) {
    alert("Apellido inválido, debe tener al menos 3 caracteres.");
    return;
  }
  
  if (!email.includes("@")) {
    alert("Correo electrónico inválido, debe incluir un @.");
    return;
  }
  
  if (phone.length < 10) {
    alert("Teléfono inválido, debe tener al menos 10 dígitos.");
    return;
  }
  
  if (province.length < 3) {
    alert("Provincia inválida, debe tener al menos 3 caracteres.");
    return;
  }
  
  if (city.length < 3) {
    alert("Ciudad inválida, debe tener al menos 3 caracteres.");
    return;
  }
  
  if (zip.length < 4) {
    alert("Código Postal inválido, debe tener al menos 4 dígitos.");
    return;
  }
  
  successMessage.style.display = 'block';
  form.reset();
});
