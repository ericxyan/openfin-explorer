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
      (resp) => { console.log('success') },
      (e) => { console.log('error: ', e) }
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
      (e) => { console.log('error: ', e) }
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
      (e) => { console.log('error: ', e) }
    );
  },

  moveTo: function() {
    const currentWindow = fin.desktop.Window.getCurrent();
    currentWindow.moveTo(
      100, 200,
      (resp) => { console.log('success') },
      (e) => { console.log('error: ', e) }
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
      (e) => { console.log('error: ', e) }
    );
  },

  sharedMemoryCommunication: function() {
    const name = `Child Window ID: ${(Math.floor(Math.random() * 100)).toString()}`;
    const newWindow = new fin.desktop.Window(
      {
        name: name,
        autoShow: true,
        defaultCentered: true,
        url: 'child.html',
        customData: 'sharedMemory'
      },
      (resp) => { console.log('success: ', resp) },
      (e) => { console.log('error: ', e) }
    );

    let recieveData = function(data) {
      const container = document.querySelector('body');
      container.innerText = data;
    }
  }
}

var childDemoModule = {
  sharedMemory: function() {
    const data = `data from the child ${Math.random()}`;
    const parentDocument = window.opener.document;
    const container = parentDocument.querySelector('#demo-data-container');
    const parentElement = parentDocument.createElement('h4');

    parentElement.innerText = data;
    container.appendChild(parentElement);
  }
};

export { parentDemoModule, childDemoModule };
