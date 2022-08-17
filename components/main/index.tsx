import React from "react";
import Content from "./components/content";
import Paragraph from "./components/paragraph";
import Section from "./components/section";
import Skill from "./components/skill";
import Subtitle from "./components/Subtitle";
import Title from "./components/title";
import AditionalInformation from "./components/AditionalInformation";
import Link from "next/link";

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
  return (
    <main className="w-full flex-1">
      <Section>
        <Title title="My skills" />
        <Content>
          {mySkills.map((skill, index) => {
            return <Skill title={skill.title} key={index} />;
          })}
        </Content>
      </Section>
      <Section>
        <Title title="About me" />
        <Content>
          <p>{aboutMe}</p>
        </Content>
      </Section>
      <Section>
        <Title title="Professional Experience" />
        <Content>
          <div>
            <Subtitle title="Me.At - 2021 - Now" />
            <Paragraph
              content={`React, Next.js Javascript, Typeorm, Tailwind CSS, Socket.io
              development in Israeli IoT startup. Working with, Slack, Monday,
              git version control, task control, Scrum, communication in English
              through meet and messages`}
            />
            <Subtitle title="E-commerce Sottile Casa - 2020-2021" />
            <Paragraph
              content={`Web development, HTML CSS and Javascript, UX/UI Design, Landing
              Pages, SEO adjusts, blog maintenance, API's creation, working with
              kanban, github and Monday`}
            />
            <Subtitle title="Web developer Freelancer - 2017-2020" />
            <Paragraph
              content={`Web development, HTML CSS and Javascript, React, site creation,
              tools, dashboards, zoom's galleries, implementation of
              improvements, assembly of virtual stores in Tray, Integrated
              Store, PHP development in WooCommerce, Wordpress and Node.js.`}
            />
            <Subtitle title="Karsten - 2013-2017" />
            <Paragraph
              content={`Creation of advanced Excel spreadsheets and VBA, sales forecast`}
            />
          </div>
        </Content>
      </Section>
      <Section>
        <Title title={qualifications.title} />
        <Content>
          <div>
            {qualifications.name.map((name, index: number) => {
              return <AditionalInformation key={index} title={name} />;
            })}
          </div>
        </Content>
      </Section>
      <Section>
        <Title title={someWorks.title} />
        <Content>
          <div>
            {someWorks.work.map((work, index: number) => {
              return (
                <div className="my-1" key={index}>
                  <Link href={work.link}>
                    <a className="underline">{work.title}</a>
                  </Link>
                  {work.description && <span className="block mx-4">{work.description} </span>}
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
