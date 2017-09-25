/* tslint:disable */
let topOfThisWindow;
let rightSideOfThisWindow;

function figureOutWhereThisWindowIs() {
    return new Promise(resolve => {
        const thisWindow = fin.desktop.Window.getCurrent();
        thisWindow.getBounds(bounds => {
            topOfThisWindow = bounds.top;
            rightSideOfThisWindow = bounds.right;
            resolve();
        });
    })
}

var parentDemoModule = {
    wrapThisApplication: function(div) {
        const app = fin.desktop.Application.wrap('OpenFinExplorer');
        div.innerText = `app is an ${typeof app}`
    },
    getShortcutInfo: function(div) {
        const thisApp = fin.desktop.Application.getCurrent();
        thisApp.getShortcuts(shortcuts => {
            div.innerText = `Current Shortcut Configuration:
Desktop Shortcut: ${shortcuts.desktop}
StartMenu Shortcut: ${shortcuts.startMenu}
Launch On Startip: ${shortcuts.systemStartup}`
        })
    },
    getAppManifest: function(div) {
        const thisApplication = fin.desktop.Application.getCurrent();
        thisApplication.getManifest(manifest => {
            div.innerText = `The manifest contains info like:
Startup App Url: ${manifest.startup_app.url}
Runtime Version: ${manifest.runtime.version}
`
        })
    },
    getCurrentApplication: function(div) {
        const thisApplication = fin.desktop.Application.getCurrent();
        div.innerText = `This application's UUID is ${thisApplication.uuid}`
    },
    launchApplication: function(applicationUrl, div) {
        const yourApplication = new fin.desktop.Application({
            url: applicationUrl,
            uuid: Math.random().toString(),
            name: Math.random().toString(),
            mainWindowOptions: {
                defaultHeight: 600,
                defaultWidth: 800,
                autoShow: true
            }
        },
        () => { yourApplication.run(); },
        (error) => { div.innerText = `${error}`; })
    },
    getBounds: function (div) {
        const thisWindow = fin.desktop.Window.getCurrent();
        thisWindow.getBounds(bounds => {
            const responseString = `The top of this window is at ${bounds.top}, the right side is at ${bounds.right}`
            div.innerText = responseString;
        })
    },

    openWindow: function () {
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

    closeWindow: function () {
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

    moveBy: function () {
        const currentWindow = fin.desktop.Window.getCurrent();
        currentWindow.moveBy(
            20, 30,
            () => { console.log('success') },
            (e) => { console.log('error: ', e) }
        );
    },

    moveTo: function () {
        const currentWindow = fin.desktop.Window.getCurrent();
        currentWindow.moveTo(
            100, 200,
            () => { console.log('success') },
            (e) => { console.log('error: ', e) }
        );
    },

    animate: function () {
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

    sharedMemoryCommunication: function () {
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

    interAppBusSubscribe: function () {
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

        fin.desktop.InterApplicationBus.subscribe('*', 'a topic', function (message, uuid, name) {
            alert(`a message was received throught the bus! From: ${name}`);
        });
    },

    interAppBusPublish: function () {
        fin.desktop.InterApplicationBus.publish('a topic', {
            field1: "value1",
            field2: "value2"
        });
    },


    groupWindows: function () {
        // We'll figure out where the window is using .getBounds first
        figureOutWhereThisWindowIs().then(function () {
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
                    function () {
                        childWindow.joinGroup(mainWindow)
                    }
                );
        })
    },
    groupWindowsMoveyBy: function () {
        const mainWindow = fin.desktop.Window.getCurrent();
        mainWindow.moveBy(
            20, 30,
            () => { console.log('success') },
            (e) => { console.log('error: ', e) }
        );
    },

    launchNotification: function () {
        new fin.desktop.Notification({
            url: 'notification.html'
        })
    },
    sendNotificationWithMessage: function (message) {
        // The message is read from the Input Box above
        new fin.desktop.Notification({
            url: 'notification.html',
            message: message
        })
    },
    getMonitorInfo: function(div) {
        fin.desktop.System.getMonitorInfo( (monitorInfo) => {
            const responseString = `You are using a ${monitorInfo.primaryMonitor.availableRect.right} x ${monitorInfo.primaryMonitor.availableRect.bottom} monitor`
            div.innerText = responseString;
        } )
    },
    getMousePosition: function(div) {
        fin.desktop.System.getMousePosition( mousePosition => {
            const responseString = `Your cursor is at ${mousePosition.left}, ${mousePosition.top}`
            div.innerText = responseString;
        } )
    },
    showDeveloperTools: function() {
        const thisApp = fin.desktop.Application.getCurrent();
        fin.desktop.System.showDeveloperTools(thisApp.uuid, thisApp.uuid,
            () => { console.log('Hello from the dev tools!') },
            (err) => { console.log(`Error! ${err}`) }
        ); 
    },
    restartApplication: function() {
        const thisApp = fin.desktop.Application.getCurrent();
        thisApp.restart();
    }
}



var childDemoModule = {
    sharedMemory: function () {
        const data = `data from the child ${Math.random()}`;
        const parentDocument = window.opener.document;
        const container = parentDocument.querySelector('#demo-data-container');
        const parentElement = parentDocument.createElement('h4');

        parentElement.innerText = data;
        container.appendChild(parentElement);
    },

    leaveGroup: function () {
        const currentWindow = fin.desktop.Window.getCurrent();
        currentWindow.leaveGroup();
    },

    closeCurrent: function () {
        const currentWindow = fin.desktop.Window.getCurrent();
        currentWindow.close();
    }
};

export { parentDemoModule, childDemoModule };
/* tslint:enable */
