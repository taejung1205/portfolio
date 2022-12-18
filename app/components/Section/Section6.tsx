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

export default function Section6() {
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
        background: "#ffffff",
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
          color={"violet"}
          size={60}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          Evoclass
        </Text>
        <Text
          color={"#000000"}
          size={24}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          에보클래스 웹페이지 리뉴얼
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
            <Image
              src="/images/evoclass.jpg"
              sx={{
                position: "relative",
                width: "40%",
                minWidth: "400px",
                [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                  width: "80%",
                },
              }}
            />
            <Space h={20} />
            <a
              href="https://evoclass.ai/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color={"violet"} weight={700} size={25} align={"center"}>
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
            <Text size={14}>
              '에보클래스(evoclass)'는 교육관리시스템(LMS)과 화상강의 기능을
              통합해 제공하는 웹 교육 플랫폼입니다. 트랜스버스에서 프론트엔드
              개발자로 참여하며, LMS 웹사이트 내 추가 기능 구현 및 오류 수정
              작업을 진행하였고, 웹페이지 리뉴얼 프로젝트에 참여하여 새로
              만들어지는 랜딩페이지 웹사이트를 구현하고 이를 기존 LMS와
              호환시키는 작업을 수행했습니다.
            </Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              작업 기간
            </Text>
            <Space h={10} />
            <Text size={16}>2022.07. ~ 2022.08.</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              기술 스택
            </Text>
            <Space h={10} />
            <Text size={16}>React.js, Remix, Typescript, Git</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              주요 구현
            </Text>
            <Space h={10} />
            <Text size={14}>
              · LMS 서비스 내 버그 수정 및 기능 추가
              <br />
              · 랜딩페이지 헤더, 회사 소개 페이지, 사용법 페이지 리뉴얼 <br />
              · 화면 크기에 따른 반응형 웹페이지 구현 <br />· 기존 페이지의
              서비스가 호환되도록 만들기 위한 개발 환경 작업 <br />
            </Text>
            <Space h={30} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
