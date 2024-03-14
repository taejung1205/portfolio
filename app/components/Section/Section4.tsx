import { Box, Space, Text, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { ReactiveSpace } from "../ReactiveSpace";

export default function Section4() {
  const { width, height } = useViewportSize();
  const theme = useMantineTheme();
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "105vh",
        minHeight: "700px",
        background: "#dadff7",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          minHeight: "1400px",
          height: "auto",
          padding: "30px"
        },
      })}
    >
      <Box
        sx={(theme) => ({
          width: "calc(100% - 200px)",
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: "calc(100% - 60px)",
          },
        })}
      >
        <Text
          weight={700}
          color={"#020153"}
          size={width > 500 ? 60 : 30}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          EUICC Profile Tester
        </Text>
        <Text
          color={"##ffffff"}
          size={18}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          eSIM 칩셋 프로필의 단말기 호환성을 테스트하기 위한 인프라 프로토타입
          구축
        </Text>
        <Space h={50} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              flexDirection: "column",
            },
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
             
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "50vh",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img src="/images/euiccprofile.jpg" />
          </Box>
          <Space w={50} h={50} />
          <Box
            sx={{
              marginRight: "130px",
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                marginRight: 0,
              },
            }}
          >
            <Text size={20} weight={700}>
              ABOUT
            </Text>
            <Space h={10} />
            <Text size={14}>
              삼성전자 무선사업부 CP Solution 팀에서 인턴으로 활동하며 진행한
              프로젝트입니다. 휴대전화 단말기의 구독 정보를 관리하는 eUICC
              프로필이 실제 단말기에서 정상적으로 작동하는 지 테스트하기 위한
              서비스의 프로토타입을 개발하였습니다. eUICC 프로필을 다운로드하고
              설치하여 이상 여부를 확인하는 안드로이드 어플리케이션과,
              클라이언트가 QR코드 또는 링크 업로드시 해당 정보를 서버 및 테스트
              단말기로 전송하는 웹페이지, 그리고 이들의 통신을 위한 서버로
              구성되어 있습니다.
            </Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              작업 기간
            </Text>
            <Space h={10} />
            <Text size={16}>2021.07. ~ 2021.08.</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              기술 스택
            </Text>
            <Space h={10} />
            <Text size={16}>Android (Java), Android API, Javascript</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              주요 구현
            </Text>
            <Space h={10} />
            <Text size={16}>
              · 서버로부터 받아온 구독 코드를 통해 eUICC 프로필을 다운받고 설치,
              삭제
              <br />
              · Android 단말기 내 설치된 eUICC 프로필 목록 표시 및 프로필
              활성/비활성 <br />· eUICC 프로필 설치 테스트 결과 통신 및
              웹사이트에 결과 표시 <br />
              · 웹사이트에서 QR코드 이미지 파일을 통한 코드 입력 <br />
            </Text>
            <Space h={30} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
