import Chip from '@mui/material/Chip';

function LabeledDivider({label}) {
  return (
    <>
      <div className="flex m-auto mt-5">
        <div className="divider divider__left"/>
          <Chip label={label} className="divider-text" />
        <div className="divider divider__right"/>
      </div>
    </>
  )
}

export default LabeledDivider
