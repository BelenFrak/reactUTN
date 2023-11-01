document.getElementById('tipo-seguro').addEventListener('change', function() {
  var valorSeguroElement = document.getElementById('valor-seguro');
  
  switch(this.value) {
    case 'basico':
      valorSeguroElement.value = '$500';
      break;
    case 'intermedio':
      valorSeguroElement.value = '$1000';
      break;
    case 'premium':
      valorSeguroElement.value = '$1500';
      break;
    default:
      valorSeguroElement.value = '';
      break;
  }
});

