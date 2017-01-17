var Storage = {
  getAccounts: function(){
      var s = (localStorage.getItem('arrObject') || '[]');
      return JSON.parse(s);
  }
};
