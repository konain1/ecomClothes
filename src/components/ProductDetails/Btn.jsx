function Btn ({ title,style,onPress }) {
  return (
    <button className={style} onClick={onPress}>
      {title}
    </button>
  )
}

export default Btn