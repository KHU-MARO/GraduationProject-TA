# Typing Assistant
> 2017-1 경희대학교 전자공학과 창의적설계(지도교수 김동한), 팀 608호 : TA 레파지토리  

***

## 프로젝트 소개

[GraduationProject-Doc Github 레파지토리](https://github.com/sauber92/GraduationProject-Doc)  

***

## Typing Assistant  

### 소개  

![](https://github.com/sauber92/GraduationProject-Doc/blob/master/Documentation/Reference/Diagram/tp.png?raw=true)

TA는 Node.js 엔진과 Chromium 브라우져을 기반으로 데스크탑 어플리케이션을 제작할 수 있는 [Electron](https://electron.atom.io/)을 사용하여 만들어졌다.  

[node-serialport 모듈](https://github.com/EmergingTechnologyAdvisors/node-serialport)을 사용하여 KP과 시리얼 통신을 할 수 있게 하였으며, 자체적으로 랜덤하게 영어 소문자 하나를 생성하고, 그에 해당하는 키보드 인터럽트 이벤트가 발생하면 다시 새로운 문자가 생성되게 하였다.  

### 개발스펙  

* IDE: WebStorm (Ver. 2016.3.2)  
* NPM: Ver 4.2.0
* Node: Ver 7.10.0  
* Electron: Ver 1.4.1  
* electron-installer-dmg: Ver 0.2.1  
* electron-rebuild: Ver 1.4.0  
* electron-winstaller: Ver 2.5.2  
* Dependencies  
	* app: 0.1.0  
	* electron-packager: 8.7.0  
	* path: 0.12.7  
	* serialport: 4.0.7  

### Release  

* Mac 버전: [dmg파일](https://github.com/sauber92/GraduationProject-TA/releases/tag/1.0.0)  
	* macOS Sierra 10.12.5에서 확인  
* Windows 버전: [exe파일](https://github.com/sauber92/GraduationProject-TA/releases/tag/1.0.1)  
	* Windows 10 Pro 1703에서 확인
	* Pre-release: 설치파일의 생성을 못해서 Pre-release 버전으로 실행파일만 배포

### 사용방법

* Dependencies 설치  
`npm install`  

* 프로젝트 실행  
`npm start`  

* Mac 운영체제 실행파일 생성  
`npm run package:mac`  

* Mac 운영체제 설치파일(dmg) 생성  
`npm run installer:mac`  

* Windows 운영체제 실행파일 생성  
`npm run package:win`  

* Linux 운영체제 실행파일 생성  
`npm run package:linux`  

* 실행 및 설치 파일 제거  
`npm run package:clear`


***

## License 

[MIT 라이센스](https://github.com/sauber92/GraduationProject-TA/blob/master/LICENSE.md)  

***

## 제작자  

* 정준영: 경희대학교 전자공학과/컴퓨터공학과 12학번  
	* Mail: jjy920517@gmail.com  
	* Github: [https://github.com/sauber92](https://github.com/sauber92)  
	* Blog: [https://sauber92.github.io](https://sauber92.github.io)  
* 오종렬: 경희대학교 전자공학과 12학번  
	* Mail: ohjongryeol@naver.com  
	* Github: [https://github.com/JongYeolOH](https://github.com/JongYeolOH)  
* 윤상윤: 경희대학교 전자공학과 12학번  
	* Mail: sangyounyoun@naver.com  
	* Github: [https://github.com/SangyounYoun](https://github.com/SangyounYoun)  

