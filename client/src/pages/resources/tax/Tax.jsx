import styles from "../resources.module.css";

export const Tax = () => (
  <main>
    <div className={ styles.layout }>
      <h2 className={ styles.header }>Paxing Taxes</h2>
      <p className={ styles.info }>
        The following information may help simplify the tax paying process. Keep in mind that <strong> On Par is not a certified tax advisor </strong>and that you might still need to contact a professional to receive personalized help.
      </p>
      <div className={ styles.infoItem }>
        <h3>What Are Taxes?</h3>
        <p>
          The U.S. government and some states take a portion of what people earn in the U.S., so called taxes, to pay for national, local, or state services and facilities. <br />
          Federal taxes are to be paid to a federal government agency called IRS (Internal Revenue Service) and state taxes to a state tax agency. Make sure to ask for help if you can not find out where to pay or send your taxes to! Your host family or LCC would be a great first resource.
        </p>
      </div>
      <div className={ styles.infoItem }>
        <h3>Is It Necessary for Me to Pay Taxes?</h3>
        <p>
          <strong>YES</strong>. Do not get confused by other au pairs saying you do not have to pay taxes. The U.S. Department of Labor decided in 1994 that an employer-employee relationship exists between host families and au pairs which classifies the au pair stipend as &quot;wages&quot;. Therefore, <strong>au pairs owe tax on all of the money they earned within the country</strong>. Be aware that if you choose not to file your tax return, you may ruin your chances of receiving another US visa or Green Card in the future.
        </p>
      </div>
      <div className={ styles.infoItem }>
        <h3>How Much Will I Have to Pay?</h3>
        <p>
          The exact amount veries every year, but you can expect to pay around 10% of your taxable income for federal taxes. State taxes are much lower and only some states even require you to pay state taxes.
        </p>
      </div>
      <div className={ styles.infoItem }>
        <h3>Which Form(s) Do I Need to Fill Out?</h3>
        <p>
          You will most likely have to file Form 1040NR-EZ, a federal income tax form for non-residents. There are a few exceptions though! If you were on a different visa before obtaining your J-1, we recommend asking a professional to verify which form you will have to fill out.
        </p>
      </div>
      <div className={ styles.infoItem }>
        <h3>When Do I Have to Pay?</h3>
        <p>
          Usually, the deadline is April 15th. In rare case, such as the COVID19 pandemic, the deadline might be different. Don&apos;t worry, your au pair agency will be able to offer updates and guidance.
        </p>
      </div>
    </div>
  </main>
);
  