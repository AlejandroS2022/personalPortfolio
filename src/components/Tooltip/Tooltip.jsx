import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#D6D6D6",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    background: "linear-gradient(to right, #D6D6D6, #FFFFFF)",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontFamily: "Viga",
    fontSize: 12,
  },
}));

export default CustomTooltip
