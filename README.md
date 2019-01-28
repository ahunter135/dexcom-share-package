# dexcom-share-package
This is a node package for using the dexcom api

To install use: `npm install dexcom-node-module`

`dexcom.getDexcomSessionId(username, password)` returns a session ID.

Use that same session ID in `dexcom.getDexcomGlucoseData(sessionID)` to get the latest data from your device.
