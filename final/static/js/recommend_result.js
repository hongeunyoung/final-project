var audio = new Audio('https://cdn.discordapp.com/attachments/968536631512543262/969201751527936040/1e6e32b7c6a229ba.mp3');

        var count = 0;

        $(function() {
          $('img.recipe_envelope').click(function() {
            $('div.recipe').css('display', 'block')
            $('div.restaurant').css('display', 'none')
          });

          $('img.restaurant_envelope').click(function() {
            $('div.restaurant').css('display', 'block')
            $('div.recipe').css('display', 'none')
          });

          $('img.envelope').click(function() {
            $('.next').fadeIn(500).fadeOut(500)
          })

          $('a.btn').click(function() {
            count++

            if(count == 4) {
              $('a.btn').css('display', 'none')
            }
          });
        });