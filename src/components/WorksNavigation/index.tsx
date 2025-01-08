import styles from "./styles.module.scss"
import React from "react";
import {Cat1, Cat2} from "../../../public/images"

const WorksNavigation: React.FC = () => {
    const categories = ["drawings", "clothing design"];
    const categoryImages = [Cat1, Cat2]

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                {

                }
            </div>
        </div>
    )
}