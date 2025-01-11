import "./global.css";
import styles from "./ComingSoonSection.module.css";

const App = () => {
  return (
    <div
      className={styles.comingSoonSection2}
      style={{ fontFamily: "Gilroy", fontWeight: 700 }}
    >
      <div className={styles.header}>
        <div className={styles.companyName}>Career Campus</div>
      </div>
      <div className={styles.bgWrapper}>
        <div className={styles.bg} />
      </div>
      <div style={{width: '100%', height: '100%', position: 'absolute',left:50, background: 'rgba(0, 0, 0, 0)'}}>
          <div style={{width: 58, height: 20, left: 1368, top: 30, position: 'absolute', color: '#000000', fontSize: 14.50, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Support</div>
          <div style={{width: 62, height: 18, left: 1278, top: 30, position: 'absolute', color: '#000000', fontSize: 14.10, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Premium</div>
          <div style={{width: 44, left: 1206, top: 30, position: 'absolute', color: '#000000', fontSize: 14.50, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>About</div>
          <div style={{width: 62, height: 18, left: 1113, top: 30, position: 'absolute', color: '#000000', fontSize: 14.10, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Services</div>
      </div>
      <div className={styles.searchParent}>
        <div className={styles.container}>
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
        <div className={styles.detail}>
        <div className={styles.areYouReady}>
          Are you Ready to get something new from us. Then subscribe the news
          latter to get latest updates?
        </div>
        <b className={styles.comingSoon}>Coming Soon</b>
        </div>
        </div>
        <div className={styles.vector1}>
          <img alt="" src="/assets/Vector1.svg" style={{width: 220, height: 200}} />
        </div>
        <div className={styles.vector2}>
          <img alt="" src="/assets/Vector2.svg" style={{width: 220, height: 200}} />
        </div>
        <div className={styles.line1}>
          <img alt="" src="/assets/Line 1.png" style={{width: 1020, height: 800}} />
        </div>
        <img
          className={styles.launchingAProject}
          alt=""
          src="/assets/Launching a project.png"
        />
      </div>
    </div>
  );
};

export default App;
