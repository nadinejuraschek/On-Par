import { AddButton, Card, CloseButton, Text } from "components";
import { GOALTYPES, IGoalsList } from "./types";
import { MouseEvent, useCallback, useContext, useMemo, useState } from "react";
import { TGoal, TGoalType } from "contexts/GoalContext/types";

import { AddGoal } from "./AddGoal";
import { GoalContext } from "contexts";
import { GoalItem } from "./GoalItem";
import axios from "axios";
import styles from "./goals.module.css";
import { toast } from "react-toastify";

export const Goals = ( { data, month }: IGoalsList ): JSX.Element => {
  const { checkGoal, getGoals } = useContext( GoalContext );

  const [openAddGoal, setOpenAddGoal] = useState( false );
  const [type, setType] = useState<TGoalType>( GOALTYPES.PERSONAL );
  const [text, setText] = useState( "" );

  const education: TGoal[] = useMemo(() => data.filter( ({ type }: TGoal) => type === GOALTYPES.EDUCATION ), [data]);
  const personal: TGoal[] = useMemo(() => data.filter( ({ type }: TGoal) => type === GOALTYPES.PERSONAL ), [data]);
  const travel: TGoal[] = useMemo(() => data.filter( ({ type }: TGoal) => type === GOALTYPES.TRAVEL ), [data]);

  console.log('data: ', data);

  const handleCreate = useCallback((event: MouseEvent) => {
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
      .then( () => {
        toast.success("Your goal was added successfully!");
        setText( "" );
        setType(undefined);
        setOpenAddGoal(false);
        getGoals();
      } )
      .catch( () => {
        toast.error("Goal could not be added. Please try again later!");
        // console.debug( "Error when creating a goal: " + error );
      } );
  }, [month, toast, text, type]);

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
