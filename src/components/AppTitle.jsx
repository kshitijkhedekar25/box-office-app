export default function AppTitle(props) {
  const {
    title = 'Box Office',
    subtitle = 'Are You Looking For a Move or an actor?',
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
