import React from "react";
import Content from "./components/content";
import Paragraph from "./components/paragraph";
import Section from "./components/section";
import Skill from "./components/skill";
import Subtitle from "./components/Subtitle";
import Title from "./components/title";
import AditionalInformation from "./components/AditionalInformation";
import Link from "next/link";

import { useTranslation } from "react-i18next";

const mySkills: {
  title: string;
  experience: number;
  time: number;
}[] = [
  { title: "JavaScript ES6+", experience: 90, time: 6 },
  { title: "React.js", experience: 90, time: 5 },
  { title: "Next.js", experience: 90, time: 2 },
  { title: "React Native", experience: 80, time: 2 },
  { title: "TypeScript", experience: 85, time: 2 },
  { title: "Tailwind", experience: 70, time: 1 },
  { title: "Node.js", experience: 90, time: 4 },
  { title: "Redux", experience: 65, time: 1 },
  { title: "Git", experience: 70, time: 4 },
  { title: "Mobile First", experience: 90, time: 5 },
  { title: "API Rest", experience: 90, time: 6 },
  { title: "Socket.io", experience: 80, time: 2 },
  { title: "SEO HTML", experience: 95, time: 6 },
  { title: "Advanced CSS", experience: 95, time: 6 },
  { title: "Docker", experience: 60, time: 1 },
  { title: "WebRTC", experience: 60, time: 1 },
];

const aboutMe: string = `Front-end developer, HTML/CSS/Javascript React.js Next.js, with
emphasis on performance, SEO, and user experience. Knowledge in
integration with API's, Websocket, JSON, DOM manipulation, JWT and
Object.`;

const qualifications: {
  title: string;
  name: string[];
} = {
  title: "Qualifications and additional informations",
  name: [
    "Bachelor in Information Systems, ESAB - 2018 - 2022;",
    "Course 'Modern Web', Cod3r - 80 hours;",
    "Course Front-end, React, Vue.js, UX/UI Design, Tipografy, Origamid - 250 hours;",
    "Course 'Digital Marketing', iMedia - 18 hours;",
  ],
};
const someWorks: {
  title: string;
  work: { title: string; link: string; description?: string }[];
} = {
  title: "Some Works",
  work: [
    {
      title: "Me@",
      link: "https://me.at",
      description: "Access https://me.at/tv and https://me.at then digit OTP",
    },
    {
      title: "Wines",
      link: "https://plugwine-admin.netlify.app/",
      description: "User: Jigger, Password: 123",
    },
    {
      title: "Etg Labels",
      link: "https://etiquetas.netlify.app/",
      description: "",
    },

    { title: "Aj Raduenz", link: "https://ajraduenz.com/", description: "" },
    {
      title: "Blog Sottile",
      link: "https://blog.sottilecasa.com.br/",
      description: "",
    },
  ],
};
const Main = () => {
  const { t } = useTranslation();
  return (
    <main className="w-full flex-1">
      <Section>
        <Title title={t("mySkills.title")} />
        <Content>
          {mySkills.map((skill, index) => {
            return <Skill title={skill.title} key={index} />;
          })}
        </Content>
      </Section>
      <Section>
        <Title title={t("aboutMe.title")} />
        <Content>
          <p>{t("aboutMe.description")}</p>
        </Content>
      </Section>
      <Section>
        <Title title={t("experience.title")} />
        <Content>
          <div>
            <Subtitle title={t("experience.meat.title")} />
            <Paragraph content={t("experience.meat.description")} />
            <Subtitle title={t("experience.sottile.title")} />
            <Paragraph content={t("experience.sottile.description")} />
            <Subtitle title={t("experience.freelance.title")} />
            <Paragraph content={t("experience.freelance.description")} />
            <Subtitle title={t("experience.karsten.title")} />
            <Paragraph content={t("experience.karsten.description")} />
          </div>
        </Content>
      </Section>
      <Section>
        <Title title={t("qualifications.title")} />
        <Content>
          <div>
            {qualifications.name.map((name, index: number) => {
              return <AditionalInformation key={index} title={t("qualifications.qualification."+index)} />;
            })}
          </div>
        </Content>
      </Section>
      <Section>
        <Title title={t("someWorks")} />
        <Content>
          <div>
            {someWorks.work.map((work, index: number) => {
              return (
                <div className="my-1" key={index}>
                  <Link href={work.link}>
                    <a className="underline">{work.title}</a>
                  </Link>
                  {work.description && (
                    <span className="block mx-4">{work.description} </span>
                  )}
                </div>
              );
            })}
          </div>
        </Content>
      </Section>
    </main>
  );
};

export default Main;
