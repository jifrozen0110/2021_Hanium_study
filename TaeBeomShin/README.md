#TaeBeomShin

## 특이사항

- windows home버전이여서 windows pro로 교체 및 용량 부족으로 ssd 교체.

## 빌드 명령어(공통)

1. mvn clean package docker:build
2. docker-compose -f docker/common/docker-compose.yml up
3. docker-compose -f docker/common/docker-compose.yml down
4. docker rmi $(docker images -a -q) : 모든 도커 이미지 삭제

##Ch2 issues

1. common_licensingservice_1 exited with code 127
-> https://github.com/carnellj/spmia-chapter2/issues/9

line ending 스타일로 인한 에러 .gitattributes를 이용해서 수정해주기.
https://docs.github.com/en/github/getting-started-with-github/configuring-git-to-handle-line-endings
