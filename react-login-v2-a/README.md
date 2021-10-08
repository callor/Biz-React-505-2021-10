# JSON CLI(Command Linke Interface) 서버

- JSON 로컬서버 설치 : npm install -g json-server
- JSON 파일을 response 하는 매우 간단한 테스트용 서버
- json-server ./user.json --watch --port 8080

## 보안과 관련된 용어

- 해킹 : 허가받지 않은 사용자가 네트워크를 통해 불법적으로 시스템에 침투하여 데이터베이스를 파괴하는 행위
- 해킹을 방지하는 기술

1. 인증(Authentication) : 회원가입을 통해 id와 pw를 입력받고, 로그인을 통해 네트워크 접속을 허가하는 일

2. 인가(Authorization) : 인증받은 사용자, 클라이언트에게 인가 token 을 발급하여 네트워크를 통해 데이터를 전송할수 있도록 하는 일

3. 권한설정 (ROLE) : 인증받고 인가받은 사용자, 클라언트가 DB나 시스템의 파일에 접근하여 CRUD를 수행할수 있는 권한을 제한적으로 부여하는 일

4. 보안의 3대 원칙 : 기밀성, 무결성, 가용성
