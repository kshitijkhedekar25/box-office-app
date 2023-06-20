const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name}></img>
      </div>

      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `comes from ${country}` : 'No country known'}</p>
      {!!birthday && <p>Bron{birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorCard;
