import{ DivO }from "./style"
import { Container } from "@/styles/Global";
import { SpanAbout, H2About} from "./style"
import { Text } from "@/styles/Text";

export const AboutMe = () => {

    return (
        <DivO id="aboutMe">
            <Container>
                <H2About>About <SpanAbout>me</SpanAbout></H2About>
                <Text type="body1" color="grey2">My name is Lucas, I'm 25 years old, and I'm originally from Passos, MG. I've always been very curious since childhood and loved taking things apart to understand how they worked. This curiosity led me to the field of programming because I wanted to understand how things were rendered on the screen and much more. Since my teenage years, I took some courses and had programming as a hobby, never imagining that one day I would work with it. Living in a small town, there weren't many technology companies, and I didn't have the possibility of moving to another city. However, with the arrival of the pandemic, remote jobs became a reality, and I decided to take my hobby more seriously by studying with the goal of working in the field.</Text>
                <Text type="body1" color="grey2">Studying on my own was challenging because I took a long time to understand some concepts, and I didn't have the opportunity to work in a group, which is a highly valued skill in the job market. That's why I decided to join Kenzie Academy, a programming school that trains professionals in the leading technologies of the industry. There, I learned Node, TypeScript, React, PostgreSQL, and many others, as well as developing various projects, from landing pages to complete online stores. I also had the opportunity to work in teams, using the Scrum methodology, which was really great. And today, I feel ready to enter the job market.</Text>
            </Container>
        </DivO>
    )
}