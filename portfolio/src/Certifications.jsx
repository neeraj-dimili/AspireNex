import styles from "./Certifications.module.scss";

const certifications = [ "Certified in Web Development from Robocoupler.",
        "Certified Java Programming Internship at DevSkillHub Training (AICTE Approved).",
        "Certified in C Programming from D-PRO Computer Training Institute.",
        "Python Certification attained via Scaler.",
        "Certified in Front End Development for HTML & CSS from Great Learning Academy."]

const Certifications = () => {
    return <div className={styles.main} id="certifications">
        <h1>certifications</h1>
        <ul>{certifications.map(cert => <li key={cert}>** {cert} **</li>)}</ul>
    </div>
}

export default Certifications;
