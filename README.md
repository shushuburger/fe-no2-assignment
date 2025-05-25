# fe-no2-assignment
카카오테크캠퍼스 2차 과제

## 필수 기능

### 1. prop-drilling 작업 후 context 브랜치를 통해 전역 상태 관리

- 포켓몬 선택 리스트와 추가 및 삭제 기능을 Context API로 구현하였습니다.
- Context 방식 도입 시 `usePokemon()`를 통해 필요한 정보를 사용할 수 있도록 하였습니다.

### 2. 페이지 라우팅 구현

- `react-router-dom`의 `useNavigate`를 이용해 라우팅을 구현하였습니다.

  * `/`: Home 페이지
  * `/dex`: 포켓몬 도감 페이지
  * `/pokemon-detail`: 포켓몬 상세 페이지
> 결과 레퍼런스 사이트처럼 ?id=3 와 같이 해당하는 포켓몬에 대한 아이디 역시 링크에 함께 뜨도록 하였습니다.

### 3. 포켓몬 도감 리스트 UI

- `PokemonCard`, `PokemonList`, `Dashboard`로 컴포넌트를 분리하여 UI를 구성하였습니다.
- 포켓몬 이름, 이미지, 번호가 카드에 표시되며 클릭하면 상세 페이지로 이동합니다.

### 4. 포켓몬 선택 및 제한 기능

- `추가` 버튼을 누르면 포켓몬이 `Dashboard`에 등록됩니다.
> 최대 6개까지만 선택 가능하며, 중복 선택 시 알림을 제공합니다.
- `삭제` 버튼을 통해 선택된 포켓몬을 제거할 수 있습니다.

### 5. 포켓몬 상세 페이지 기능

- `/pokemon-detail?id=번호` 경로로 접속 시, 해당 포켓몬의 상세 정보를 확인할 수 있습니다.
- 뒤로 가기 버튼을 통해 `/dex`로 돌아오기가 가능합니다.

### 6. styled-components 사용

- 모든 스타일링은 styled-components를 사용하여 컴포넌트 단위로 작성하였습니다.
- 반응형을 위해 모바일/데스크탑에서도 자연스럽게 표시되도록 media query를 포함하였습니다.

---

## 도전 기능
도전 기능 1번은 구현하지 않았습니다.

다만 추가 기능에 대한 구현을 모두 redux-toolkits 브랜치에서 진행하였습니다.

해당 branch는 context 기반 흐름입니다.

### 2. 디테일 페이지에서 포켓몬 추가/삭제 기능

- 상세 페이지에서도 Dashborad에 결과가 반영되는 추가/삭제 버튼을 구현하였습니다.
- 선택된 포켓몬인지 여부에 따라 버튼 내용이 추가/삭제 둘 중에 적절한 내용을 가지도록 동적으로 변경됩니다.

### 3. 페이지 이동 시 상태 유지

- 2번을 구현하며 자연스럽게 3번 역시 구현되었습니다.
- 상세 페이지에 들어갔다 와도 dashboard의 내용이 유지됩니다.

### 4. react-toastify를 활용한 사용자 알림 UI

- 기존의 `alert()`을 모두 제거하고 react-toastify를 적용하였습니다.
- 포켓몬 중복 선택 또는 최대 초과 시 `toast.warn`, `toast.error`를 통해 서로 다른 색상의 알림을 제공하도록 했습니다.

---

## prop-drilling과 context를 하며 느낀 차이점

Prop은 부모 컴포넌트가 자식 컴포넌트에 데이터를 직접 전달하는 방식이라고 배웠고 이해했습니다.

그에 반해 Context는 전역적으로 상태를 관리하여 어떤 컴포넌트든 직접 접근할 수 있도록 해주는 방식으로 이해하였습니다.

Prop은 구조가 깊어질수록 그리고 겹치는 구조가 늘어날수록 전달이 번거롭다는 단점고 더불어 중간 컴포넌트는 본인에게는 필요 없는 데이터를 전달만 하게 되는 문제가 있다는 것을 알고 있었습니다. 

반면 Context는 중간 단계를 생략하고 원하는 컴포넌트에서 바로 값을 사용할 수 있어 편리하다고 느꼈습니다. 

Prop를 사용할 때에는 이 정보가 어디서 왔는지 흐름을 조금 더 이해하기 쉬워서 좋았다면 Context는 import 하나를 추가하는 것만으로 함수, 변수를 사용하기가 훨씬 편해진 게 느껴져 좋았습니다.

---

## 동작 화면
1) Home 화면
![image](https://github.com/user-attachments/assets/54ec392b-ee81-425f-8681-f02cde4215e7)
- dex 화면으로 진입하기 위한 버튼이 있습니다.

2) dex 화면
![image](https://github.com/user-attachments/assets/4c976a45-b69c-4911-a920-806a6226bc26)
- dex 화면 진입시 한 줄에 7마리의 포켓몬이 보이도록 하였습니다.
- 등록되지 않은 dashboard는 몬스터볼이 이미지로 뜨도록 하였습니다.
  
3) 포켓몬 추가 화면
![image](https://github.com/user-attachments/assets/36c90c75-0054-4862-96a0-0e27dfe4255d)
- 포켓몬을 추가하고 난 뒤 화면입니다.
- 추가된 dashboard 영역만 몬스터볼이 아닌 포켓몬에 대한 정보로 대체됩니다.
  
4) 이미 등록된 포켓몬 추가 화면
![image](https://github.com/user-attachments/assets/0928132f-36f8-45db-a291-64d556e4d34d)
- 이미 dashboard 상에 있는 포켓몬을 다시 추가할 경우 우측에 toast로 알림이 뜹니다.

5) 6개 이상의 포켓몬 저장 시도시 화면
![image](https://github.com/user-attachments/assets/4ffff8b8-d196-4a3e-9cd1-3dfeb864f41a)
- dashboard가 꽉 찬 상태에서 또다른 포켓몬을 클릭할 경우 우측에 toast로 알림이 뜹니다.
- 중복 등록과 색상을 구분하여 시각적 효과를 의도하였습니다.

6) 등록된 포켓몬 삭제 후 화면
![image](https://github.com/user-attachments/assets/9137840b-1cb1-442e-b4c0-728aa04f7b1e)
- 아까 꽉 찬 dashboard에서 중간에 위치한 포켓몬을 삭제한 후의 화면입니다.
- 중간을 삭제했다고 해서 중간이 다시 몬스터볼로 변하는 것이 아니라 앞에서부터 빈틈없이 채워지도록 하였습니다.
  
7) 상세페이지 화면 (추가되지 않은 포켓몬일 경우)
![image](https://github.com/user-attachments/assets/334fa0fb-8870-4780-b0e5-ddb88952df44)
- dashboard에 등록되지 않은 포켓몬을 클릭했을 때의 화면입니다.
- 버튼 내용이 '추가'임을 확인할 수 있습니다.

8) 상세페이지에서 포켓몬을 추가하고 다시 돌아온 dex 화면
![image](https://github.com/user-attachments/assets/24e2dfa1-04a1-4061-8d74-aa7680765155)
- 7)의 상세페이지에서 꼬부기를 추가하고 dex 화면으로 돌아왔을 때의 화면입니다.
- 꼬부기가 새로 추가된 것과 더불어 기존에 dashboard에 표시되던 포켓몬 목록 역시 살아있습니다.

9) 상세페이지 화면 (추가된 포켓몬일 경우)
![image](https://github.com/user-attachments/assets/491d72c1-6ac7-4763-9ccd-f556287200ca)
- 이미 dashboard에 등록되어 있는 포켓몬의 상세페이지 화면입니다.
- '추가' 대신 '삭제'가 버튼의 텍스트로 등록되어 있습니다.
- 이 역시 삭제를 누르고 dex로 돌아가면 기존의 selectedList에서 지금의 포켓몬만 제외된 채로 selectedList의 내용이 성공적으로 유지됨을 확인하였습니다.
