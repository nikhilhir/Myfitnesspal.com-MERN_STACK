export const Appdiv = ({ data }) => {
  return (
    <div className="appDiv">
      <div className="appImg">
        <img src={data.img} alt="appImage" />
      </div>

      <div className="apDetails">
        <p>{data.name}</p>
        <p> {data.type}</p>
        <a href={data.link}> GET</a>
      </div>
    </div>
  );
};
