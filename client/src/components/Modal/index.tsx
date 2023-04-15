import { IModal } from './types';
import { Text } from 'components';
import styles from './modal.module.css';

export const Modal = ({ actions, children, handleClose, title = '' }: IModal): JSX.Element => {
  return (
    <div className={ styles.overlay }>
      <div className={ styles.modal }>
        <button className={ styles.closeButton } type="button" onClick={handleClose}>
          <i className="close icon"></i>
        </button>
        {title && (
          <div className={ styles.header }>
            <Text size="lg" weight="bold">{title}</Text>
          </div>
        )}
        <div className={ styles.body }>
          { children }
        </div>
        {actions && (
          <div className={ styles.footer }>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};
