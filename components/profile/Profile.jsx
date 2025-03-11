import styles from './Profile.module.css'

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileTitle}>Профиль</h1>
      <div className={styles.profilesList}>
        <ProfileCard
          name="Основной"
          description="Вз | Основной"
          editLink="#"
        />
        <ProfileCard
          name="Детский"
          description="Вз | Детский"
          editLink="#"
        />
        <AddProfileCard />
      </div>
    </div>
  );
}

function ProfileCard({ name, description, editLink }) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileAvatar}></div>
      <h2 className={styles.profileName}>{name}</h2>
      <p className={styles.profileDescription}>{description}</p>
      <a href={editLink} className={styles.editProfileLink}>Редактировать</a>
    </div>
  );
}

function AddProfileCard() {
  return (
    <div className={styles.addProfileCard}>
      <div className={styles.addProfileIcon}>+</div>
      <p className={styles.addProfileText}>Добавить профиль</p>
    </div>
  );
}
