document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.getElementById('checkbox');
  
  checkbox.addEventListener('change', function() {
    if(checkbox.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
});
