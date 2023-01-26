# RaelBank v0.0.1

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="width: 10vw; margin-right: 5vw;"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" style="width: 10vw;"/>
<br/>
<br/>
Simple bank App where users can create an account, request debit cards and transfer money simulating Pix (brasilian system to transfer money instantly). <br/><br/>
Project made using React-native(v0.70.5) with expo. API made with TypeScript(v0.70.5) using Express.

Developed by [Hisrael Braga](https://github.com/devRaelBraga)
<br/>
<br/>

# Quick-Start Guide

## [Raelbank flow](https://i.imgur.com/KUdQcuP.png)
![Sequence Diagram](https://i.imgur.com/KUdQcuP.png)
<br/>
<br/>

## - Starting Raelbank API
<br/>

- git clone the project:

~~~~powershell
$ git clone https://github.com/devRaelBraga/Raelbank.git
$ cd ./Raelbank/
~~~~

- configure .env:

![.env server](https://i.imgur.com/2YgKvRc.png)



- start server:

~~~~powershell
$ cd ./server/
$ yarn install
$ yarn dev
~~~~
<br/>
<br/>

## - Build apk

- sign-up on expo then follow [this guide](https://docs.expo.dev/build/setup/) to install and configure eas-cli
- command line to build apk:

~~~~powershell
$ cd /client/
$ eas build -p android --profile preview
~~~~
<br/>
<br/>

## - Start Development

- First, install [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US&pli=1) on your SmartPhone.

- Configure .env:<br/>
![.env client](https://i.imgur.com/LklpXgR.png)

- Start the Expo server:

~~~~powershell
$ cd /client/
$ yarn install
$ yarn start
~~~~

- That made, you can start developing and express will refresh on real time, being visible on your connected SmartPhone.
<br/>
<br/>

# Diagrams
## [UseCase Diagram](https://i.imgur.com/Fa4pzWB.png)
![UseCase Diagram](https://i.imgur.com/Fa4pzWB.png)

## [Class Diagram](https://i.imgur.com/QEwOJT2.png)
![Class Diagram](https://i.imgur.com/QEwOJT2.png)

## [Database Scheme](https://i.imgur.com/QTMqZp2.png)
![Database Scheme](https://i.imgur.com/QTMqZp2.png)

## [Sequence Diagram | Incomplete](https://i.imgur.com/yPxiWUX.png)
![Sequence Diagram](https://i.imgur.com/yPxiWUX.png)


