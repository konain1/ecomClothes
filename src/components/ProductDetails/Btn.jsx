function Btn ({ title,style,onPress , disabled }) {
  return (
    <button className={`${style} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}  onClick={onPress}>
      {title}
    </button>
  )
}

export default Btn