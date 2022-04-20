# React Tetris

외주작업을 하느라 지친 심신을 달래기 위해 진행한 토이프로젝트입니다. React로 테트리스 게임을 구현합니다.

## 사용 기술

- React.js
- Webpack

## 명세

- 플레이필드 사이즈는 너비 10, 높이 20
- 블록은 7개의 테트로미노 중 하나를 랜덤으로 선택함 (7-bag)
- 현재 선택된 블록은 네 가지 행동이 가능함
  - Drop: 일정한 프레임 주기마다 블록의 Y좌표를 -1함
  - Rotate: 블록을 회전시킴
    - [SRS](https://tetris.fandom.com/wiki/SRS) 규칙에 따라 회전 가능 여부를 체크함
  - Move: 좌, 우, 아래 방향으로 블록을 이동시킴
    - [DAS](https://tetris.fandom.com/wiki/DAS) 적용
      - 방향키를 누르고 있으면 DAS 타이머가 증가
      - 최초 16프레임을 대기하고, 이후 6프레임마다 해당 방향으로 Move함
    - 아래로 이동을 시도했으나 불가능할 경우 블록을 고정
  - Hard drop: 블록을 바닥으로 이동시킴
    - Drop과 반복문으로 구현 (Drop이 불가능할 때까지 Drop시킴)
    - 락 딜레이 없이 바로 고정
- 매 프레임마다 락 딜레이(Lock delay) 타이머를 증가시킴
  - 60프레임의 락 딜레이가 끝나면 블록은 그 자리에 고정함
  - 락 딜레이 타이머를 초기화하는 경우는 다음과 같음
    - Drop 시
    - 고정 시
    - 아래로 Move 시
- 블록을 고정할 때마다 다음을 수행함
  - 채워진 줄이 있는지 체크하고 지움
  - 점수 계산
  - 게임오버 체크
  - 새로운 블록 선택

## 구현 과정

- [x] 기본 컴포넌트, CSS 작성
- [x] 플레이필드 위에 블록 그리기 기능 구현
- [ ] 블록 행동 구현
  - [ ] Drop
  - [ ] Rotate
  - [ ] Move
  - [ ] Hard drop
- [ ] 블록 고정 구현
  - [ ] 락 딜레이
  - [ ] 블록 고정
  - [ ] 채워진 줄 지우기
  - [ ] 점수 계산
  - [ ] 게임오버 체크
- [ ] 전체적인 게임 흐름 구현
  - [ ] 블록 선택
  - [ ] Drop 시작 & 락 딜레이 시작
  - [ ] 블록 고정 후 다시 블록 선택부터 시작

