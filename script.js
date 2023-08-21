var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var text = this.nextElementSibling;
            if (text.style.maxHeight) {
              text.style.maxHeight = null;
            } else {
              text.style.maxHeight = text.scrollHeight + "px";
            } 
          });
        }