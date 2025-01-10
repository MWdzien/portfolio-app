import styles from "./styles.module.scss"
import React from "react";
import Cat1 from "../../../public/images/clo_design.jpg"
import Cat2 from "../../../public/images/clo_design.jpg"
import WorkCategory from "@/components/WorkCategory";

const WorksNavigation: React.FC = () => {
    const categories = ["drawings", "clothing design"];
    const categoryImages = [Cat1, Cat2]

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                {
                    categories.map((cat, index) => {
                        return <WorkCategory key={index} image={categoryImages[index]} name={cat} />
                    })
                }
            </div>
        </div>
    )
}

export default WorksNavigation;