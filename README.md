# UnmailMe

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
  - [Android](#android-run)
  - [iOS](#ios-run)
- [Build Application](#build-app)
  - [Android](#android-build)
  - [iOS](#ios-build)
  
## Installation

1) Open project folder in terminal:

> For example: `/e/Projects/ReactNative/UnmailMe`

2) Run:

```bash
$ yarn install
```

## Basic Usage

- First, you will need to start the JavaScript bundler

```bash
$ npx react-native start
```

#### Android Run

- Run android application

```bash
$ npx react-native run-android
```

#### iOS Run

- Run ios application

```bash
$ npx react-native run-ios
```

## Build App

### Android Build

#### Generating an upload key

You can generate a private signing key using `keytool`. On Windows `keytool` must be run from `C:\Program Files\Java\jdkx.x.x_x\bin`.

```bash
$ keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

This command prompts you for passwords for the keystore and key and for the Distinguished Name fields for your key. It then generates the keystore as a file called `my-upload-key.keystore`.
The keystore contains a single key, valid for 10000 days.

On Mac, if you're not sure where your JDK bin folder is, then perform the following command to find it:

```bash
$ /usr/libexec/java_home
```

It will output the directory of the JDK, which will look something like this:

```bash
/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home
```

Navigate to that directory by using the command $ cd /your/jdk/path and use the keytool command with sudo permission as shown below.

```bash
$ sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

#### Setting up Gradle variables

1) Place the `my-upload-key.keystore` file under the `android/app` directory in your project folder.
2) Edit the file `~/.gradle/gradle.properties` or `android/gradle.properties`, and add the following (replace `*****` with the correct keystore password, alias and key password),

```bash
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

These are going to be global Gradle variables, which we can later use in our Gradle config to sign our app.

#### Adding signing config to your app's Gradle config

The last configuration step that needs to be done is to setup release builds to be signed using upload key. Edit the file `android/app/build.gradle` in your project folder, and add the signing config,

```bash
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
...
```

#### Generating the release APK

Run the following in a terminal:

```bash
$ cd android
$ ./gradlew bundleRelease
```

The generated AAB can be found under `android/app/build/outputs/bundle/release/app.aab`, and is ready to be uploaded to **Google Play**.

### iOS Build

- Start ios application

```bash
$ npx react-native run-ios
```
