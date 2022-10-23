import Head from "next/head";
import MeetUpList from "../components/meetups/MeetupList";
import { PrismaClient } from "@prisma/client";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Learning for ssr nextJs" />
      </Head>
      <MeetUpList meetups={props.meetups} />
    </>
  );
}

export const getStaticProps = async () => {
  const prisma = new PrismaClient();
  const meetups = await prisma.meetup.findMany();
  prisma.$disconnect();

  return {
    props: {
      meetups: meetups,
      revalidate: 10,
    },
  };
};

export default HomePage;
