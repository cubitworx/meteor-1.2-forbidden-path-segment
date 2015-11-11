## Description

Using Meteor V1.2.1 the following does not work in a package.js file:

    api.addFiles([
        '../../private/bower_components/bootstrap/less/buttons.less',
    ],'client',{isImport: true});


Error output produced:

    C:\Users\Admin\AppData\Local\.meteor\packages\meteor-tool\1.1.10\mt-os.windows.x86_32\dev_bundle\lib\node_modules\fibers\future.js:245
                                                throw(ex);
                                                      ^
    Error: Path contains forbidden segment '..'
        at Builder._sanitize (C:\tools\isobuild\builder.js:143:15)
        at Builder.generateFilename (C:\tools\isobuild\builder.js:340:20)
        at Builder.writeToGeneratedFilename (C:\tools\isobuild\builder.js:352:28)
        at C:\tools\isobuild\isopack.js:1346:27
        at Array.forEach (native)
        at Function._.each._.forEach (C:\Users\Admin\AppData\Local\.meteor\packages\meteor-tool\1.1.10\mt-os.windows.x86_32\dev_bundle\lib\node_modules\underscore\underscore.js:79:11)
        at _.each._.each.builder.generateFilename.directory (C:\tools\isobuild\isopack.js:1320:11)
        at Array.forEach (native)
        at Function._.each._.forEach (C:\Users\Admin\AppData\Local\.meteor\packages\meteor-tool\1.1.10\mt-os.windows.x86_32\dev_bundle\lib\node_modules\underscore\underscore.js:79:11)
        at C:\tools\isobuild\isopack.js:1233:9
        at [object Object]._.extend.saveToPath (C:\tools\isobuild\isopack.js:1585:26)
        at C:\tools\isobuild\isopack-cache.js:289:23
        at C:\tools\utils\buildmessage.js:356:18
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:349:34
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:347:23
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at Object.enterJob (C:\tools\utils\buildmessage.js:321:26)
        at [object Object]._.extend._loadLocalPackage (C:\tools\isobuild\isopack-cache.js:227:18)
        at C:\tools\isobuild\isopack-cache.js:166:14
        at C:\tools\utils\buildmessage.js:356:18
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:349:34
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:347:23
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at Object.enterJob (C:\tools\utils\buildmessage.js:321:26)
        at [object Object]._.extend._ensurePackageLoaded (C:\tools\isobuild\isopack-cache.js:158:20)
        at C:\tools\isobuild\isopack-cache.js:73:14
        at C:\tools\packaging\package-map.js:57:7
        at Function._.each._.forEach (C:\Users\Admin\AppData\Local\.meteor\packages\meteor-tool\1.1.10\mt-os.windows.x86_32\dev_bundle\lib\node_modules\underscore\underscore.js:87:22)
        at [object Object]._.extend.eachPackage (C:\tools\packaging\package-map.js:49:7)
        at [object Object]._.extend.buildLocalPackages (C:\tools\isobuild\isopack-cache.js:72:24)
        at C:\tools\project-context.js:735:25
        at C:\tools\utils\buildmessage.js:356:18
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:349:34
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:347:23
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at Object.enterJob (C:\tools\utils\buildmessage.js:321:26)
        at ProjectContext._.extend._buildLocalPackages (C:\tools\project-context.js:734:18)
        at C:\tools\project-context.js:257:35
        at C:\tools\utils\buildmessage.js:356:18
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:349:34
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:347:23
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at Object.enterJob (C:\tools\utils\buildmessage.js:321:26)
        at ProjectContext._.extend._completeStagesThrough (C:\tools\project-context.js:247:18)
        at ProjectContext._.extend.saveChangedMetadata (C:\tools\project-context.js:235:10)
        at ProjectContext._.extend.prepareProjectForBuild (C:\tools\project-context.js:240:10)
        at C:\tools\runners\run-app.js:517:29
        at C:\tools\utils\buildmessage.js:268:13
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:261:29
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:259:18
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at C:\tools\utils\buildmessage.js:250:23
        at [object Object]._.extend.withValue (C:\tools\utils\fiber-helpers.js:114:14)
        at Object.capture (C:\tools\utils\buildmessage.js:249:19)
        at bundleApp (C:\tools\runners\run-app.js:516:31)
        at [object Object]._.extend._runOnce (C:\tools\runners\run-app.js:594:35)
        at [object Object]._.extend._fiber (C:\tools\runners\run-app.js:858:28)
        at C:\tools\runners\run-app.js:396:12


## References

Problem brought up [here](https://github.com/meteor/meteor/issues/5252)

Problem detailed [here](http://stackoverflow.com/questions/33626282/meteor-1-2-share-files-between-packages)


## System details
Microsoft Windows: 6.3.9600
Node: 4.2.2
Meteor: 1.2.1
