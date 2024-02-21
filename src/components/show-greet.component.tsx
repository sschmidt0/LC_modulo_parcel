import React from "react";
import styles from './show-greet.module.scss';

export interface ShowGreetProps {
  username: string;
  bundlingPackage: string;
}

export const ShowGreet = ({ bundlingPackage, username }: ShowGreetProps) => {
  return (
    <div className={styles.container}>
      Muy bien {username}, veo que estás haciendo ejercicios con {bundlingPackage}
    </div>
  );
};
