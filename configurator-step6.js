  function checkRuntimeSelected() {
    runtimeRadios.forEach(function(radio) {
      if (radio.checked) {
        if (radio.name === 'runtime-1Unit') {
              isRuntimeSelected = true;
          if (radio.value === '1') { 
              tutor1.style.display = 'block';
              tutor2.style.display = 'none';
              tutor3.style.display = 'none';
          } else if (radio.value === '2') {
              tutor1.style.display = 'block';
              tutor2.style.display = 'none';
              tutor3.style.display = 'none';
          } else if (radio.value === '3') {
              tutor1.style.display = 'block';
              tutor2.style.display = 'none';
              tutor3.style.display = 'none';
          }
        } else if (radio.name === 'runtime-2Unit') {
             isRuntimeSelected = true;
          if (radio.value === '1') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'block';
             tutor3.style.display = 'none';
          } else if (radio.value === '2') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'block';
             tutor3.style.display = 'none';
          } else if (radio.value === '3') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'block';
             tutor3.style.display = 'none';
          }

        } else if (radio.name === 'runtime-3Unit') {
             isRuntimeSelected = true;
          if (radio.value === '1') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'none';
             tutor3.style.display = 'block';
          } else if (radio.value === '2') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'none';
             tutor3.style.display = 'block';
          } else if (radio.value === '3') {
             tutor1.style.display = 'none';
             tutor2.style.display = 'none';
             tutor3.style.display = 'block';
          }
        }
      }
    });
    
    if (isRuntimeSelected) {
      nextBtn.classList.remove('disabled');
    } else {
      nextBtn.classList.add('disabled');
    }
  }
