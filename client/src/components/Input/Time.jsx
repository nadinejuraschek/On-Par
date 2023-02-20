import styles from "./input.module.css";

export const Time = ( { end, handleEnd, handleStart, start } ) => (
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
        onChange={ event => handleStart( event.target.value ) }
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
        onChange={ event => handleEnd( event.target.value ) }
      />
    </div>
  </>
);
