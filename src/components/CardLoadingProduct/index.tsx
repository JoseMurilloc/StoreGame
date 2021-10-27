import { Container } from './styles';

export function CardLoadingProduct() {
  return (
    <Container>
      <div className="image-game" />
      <div className="content">
        <span className="name" />
        <span className="price" />
      </div>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onClick={() => {}}
      />
    </Container>
  );
}
