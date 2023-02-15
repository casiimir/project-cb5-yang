const SingleTrack = ({ data, className }) => {
  return data?.map((item) => (
    <div className={className}>
      <span>
        <h2>{item.title}</h2>
        <p>{item.artist.name}</p>
      </span>
      <audio src={item.preview} controls />
    </div>
  ));
};

export default SingleTrack;
