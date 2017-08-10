let topOfThisWindow;
let rightSideOfThisWindow;

function figureOutWhereThisWindowIs() {
    return new Promise (resolve => {
        const thisWindow = fin.desktop.Window.getCurrent();
        thisWindow.getBounds(bounds => {
            topOfThisWindow = bounds.top;
            rightSideOfThisWindow = bounds.right;
            resolve();
        });
    })
}

var parentDemoModule = {
    getBounds: function() {
        const thisWindow = fin.desktop.Window.getCurrent();
        thisWindow.getBounds( bounds => {
            const boundsContainerInDemo = document.querySelector('#demo-data-container');
            const responseString = `The top of this window is at ${bounds.top}, the right side is at ${bounds.right}`
            boundsContainerInDemo.innerText = responseString;
        })
    },

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
  },

  interAppBusSubscribe: function() {
    const name = `Sibling Window ID: ${(Math.floor(Math.random() * 100)).toString()}`;
    const newApp = new fin.desktop.Application(
      {
        url: "http://localhost:8081/index.html", // TODO: make a new sibling html/react file
        uuid: name,
        name: name,
        mainWindowOptions: {
          autoShow: true,
          defaultCentered: true
        }
      },
      (resp) => { newApp.run() },
      (e) => { console.log('error: ', e) }
    );

    fin.desktop.InterApplicationBus.subscribe('*', 'a topic', function(message, uuid, name) {
      alert(`a message was received throught the bus! From: ${name}`);
    });
  },

  interAppBusPublish: function() {
    fin.desktop.InterApplicationBus.publish('a topic', {
      field1: "value1",
      field2: "value2"
    });
  },


    groupWindows: function(){
        figureOutWhereThisWindowIs().then(function() {
        const mainWindow = fin.desktop.Window.getCurrent();
        const name = `Child Window #: ${(Math.floor(Math.random() * 100)).toString()}`;
        const childWindow = 
            new fin.desktop.Window(
              {
                name: name,
                autoShow: true,
                url: 'child.html',
                customData: 'leaveGroup',
                defaultTop: topOfThisWindow,
                defaultLeft: rightSideOfThisWindow,
                saveWindowState: false
              },
              function() {
                childWindow.joinGroup(mainWindow)
              }
            );
          })
    }
            ,
  groupWindowsMoveyBy: function() {
    const mainWindow = fin.desktop.Window.getCurrent();
    mainWindow.moveBy(
      20, 30,
      (resp) => { console.log('success') },
      (e) => { console.log('error: ', e) }
    );
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
  },

  leaveGroup: function() {
    const currentWindow = fin.desktop.Window.getCurrent();
    currentWindow.leaveGroup();
  },

  closeCurrent: function() {
    const currentWindow = fin.desktop.Window.getCurrent();
    currentWindow.close();
  }
};

export { parentDemoModule, childDemoModule };
