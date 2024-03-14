import { Box, Space, Text, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { ReactiveSpace } from "../ReactiveSpace";

export default function Section3() {
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
        background: "#cdeefc",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          minHeight: "1300px",
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
          color={"indigo"}
          size={60}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          Mathe Te
        </Text>
        <Text
          color={"#00054e"}
          size={24}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          사칙연산을 활용한 Unity 모바일게임
        </Text>
        <Space h={50} />
        <Box
          sx={{
            display: "flex",
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              flexDirection: "column",
            },
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "50vh",
              [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                display: "none",
              },
            }}
          >
            {width > 1400 ? <img src="/images/mathete1.jpg" /> : <></>}
            <Space w={10} />
            {width > 1200 ? <img src="/images/mathete2.png" /> : <></>}
          </Box>
          <Space w={10} h={10} />
          <iframe
            width={
              width > theme.breakpoints.md
                ? height / 4
                : width > theme.breakpoints.sm
                ? width - 350
                : width - 100
            }
            height={height / 2}
            src="https://www.youtube.com/embed/_eSYzxgJ8sE"
          />
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
              정보문화학 전공강의 ‘게임의 이해’를 수강하며 진행한 프로젝트로,
              Unity를 처음 접하며 제작한 작품입니다. Mathe Te는 1인 개발로
              진행된 모바일 게임 프로젝트로, 주어진 숫자들을 사칙연산으로
              조합하여 적들의 숫자로 만들어 제거하는 디펜스 게임입니다. 해당
              프로젝트는 18년도 1학기 정보문화학 과제전에 출품되었습니다.
            </Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              작업 기간
            </Text>
            <Space h={10} />
            <Text size={16}>2018.05. ~ 2018.06.</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              기술 스택
            </Text>
            <Space h={10} />
            <Text size={16}>Unity, C#</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              주요 구현
            </Text>
            <Space h={10} />
            <Text size={16}>
              · 숫자 카드 및 사칙연산 해독 알고리즘, 몬스터 생성 알고리즘 <br />
              · 무기 및 스킬 시스템, 공격 시 시각적/청각적 효과 <br />
            </Text>
            <Space h={30} />
            <a
              href="https://drive.google.com/file/d/1_4RbRiZCFnk4cGP3-g5cgMK4JjXCRaqv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Text size={24} weight={700} color={"indigo"}>
                다운로드하기
              </Text>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
