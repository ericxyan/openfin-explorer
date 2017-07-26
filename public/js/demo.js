var demoModule = {
  openWindow: function() {
    const name = `Child Window # ${(Math.random()).toString()}`;
    const newWindow = new fin.desktop.Window(
      {
        name: name,
        autoShow: true,
        defaultCentered: true,
        url: 'index.html'
      },
      (resp) => { console.log('success: ', resp) },
      (e) => { console.log('error') }
    );
  }
}

export {demoModule};
