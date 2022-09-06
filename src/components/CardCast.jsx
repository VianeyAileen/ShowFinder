
const CardCast = ({ character, person }) => {
  // For setting a default image in case the api doesn't have one
  const noImage = 'https://comnplayscience.eu/app/images/notfound.png'
  return (
    <div className='card-group'>
      <div className='card card-cast' style={{ maxWidth: 350 }}>
        <div className='row g-0 caaard'>
          <div className='col-md-4'>
            <img src={person.image !== null ? person.image.original : noImage} className='img-fluid rounded-start cast-image' alt={person.name} />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{person.name}</h5>
              <p className='card-text'>as {character.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CardCast
