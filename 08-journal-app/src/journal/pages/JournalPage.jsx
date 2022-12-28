import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  const { isSaving, active } = useSelector(state => state.journal);

  // console.log(journal)
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  // const isActive = useMemo(() => active, [active]);


  return (
    <JournalLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus natus error deserunt nulla hic minus perspiciatis maiores! Eum ratione sint vero vel odio excepturi incidunt natus porro nobis a?</Typography> */}
      {!!active
        ? <NoteView />
        : <NothingSelectedView />
      }


      <IconButton
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={onClickNewNote}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
