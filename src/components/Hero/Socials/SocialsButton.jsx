function SocialsButton({
  href,
  icon: Icon,
}) {
  return (
    <>
      <a href={href} target="_blank" className="socials-button">
        <Icon />
      </a>
    </>
  )
}

export default SocialsButton
