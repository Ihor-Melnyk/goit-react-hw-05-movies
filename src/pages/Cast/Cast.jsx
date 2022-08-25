import { useFetchCast } from 'hooks/useFetchCast';
import { CastList } from './CastList';

const Cast = () => {
  const actors = useFetchCast();

  return (
    <div>
      <CastList actors={actors} />
    </div>
  );
};
export default Cast;
