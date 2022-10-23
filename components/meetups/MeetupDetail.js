import styles from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  const { meetupData } = props;

  return (
    <section className={styles.detail}>
      <img src={meetupData.image} alt="" />
      <h1>{meetupData.title}</h1>
      <address>{meetupData.address}</address>
      <p>{meetupData.description}</p>
    </section>
  );
};

export default MeetupDetail;
