import CustomTooltip from "../../Tooltip/Tooltip"

function SidebarButton({
  href,
  tooltip,
  Icon,
}) {
  return (
    <>
      <CustomTooltip title={tooltip} placement="left" arrow="true">
        <a href={href} className="sidebar-button">
          <Icon className="
            text-base!
            md:text-lg!
            lg:text-xl!
            xl:text-2xl!"
          />
        </a>
      </CustomTooltip>
    </>
  )
}

export default SidebarButton
