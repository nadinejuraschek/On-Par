import { Button, Modal, Text } from 'components';

import styles from "./sandbox.module.css";
import { useState } from 'react';

export const Sandbox = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [openWithTitle, setOpenWithTitle] = useState(false);
  const [openWithFooter, setOpenWithFooter] = useState(false);
  const [openWithContent, setOpenWithContent] = useState(false);

  return (
    <div className={ styles.container }>
      <Button handleClick={() => setOpen(true)}>Open</Button>
      <Button handleClick={() => setOpenWithTitle(true)}>Open With Title</Button>
      <Button handleClick={() => setOpenWithFooter(true)}>Open With Footer</Button>
      <Button handleClick={() => setOpenWithContent(true)}>Open With Content</Button>

      { open && <Modal handleClose={() => setOpen(false)}>Hello</Modal> }
      { openWithTitle && <Modal handleClose={() => setOpenWithTitle(false)} title="Modal Title">Hello</Modal> }
      { openWithFooter && (
        <Modal
          actions={<><Button fullWidth>Close</Button><Button autoFocus fullWidth variant="primary">Save</Button></>}
          handleClose={() => setOpenWithFooter(false)}
        >
          Hello
        </Modal>
      )}
      { openWithContent && (
        <Modal
          actions={<><Button fullWidth>Close</Button><Button autoFocus fullWidth variant="primary">Save</Button></>}
          handleClose={() => setOpenWithFooter(false)}
          title="Modal Title"
        >
          <Text size="md">This is a new modal</Text>
          <Text size="sm">This is a new modal This is a new modal This is a new modal</Text>
          <Text size="xs">This is a new modal This is a new modal This is a new modal This is a new modal This is a new modal This is a new modal This is a new modal This is a new modal This is a new modal This is a new modal This is a new modal This is a new modal</Text>
        </Modal>
      )}
    </div>
  );
}