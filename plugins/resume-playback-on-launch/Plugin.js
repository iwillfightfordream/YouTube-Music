module.exports = {
    handle: (setting) => {
        const PluginSetting = require("./handlers/" + setting)
        PluginSetting()
    },
    enable: () => {},
    disable: () => {},
    preload: () => {}
}