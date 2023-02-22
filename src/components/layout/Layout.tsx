import * as React from 'react';

import BaseDialog from '@/components/dialog/BaseDialog';

import useDialogStore from '@/store/useDialogStore';

export default function Layout({ children }: { children: React.ReactNode }) {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========

  return (
    <div className='min-h-screen bg-base-100 '>
      <div className='mx-auto flex flex-col'>
        {children}
        <BaseDialog
          onClose={handleClose}
          onSubmit={handleSubmit}
          open={open}
          options={state}
        />
      </div>
    </div>
  );
}
