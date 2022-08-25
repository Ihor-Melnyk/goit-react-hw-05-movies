import { CastItem } from './CastItem';

export const CastList = ({ actors }) => {
  if (!actors) {
    return;
  }
  return (
    actors && actors.map(actor => <CastItem actor={actor} key={actor.id} />)
  );
};
