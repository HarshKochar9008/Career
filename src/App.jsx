
import './global.css'
import styles from "./ComingSoonSection.module.css";

const  App = () => {
  return (
    <div className={styles.comingSoonSection2} style={{ fontFamily: 'Gilroy', fontWeight: 700 }}>
      <div className={styles.header}>
        <div className={styles.companyName}>Career Campus</div>
      </div>
      <div className={styles.bgWrapper}>
        <div className={styles.bg} />
      </div>
      <div className={styles.searchParent}>
        <div className={styles.search}>
          <div className={styles.bar}>
            <div className={styles.barChild} />
            <div className={styles.barItem} />
            <div className={styles.yourEmailAddress}>
               <input 
              type="email" 
              className={styles.emailInput} 
              placeholder="Your email address..." 
            />
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.buttonChild} />
            <div className={styles.subscribeWrapper}>
              <div className={styles.subscribe}>Subscribe</div>
            </div>
          </div>
        </div>
        <div className={styles.areYouReady}>
          Are you Ready to get something new from us. Then subscribe the news
          latter to get latest updates?
        </div>
        <b className={styles.comingSoon}>Coming Soon</b>
        <img
          className={styles.launchingAProject}
          alt=""
          src="/assets/Launching a project.png"
        />
      </div>
    </div>
  );
}

export default App
