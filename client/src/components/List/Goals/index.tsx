import { AddButton, Card, CloseButton, Text } from "components";
import { MouseEvent, useContext, useState } from "react";

import { AddGoal } from "./AddGoal";
import { GoalContext } from "contexts";
import { GoalItem } from "./GoalItem";
import { IGoalsList } from "./types";
import { TGoal } from "contexts/GoalContext/types";
import axios from "axios";
import styles from "./goals.module.css";

export const Goals = ( { data, month }: IGoalsList ): JSX.Element => {
  const { checkGoal, getGoals } = useContext( GoalContext );

  const [openAddGoal, setOpenAddGoal] = useState( false );
  const [type, setType] = useState( "personal" );
  const [text, setText] = useState( "" );

  const education = data.filter( ({ type }: TGoal) => type === "education" );
  const personal = data.filter( ({ type }: TGoal) => type === "personal" );
  const travel = data.filter( ({ type }: TGoal) => type === "travel" );

  const handleCreate = (event: MouseEvent) => {
    event.preventDefault();

    axios( {
      url: "/api/goals",
      method: "POST",
      data: {
        month: month,
        type: type,
        text: text,
        checked: false,
      },
    } )
      .then( response => {
        setText( "" );
        setType( "" );
        setOpenAddGoal( false );
        getGoals();
      } )
      .catch( error => {
        console.log( "Error: " + error );
      } );
  };

  return (
    <Card className={ styles.container }>
      <div className={ styles.header }>
        <Text as="p" size="lg" weight="bold">{ month } months</Text>
        <div className={ styles.btnContainer }>
          { openAddGoal ? (
            <>
              <CloseButton handleClick={ () => setOpenAddGoal( false ) } />
              <AddButton handleClick={ handleCreate } />
            </>
          ) : (
            <AddButton handleClick={ setOpenAddGoal } />
          ) }
        </div>
      </div>
      { openAddGoal ? (
        <AddGoal
          text={ text }
          type={ type }
          handleText={ setText }
          handleType={ setType }
        />
      ) : (
        <ul className={ styles.list }>
          { education.map( ( item: TGoal, index: number ) => (
            <GoalItem
              item={ item }
              key={ index }
              handleCheck={ checkGoal }
            />
          ) ) }
          { personal.map( ( item: TGoal, index: number ) => (
            <GoalItem
              item={ item }
              key={ index }
              handleCheck={ checkGoal }
            />
          ) ) }
          { travel.map( ( item: TGoal, index: number ) => (
            <GoalItem
              item={ item }
              key={ index }
              handleCheck={ checkGoal }
            />
          ) ) }
        </ul>
      ) }
    </Card>
  );
};
