const CardSerie = ({ name, image, original }) => {
  // For setting a default image in case the api doesn't have one
  const noImage = 'https://comnplayscience.eu/app/images/notfound.png'
  return (
    <article className='card card-series'>
      <img className='card-img-top' src={image !== null ? original : noImage} alt={name} height={400} />
      <div className='card-body text-light text-center'>
        <p className='card-title line-clamp'>{name}</p>
      </div>
    </article>
  )
}

export default CardSerie
