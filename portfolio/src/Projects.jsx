import styles from "./Projects.module.scss";
import Galleries from "./project_gallery/Galleries";

const content = {
    projects: [{
        name: "technolamy",
        points: [
            "Frontend interface creation enabling administrators to conveniently input electronic gadget details via a stylized form.",
            "Automated generation of Instagram posts decreased post creation time by 40% upon form submission.",
            "Implemented automatic hashtag generation based on the provided details to enhance post visibility and automatic hashtag generation led to a 30% increase in engagement rates.",
            "Utilized image processing models to optimize image placement on the background.",
        ],
        techStack: ["Flask", "HTML", "CSS"],
        image: require("./resources/technolamy.jpeg")
    }, {
        name: "Business Insights",
        points: [
            "Spearheaded a strategic business insights project employing predictive modeling and optimization techniques, resulting in a 10% increase in sales revenue.",
            "Identified and resolved limitations in existing systems, leading to a 15% improvement in operational efficiency.",
            "Implemented advanced predictive modeling modules, contributing to a 20% reduction in forecasting errors.",
            "Employed optimization algorithms, resulting in a 25% decrease in resource allocation costs.",
            "Executed a comprehensive methodology, leading to a 30% increase in customer satisfaction ratings."
        ],
        techStack: ["Python", "Pandas", "scikit"],
        image: require("./resources/bsi.jpeg")
    }],

    experiences: [{
        name: "dev skill hub",
        points: [
            "Developed a flight booking system project using Java, showcasing proficiency in the language and practical application of Java programming concepts.",
            "Development of functionalities for managing flight bookings, ticket booking, boarding pass generation, and handling cancellations and refunds.",
            "Implemented design principles and data structures, resulting in a 40% improvement in code efficiency and scalability.",
            "Demonstrated effective communication and teamwork throughout the project lifecycle, leading to a 15% increase in team productivity."
        ],
        techStack: ["Java"]
    }, {
        name: "Robocoupler",
        points: [
            "Engineered a user interface integrating contemporary JavaScript frameworks, HTML, and CSS, optimizing efficiency for legal professionals in case evaluation and decision-making.",
            "Initiated a feedback-driven strategy with faculty and staff, incorporating suggestions resulting in a 30% improvement in performance metrics and a 15% rise in customer satisfaction ratings.",
            "Engaged in cross-functional meetings, facilitating discussions on project requirements, delivering updates, and resolving challenges and roadblocks.",
            "Six-member team collaboration resulted in the successful completion of a group project"
        ],
        techStack: ["HTML", "CSS", "js"]
    }]
}

const Projects = () => {
    return <div className={styles.main}>
        {Object.keys(content).map(con => <Galleries name={con} value={content[con]} />)}
    </div>
}

export default Projects;
