export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ui vertical footer segment">
      <div className="centered">
        <p className="copyright">
          <i className="copyright outline icon"></i>
          { currentYear }
          <a href="https://github.com/nadinejuraschek" className="footer-link">
            { " " }
            Nadine Pesso
          </a>
        </p>
        <p className="copyright">
          Illustrations and Icons by
          <a
            href="https://www.linkedin.com/in/ziv-pesso-79618532/"
            className="footer-link"
          >
            { " " }
            Ziv Pesso
          </a>
        </p>
      </div>
    </footer>
  );
};
