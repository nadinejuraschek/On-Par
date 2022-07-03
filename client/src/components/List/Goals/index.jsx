import axios from "axios";
import { Add, Close } from "components/Button";
import { GoalContext } from "contexts";
import { useContext, useState } from "react";
import { AddGoal } from "./AddGoal";
import { GoalItem } from "./GoalItem";
import styles from "./goals.module.css";

export const Goals = ( { data, month } ) => {
  const { getGoals, checkGoal } = useContext( GoalContext );
  const [type, setType] = useState( "" );
  const [text, setText] = useState( "" );
  const education = data.filter( item => item.type === "education" );
  const personal = data.filter( item => item.type === "personal" );
  const travel = data.filter( item => item.type === "travel" );
  const [openAddGoal, setOpenAddGoal] = useState( false );

  const handleCreate = event => {
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
    <div className={ styles.container }>
      <div className={ styles.header }>
        <div className={ styles.month }>
          <p className={ styles.month__lg }>{ month }</p>
          <p className={ styles.month__sm }>months</p>
        </div>
        <div className={ styles.btnContainer }>
          { openAddGoal ? (
            <>
              <Close handleClick={ () => setOpenAddGoal( false ) } />
              <Add handleClick={ handleCreate } />
            </>
          ) : (
            <Add handleClick={ setOpenAddGoal } />
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
          { education.map( ( item, index ) => (
            <GoalItem
              item={ item }
              key={ index }
              handleCheck={ checkGoal }
            />
          ) ) }
          { personal.map( ( item, index ) => (
            <GoalItem
              item={ item }
              key={ index }
              handleCheck={ checkGoal }
            />
          ) ) }
          { travel.map( ( item, index ) => (
            <GoalItem
              item={ item }
              key={ index }
              handleCheck={ checkGoal }
            />
          ) ) }
        </ul>
      ) }
    </div>
  );
};
