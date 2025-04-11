import CustomTooltip from "../../Tooltip/Tooltip"

function SidebarButton({
  href,
  tooltip,
  icon: Icon,
}) {
  return (
    <>
      <CustomTooltip title={tooltip} placement="left" arrow="true">
        <a href={href} target="_blank" className="sidebar-button">
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
