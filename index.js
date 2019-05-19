


$(function() {
    $('#js-shopping-list-form').submit(event => {
      event.preventDefault();
      const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
      $("ul").append(
        `<li><span class="shopping-item">  ${userTextElement.val()} </span><div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span></button>
                <button class="shopping-item-delete">
                  <span class="button-label">delete</span>
                </button>
              </div></li>`
        );
        userTextElement.val("");

    });  
    $('ul').on('click','button.shopping-item-delete', function(event) {
      this.closest( "li" ).remove();
    });
    $('ul').on('click','button.shopping-item-toggle', function(event) {
      //this.parent().closest("span").toggleClass('shopping-item__checked');
     // const currentButton = this;
     /*
      const currentButton = $(".shopping-item-toggle");
      const currentButtonParent = currentButton.parent();
      const currentLi = currentButtonParent.parent();
      currentLi.find(".shopping-item").toggleClass('shopping-item__checked');
      */
     $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

})
