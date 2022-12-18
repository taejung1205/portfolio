import {
  Box,
  Center,
  Image,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { ReactiveSpace } from "../ReactiveSpace";

export default function Section5() {
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
        background: "#e0eeff",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          minHeight: "1300px",
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
          color={"#090b5e"}
          size={60}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          PetRun
        </Text>
        <Text
          color={"#090b5e"}
          size={24}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          반려동물 종합 어플리케이션 '펫런' 초기 개발
        </Text>
        <Space h={50} />
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
            <Box
              sx={{
                display: "flex",
                height: width < 1200 && width > 760 ? "40vh" : "50vh",
              }}
            >
              {width > 1400 ? <img src="/images/petrun1.jpg" /> : <></>}
              <Space w={10} />
              <img src="/images/petrun2.jpg" />
              <Space w={10} />
              {width > 500 ? <img src="/images/petrun3.jpg" /> : <></>}
            </Box>
            <Space h={20} />
            <a
              href="https://petrun.kr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color={"#090b5e"} weight={700} size={25} align={"center"}>
                웹페이지 바로가기
              </Text>
            </a>
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
            <Text size={width > 1200 && width < 795 ? 14 : 12} color={"black"}>
              스타트업 ‘(주)펫런’에서 활동하며 진행한 프로젝트입니다. 펫런은
              애견인을 위한 종합 플랫폼 어플리케이션입니다. 산책과 관련된 소셜
              콘텐츠 및 보상 시스템, 산책 대리인 중개, 애견인 커뮤니티, 펫샵 등
              다양한 서비스를 제공하는 것을 목표로 하고 있습니다. 저는 이
              프로젝트에서 프론트엔드 개발자로 참여하였으며, 회원가입과 산책
              서비스 기능을 사용할 수 있는 초기의 MVP(Android & iOS)를
              구현하였습니다.
            </Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              작업 기간
            </Text>
            <Space h={10} />
            <Text size={16}>2021.11. ~ 2022.05.</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              기술 스택
            </Text>
            <Space h={10} />
            <Text size={16}>Flutter, Firebase, Naver API, Git</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              주요 구현
            </Text>
            <Space h={10} />
            <Text size={14}>
              · 회원가입 & 산책 MVP의 전체 UI
              <br />
              · MVP용 임시 회원가입 프로세스 <br />
              · 네이버 맵 기반 산책 경로 트래킹 서비스 <br />
              · 산책 기록 저장 및 산책 경로 워터마크화 기능 <br />
              · 산책 서비스 이용자간 상호작용 기능 <br />
            </Text>
            <Space h={30} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
