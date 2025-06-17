export function WorkshopCard({ name, photoSrc, phoneNumber }) {
  return (
    <li className="card">
      <img
        className="card-img-top card-workshop-photo"
        src={photoSrc}
        alt={`${name} workshop photo`}
      />
      <div className="card-body d-flex flex-column gap-3">
        <h5 className="card-title">{name}</h5>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        <button className="btn btn-outline-danger mt-auto" type="button">
          Add to favorites
        </button>
      </div>
    </li>
  );
}
