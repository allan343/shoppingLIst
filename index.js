


$(function() {
    $('#js-shopping-list-form').submit(event => {
      // this stops the default form submission behavior
     
      event.preventDefault();
      const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
    
      //console.log(userTextElement.val());

      $("ul").append(
        `<li><span class="shopping-item">"  ${userTextElement.val()} "</span><div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span></button>
                <button class="shopping-item-delete">
                  <span class="button-label">delete</span>
                </button>
              </div></li>`
        );
    });  

})
