import {
  Box,
  Center,
  Image,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function Section8() {
  const { width } = useViewportSize();
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
        background: "#FFFFFF",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          minHeight: "1300px",
          height: "auto",
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
          color={"#0000FF"}
          size={width > 500 ? 60 : 30}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          Facewallet
        </Text>
        <Text
          color={"#0000AA"}
          size={24}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          멀티체인 지갑 API와 웹 서비스에 대한 테스트 엔지니어링
        </Text>
        <Space h={30} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              flexDirection: "column",
            },
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {},
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/facewallet1.png"
              sx={{
                position: "relative",
                width: "40%",
                minWidth: "400px",
                maxHeight: "30%",
                [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                  width: "80%",
                },
              }}
            />
            <Image
              src="/images/facewallet2.png"
              sx={{
                position: "relative",
                width: "40%",
                minWidth: "400px",
                maxHeight: "30%",
                [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                  width: "80%",
                },
              }}
            />
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
            <Text size={12} color={"black"}>
              '페이스월렛(Facewallet)'은 P2E, NFT 게임 내에서 멀티체인 지갑을 사용할 수 있도록 API를 제공하는 해치랩스(주)의 서비스입니다.
              해치랩스의 테스트 엔지니어로 근무하며 서비스 기능이 배포되기 전 자동으로 수행되는 E2E(End-to-End) 테스트의 유지보수와 QA 업무를 진행했습니다.
              Facewallet API의 주요 기능을 테스트하기 위한 데모 사이트인 샘플댑, 앱 내 이식 없이 페이스월렛의 단독 사용을 위한 스탠드얼론,
              페이스월렛을 사용하는 앱을 고객사가 관리할 수 있게 해주는 대시보드의 테스트 작업을 진행했습니다.
            </Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              작업 기간
            </Text>
            <Space h={10} />
            <Text size={16}>2023.08. ~ 2024.02.</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              기술 스택
            </Text>
            <Space h={10} />
            <Text size={16}>
              React.js, Playwright, Git
            </Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              주요 구현
            </Text>
            <Space h={10} />
            <Text size={14}>
              · Facewallet의 기존 E2E 자동화 테스트 시스템 유지보수 
              <br />
              · Facewallet 테스트 시나리오 관리 및 QA 업무 수행
              <br />
              · Facewallet의 2단계 보안 인증에 대한 E2E 테스트 시나리오 구현
              <br />
              · Facewallet 대시보드에 대한 E2E 자동화 테스트 지원
            </Text>
            <Space h={30} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
