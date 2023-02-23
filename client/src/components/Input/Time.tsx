import { ChangeEvent } from 'react';
import { ITime } from "./types";
import styles from "./input.module.css";

export const Time = ( { end, handleEnd, handleStart, start }: ITime ): JSX.Element => (
  <>
    <div className={ styles.stacked }>
      <label className={ styles.label } htmlFor="start">
        Start:
      </label>
      <input
        className={ styles.input }
        type="time"
        name="start"
        placeholder={ start }
        value={ start }
        onChange={ (event: ChangeEvent) => handleStart( (event.target as HTMLInputElement).value )}
      />
    </div>
    <div className={ styles.stacked }>
      <label className={ styles.label } htmlFor="end">
        End:
      </label>
      <input
        className={ styles.input }
        type="time"
        name="end"
        placeholder={ end }
        value={ end }
        onChange={ event => handleEnd( (event.target as HTMLInputElement).value ) }
      />
    </div>
  </>
);
