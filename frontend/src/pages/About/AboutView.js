import React from "react";
import { useStyles } from "./style";
import {
  Heading1,
  Heading2,
  TextProperty,
  Text,
  ButtonLink,
  SmallText,
  SocialIcon,
  BackgroundElement,
} from "../../components";
import {
  SocialIconAnimation,
  CircleAnimation,
  BallchairAnimation,
  BgElementAnimation,
  HeadingsAnimation,
} from "./animations";
import { Icon, Circle, Ballchair } from "../../resources";

export const AboutView = () => {
  const classes = useStyles();

  return (
    <>
      <section>
        <BgElementAnimation>
          <BackgroundElement />
        </BgElementAnimation>
        <div className={classes.container}>
          <CircleAnimation className={classes.circle}>
            <Circle />
          </CircleAnimation>
          <div className={classes.headingsBallChair}>
            <HeadingsAnimation className={classes.headings}>
              <Heading1 style={{ marginBottom: "12px" }}>
                Hi, I'm <TextProperty color="PRIMARY">Amado</TextProperty>
              </Heading1>
              <Heading2 style={{ marginBottom: "12px" }}>
                I‘m junior web developer, specializing in front-end development.
              </Heading2>
              <Text bold style={{ marginBottom: "24px" }}>
                Current Focus:{" "}
                <TextProperty color="PRIMARY" weight="NORMAL">
                  React-Jss, Framer-Motion, Design System, and Figma
                </TextProperty>
              </Text>
              <ButtonLink
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 6px rgb(255,113,41)",
                }}
                whileTap={{ scale: 0.8 }}
                href="/projects"
                size="SM"
                corner="8"
              >
                <SmallText>
                  <TextProperty color="BLACK" weight="BOLD">
                    CHECK OUT MY WORK
                  </TextProperty>
                </SmallText>
              </ButtonLink>
            </HeadingsAnimation>
            <BallchairAnimation>
              <Ballchair className={classes.ballChair} />
            </BallchairAnimation>
          </div>
          <div className={classes.icons}>
            <SocialIconAnimation href="...">
              <SocialIcon>
                <Icon.Messenger color="#828276" />
              </SocialIcon>
            </SocialIconAnimation>
            <SocialIconAnimation href="...">
              <SocialIcon>
                <Icon.Linkedin color="#828276" />
              </SocialIcon>
            </SocialIconAnimation>
            <SocialIconAnimation href="...">
              <SocialIcon>
                <Icon.Github color="#828276" />
              </SocialIcon>
            </SocialIconAnimation>
            <SocialIconAnimation href="...">
              <SocialIcon>
                <Icon.Gmail color="#828276" />
              </SocialIcon>
            </SocialIconAnimation>
          </div>
        </div>
      </section>
    </>
  );
};