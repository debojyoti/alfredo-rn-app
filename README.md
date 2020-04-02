# GivetAdmin (React Native Application)

## Environment prerequisite

1) Make sure you have lastest node (v >= 8.x) installed globally
2) Make sure android tools are installed and adb is configured
3) Make sure react-native-cli is installed globally

## Development setup steps

1}  Install packages

Run
```
yarn
```
or 
```
npm
```

2} Keep a  emulator / android device connected via usb

3} Keep the metro bundler active

Run
```
react-native start
```

4} Build the debug version

Run
```
react-native run-android
```

## Generate release build

Run
```
cd android
./gradlew assembleRelease
```
