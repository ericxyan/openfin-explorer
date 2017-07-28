var parentDemoModule = {
  openWindow: function() {
    const name = `Child Window ID: ${(Math.floor(Math.random() * 100)).toString()}`;
    const newWindow = new fin.desktop.Window(
      {
        name: name,
        autoShow: true,
        defaultCentered: true,
        url: 'child.html'
      },
      (resp) => { console.log('success: ', resp) },
      (e) => { console.log('error') }
    );
  },

  closeWindow: function() {
    const name = `Child Window ID: ${(Math.floor(Math.random() * 100)).toString()}`;
    const newWindow = new fin.desktop.Window(
      {
        name: name,
        autoShow: true,
        defaultCentered: true,
        url: 'child.html'
      },
      (resp) => { console.log('success: ', resp) },
      (e) => { console.log('error') }
    );

    const timeoutClose = window.setTimeout(() => {
      newWindow.close();
    }, 3000);
  },

  moveBy: function() {
    const currentWindow = fin.desktop.Window.getCurrent();
    currentWindow.moveBy(
      20, 30,
      (resp) => { console.log('success') },
      (e) => { console.log('error') }
    );
  },

  moveTo: function() {
    const currentWindow = fin.desktop.Window.getCurrent();
    currentWindow.moveTo(
      100, 200,
      (resp) => { console.log('success') },
      (e) => { console.log('error') }
    );
  },

  animate: function() {
    const currentWindow = fin.desktop.Window.getCurrent();
    currentWindow.animate(
      {
        position: {
          left: 20,
          top: 30,
          duration: 3000
        }
      },
      {
        interrupt: false
      },
      (resp) => { console.log('success') },
      (e) => { console.log('error') }
    );
  },

  sharedMemoryCommunication: function() {
    const name = `Child Window ID: ${(Math.floor(Math.random() * 100)).toString()}`;
    const newWindow = new fin.desktop.Window(
      {
        name: name,
        autoShow: true,
        defaultCentered: true,
        url: 'child.html'
      },
      (resp) => { console.log('success: ', resp) },
      (e) => { console.log('error') }
    );

    let recieveData = function(data) {
      const container = document.querySelector('body');
      container.innerText = data;
    }
  }
}

var childDemoModule = {};

export { parentDemoModule, childDemoModule };
