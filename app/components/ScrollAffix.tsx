import {
    Affix,
    Box,
    Image,
    Transition,
    Text,
    useMantineTheme,
  } from "@mantine/core";
  import React from "react";
  
  function SectionText({
    children,
    scrollIntoFunc
  }: {
    children: React.ReactNode;
    scrollIntoFunc: ({alignment}? : any) => void;
  }) {
    return (
      <Text
        size={"xs"}
        color={"#0b0142"}
        align={"center"}
        sx={{
          fontFamily: "Noto Sans!important",
          cursor: "pointer",
          //textShadow: "1px 0 white, -1px 0 white, 0 1px white, 0 -1px white, 0.5px 0.5px white, -0.5px -0.5px white, -0.5px 0.5px white, 0.5px -0.5px white;"
        }}
        onClick={scrollIntoFunc}
      >
        {children}
      </Text>
    );
  }
  
  function SectionList({
    sectionList,
    scrollIntoFuncs,
  }: {
    sectionList: { text: string; }[];
    scrollIntoFuncs: (({alignment}? : any) => void)[];
  }) {
    return (
      <>
        {sectionList.map((section, i) => (
          <SectionText
            scrollIntoFunc={scrollIntoFuncs[i]}
            key={`SectionText-${i}`}
          >
            {section.text}
          </SectionText>
        ))}
      </>
    );
  }
  
  export function ScrollAffix({
    scrollIntoFuncs,
    screenWidth,
    isVisible,
    position,
  }: {
    scrollIntoFuncs: (({alignment}? : any) => void)[];
    screenWidth: number;
    isVisible: boolean;
    position?: {
      top?: string | number;
      left?: string | number;
      bottom?: string | number;
      right?: string | number;
    };
  }) {
    const theme = useMantineTheme();
  
    return (
      <Affix position={position}>
        <Transition
          transition={"fade"}
          mounted={isVisible}
          duration={500}
          exitDuration={500}
        >
          {(transitionStyles) => (
            <Box
              style={transitionStyles}
              sx={{
                width: 140,
                height: "fit-content",
                alignItems: "stretch",
                justifyContent: "space-between",
                boxShadow: "2px 2px 3px #00000040",
                padding: "1px 30px 1px 30px",
                borderRadius: 12,
                [`& *`]: {
                  margin: "40px 0 40px 0"
                },
              }}
            >

              <SectionList
                scrollIntoFuncs={scrollIntoFuncs}
                sectionList={[
                  { text: "INTRO",},
                  { text: "ABOUT ME",},
                  { text: "MATHE TE",},
                  { text: "EUICC TEST",},
                  { text: "PETRUN",},
                  { text: "EVOCLASS",},
                  { text: "NEWBID",},
                  { text: "LOFA PARTNER",},
                  { text: "FACEWALLET TE",},
                  { text: "SEARCHLIGHT",},
                  { text: "OUTRO",},
                ]}
              />
            </Box>
          )}
        </Transition>
      </Affix>
    );
  }
  