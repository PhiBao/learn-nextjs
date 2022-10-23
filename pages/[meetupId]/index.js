import { PrismaClient } from "@prisma/client";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return <MeetupDetail meetupData={props.meetup} />;
};

export const getStaticPaths = async () => {
  const prisma = new PrismaClient();
  const meetups = await prisma.meetup.findMany({ take: 2 });
  prisma.$disconnect();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup.id,
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const prisma = new PrismaClient();
  const meetupId = context.params.meetupId;
  const meetup = await prisma.meetup.findUnique({
    where: {
      id: meetupId,
    },
  });
  prisma.$disconnect();

  return {
    props: {
      meetup: meetup,
    },
  };
};

export default MeetupDetails;
