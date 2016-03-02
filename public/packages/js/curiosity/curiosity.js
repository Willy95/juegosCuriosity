var $curiosity = {
  menu : {
    setPaginaId : function(id){
      $(id).addClass('active');
    }
  },
  noty : function(mensaje, tipo){
    var n = noty({
        text        : mensaje,
        type        : tipo,
        dismissQueue: true,
        timeout     : 3000,
        closeWith   : ['click'],
        layout      : 'bottomRight',
        theme       : 'defaultTheme',
        maxVisible  : 10
     });
  }
};
