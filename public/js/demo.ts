/* tslint:disable */
let topOfThisWindow;
let rightSideOfThisWindow;

var parentDemoModule = {
    onClickNotification: function(div) {
        new fin.desktop.Notification({
            url: 'notification.html',
            onClick: () => { div.innerText = 'You Click Me!' }
        })
    },
    showWrappedWindow: function(div) {
        const windowName = Math.random().toString();
        const launchedWin = new fin.desktop.Window({
            name: windowName,
            url: 'child.html',
            autoShow: false //hide the window
        }, () => {
            const thisApp = fin.desktop.Application.getCurrent();
            const wrappedWin = fin.desktop.Window.wrap(thisApp.uuid, windowName);
            div.innerText = `wrappedWin is an ${typeof wrappedWin}`;
            wrappedWin.close();
        });
    },
    getState: function(div) {
        const thisWin = fin.desktop.Window.getCurrent();
        thisWin.getState(state => {
            div.innerText = state;
        })
    },
    getCurrentWindow: function(div) {
        const thisWin = fin.desktop.Window.getCurrent();
        div.innerText = `The Winodw is name ${thisWin.name}`;
    },
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
        (e) => { div.innerText = `${e}`; })
    },
    getBounds: function (div) {
        const thisWindow = fin.desktop.Window.getCurrent();
        thisWindow.getBounds(bounds => {
            const responseString = `Window is at ${bounds.top} x ${bounds.right}`
            div.innerText = responseString;
        })
    },

    openWindow: function () {
        const name = `Child Window ${(Math.random() * 100).toString()}`;
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
        const name = `Child Window: ${(Math.random() * 100).toString()}`;
        const newWindow = new fin.desktop.Window(
            {
                name: name,
                autoShow: true,
                defaultCentered: true,
                url: 'child.html'
            });
        setTimeout(() => { newWindow.close(); }, 1500);
    },

    moveBy: function () {
        const currentWindow = fin.desktop.Window.getCurrent();
        currentWindow.moveBy(20, 30);
    },

    moveTo: function () {
        const currentWindow = fin.desktop.Window.getCurrent();
        currentWindow.moveTo(10, 10);
    },

    animatePosition: function () {
        const currentWindow = fin.desktop.Window.getCurrent();
        currentWindow.animate(
            {
                position: {
                    left: 20,
                    top: 30,
                    duration: 1000
                }
            },
            {
                interrupt: false
            });
    },
    animateOpacity: function() {
        const thisWindow = fin.desktop.Window.getCurrent();
        thisWindow.getOptions(options => {
            const currentOpacity = options.opacity;
            const newOpacity = currentOpacity === 1 ? 0.5 : 1;
            thisWindow.animate({
                opacity: {
                    opacity: newOpacity,
                    duration: 1000
                } 
            },
            {
                interrupt: false
            });
        });
    },
    sharedMemoryCommunication: function () {
        const name = `Child Window ID: ${(Math.random() * 100).toString()}`;
        const newWindow = new fin.desktop.Window(
            {
                name: name,
                autoShow: true,
                defaultCentered: true,
                url: 'child.html',
                customData: 'sharedMemory'
            });
    },
    interAppBusSubscribe: function (div) {
        const appName = 'iabPublisher';
        const newApp = new fin.desktop.Application(
            {
                url: `${window.location.origin}/iabPublisher.html`,
                uuid: appName,
                name: appName,
                mainWindowOptions: {
                    autoShow: true,
                    defaultCentered: true,
                    defaultHeight: 300,
                    defaultWidth: 600,
                    saveWindowState: false

                }
            },
            (resp) => { newApp.run() },
            (e) => { div.innerText = `${e}` }
        );

        fin.desktop.InterApplicationBus.subscribe(appName, 'demoMessage', (message) => {
            div.innerText = `${message.input}`;
        });
    },

    interAppBusPublish: function (yourInput) {
        const sendMessage = function() {
            fin.desktop.InterApplicationBus.publish('A Topic', {
                yourMessage: yourInput,
                otherKey: "other value"
            });  
        } 

        fin.desktop.System.getAllApplications(applications => {
            const names = applications.map(app => app.uuid);
            if (!names.includes('iabSubscriber')) {
                const subscriberApp = new fin.desktop.Application({
                    uuid: 'iabSubscriber',
                    name: 'iabSubscriber',
                    url: `${window.location.origin}/iabSubscriber.html`,
                    mainWindowOptions: {
                        autoShow: true,
                        defaultWidth: 600,
                        defaultHeight: 300,
                        saveWindowState: false,
                        defaultCentered: true
                    }
                },
                () => { subscriberApp.run(() => { sendMessage() })})
            } else {
                const subscriberApp = fin.desktop.Application.wrap('iabSubscriber')
                subscriberApp.isRunning(running => {
                    if (running) {
                        sendMessage()
                    } else {
                        subscriberApp.run(() => { sendMessage() });
                    }
                })
            }
        })
    },


    groupWindows: function () {
        function figureOutWhereThisWindowIs() {
            return new Promise(resolve => {
                const thisWindow = fin.desktop.Window.getCurrent();
                thisWindow.getBounds(bounds => {
                    const returnValue = {
                        top: bounds.top,
                        right: bounds.right
                    }
                    resolve(returnValue);
                });
            })
        }

        figureOutWhereThisWindowIs().then(function (value) {
            const mainWindow = fin.desktop.Window.getCurrent();
            const name = `Child Window #: ${(Math.random() * 100).toString()}`;
            const childWindow =
                new fin.desktop.Window(
                    {
                        name: name,
                        autoShow: true,
                        url: 'child.html',
                        customData: 'leaveGroup',
                        defaultTop: value.top,
                        defaultLeft: value.right,
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
        mainWindow.moveBy(20, 30);
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
            const width = monitorInfo.primaryMonitor.availableRect.right;
            const height = monitorInfo.primaryMonitor.availableRect.bottom;
            const responseString = `You are using a ${width} x ${height} monitor`
            div.innerText = responseString;
        } )
    },
    getMousePosition: function(div) {
        fin.desktop.System.getMousePosition( mousePosition => {
            const left = mousePosition.left;
            const top = mousePosition.top
            const responseString = `Your cursor is at ${left}, ${top}`
            div.innerText = responseString;
        } )
    },
    showDeveloperTools: function() {
        const thisApp = fin.desktop.Application.getCurrent();
        fin.desktop.System.showDeveloperTools(thisApp.uuid, thisApp.uuid); 
    },
    restartApplication: function() {
        const thisApp = fin.desktop.Application.getCurrent();
        thisApp.restart();
    },
    openThisCode: function() {
        const github = 'https://github.com/openfin/openfin-explorer/';
        fin.desktop.System.openUrlWithBrowser(github);
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
