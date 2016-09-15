(function($){
  $(document).ready(function(){
      $(".main-menu-toggle").click(function(event){
        var $menu = $("block-mainnavigation > ul");

        if ($menu.is(":hidden")) {
          console.log("hidden");
        } else {
          console.log("not hidden");
        }

          event.preventDefault();
      });
  });
})(jQuery);
