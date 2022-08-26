import React from "react";
import Content from "./components/content";
import Paragraph from "./components/paragraph";
import Section from "./components/section";
import Skill from "./components/skill";
import Subtitle from "./components/Subtitle";
import Title from "./components/title";
import AditionalInformation from "./components/AditionalInformation";
import Link from "next/link";
import { portuguese } from "../translation/br/translation";
import { english } from "../translation/en/translation";

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

interface Props {
  language: string;
}

const Main = ({ language }: Props) => {
  const actualLanguage = language === "en" ? english : portuguese;

  return (
    <main className="w-full flex-1">
      <Section>
        <Title title={actualLanguage.mySkills.title} />
        <Content>
          {actualLanguage.mySkills.skills.map((skill, index) => {
            return <Skill title={skill.title} key={index} />;
          })}
        </Content>
      </Section>
      <Section>
        <Title title={actualLanguage.aboutMe.title} />
        <Content>
          <p>{actualLanguage.aboutMe.description}</p>
        </Content>
      </Section>
      <Section>
        <Title title={actualLanguage.experience.title} />
        <Content>
          <div>
            <Subtitle title={actualLanguage.experience.meat.title} />
            <Paragraph content={actualLanguage.experience.meat.description} />
            <Subtitle title={actualLanguage.experience.sottile.title} />
            <Paragraph
              content={actualLanguage.experience.sottile.description}
            />
            <Subtitle title={actualLanguage.experience.freelance.title} />
            <Paragraph
              content={actualLanguage.experience.freelance.description}
            />
            <Subtitle title={actualLanguage.experience.karsten.title} />
            <Paragraph
              content={actualLanguage.experience.karsten.description}
            />
          </div>
        </Content>
      </Section>
      <Section>
        <Title title={actualLanguage.qualifications.title} />
        <Content>
          <div>
            {actualLanguage.qualifications.qualification.map(
              (name, index: number) => {
                return <AditionalInformation key={index} title={name} />;
              },
            )}
          </div>
        </Content>
      </Section>
      <Section>
        <Title title={actualLanguage.someWorks.title} />
        <Content>
          <div className="w-full">
            {actualLanguage.someWorks.work.map((work, index: number) => {
              return (
                <div className="my-1 flex w-full" key={index}>
                  <Link href={work.link}>
                    <a className="underline w-1/5">{work.title}</a>
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
      <Section>
        <Title title={actualLanguage.contact.title} />   
          <div className="w-full mt-4">            
            <Paragraph content={"— " + actualLanguage.contact.linkedin} />
            <Paragraph content={"— " + actualLanguage.contact.instagram} />
            <Paragraph content={"— " + actualLanguage.contact.github} />
            <Paragraph content={"— " + actualLanguage.contact.email} />
            <Paragraph content={"— " + actualLanguage.contact.city} />
          </div>    
      </Section>
    </main>
  );
};

export default Main;
