import MainTemplate from '../../templates/MainTemplate';

export default function NotFound() {
  const style = {
    textAlign: 'center' as const,
    marginTop: '50px',
  };
  return (
    <MainTemplate>
      <h1 style={style}>404 - Page Not Found</h1>
    </MainTemplate>
  );
}
