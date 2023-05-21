import { ThemeContext } from "@emotion/react";
import {
  Box,
  Divider,
  Image,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { ReactiveSpace } from "../ReactiveSpace";

export default function Section2() {
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
          minHeight: "1750px",
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
          color={"#00054e"}
          size={60}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          ABOUT ME
        </Text>

        <Space h={30} />
        <Box
          sx={{
            [`@media (min-width: ${theme.breakpoints.md}px)`]: {
              display: "flex",
            },
          }}
        >
          <Box
            sx={{
              [`@media (min-width:  ${theme.breakpoints.md}px)`]: {
                width: "740px",
              },
              [`@media (min-width: 1500px)`]: {
                width: "1000px",
              },
            }}
          >
            {width > 1360 ? (
              <Text
                weight={400}
                color={"black"}
                size={width > 1500 ? 18 : 15}
                sx={{
                  [`@media (min-width:  ${theme.breakpoints.md}px)`]: {
                    height: "240px",
                  },
                }}
              >
                저는 초등학생 시절부터 줄곧 게임 개발자가 되는 것을
                희망해왔습니다. <br />
                ‘내가 디지털 장치를 조작하고, 그 조작의 결과물이 눈에 띄는
                즉각적인 피드백으로 나타난다’는 점은 <br />
                제가 느낀 게임의 가장 큰 매력이었고, 이러한 이유로 다양한 개발
                분야 중에서도 프론트엔드에 가장 큰 흥미를 느꼈습니다. <br />
                <br />
                개발자로서 역량을 키우는 가장 효과적인 방법은 풍부한 프로젝트
                경험이라 생각합니다. <br />
                여러 회사를 거치며 얻은 협업 경험은 다양한 개발 프레임워크를
                접할 기회를 주었으며, <br />
                이를 통해 새로운 개발 프로젝트에 도전하고, 새로운 개발 환경에
                적응하는 것에 대한 자신감을 얻을 수 있었습니다.
              </Text>
            ) : (
              <Text
                weight={400}
                color={"black"}
                size={14}
                sx={{
                  [`@media (min-width:  ${theme.breakpoints.md}px)`]: {
                    height: "240px",
                  },
                }}
              >
                저는 초등학생 시절부터 줄곧 게임 개발자가 되는 것을
                희망해왔습니다. ‘내가 디지털 장치를 조작하고, 그 조작의 결과물이
                눈에 띄는 즉각적인 피드백으로 나타난다’는 점은 제가 느낀 게임의
                가장 큰 매력이었고, 이러한 이유로 다양한 개발 분야 중에서도
                프론트엔드에 가장 큰 흥미를 느꼈습니다. <br /> <br />
                개발자로서 역량을 키우는 가장 효과적인 방법은 풍부한 프로젝트
                경험이라 생각합니다. 여러 회사를 거치며 얻은 협업 경험은 다양한
                개발 프레임워크를 접할 기회를 주었으며, 이를 통해 새로운 개발
                프로젝트에 도전하고, 새로운 개발 환경에 적응하는 것에 대한
                자신감을 얻을 수 있었습니다.
              </Text>
            )}
            {width > theme.breakpoints.md ? (
              <Box
                sx={{
                  display: "flex",
                  margin: 0,
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Text weight={700} color={"#00054e"} size={30}>
                    EDUCATION
                  </Text>
                  <Space h={10} />
                  <Text
                    weight={400}
                    color={"black"}
                    size={width > 1500 ? 16 : 12}
                  >
                    2014.03. ~ 2017.02. 세종국제고등학교 <br />
                    2017.03. ~ 서울대학교 자유전공학부 (컴퓨터공학 주전공,
                    정보문화학 연합전공) <br />
                  </Text>
                  <Space h={50} />
                  <Text weight={700} color={"#00054e"} size={30}>
                    CAREER
                  </Text>
                  <Space h={10} />
                  <Text
                    weight={400}
                    color={"black"}
                    size={width > 1500 ? 16 : 12}
                  >
                    2021.07. ~ 2021.08. '삼성전자(주)' 무선사업부 인턴 <br />
                    2021.11. ~ 2022.05. 애견인 종합 플랫폼 스타트업 '(주)펫런'
                    개발자 <br />
                    2022.07. ~ 2022.08. 화상교육 플랫폼 스타트업
                    '(주)트랜스버스' 프론트엔드 개발 인턴 <br />
                    2022.09. ~ 2022.10. '로파서울'과 협업하여 공예품 경매
                    서비스 '뉴비드' 개발 <br />
                    2023.01. ~ 2023.02. '로파서울'의 고객사 물류 처리를 위한 파트너 사이트 개발 
                  </Text>
                </Box>
                <Space w={30} h={30} />
                <Box
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Text weight={700} color={"#00054e"} size={30}>
                    SKILLS
                  </Text>
                  <Space h={20} />
                  <Text
                    weight={700}
                    color={"blue"}
                    size={width > 1500 ? 24 : 20}
                    sx={{
                      lineHeight: 1.8,
                    }}
                  >
                    <a
                      href={"https://reactjs.org/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      · React.js{" "}
                    </a>
                    <br />
                    <a
                      href={"https://remix.run/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      · Remix 
                    </a>
                    <br />
                    <a
                      href={"https://firebase.google.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      · Firebase
                    </a>
                    <br />
                    <a
                      href={"https://flutter.dev/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      · Flutter
                    </a>
                    <br />
                    <a
                      href={"https://www.java.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      · Java
                    </a>
                    <br />
                    <a
                      href={"https://unity.com/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      · Unity
                    </a>
                    <br />
                    <a
                      href={"https://github.com/taejung1205"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      · Git 
                    </a>
                  </Text>
                </Box>
              </Box>
            ) : (
              <></>
            )}
          </Box>
          {width < 1360 ? <Space w={100} h={50} /> : <></>}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
              }}
            >
              <img
                src={"/images/selfie-modified.png"}
                style={{
                  userSelect: "none",
                  width: "300px",
                  objectFit: "contain",
                }}
              />
              <Space h={20} />
              <Text align="center" weight={700} color={"black"} size={24}>
                김태정
              </Text>
              <Space h={10} />
              <Divider h={3} />
              <Text
                align="center"
                weight={400}
                color={"black"}
                size={16}
                sx={{
                  lineHeight: 2,
                }}
              >
                1998.12.05 <br />
                경기도 의왕시 학의동 <br />
                010 - 2354 - 0973
                <br />
                immcoc1@naver.com <br />
                <b>Github</b> @taejung1205
              </Text>
            </Box>
          </Box>
          {width < theme.breakpoints.md ? (
            <Box
              sx={{
                margin: 0,
              }}
            >
              <Space h={30} />
              <Box>
                <Text weight={700} color={"#00054e"} size={30}>
                  EDUCATION
                </Text>
                <Space h={10} />
                <Text
                  weight={400}
                  color={"black"}
                  size={width > 1500 ? 16 : 12}
                >
                  2014.03. ~ 2017.02. 세종국제고등학교 <br />
                  2017.03. ~ 서울대학교 자유전공학부 (컴퓨터공학 주전공,
                  정보문화학 연합전공) <br />
                </Text>
                <Space h={50} />
                <Text weight={700} color={"#00054e"} size={30}>
                  CAREER
                </Text>
                <Space h={10} />
                <Text
                  weight={400}
                  color={"black"}
                  size={width > 1500 ? 16 : 12}
                >
                  2021.07. ~ 2021.08. '삼성전자(주)' 무선사업부 인턴 <br />
                  2021.11. ~ 2022.05. 애견인 종합 플랫폼 스타트업 '(주)펫런'
                  개발자 <br />
                  2022.07. ~ 2022.08. 화상교육 플랫폼 스타트업 '(주)트랜스버스'
                  프론트엔드 개발 인턴 <br />
                  2022.09. ~ 2022.10. '(주)따바프레스'와 협업하여 공예품 경매
                  서비스 '뉴비드' 개발
                </Text>
              </Box>
              <Space w={30} h={30} />
              <Box>
                <Text weight={700} color={"#00054e"} size={30}>
                  SKILLS
                </Text>
                <Space h={20} />
                <Text
                  weight={700}
                  color={"blue"}
                  size={width > 1500 ? 24 : 20}
                  sx={{
                    lineHeight: 1.8,
                  }}
                >
                  <a
                    href={"https://reactjs.org/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    · React.js{" "}
                  </a>
                  <br />
                  <a
                    href={"https://remix.run/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    · Remix <br />
                  </a>
                  <a
                    href={"https://flutter.dev/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    · Flutter <br />
                  </a>

                  <a
                    href={"https://www.java.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    · Java <br />
                  </a>
                  <a
                    href={"https://unity.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    · Unity <br />
                  </a>
                  <a
                    href={"https://github.com/taejung1205"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    · Git <br />
                  </a>
                </Text>
              </Box>
            </Box>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  );
}
