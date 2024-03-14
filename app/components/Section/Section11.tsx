import {
  Box,
  Center,
  Image,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function Section11() {
  const { width, } = useViewportSize();
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
        background: "#555555",
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
          color={"white"}
          size={width > 500 ? 60 : 30}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          기타 프로젝트
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
          <Box sx={{
            position: "relative",
            width: "300px",
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              width: "80%",
            },
          }}>
            <Image src="/images/pauseahead.png" />
          </Box>
          <Space w={50} h={50} />
          <Box w={"100%"}>
            <Text weight={700} color={"white"} size={16}>FlashBack: Pause Ahead</Text>
            <Space h={20} />
            <Text color={"white"} size={14}>2022-2 정보문화학 강의 '산학연구실습'의 과제물로 제작한 견습 모작 게임입니다. Askiisoft가 2013년에 개발한 플랫포머 플래시게임 'Pause Ahead'의 게임 메카닉을 재현한 플래시게임으로,
              일시정지 도중 관성이 유지되는 기믹을 활용해 물리적으로 클리어가 불가능한 레벨을 클리어하는 것이 이 게임의 목표입니다. <br /><br />기술 스택: Unreal Engine 4</Text>
            <Space h={20} />
            <a
              href=" https://taejung1205.itch.io/pauseaheadmockup"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color={"#DDDDFF"} weight={700} size={16} align={"center"}>
                게임 플레이하기
              </Text>
            </a>
          </Box>
        </Box>
        <Space h={70} />
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
          <Box sx={{
            position: "relative",
            width: "300px",
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              width: "80%",
            },
          }}>
            <Image src="/images/truel.png" />
          </Box>
          <Space w={50} h={50} />
          <Box w={"100%"}>
            <Text weight={700} color={"white"} size={16}>세 명의 총잡이(Truel)</Text>
            <Space h={20} />
            <Text color={"white"} size={14}>2022-2 정보문화학 강의 '시리어스 게임'의 과제물로 제작한 시뮬레이션 게임입니다. 
            유명한 게임 이론인 '세 명의 총잡이'의 등장인물이 되어, 주어진 규칙에서 생존 확률을 가장 높이는 선택지를 고르는 것이 목표입니다.
            직접 자신의 명중률을 조정해서 시험해볼 수 있는 커스텀 모드를 지원합니다. 
            <br /><br />기술 스택: Unity</Text>
            <Space h={20} />
            <a
              href="https://taejung1205.itch.io/truel"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color={"#DDDDFF"} weight={700} size={16} align={"center"}>
                게임 플레이하기
              </Text>
            </a>
          </Box>
        </Box>
        <Space h={70} />
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
          <Box sx={{
            position: "relative",
            width: "300px",
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              width: "80%",
            },
          }}>
            <Image src="/images/remoterun.png" />
          </Box>
          <Space w={50} h={50} />
          <Box w={"100%"}>
            <Text weight={700} color={"white"} size={16}>Remote Run</Text>
            <Space h={20} />
            <Text color={"white"} size={14}>2022-2 정보문화학 강의 '인터랙티브 미디어'의 과제물로 제작한 게임입니다. 
            초음파 센서를 활용해 만들어진 아두이노 장치를 컨트롤러로 사용하여, 양손과 컨트롤러 사이의 거리를 활용해 캐릭터의 좌우 이동을 조작하여 장애물을 피한 채 완주하는 게임입니다. 
            <br /><br />기술 스택: Unity, Arduino</Text>
            <Space h={20} />
            <a
              href="https://github.com/taejung1205/remote-run-arduino"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color={"#DDDDFF"} weight={700} size={16} align={"center"}>
                리포지토리 바로가기
              </Text>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
